# Chiri.pk FE Codebase.....

<img src="public/preview.png" style="border-radius:8px">

## Getting started

Install the dependencies & pull latest translation keys from CMS by running

```sh
 yarn
```

\*Note: If you are working on new translations, then re-run `yarn` to pull in latest changes from the CMS.

After you've cloned the repo, you need to create a .env.local file in the root directory, and populate it with the following api keys.

```
NEXT_PUBLIC_X_API_KEY=FFzpw3LeUc1Lvi6b0xPov4YFefmUQLsJa6WA1AcE
NEXT_PUBLIC_MAPS_API_KEY=pk.eyJ1IjoidHJ5cGNvbSIsImEiOiJjbDJvc3hvbHYwMDVsM2dwY2hnODZremp3In0.x9sSLwB72H1bCHDFLSMNmg
NEXT_PUBLIC_VERCEL_ENV=development
NEXT_PUBLIC_STRIPE_DEV_KEY=pk_test_51JxVI8IyoWyi6sQ5mPM1Uj3WmweJB8vu0whK45TZ0YGrhIKn36X6Md56gPVUEZUxp5fe1VKtW6NBvbowyOPrJ1rJ00MfKcMHXe
NEXT_PUBLIC_STRIPE_KEY=pk_live_51JxVI8IyoWyi6sQ54c8TK07I3eQNkCfsjA2phgOpMakoRvQnShBTwp9z2OwM7DGJRMgJwBwGAsTPZ6LHqpJnEMbK00hH9mI1Zx
```


_Note: If you add a new entry to the env file, don't forget to add it here._

Now you can run the development server by simply running:

```sh
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Or if you want to build locally you can by running:

```sh
yarn build
```

## Learn More

We're using [Next.js](http://nextjs.org/) as our react framwork for handling all sort of complicated tasks. It's great for SEO, and pre-rendering benefits are always good. In the department of CSS framework - we've gone with [Chakra-UI](https://chakra-ui.com/). It comes with nice set of good looking, accessible components out of the box, which are entirely composible to whatever we want with the help of [style-props](https://chakra-ui.com/docs/features/style-props).

## Hosted endpoints.

- [Live URL - tryp.com](https://www.tryp.com/)
- [Vercel preview - tryp-frontend.vercel.app](https://tryp-frontend.vercel.app/)
