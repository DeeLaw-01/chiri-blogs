#!/usr/bin/env node

/**
 * Script to update import paths from Site A to Site B
 * Run with: node update-imports.js
 */

const fs = require('fs');
const path = require('path');

// Define path mappings from Site A to Site B
const importMappings = [
  // Utilities
  { from: '@/lib/utils', to: '@/src/utils/shadcn/cn' },
  { from: "from '@/lib/utils'", to: "from '@/src/utils/shadcn/cn'" },
  
  // Constants and Config
  { from: '@/lib/constants', to: '@/src/config/apiConfig' },
  { from: "from '@/lib/constants'", to: "from '@/src/config/apiConfig'" },
  
  // Services
  { from: '@/lib/services/tripDetailsService', to: '@/src/services/tripDetailsService' },
  { from: '@/lib/services/tripSuggestionsService', to: '@/src/services/tripSuggestionsService' },
  { from: '@/lib/services/apiCache', to: '@/src/services/apiCache' },
  
  // Types
  { from: '../types', to: '@/ui/shadcn/blog/types' },
  { from: "'../types'", to: "'@/ui/shadcn/blog/types'" },
  { from: '"../types"', to: '"@/ui/shadcn/blog/types"' },
  
  // Utils
  { from: '../utils/previewRenderers', to: '@/src/utils/shadcn/blog/previewRenderers' },
  { from: "'../utils/previewRenderers'", to: "'@/src/utils/shadcn/blog/previewRenderers'" },
  { from: '"../utils/previewRenderers"', to: '"@/src/utils/shadcn/blog/previewRenderers"' },
  
  // Config
  { from: '../config/componentTypes', to: '@/src/config/componentTypes' },
  { from: "'../config/componentTypes'", to: "'@/src/config/componentTypes'" },
  { from: '"../config/componentTypes"', to: '"@/src/config/componentTypes"' },
  
  // Hooks
  { from: '../hooks/useFlightSearch', to: '@/src/hooks/blog/useFlightSearch' },
  { from: '../hooks/useLocationSearch', to: '@/src/hooks/blog/useLocationSearch' },
  { from: '../hooks/usePriceComparison', to: '@/src/hooks/blog/usePriceComparison' },
  { from: '../hooks/useStopsAnalysis', to: '@/src/hooks/blog/useStopsAnalysis' },
  { from: '@/hooks/useOneWayFlightSearch', to: '@/src/hooks/blog/useOneWayFlightSearch' },
  { from: '@/hooks/useAirlineCarriers', to: '@/src/hooks/blog/useAirlineCarriers' },
  { from: '@/hooks/useDebounce', to: '@/src/hooks/blog/useDebounce' },
  
  // Components - relative to same directory
  { from: "./'", to: "'@/ui/shadcn/blog/components/" },
  { from: './', to: '@/ui/shadcn/blog/components/' },
  
  // UI Components
  { from: '@/components/ui/', to: '@/ui/shadcn/ui/' },
];

function updateImportsInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let hasChanges = false;

  importMappings.forEach(({ from, to }) => {
    const regex = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    if (content.includes(from)) {
      content = content.replace(regex, to);
      hasChanges = true;
    }
  });

  if (hasChanges) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated: ${path.basename(filePath)}`);
    return true;
  }
  
  return false;
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  let updateCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      updateCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (updateImportsInFile(filePath)) {
        updateCount++;
      }
    }
  });

  return updateCount;
}

// Process components directory
const componentsDir = '/Users/beelal/codestuff/chiri-blogs/ui/shadcn/blog/components';
const hooksDir = '/Users/beelal/codestuff/chiri-blogs/src/hooks/blog';
const utilsDir = '/Users/beelal/codestuff/chiri-blogs/src/utils/shadcn/blog';

console.log('🔄 Updating import paths...\n');

console.log('📁 Processing components...');
const componentUpdates = processDirectory(componentsDir);

console.log('\n📁 Processing hooks...');
const hookUpdates = processDirectory(hooksDir);

console.log('\n📁 Processing utils...');
const utilUpdates = processDirectory(utilsDir);

console.log(`\n✨ Done! Updated ${componentUpdates + hookUpdates + utilUpdates} files total.`);
console.log(`   - Components: ${componentUpdates}`);
console.log(`   - Hooks: ${hookUpdates}`);
console.log(`   - Utils: ${utilUpdates}`);
