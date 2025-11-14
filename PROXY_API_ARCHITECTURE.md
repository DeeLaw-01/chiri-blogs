# Site B API Proxy Architecture

## Overview
Site B (chiri-blogs) uses lightweight proxy API routes to forward requests to Site A (chiri-booking-app). This avoids duplicating API logic and database connections while still solving the SEO problem through Server-Side Rendering.

## Why This Approach?

### ✅ Advantages
1. **Single Source of Truth**: All data management stays in Site A
2. **No Duplication**: No need to copy API routes, models, or database setup
3. **Easier Maintenance**: Updates only needed in Site A
4. **Faster Migration**: Less code to move and maintain
5. **Still Solves SEO**: Site B renders with SSR, search engines see full HTML

### The Key Insight
The SEO problem isn't about *where the data comes from* - it's about *how the HTML is rendered*:
- ❌ **Bad (old way)**: iframe loads content from Site A → search engines can't see it
- ✅ **Good (new way)**: Site B fetches data from Site A via API → renders with SSR → search engines see full HTML

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     User/Search Engine                       │
│                   requests blog page                         │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│               Site B (chiri-blogs)                           │
│            https://chiri.pk/cities/london                    │
│                                                              │
│  1. Next.js SSR page (generateMetadata + Server Component)  │
│     └─> Calls: /api/blog-templates/slug/london              │
│                                                              │
│  2. Proxy API Route: /app/api/blog-templates/slug/[slug]    │
│     └─> Forwards to Site A                                  │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼ HTTP GET request
┌─────────────────────────────────────────────────────────────┐
│               Site A (chiri-booking-app)                     │
│        https://chiri.pk/api/blog-templates/slug/london       │
│                                                              │
│  1. API Route: /app/api/blog-templates/slug/[slug]/route.ts │
│     └─> Queries MongoDB                                     │
│     └─> Returns blog JSON                                   │
│                                                              │
│  2. MongoDB Database (BlogTemplate model)                   │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼ JSON response
┌─────────────────────────────────────────────────────────────┐
│               Site B (chiri-blogs)                           │
│                                                              │
│  3. Receives blog data                                       │
│  4. Renders HTML with DynamicBlogViewer component            │
│  5. Generates SEO metadata (title, description, OG tags)     │
│  6. Returns fully rendered HTML to user/search engine        │
└─────────────────────────────────────────────────────────────┘
```

## Proxy API Routes Created

### 1. `/app/api/carriers/route.ts`
**Purpose**: Fetch airline carriers for a route  
**Forwards to**: `${SITE_A_URL}/api/carriers?origin=...&destination=...`  
**Used by**: `useAirlineCarriers` hook, `AirlineFlights` component  
**Cache**: 15 minutes (carriers don't change often)

### 2. `/app/api/one-way-flights/route.ts`
**Purpose**: Search for one-way flight options  
**Forwards to**: `${SITE_A_URL}/api/one-way-flights?...`  
**Used by**: `useOneWayFlightSearch` hook, `StopsAnalysisSection` component  
**Cache**: 5 minutes (prices change frequently)

### 3. `/app/api/blogs/route.ts`
**Purpose**: Blog CRUD operations  
**Forwards to**: `${SITE_A_URL}/api/blogs`  
**Methods**: GET, POST, PUT, DELETE (with auth forwarding)  
**Cache**: 10 minutes for GET requests

### 4. `/app/api/blog-templates/slug/[slug]/route.ts`
**Purpose**: Fetch blog by slug for SSR  
**Forwards to**: `${SITE_A_URL}/api/blog-templates/slug/${slug}`  
**Used by**: City, airline, country blog pages  
**Cache**: 30 minutes (blog content changes less frequently)

## Configuration

### Environment Variables

Create `/Users/beelal/codestuff/chiri-blogs/.env.local`:

```env
# Site A URL - where the booking app APIs are hosted
NEXT_PUBLIC_SITE_A_URL=https://chiri.pk

# For local development, point to local Site A:
# NEXT_PUBLIC_SITE_A_URL=http://localhost:3000
```

### API Config

Updated `/src/config/apiConfig.ts`:

```typescript
const SITE_A_BASE_URL = process.env.NEXT_PUBLIC_SITE_A_URL || 'https://chiri.pk'

export const API_CONFIG = {
    SITE_A: {
        BASE_URL: SITE_A_BASE_URL,
        BLOG_TEMPLATES: `${SITE_A_BASE_URL}/api/blog-templates`,
        BLOG_BY_SLUG: `${SITE_A_BASE_URL}/api/blog-templates/slug`,
        CARRIERS: `${SITE_A_BASE_URL}/api/carriers`,
        ONE_WAY_FLIGHTS: `${SITE_A_BASE_URL}/api/one-way-flights`,
    },
    // ... other configs
}
```

## Component Usage

No changes needed! Components still use relative API paths:

```typescript
// In useAirlineCarriers.ts
const response = await fetch('/api/carriers?origin=NYC&destination=LON')

// In blog SSR page
const response = await fetch('/api/blog-templates/slug/london')
```

The proxy routes handle forwarding to Site A transparently.

## Local Development

### Running Both Sites
Terminal 1 (Site A):
```bash
cd /Users/beelal/codestuff/chiri-booking-app
yarn dev  # Runs on http://localhost:3000
```

Terminal 2 (Site B):
```bash
cd /Users/beelal/codestuff/chiri-blogs
# Set env var to point to local Site A
export NEXT_PUBLIC_SITE_A_URL=http://localhost:3000
yarn dev  # Runs on http://localhost:3001
```

### Testing the Proxy
1. Visit Site B blog page: http://localhost:3001/cities/london
2. Check browser network tab - should see calls to localhost:3001/api/*
3. Check Site B terminal - should see proxy logs forwarding to Site A
4. Check Site A terminal - should see incoming API requests

## CORS Configuration

If needed, add CORS headers to Site A's API routes:

```typescript
// In Site A's next.config.js
async headers() {
  return [
    {
      source: '/api/:path*',
      headers: [
        { key: 'Access-Control-Allow-Origin', value: 'https://chiri.pk' },
        { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,DELETE,OPTIONS' },
      ],
    },
  ]
}
```

For local development, allow localhost:
```typescript
{ key: 'Access-Control-Allow-Origin', value: 'http://localhost:3001' }
```

## Security Considerations

1. **Authentication**: Proxy routes forward cookies for auth (in POST/PUT/DELETE)
2. **Rate Limiting**: Inherited from Site A's API routes
3. **API Keys**: Only Site A knows the external API keys (not exposed to Site B)
4. **Environment Variables**: Use `NEXT_PUBLIC_` only for client-side access

## Next Steps

Now that proxy APIs are in place, create SSR blog pages in Site B:

1. `/app/cities/[...slug]/page.tsx` - City blogs with SSR
2. `/app/airlines/[...slug]/page.tsx` - Airline blogs with SSR  
3. `/app/countries/[...slug]/page.tsx` - Country blogs with SSR

Each page will:
- Use `generateMetadata()` for dynamic SEO
- Fetch blog data from proxy API during SSR
- Render with `DynamicBlogViewer` component
- Return fully formed HTML to search engines
