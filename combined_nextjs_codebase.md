# Combined Next.js Project Codebase

This document contains the consolidated code from key Next.js project files and directories.

## Root Configuration and Documentation

---
### File: `README.md`
---

```markdown
<a href="https://demo-nextjs-with-supabase.vercel.app/">
  <img alt="Next.js and Supabase Starter Kit - the fastest way to build apps with Next.js and Supabase" src="https://demo-nextjs-with-supabase.vercel.app/opengraph-image.png">
  <h1 align="center">Next.js and Supabase Starter Kit</h1>
</a>

<p align="center">
 The fastest way to build apps with Next.js and Supabase
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#demo"><strong>Demo</strong></a> ·
  <a href="#deploy-to-vercel"><strong>Deploy to Vercel</strong></a> ·
  <a href="#clone-and-run-locally"><strong>Clone and run locally</strong></a> ·
  <a href="#feedback-and-issues"><strong>Feedback and issues</strong></a>
  <a href="#more-supabase-examples"><strong>More Examples</strong></a>
</p>
<br/>

## Features

- Works across the entire [Next.js](https://nextjs.org) stack
  - App Router
  - Pages Router
  - Middleware
  - Client
  - Server
  - It just works!
- supabase-ssr. A package to configure Supabase Auth to use cookies
- Password-based authentication block installed via the [Supabase UI Library](https://supabase.com/ui/docs/nextjs/password-based-auth)
- Styling with [Tailwind CSS](https://tailwindcss.com)
- Components with [shadcn/ui](https://ui.shadcn.com/)
- Optional deployment with [Supabase Vercel Integration and Vercel deploy](#deploy-your-own)
  - Environment variables automatically assigned to Vercel project

## Demo

You can view a fully working demo at [demo-nextjs-with-supabase.vercel.app](https://demo-nextjs-with-supabase.vercel.app/).

## Deploy to Vercel

Vercel deployment will guide you through creating a Supabase account and project.

After installation of the Supabase integration, all relevant environment variables will be assigned to the project so the deployment is fully functioning.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fwith-supabase&project-name=nextjs-with-supabase&repository-name=nextjs-with-supabase&demo-title=nextjs-with-supabase&demo-description=This+starter+configures+Supabase+Auth+to+use+cookies%2C+making+the+user%27s+session+available+throughout+the+entire+Next.js+app+-+Client+Components%2C+Server+Components%2C+Route+Handlers%2C+Server+Actions+and+Middleware.&demo-url=https%3A%2F%2Fdemo-nextjs-with-supabase.vercel.app%2F&external-id=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fwith-supabase&demo-image=https%3A%2F%2Fdemo-nextjs-with-supabase.vercel.app%2Fopengraph-image.png)

The above will also clone the Starter kit to your GitHub, you can clone that locally and develop locally.

If you wish to just develop locally and not deploy to Vercel, [follow the steps below](#clone-and-run-locally).

## Clone and run locally

1. You'll first need a Supabase project which can be made [via the Supabase dashboard](https://database.new)

2. Create a Next.js app using the Supabase Starter template npx command

   ```bash
   npx create-next-app --example with-supabase with-supabase-app
   ```

   ```bash
   yarn create next-app --example with-supabase with-supabase-app
   ```

   ```bash
   pnpm create next-app --example with-supabase with-supabase-app
   ```

3. Use `cd` to change into the app's directory

   ```bash
   cd with-supabase-app
   ```

4. Rename `.env.example` to `.env.local` and update the following:

   ```
   NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
   ```

   Both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` can be found in [your Supabase project's API settings](https://supabase.com/dashboard/project/_?showConnect=true)

5. You can now run the Next.js local development server:

   ```bash
   npm run dev
   ```

   The starter kit should now be running on [localhost:3000](http://localhost:3000/).

6. This template comes with the default shadcn/ui style initialized. If you instead want other ui.shadcn styles, delete `components.json` and [re-install shadcn/ui](https://ui.shadcn.com/docs/installation/next)

> Check out [the docs for Local Development](https://supabase.com/docs/guides/getting-started/local-development) to also run Supabase locally.

## Feedback and issues

Please file feedback and issues over on the [Supabase GitHub org](https://github.com/supabase/supabase/issues/new/choose).

## More Supabase examples

- [Next.js Subscription Payments Starter](https://github.com/vercel/nextjs-subscription-payments)
- [Cookie-based Auth and the Next.js 13 App Router (free course)](https://youtube.com/playlist?list=PL5S4mPUpp4OtMhpnp93EFSo42iQ40XjbF)
- [Supabase Auth and the Next.js App Router](https://github.com/supabase/supabase/tree/master/examples/auth/nextjs)

```

---
### File: `package.json`
---

```json
{
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@radix-ui/react-checkbox": "^1.3.1",
    "@radix-ui/react-dropdown-menu": "^2.1.14",
    "@radix-ui/react-label": "^2.1.6",
    "@radix-ui/react-scroll-area": "^1.2.9",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slot": "^1.2.2",
    "@radix-ui/react-tooltip": "^1.2.7",
    "@supabase/ssr": "latest",
    "@supabase/supabase-js": "latest",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.511.0",
    "next": "latest",
    "next-themes": "^0.4.6",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "tailwind-merge": "^3.3.0"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "autoprefixer": "^10.4.20",
    "eslint": "^9",
    "eslint-config-next": "15.3.1",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "tailwindcss-animate": "^1.0.7",
    "typescript": "^5"
  }
}

```

---
### File: `next.config.js` (Not Found or Excluded)
---

---
### File: `tsconfig.json`
---

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

```

---
### File: `postcss.config.js` (Not Found or Excluded)
---

---
### File: `tailwind.config.js` (Not Found or Excluded)
---

---
### File: `pnpm-lock.yaml`
---

```yaml
lockfileVersion: '9.0'

settings:
  autoInstallPeers: true
  excludeLinksFromLockfile: false

importers:

  .:
    dependencies:
      '@radix-ui/react-checkbox':
        specifier: ^1.3.1
        version: 1.3.2(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@radix-ui/react-dropdown-menu':
        specifier: ^2.1.14
        version: 2.1.15(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@radix-ui/react-label':
        specifier: ^2.1.6
        version: 2.1.7(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@radix-ui/react-scroll-area':
        specifier: ^1.2.9
        version: 1.2.9(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@radix-ui/react-separator':
        specifier: ^1.1.7
        version: 1.1.7(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@radix-ui/react-slot':
        specifier: ^1.2.2
        version: 1.2.3(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-tooltip':
        specifier: ^1.2.7
        version: 1.2.7(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@supabase/ssr':
        specifier: latest
        version: 0.6.1(@supabase/supabase-js@2.53.0)
      '@supabase/supabase-js':
        specifier: latest
        version: 2.53.0
      class-variance-authority:
        specifier: ^0.7.1
        version: 0.7.1
      clsx:
        specifier: ^2.1.1
        version: 2.1.1
      lucide-react:
        specifier: ^0.511.0
        version: 0.511.0(react@19.1.1)
      next:
        specifier: latest
        version: 15.4.5(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      next-themes:
        specifier: ^0.4.6
        version: 0.4.6(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      react:
        specifier: ^19.0.0
        version: 19.1.1
      react-dom:
        specifier: ^19.0.0
        version: 19.1.1(react@19.1.1)
      tailwind-merge:
        specifier: ^3.3.0
        version: 3.3.1
    devDependencies:
      '@eslint/eslintrc':
        specifier: ^3
        version: 3.3.1
      '@types/node':
        specifier: ^20
        version: 20.19.9
      '@types/react':
        specifier: ^19
        version: 19.1.9
      '@types/react-dom':
        specifier: ^19
        version: 19.1.7(@types/react@19.1.9)
      autoprefixer:
        specifier: ^10.4.20
        version: 10.4.21(postcss@8.5.6)
      eslint:
        specifier: ^9
        version: 9.32.0(jiti@1.21.7)
      eslint-config-next:
        specifier: 15.3.1
        version: 15.3.1(eslint@9.32.0(jiti@1.21.7))(typescript@5.8.3)
      postcss:
        specifier: ^8
        version: 8.5.6
      tailwindcss:
        specifier: ^3.4.1
        version: 3.4.17
      tailwindcss-animate:
        specifier: ^1.0.7
        version: 1.0.7(tailwindcss@3.4.17)
      typescript:
        specifier: ^5
        version: 5.8.3

packages:

  '@alloc/quick-lru@5.2.0':
    resolution: {integrity: sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==}
    engines: {node: '>=10'}

  '@emnapi/core@1.4.5':
    resolution: {integrity: sha512-XsLw1dEOpkSX/WucdqUhPWP7hDxSvZiY+fsUC14h+FtQ2Ifni4znbBt8punRX+Uj2JG/uDb8nEHVKvrVlvdZ5Q==}

  '@emnapi/runtime@1.4.5':
    resolution: {integrity: sha512-++LApOtY0pEEz1zrd9vy1/zXVaVJJ/EbAF3u0fXIzPJEDtnITsBGbbK0EkM72amhl/R5b+5xx0Y/QhcVOpuulg==}

  '@emnapi/wasi-threads@1.0.4':
    resolution: {integrity: sha512-PJR+bOmMOPH8AtcTGAyYNiuJ3/Fcoj2XN/gBEWzDIKh254XO+mM9XoXHk5GNEhodxeMznbg7BlRojVbKN+gC6g==}

  '@eslint-community/eslint-utils@4.7.0':
    resolution: {integrity: sha512-dyybb3AcajC7uha6CvhdVRJqaKyn7w2YKqKyAN37NKYgZT36w+iRb0Dymmc5qEJ549c/S31cMMSFd75bteCpCw==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    peerDependencies:
      eslint: ^6.0.0 || ^7.0.0 || >=8.0.0

  '@eslint-community/regexpp@4.12.1':
    resolution: {integrity: sha512-CCZCDJuduB9OUkFkY2IgppNZMi2lBQgD2qzwXkEia16cge2pijY/aXi96CJMquDMn3nJdlPV1A5KrJEXwfLNzQ==}
    engines: {node: ^12.0.0 || ^14.0.0 || >=16.0.0}

  '@eslint/config-array@0.21.0':
    resolution: {integrity: sha512-ENIdc4iLu0d93HeYirvKmrzshzofPw6VkZRKQGe9Nv46ZnWUzcF1xV01dcvEg/1wXUR61OmmlSfyeyO7EvjLxQ==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@eslint/config-helpers@0.3.0':
    resolution: {integrity: sha512-ViuymvFmcJi04qdZeDc2whTHryouGcDlaxPqarTD0ZE10ISpxGUVZGZDx4w01upyIynL3iu6IXH2bS1NhclQMw==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@eslint/core@0.15.1':
    resolution: {integrity: sha512-bkOp+iumZCCbt1K1CmWf0R9pM5yKpDv+ZXtvSyQpudrI9kuFLp+bM2WOPXImuD/ceQuaa8f5pj93Y7zyECIGNA==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@eslint/eslintrc@3.3.1':
    resolution: {integrity: sha512-gtF186CXhIl1p4pJNGZw8Yc6RlshoePRvE0X91oPGb3vZ8pM3qOS9W9NGPat9LziaBV7XrJWGylNQXkGcnM3IQ==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@eslint/js@9.32.0':
    resolution: {integrity: sha512-BBpRFZK3eX6uMLKz8WxFOBIFFcGFJ/g8XuwjTHCqHROSIsopI+ddn/d5Cfh36+7+e5edVS8dbSHnBNhrLEX0zg==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@eslint/object-schema@2.1.6':
    resolution: {integrity: sha512-RBMg5FRL0I0gs51M/guSAj5/e14VQ4tpZnQNWwuDT66P14I43ItmPfIZRhO9fUVIPOAQXU47atlywZ/czoqFPA==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@eslint/plugin-kit@0.3.4':
    resolution: {integrity: sha512-Ul5l+lHEcw3L5+k8POx6r74mxEYKG5kOb6Xpy2gCRW6zweT6TEhAf8vhxGgjhqrd/VO/Dirhsb+1hNpD1ue9hw==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@floating-ui/core@1.7.2':
    resolution: {integrity: sha512-wNB5ooIKHQc+Kui96jE/n69rHFWAVoxn5CAzL1Xdd8FG03cgY3MLO+GF9U3W737fYDSgPWA6MReKhBQBop6Pcw==}

  '@floating-ui/dom@1.7.2':
    resolution: {integrity: sha512-7cfaOQuCS27HD7DX+6ib2OrnW+b4ZBwDNnCcT0uTyidcmyWb03FnQqJybDBoCnpdxwBSfA94UAYlRCt7mV+TbA==}

  '@floating-ui/react-dom@2.1.4':
    resolution: {integrity: sha512-JbbpPhp38UmXDDAu60RJmbeme37Jbgsm7NrHGgzYYFKmblzRUh6Pa641dII6LsjwF4XlScDrde2UAzDo/b9KPw==}
    peerDependencies:
      react: '>=16.8.0'
      react-dom: '>=16.8.0'

  '@floating-ui/utils@0.2.10':
    resolution: {integrity: sha512-aGTxbpbg8/b5JfU1HXSrbH3wXZuLPJcNEcZQFMxLs3oSzgtVu6nFPkbbGGUvBcUjKV2YyB9Wxxabo+HEH9tcRQ==}

  '@humanfs/core@0.19.1':
    resolution: {integrity: sha512-5DyQ4+1JEUzejeK1JGICcideyfUbGixgS9jNgex5nqkW+cY7WZhxBigmieN5Qnw9ZosSNVC9KQKyb+GUaGyKUA==}
    engines: {node: '>=18.18.0'}

  '@humanfs/node@0.16.6':
    resolution: {integrity: sha512-YuI2ZHQL78Q5HbhDiBA1X4LmYdXCKCMQIfw0pw7piHJwyREFebJUvrQN4cMssyES6x+vfUbx1CIpaQUKYdQZOw==}
    engines: {node: '>=18.18.0'}

  '@humanwhocodes/module-importer@1.0.1':
    resolution: {integrity: sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==}
    engines: {node: '>=12.22'}

  '@humanwhocodes/retry@0.3.1':
    resolution: {integrity: sha512-JBxkERygn7Bv/GbN5Rv8Ul6LVknS+5Bp6RgDC/O8gEBU/yeH5Ui5C/OlWrTb6qct7LjjfT6Re2NxB0ln0yYybA==}
    engines: {node: '>=18.18'}

  '@humanwhocodes/retry@0.4.3':
    resolution: {integrity: sha512-bV0Tgo9K4hfPCek+aMAn81RppFKv2ySDQeMoSZuvTASywNTnVJCArCZE2FWqpvIatKu7VMRLWlR1EazvVhDyhQ==}
    engines: {node: '>=18.18'}

  '@img/sharp-darwin-arm64@0.34.3':
    resolution: {integrity: sha512-ryFMfvxxpQRsgZJqBd4wsttYQbCxsJksrv9Lw/v798JcQ8+w84mBWuXwl+TT0WJ/WrYOLaYpwQXi3sA9nTIaIg==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [arm64]
    os: [darwin]

  '@img/sharp-darwin-x64@0.34.3':
    resolution: {integrity: sha512-yHpJYynROAj12TA6qil58hmPmAwxKKC7reUqtGLzsOHfP7/rniNGTL8tjWX6L3CTV4+5P4ypcS7Pp+7OB+8ihA==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [x64]
    os: [darwin]

  '@img/sharp-libvips-darwin-arm64@1.2.0':
    resolution: {integrity: sha512-sBZmpwmxqwlqG9ueWFXtockhsxefaV6O84BMOrhtg/YqbTaRdqDE7hxraVE3y6gVM4eExmfzW4a8el9ArLeEiQ==}
    cpu: [arm64]
    os: [darwin]

  '@img/sharp-libvips-darwin-x64@1.2.0':
    resolution: {integrity: sha512-M64XVuL94OgiNHa5/m2YvEQI5q2cl9d/wk0qFTDVXcYzi43lxuiFTftMR1tOnFQovVXNZJ5TURSDK2pNe9Yzqg==}
    cpu: [x64]
    os: [darwin]

  '@img/sharp-libvips-linux-arm64@1.2.0':
    resolution: {integrity: sha512-RXwd0CgG+uPRX5YYrkzKyalt2OJYRiJQ8ED/fi1tq9WQW2jsQIn0tqrlR5l5dr/rjqq6AHAxURhj2DVjyQWSOA==}
    cpu: [arm64]
    os: [linux]

  '@img/sharp-libvips-linux-arm@1.2.0':
    resolution: {integrity: sha512-mWd2uWvDtL/nvIzThLq3fr2nnGfyr/XMXlq8ZJ9WMR6PXijHlC3ksp0IpuhK6bougvQrchUAfzRLnbsen0Cqvw==}
    cpu: [arm]
    os: [linux]

  '@img/sharp-libvips-linux-ppc64@1.2.0':
    resolution: {integrity: sha512-Xod/7KaDDHkYu2phxxfeEPXfVXFKx70EAFZ0qyUdOjCcxbjqyJOEUpDe6RIyaunGxT34Anf9ue/wuWOqBW2WcQ==}
    cpu: [ppc64]
    os: [linux]

  '@img/sharp-libvips-linux-s390x@1.2.0':
    resolution: {integrity: sha512-eMKfzDxLGT8mnmPJTNMcjfO33fLiTDsrMlUVcp6b96ETbnJmd4uvZxVJSKPQfS+odwfVaGifhsB07J1LynFehw==}
    cpu: [s390x]
    os: [linux]

  '@img/sharp-libvips-linux-x64@1.2.0':
    resolution: {integrity: sha512-ZW3FPWIc7K1sH9E3nxIGB3y3dZkpJlMnkk7z5tu1nSkBoCgw2nSRTFHI5pB/3CQaJM0pdzMF3paf9ckKMSE9Tg==}
    cpu: [x64]
    os: [linux]

  '@img/sharp-libvips-linuxmusl-arm64@1.2.0':
    resolution: {integrity: sha512-UG+LqQJbf5VJ8NWJ5Z3tdIe/HXjuIdo4JeVNADXBFuG7z9zjoegpzzGIyV5zQKi4zaJjnAd2+g2nna8TZvuW9Q==}
    cpu: [arm64]
    os: [linux]

  '@img/sharp-libvips-linuxmusl-x64@1.2.0':
    resolution: {integrity: sha512-SRYOLR7CXPgNze8akZwjoGBoN1ThNZoqpOgfnOxmWsklTGVfJiGJoC/Lod7aNMGA1jSsKWM1+HRX43OP6p9+6Q==}
    cpu: [x64]
    os: [linux]

  '@img/sharp-linux-arm64@0.34.3':
    resolution: {integrity: sha512-QdrKe3EvQrqwkDrtuTIjI0bu6YEJHTgEeqdzI3uWJOH6G1O8Nl1iEeVYRGdj1h5I21CqxSvQp1Yv7xeU3ZewbA==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [arm64]
    os: [linux]

  '@img/sharp-linux-arm@0.34.3':
    resolution: {integrity: sha512-oBK9l+h6KBN0i3dC8rYntLiVfW8D8wH+NPNT3O/WBHeW0OQWCjfWksLUaPidsrDKpJgXp3G3/hkmhptAW0I3+A==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [arm]
    os: [linux]

  '@img/sharp-linux-ppc64@0.34.3':
    resolution: {integrity: sha512-GLtbLQMCNC5nxuImPR2+RgrviwKwVql28FWZIW1zWruy6zLgA5/x2ZXk3mxj58X/tszVF69KK0Is83V8YgWhLA==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [ppc64]
    os: [linux]

  '@img/sharp-linux-s390x@0.34.3':
    resolution: {integrity: sha512-3gahT+A6c4cdc2edhsLHmIOXMb17ltffJlxR0aC2VPZfwKoTGZec6u5GrFgdR7ciJSsHT27BD3TIuGcuRT0KmQ==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [s390x]
    os: [linux]

  '@img/sharp-linux-x64@0.34.3':
    resolution: {integrity: sha512-8kYso8d806ypnSq3/Ly0QEw90V5ZoHh10yH0HnrzOCr6DKAPI6QVHvwleqMkVQ0m+fc7EH8ah0BB0QPuWY6zJQ==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [x64]
    os: [linux]

  '@img/sharp-linuxmusl-arm64@0.34.3':
    resolution: {integrity: sha512-vAjbHDlr4izEiXM1OTggpCcPg9tn4YriK5vAjowJsHwdBIdx0fYRsURkxLG2RLm9gyBq66gwtWI8Gx0/ov+JKQ==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [arm64]
    os: [linux]

  '@img/sharp-linuxmusl-x64@0.34.3':
    resolution: {integrity: sha512-gCWUn9547K5bwvOn9l5XGAEjVTTRji4aPTqLzGXHvIr6bIDZKNTA34seMPgM0WmSf+RYBH411VavCejp3PkOeQ==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [x64]
    os: [linux]

  '@img/sharp-wasm32@0.34.3':
    resolution: {integrity: sha512-+CyRcpagHMGteySaWos8IbnXcHgfDn7pO2fiC2slJxvNq9gDipYBN42/RagzctVRKgxATmfqOSulgZv5e1RdMg==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [wasm32]

  '@img/sharp-win32-arm64@0.34.3':
    resolution: {integrity: sha512-MjnHPnbqMXNC2UgeLJtX4XqoVHHlZNd+nPt1kRPmj63wURegwBhZlApELdtxM2OIZDRv/DFtLcNhVbd1z8GYXQ==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [arm64]
    os: [win32]

  '@img/sharp-win32-ia32@0.34.3':
    resolution: {integrity: sha512-xuCdhH44WxuXgOM714hn4amodJMZl3OEvf0GVTm0BEyMeA2to+8HEdRPShH0SLYptJY1uBw+SCFP9WVQi1Q/cw==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [ia32]
    os: [win32]

  '@img/sharp-win32-x64@0.34.3':
    resolution: {integrity: sha512-OWwz05d++TxzLEv4VnsTz5CmZ6mI6S05sfQGEMrNrQcOEERbX46332IvE7pO/EUiw7jUrrS40z/M7kPyjfl04g==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}
    cpu: [x64]
    os: [win32]

  '@isaacs/cliui@8.0.2':
    resolution: {integrity: sha512-O8jcjabXaleOG9DQ0+ARXWZBTfnP4WNAqzuiJK7ll44AmxGKv/J2M4TPjxjY3znBCfvBXFzucm1twdyFybFqEA==}
    engines: {node: '>=12'}

  '@jridgewell/gen-mapping@0.3.12':
    resolution: {integrity: sha512-OuLGC46TjB5BbN1dH8JULVVZY4WTdkF7tV9Ys6wLL1rubZnCMstOhNHueU5bLCrnRuDhKPDM4g6sw4Bel5Gzqg==}

  '@jridgewell/resolve-uri@3.1.2':
    resolution: {integrity: sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/sourcemap-codec@1.5.4':
    resolution: {integrity: sha512-VT2+G1VQs/9oz078bLrYbecdZKs912zQlkelYpuf+SXF+QvZDYJlbx/LSx+meSAwdDFnF8FVXW92AVjjkVmgFw==}

  '@jridgewell/trace-mapping@0.3.29':
    resolution: {integrity: sha512-uw6guiW/gcAGPDhLmd77/6lW8QLeiV5RUTsAX46Db6oLhGaVj4lhnPwb184s1bkc8kdVg/+h988dro8GRDpmYQ==}

  '@napi-rs/wasm-runtime@0.2.12':
    resolution: {integrity: sha512-ZVWUcfwY4E/yPitQJl481FjFo3K22D6qF0DuFH6Y/nbnE11GY5uguDxZMGXPQ8WQ0128MXQD7TnfHyK4oWoIJQ==}

  '@next/env@15.4.5':
    resolution: {integrity: sha512-ruM+q2SCOVCepUiERoxOmZY9ZVoecR3gcXNwCYZRvQQWRjhOiPJGmQ2fAiLR6YKWXcSAh7G79KEFxN3rwhs4LQ==}

  '@next/eslint-plugin-next@15.3.1':
    resolution: {integrity: sha512-oEs4dsfM6iyER3jTzMm4kDSbrQJq8wZw5fmT6fg2V3SMo+kgG+cShzLfEV20senZzv8VF+puNLheiGPlBGsv2A==}

  '@next/swc-darwin-arm64@15.4.5':
    resolution: {integrity: sha512-84dAN4fkfdC7nX6udDLz9GzQlMUwEMKD7zsseXrl7FTeIItF8vpk1lhLEnsotiiDt+QFu3O1FVWnqwcRD2U3KA==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [darwin]

  '@next/swc-darwin-x64@15.4.5':
    resolution: {integrity: sha512-CL6mfGsKuFSyQjx36p2ftwMNSb8PQog8y0HO/ONLdQqDql7x3aJb/wB+LA651r4we2pp/Ck+qoRVUeZZEvSurA==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [darwin]

  '@next/swc-linux-arm64-gnu@15.4.5':
    resolution: {integrity: sha512-1hTVd9n6jpM/thnDc5kYHD1OjjWYpUJrJxY4DlEacT7L5SEOXIifIdTye6SQNNn8JDZrcN+n8AWOmeJ8u3KlvQ==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [linux]

  '@next/swc-linux-arm64-musl@15.4.5':
    resolution: {integrity: sha512-4W+D/nw3RpIwGrqpFi7greZ0hjrCaioGErI7XHgkcTeWdZd146NNu1s4HnaHonLeNTguKnL2Urqvj28UJj6Gqw==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [linux]

  '@next/swc-linux-x64-gnu@15.4.5':
    resolution: {integrity: sha512-N6Mgdxe/Cn2K1yMHge6pclffkxzbSGOydXVKYOjYqQXZYjLCfN/CuFkaYDeDHY2VBwSHyM2fUjYBiQCIlxIKDA==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [linux]

  '@next/swc-linux-x64-musl@15.4.5':
    resolution: {integrity: sha512-YZ3bNDrS8v5KiqgWE0xZQgtXgCTUacgFtnEgI4ccotAASwSvcMPDLua7BWLuTfucoRv6mPidXkITJLd8IdJplQ==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [linux]

  '@next/swc-win32-arm64-msvc@15.4.5':
    resolution: {integrity: sha512-9Wr4t9GkZmMNcTVvSloFtjzbH4vtT4a8+UHqDoVnxA5QyfWe6c5flTH1BIWPGNWSUlofc8dVJAE7j84FQgskvQ==}
    engines: {node: '>= 10'}
    cpu: [arm64]
    os: [win32]

  '@next/swc-win32-x64-msvc@15.4.5':
    resolution: {integrity: sha512-voWk7XtGvlsP+w8VBz7lqp8Y+dYw/MTI4KeS0gTVtfdhdJ5QwhXLmNrndFOin/MDoCvUaLWMkYKATaCoUkt2/A==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [win32]

  '@nodelib/fs.scandir@2.1.5':
    resolution: {integrity: sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==}
    engines: {node: '>= 8'}

  '@nodelib/fs.stat@2.0.5':
    resolution: {integrity: sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==}
    engines: {node: '>= 8'}

  '@nodelib/fs.walk@1.2.8':
    resolution: {integrity: sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==}
    engines: {node: '>= 8'}

  '@nolyfill/is-core-module@1.0.39':
    resolution: {integrity: sha512-nn5ozdjYQpUCZlWGuxcJY/KpxkWQs4DcbMCmKojjyrYDEAGy4Ce19NN4v5MduafTwJlbKc99UA8YhSVqq9yPZA==}
    engines: {node: '>=12.4.0'}

  '@pkgjs/parseargs@0.11.0':
    resolution: {integrity: sha512-+1VkjdD0QBLPodGrJUeqarH8VAIvQODIbwh9XpP5Syisf7YoQgsJKPNFoqqLQlu+VQ/tVSshMR6loPMn8U+dPg==}
    engines: {node: '>=14'}

  '@radix-ui/number@1.1.1':
    resolution: {integrity: sha512-MkKCwxlXTgz6CFoJx3pCwn07GKp36+aZyu/u2Ln2VrA5DcdyCZkASEDBTd8x5whTQQL5CiYf4prXKLcgQdv29g==}

  '@radix-ui/primitive@1.1.2':
    resolution: {integrity: sha512-XnbHrrprsNqZKQhStrSwgRUQzoCI1glLzdw79xiZPoofhGICeZRSQ3dIxAKH1gb3OHfNf4d6f+vAv3kil2eggA==}

  '@radix-ui/react-arrow@1.1.7':
    resolution: {integrity: sha512-F+M1tLhO+mlQaOWspE8Wstg+z6PwxwRd8oQ8IXceWz92kfAmalTRf0EjrouQeo7QssEPfCn05B4Ihs1K9WQ/7w==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-checkbox@1.3.2':
    resolution: {integrity: sha512-yd+dI56KZqawxKZrJ31eENUwqc1QSqg4OZ15rybGjF2ZNwMO+wCyHzAVLRp9qoYJf7kYy0YpZ2b0JCzJ42HZpA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-collection@1.1.7':
    resolution: {integrity: sha512-Fh9rGN0MoI4ZFUNyfFVNU4y9LUz93u9/0K+yLgA2bwRojxM8JU1DyvvMBabnZPBgMWREAJvU2jjVzq+LrFUglw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-compose-refs@1.1.2':
    resolution: {integrity: sha512-z4eqJvfiNnFMHIIvXP3CY57y2WJs5g2v3X0zm9mEJkrkNv4rDxu+sg9Jh8EkXyeqBkB7SOcboo9dMVqhyrACIg==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-context@1.1.2':
    resolution: {integrity: sha512-jCi/QKUM2r1Ju5a3J64TH2A5SpKAgh0LpknyqdQ4m6DCV0xJ2HG1xARRwNGPQfi1SLdLWZ1OJz6F4OMBBNiGJA==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-direction@1.1.1':
    resolution: {integrity: sha512-1UEWRX6jnOA2y4H5WczZ44gOOjTEmlqv1uNW4GAJEO5+bauCBhv8snY65Iw5/VOS/ghKN9gr2KjnLKxrsvoMVw==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-dismissable-layer@1.1.10':
    resolution: {integrity: sha512-IM1zzRV4W3HtVgftdQiiOmA0AdJlCtMLe00FXaHwgt3rAnNsIyDqshvkIW3hj/iu5hu8ERP7KIYki6NkqDxAwQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-dropdown-menu@2.1.15':
    resolution: {integrity: sha512-mIBnOjgwo9AH3FyKaSWoSu/dYj6VdhJ7frEPiGTeXCdUFHjl9h3mFh2wwhEtINOmYXWhdpf1rY2minFsmaNgVQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-focus-guards@1.1.2':
    resolution: {integrity: sha512-fyjAACV62oPV925xFCrH8DR5xWhg9KYtJT4s3u54jxp+L/hbpTY2kIeEFFbFe+a/HCE94zGQMZLIpVTPVZDhaA==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-focus-scope@1.1.7':
    resolution: {integrity: sha512-t2ODlkXBQyn7jkl6TNaw/MtVEVvIGelJDCG41Okq/KwUsJBwQ4XVZsHAVUkK4mBv3ewiAS3PGuUWuY2BoK4ZUw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-id@1.1.1':
    resolution: {integrity: sha512-kGkGegYIdQsOb4XjsfM97rXsiHaBwco+hFI66oO4s9LU+PLAC5oJ7khdOVFxkhsmlbpUqDAvXw11CluXP+jkHg==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-label@2.1.7':
    resolution: {integrity: sha512-YT1GqPSL8kJn20djelMX7/cTRp/Y9w5IZHvfxQTVHrOqa2yMl7i/UfMqKRU5V7mEyKTrUVgJXhNQPVCG8PBLoQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-menu@2.1.15':
    resolution: {integrity: sha512-tVlmA3Vb9n8SZSd+YSbuFR66l87Wiy4du+YE+0hzKQEANA+7cWKH1WgqcEX4pXqxUFQKrWQGHdvEfw00TjFiew==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-popper@1.2.7':
    resolution: {integrity: sha512-IUFAccz1JyKcf/RjB552PlWwxjeCJB8/4KxT7EhBHOJM+mN7LdW+B3kacJXILm32xawcMMjb2i0cIZpo+f9kiQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-portal@1.1.9':
    resolution: {integrity: sha512-bpIxvq03if6UNwXZ+HTK71JLh4APvnXntDc6XOX8UVq4XQOVl7lwok0AvIl+b8zgCw3fSaVTZMpAPPagXbKmHQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-presence@1.1.4':
    resolution: {integrity: sha512-ueDqRbdc4/bkaQT3GIpLQssRlFgWaL/U2z/S31qRwwLWoxHLgry3SIfCwhxeQNbirEUXFa+lq3RL3oBYXtcmIA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-primitive@2.1.3':
    resolution: {integrity: sha512-m9gTwRkhy2lvCPe6QJp4d3G1TYEUHn/FzJUtq9MjH46an1wJU+GdoGC5VLof8RX8Ft/DlpshApkhswDLZzHIcQ==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-roving-focus@1.1.10':
    resolution: {integrity: sha512-dT9aOXUen9JSsxnMPv/0VqySQf5eDQ6LCk5Sw28kamz8wSOW2bJdlX2Bg5VUIIcV+6XlHpWTIuTPCf/UNIyq8Q==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-scroll-area@1.2.9':
    resolution: {integrity: sha512-YSjEfBXnhUELsO2VzjdtYYD4CfQjvao+lhhrX5XsHD7/cyUNzljF1FHEbgTPN7LH2MClfwRMIsYlqTYpKTTe2A==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-separator@1.1.7':
    resolution: {integrity: sha512-0HEb8R9E8A+jZjvmFCy/J4xhbXy3TV+9XSnGJ3KvTtjlIUy/YQ/p6UYZvi7YbeoeXdyU9+Y3scizK6hkY37baA==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-slot@1.2.3':
    resolution: {integrity: sha512-aeNmHnBxbi2St0au6VBVC7JXFlhLlOnvIIlePNniyUNAClzmtAUEY8/pBiK3iHjufOlwA+c20/8jngo7xcrg8A==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-tooltip@1.2.7':
    resolution: {integrity: sha512-Ap+fNYwKTYJ9pzqW+Xe2HtMRbQ/EeWkj2qykZ6SuEV4iS/o1bZI5ssJbk4D2r8XuDuOBVz/tIx2JObtuqU+5Zw==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/react-use-callback-ref@1.1.1':
    resolution: {integrity: sha512-FkBMwD+qbGQeMu1cOHnuGB6x4yzPjho8ap5WtbEJ26umhgqVXbhekKUQO+hZEL1vU92a3wHwdp0HAcqAUF5iDg==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-controllable-state@1.2.2':
    resolution: {integrity: sha512-BjasUjixPFdS+NKkypcyyN5Pmg83Olst0+c6vGov0diwTEo6mgdqVR6hxcEgFuh4QrAs7Rc+9KuGJ9TVCj0Zzg==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-effect-event@0.0.2':
    resolution: {integrity: sha512-Qp8WbZOBe+blgpuUT+lw2xheLP8q0oatc9UpmiemEICxGvFLYmHm9QowVZGHtJlGbS6A6yJ3iViad/2cVjnOiA==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-escape-keydown@1.1.1':
    resolution: {integrity: sha512-Il0+boE7w/XebUHyBjroE+DbByORGR9KKmITzbR7MyQ4akpORYP/ZmbhAr0DG7RmmBqoOnZdy2QlvajJ2QA59g==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-layout-effect@1.1.1':
    resolution: {integrity: sha512-RbJRS4UWQFkzHTTwVymMTUv8EqYhOp8dOOviLj2ugtTiXRaRQS7GLGxZTLL1jWhMeoSCf5zmcZkqTl9IiYfXcQ==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-previous@1.1.1':
    resolution: {integrity: sha512-2dHfToCj/pzca2Ck724OZ5L0EVrr3eHRNsG/b3xQJLA2hZpVCS99bLAX+hm1IHXDEnzU6by5z/5MIY794/a8NQ==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-rect@1.1.1':
    resolution: {integrity: sha512-QTYuDesS0VtuHNNvMh+CjlKJ4LJickCMUAqjlE3+j8w+RlRpwyX3apEQKGFzbZGdo7XNG1tXa+bQqIE7HIXT2w==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-use-size@1.1.1':
    resolution: {integrity: sha512-ewrXRDTAqAXlkl6t/fkXWNAhFX9I+CkKlw6zjEwk86RSPKwZr3xpBRso655aqYafwtnbpHLj6toFzmd6xdVptQ==}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  '@radix-ui/react-visually-hidden@1.2.3':
    resolution: {integrity: sha512-pzJq12tEaaIhqjbzpCuv/OypJY/BPavOofm+dbab+MHLajy277+1lLm6JFcGgF5eskJ6mquGirhXY2GD/8u8Ug==}
    peerDependencies:
      '@types/react': '*'
      '@types/react-dom': '*'
      react: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
      react-dom: ^16.8 || ^17.0 || ^18.0 || ^19.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true
      '@types/react-dom':
        optional: true

  '@radix-ui/rect@1.1.1':
    resolution: {integrity: sha512-HPwpGIzkl28mWyZqG52jiqDJ12waP11Pa1lGoiyUkIEuMLBP0oeK/C89esbXrxsky5we7dfd8U58nm0SgAWpVw==}

  '@rtsao/scc@1.1.0':
    resolution: {integrity: sha512-zt6OdqaDoOnJ1ZYsCYGt9YmWzDXl4vQdKTyJev62gFhRGKdx7mcT54V9KIjg+d2wi9EXsPvAPKe7i7WjfVWB8g==}

  '@rushstack/eslint-patch@1.12.0':
    resolution: {integrity: sha512-5EwMtOqvJMMa3HbmxLlF74e+3/HhwBTMcvt3nqVJgGCozO6hzIPOBlwm8mGVNR9SN2IJpxSnlxczyDjcn7qIyw==}

  '@supabase/auth-js@2.71.1':
    resolution: {integrity: sha512-mMIQHBRc+SKpZFRB2qtupuzulaUhFYupNyxqDj5Jp/LyPvcWvjaJzZzObv6URtL/O6lPxkanASnotGtNpS3H2Q==}

  '@supabase/functions-js@2.4.5':
    resolution: {integrity: sha512-v5GSqb9zbosquTo6gBwIiq7W9eQ7rE5QazsK/ezNiQXdCbY+bH8D9qEaBIkhVvX4ZRW5rP03gEfw5yw9tiq4EQ==}

  '@supabase/node-fetch@2.6.15':
    resolution: {integrity: sha512-1ibVeYUacxWYi9i0cf5efil6adJ9WRyZBLivgjs+AUpewx1F3xPi7gLgaASI2SmIQxPoCEjAsLAzKPgMJVgOUQ==}
    engines: {node: 4.x || >=6.0.0}

  '@supabase/postgrest-js@1.19.4':
    resolution: {integrity: sha512-O4soKqKtZIW3olqmbXXbKugUtByD2jPa8kL2m2c1oozAO11uCcGrRhkZL0kVxjBLrXHE0mdSkFsMj7jDSfyNpw==}

  '@supabase/realtime-js@2.11.15':
    resolution: {integrity: sha512-HQKRnwAqdVqJW/P9TjKVK+/ETpW4yQ8tyDPPtRMKOH4Uh3vQD74vmj353CYs8+YwVBKubeUOOEpI9CT8mT4obw==}

  '@supabase/ssr@0.6.1':
    resolution: {integrity: sha512-QtQgEMvaDzr77Mk3vZ3jWg2/y+D8tExYF7vcJT+wQ8ysuvOeGGjYbZlvj5bHYsj/SpC0bihcisnwPrM4Gp5G4g==}
    peerDependencies:
      '@supabase/supabase-js': ^2.43.4

  '@supabase/storage-js@2.10.4':
    resolution: {integrity: sha512-cvL02GarJVFcNoWe36VBybQqTVRq6wQSOCvTS64C+eyuxOruFIm1utZAY0xi2qKtHJO3EjKaj8iWJKySusDmAQ==}

  '@supabase/supabase-js@2.53.0':
    resolution: {integrity: sha512-Vg9sl0oFn55cCPaEOsDsRDbxOVccxRrK/cikjL1XbywHEOfyA5SOOEypidMvQLwgoAfnC2S4D9BQwJDcZs7/TQ==}

  '@swc/helpers@0.5.15':
    resolution: {integrity: sha512-JQ5TuMi45Owi4/BIMAJBoSQoOJu12oOk/gADqlcUL9JEdHB8vyjUSsxqeNXnmXHjYKMi2WcYtezGEEhqUI/E2g==}

  '@tybys/wasm-util@0.10.0':
    resolution: {integrity: sha512-VyyPYFlOMNylG45GoAe0xDoLwWuowvf92F9kySqzYh8vmYm7D2u4iUJKa1tOUpS70Ku13ASrOkS4ScXFsTaCNQ==}

  '@types/estree@1.0.8':
    resolution: {integrity: sha512-dWHzHa2WqEXI/O1E9OjrocMTKJl2mSrEolh1Iomrv6U+JuNwaHXsXx9bLu5gG7BUWFIN0skIQJQ/L1rIex4X6w==}

  '@types/json-schema@7.0.15':
    resolution: {integrity: sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==}

  '@types/json5@0.0.29':
    resolution: {integrity: sha512-dRLjCWHYg4oaA77cxO64oO+7JwCwnIzkZPdrrC71jQmQtlhM556pwKo5bUzqvZndkVbeFLIIi+9TC40JNF5hNQ==}

  '@types/node@20.19.9':
    resolution: {integrity: sha512-cuVNgarYWZqxRJDQHEB58GEONhOK79QVR/qYx4S7kcUObQvUwvFnYxJuuHUKm2aieN9X3yZB4LZsuYNU1Qphsw==}

  '@types/phoenix@1.6.6':
    resolution: {integrity: sha512-PIzZZlEppgrpoT2QgbnDU+MMzuR6BbCjllj0bM70lWoejMeNJAxCchxnv7J3XFkI8MpygtRpzXrIlmWUBclP5A==}

  '@types/react-dom@19.1.7':
    resolution: {integrity: sha512-i5ZzwYpqjmrKenzkoLM2Ibzt6mAsM7pxB6BCIouEVVmgiqaMj1TjaK7hnA36hbW5aZv20kx7Lw6hWzPWg0Rurw==}
    peerDependencies:
      '@types/react': ^19.0.0

  '@types/react@19.1.9':
    resolution: {integrity: sha512-WmdoynAX8Stew/36uTSVMcLJJ1KRh6L3IZRx1PZ7qJtBqT3dYTgyDTx8H1qoRghErydW7xw9mSJ3wS//tCRpFA==}

  '@types/ws@8.18.1':
    resolution: {integrity: sha512-ThVF6DCVhA8kUGy+aazFQ4kXQ7E1Ty7A3ypFOe0IcJV8O/M511G99AW24irKrW56Wt44yG9+ij8FaqoBGkuBXg==}

  '@typescript-eslint/eslint-plugin@8.38.0':
    resolution: {integrity: sha512-CPoznzpuAnIOl4nhj4tRr4gIPj5AfKgkiJmGQDaq+fQnRJTYlcBjbX3wbciGmpoPf8DREufuPRe1tNMZnGdanA==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      '@typescript-eslint/parser': ^8.38.0
      eslint: ^8.57.0 || ^9.0.0
      typescript: '>=4.8.4 <5.9.0'

  '@typescript-eslint/parser@8.38.0':
    resolution: {integrity: sha512-Zhy8HCvBUEfBECzIl1PKqF4p11+d0aUJS1GeUiuqK9WmOug8YCmC4h4bjyBvMyAMI9sbRczmrYL5lKg/YMbrcQ==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      eslint: ^8.57.0 || ^9.0.0
      typescript: '>=4.8.4 <5.9.0'

  '@typescript-eslint/project-service@8.38.0':
    resolution: {integrity: sha512-dbK7Jvqcb8c9QfH01YB6pORpqX1mn5gDZc9n63Ak/+jD67oWXn3Gs0M6vddAN+eDXBCS5EmNWzbSxsn9SzFWWg==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      typescript: '>=4.8.4 <5.9.0'

  '@typescript-eslint/scope-manager@8.38.0':
    resolution: {integrity: sha512-WJw3AVlFFcdT9Ri1xs/lg8LwDqgekWXWhH3iAF+1ZM+QPd7oxQ6jvtW/JPwzAScxitILUIFs0/AnQ/UWHzbATQ==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@typescript-eslint/tsconfig-utils@8.38.0':
    resolution: {integrity: sha512-Lum9RtSE3EroKk/bYns+sPOodqb2Fv50XOl/gMviMKNvanETUuUcC9ObRbzrJ4VSd2JalPqgSAavwrPiPvnAiQ==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      typescript: '>=4.8.4 <5.9.0'

  '@typescript-eslint/type-utils@8.38.0':
    resolution: {integrity: sha512-c7jAvGEZVf0ao2z+nnz8BUaHZD09Agbh+DY7qvBQqLiz8uJzRgVPj5YvOh8I8uEiH8oIUGIfHzMwUcGVco/SJg==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      eslint: ^8.57.0 || ^9.0.0
      typescript: '>=4.8.4 <5.9.0'

  '@typescript-eslint/types@8.38.0':
    resolution: {integrity: sha512-wzkUfX3plUqij4YwWaJyqhiPE5UCRVlFpKn1oCRn2O1bJ592XxWJj8ROQ3JD5MYXLORW84063z3tZTb/cs4Tyw==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@typescript-eslint/typescript-estree@8.38.0':
    resolution: {integrity: sha512-fooELKcAKzxux6fA6pxOflpNS0jc+nOQEEOipXFNjSlBS6fqrJOVY/whSn70SScHrcJ2LDsxWrneFoWYSVfqhQ==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      typescript: '>=4.8.4 <5.9.0'

  '@typescript-eslint/utils@8.38.0':
    resolution: {integrity: sha512-hHcMA86Hgt+ijJlrD8fX0j1j8w4C92zue/8LOPAFioIno+W0+L7KqE8QZKCcPGc/92Vs9x36w/4MPTJhqXdyvg==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    peerDependencies:
      eslint: ^8.57.0 || ^9.0.0
      typescript: '>=4.8.4 <5.9.0'

  '@typescript-eslint/visitor-keys@8.38.0':
    resolution: {integrity: sha512-pWrTcoFNWuwHlA9CvlfSsGWs14JxfN1TH25zM5L7o0pRLhsoZkDnTsXfQRJBEWJoV5DL0jf+Z+sxiud+K0mq1g==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  '@unrs/resolver-binding-android-arm-eabi@1.11.1':
    resolution: {integrity: sha512-ppLRUgHVaGRWUx0R0Ut06Mjo9gBaBkg3v/8AxusGLhsIotbBLuRk51rAzqLC8gq6NyyAojEXglNjzf6R948DNw==}
    cpu: [arm]
    os: [android]

  '@unrs/resolver-binding-android-arm64@1.11.1':
    resolution: {integrity: sha512-lCxkVtb4wp1v+EoN+HjIG9cIIzPkX5OtM03pQYkG+U5O/wL53LC4QbIeazgiKqluGeVEeBlZahHalCaBvU1a2g==}
    cpu: [arm64]
    os: [android]

  '@unrs/resolver-binding-darwin-arm64@1.11.1':
    resolution: {integrity: sha512-gPVA1UjRu1Y/IsB/dQEsp2V1pm44Of6+LWvbLc9SDk1c2KhhDRDBUkQCYVWe6f26uJb3fOK8saWMgtX8IrMk3g==}
    cpu: [arm64]
    os: [darwin]

  '@unrs/resolver-binding-darwin-x64@1.11.1':
    resolution: {integrity: sha512-cFzP7rWKd3lZaCsDze07QX1SC24lO8mPty9vdP+YVa3MGdVgPmFc59317b2ioXtgCMKGiCLxJ4HQs62oz6GfRQ==}
    cpu: [x64]
    os: [darwin]

  '@unrs/resolver-binding-freebsd-x64@1.11.1':
    resolution: {integrity: sha512-fqtGgak3zX4DCB6PFpsH5+Kmt/8CIi4Bry4rb1ho6Av2QHTREM+47y282Uqiu3ZRF5IQioJQ5qWRV6jduA+iGw==}
    cpu: [x64]
    os: [freebsd]

  '@unrs/resolver-binding-linux-arm-gnueabihf@1.11.1':
    resolution: {integrity: sha512-u92mvlcYtp9MRKmP+ZvMmtPN34+/3lMHlyMj7wXJDeXxuM0Vgzz0+PPJNsro1m3IZPYChIkn944wW8TYgGKFHw==}
    cpu: [arm]
    os: [linux]

  '@unrs/resolver-binding-linux-arm-musleabihf@1.11.1':
    resolution: {integrity: sha512-cINaoY2z7LVCrfHkIcmvj7osTOtm6VVT16b5oQdS4beibX2SYBwgYLmqhBjA1t51CarSaBuX5YNsWLjsqfW5Cw==}
    cpu: [arm]
    os: [linux]

  '@unrs/resolver-binding-linux-arm64-gnu@1.11.1':
    resolution: {integrity: sha512-34gw7PjDGB9JgePJEmhEqBhWvCiiWCuXsL9hYphDF7crW7UgI05gyBAi6MF58uGcMOiOqSJ2ybEeCvHcq0BCmQ==}
    cpu: [arm64]
    os: [linux]

  '@unrs/resolver-binding-linux-arm64-musl@1.11.1':
    resolution: {integrity: sha512-RyMIx6Uf53hhOtJDIamSbTskA99sPHS96wxVE/bJtePJJtpdKGXO1wY90oRdXuYOGOTuqjT8ACccMc4K6QmT3w==}
    cpu: [arm64]
    os: [linux]

  '@unrs/resolver-binding-linux-ppc64-gnu@1.11.1':
    resolution: {integrity: sha512-D8Vae74A4/a+mZH0FbOkFJL9DSK2R6TFPC9M+jCWYia/q2einCubX10pecpDiTmkJVUH+y8K3BZClycD8nCShA==}
    cpu: [ppc64]
    os: [linux]

  '@unrs/resolver-binding-linux-riscv64-gnu@1.11.1':
    resolution: {integrity: sha512-frxL4OrzOWVVsOc96+V3aqTIQl1O2TjgExV4EKgRY09AJ9leZpEg8Ak9phadbuX0BA4k8U5qtvMSQQGGmaJqcQ==}
    cpu: [riscv64]
    os: [linux]

  '@unrs/resolver-binding-linux-riscv64-musl@1.11.1':
    resolution: {integrity: sha512-mJ5vuDaIZ+l/acv01sHoXfpnyrNKOk/3aDoEdLO/Xtn9HuZlDD6jKxHlkN8ZhWyLJsRBxfv9GYM2utQ1SChKew==}
    cpu: [riscv64]
    os: [linux]

  '@unrs/resolver-binding-linux-s390x-gnu@1.11.1':
    resolution: {integrity: sha512-kELo8ebBVtb9sA7rMe1Cph4QHreByhaZ2QEADd9NzIQsYNQpt9UkM9iqr2lhGr5afh885d/cB5QeTXSbZHTYPg==}
    cpu: [s390x]
    os: [linux]

  '@unrs/resolver-binding-linux-x64-gnu@1.11.1':
    resolution: {integrity: sha512-C3ZAHugKgovV5YvAMsxhq0gtXuwESUKc5MhEtjBpLoHPLYM+iuwSj3lflFwK3DPm68660rZ7G8BMcwSro7hD5w==}
    cpu: [x64]
    os: [linux]

  '@unrs/resolver-binding-linux-x64-musl@1.11.1':
    resolution: {integrity: sha512-rV0YSoyhK2nZ4vEswT/QwqzqQXw5I6CjoaYMOX0TqBlWhojUf8P94mvI7nuJTeaCkkds3QE4+zS8Ko+GdXuZtA==}
    cpu: [x64]
    os: [linux]

  '@unrs/resolver-binding-wasm32-wasi@1.11.1':
    resolution: {integrity: sha512-5u4RkfxJm+Ng7IWgkzi3qrFOvLvQYnPBmjmZQ8+szTK/b31fQCnleNl1GgEt7nIsZRIf5PLhPwT0WM+q45x/UQ==}
    engines: {node: '>=14.0.0'}
    cpu: [wasm32]

  '@unrs/resolver-binding-win32-arm64-msvc@1.11.1':
    resolution: {integrity: sha512-nRcz5Il4ln0kMhfL8S3hLkxI85BXs3o8EYoattsJNdsX4YUU89iOkVn7g0VHSRxFuVMdM4Q1jEpIId1Ihim/Uw==}
    cpu: [arm64]
    os: [win32]

  '@unrs/resolver-binding-win32-ia32-msvc@1.11.1':
    resolution: {integrity: sha512-DCEI6t5i1NmAZp6pFonpD5m7i6aFrpofcp4LA2i8IIq60Jyo28hamKBxNrZcyOwVOZkgsRp9O2sXWBWP8MnvIQ==}
    cpu: [ia32]
    os: [win32]

  '@unrs/resolver-binding-win32-x64-msvc@1.11.1':
    resolution: {integrity: sha512-lrW200hZdbfRtztbygyaq/6jP6AKE8qQN2KvPcJ+x7wiD038YtnYtZ82IMNJ69GJibV7bwL3y9FgK+5w/pYt6g==}
    cpu: [x64]
    os: [win32]

  acorn-jsx@5.3.2:
    resolution: {integrity: sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==}
    peerDependencies:
      acorn: ^6.0.0 || ^7.0.0 || ^8.0.0

  acorn@8.15.0:
    resolution: {integrity: sha512-NZyJarBfL7nWwIq+FDL6Zp/yHEhePMNnnJ0y3qfieCrmNvYct8uvtiV41UvlSe6apAfk0fY1FbWx+NwfmpvtTg==}
    engines: {node: '>=0.4.0'}
    hasBin: true

  ajv@6.12.6:
    resolution: {integrity: sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==}

  ansi-regex@5.0.1:
    resolution: {integrity: sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==}
    engines: {node: '>=8'}

  ansi-regex@6.1.0:
    resolution: {integrity: sha512-7HSX4QQb4CspciLpVFwyRe79O3xsIZDDLER21kERQ71oaPodF8jL725AgJMFAYbooIqolJoRLuM81SpeUkpkvA==}
    engines: {node: '>=12'}

  ansi-styles@4.3.0:
    resolution: {integrity: sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==}
    engines: {node: '>=8'}

  ansi-styles@6.2.1:
    resolution: {integrity: sha512-bN798gFfQX+viw3R7yrGWRqnrN2oRkEkUjjl4JNn4E8GxxbjtG3FbrEIIY3l8/hrwUwIeCZvi4QuOTP4MErVug==}
    engines: {node: '>=12'}

  any-promise@1.3.0:
    resolution: {integrity: sha512-7UvmKalWRt1wgjL1RrGxoSJW/0QZFIegpeGvZG9kjp8vrRu55XTHbwnqq2GpXm9uLbcuhxm3IqX9OB4MZR1b2A==}

  anymatch@3.1.3:
    resolution: {integrity: sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==}
    engines: {node: '>= 8'}

  arg@5.0.2:
    resolution: {integrity: sha512-PYjyFOLKQ9y57JvQ6QLo8dAgNqswh8M1RMJYdQduT6xbWSgK36P/Z/v+p888pM69jMMfS8Xd8F6I1kQ/I9HUGg==}

  argparse@2.0.1:
    resolution: {integrity: sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==}

  aria-hidden@1.2.6:
    resolution: {integrity: sha512-ik3ZgC9dY/lYVVM++OISsaYDeg1tb0VtP5uL3ouh1koGOaUMDPpbFIei4JkFimWUFPn90sbMNMXQAIVOlnYKJA==}
    engines: {node: '>=10'}

  aria-query@5.3.2:
    resolution: {integrity: sha512-COROpnaoap1E2F000S62r6A60uHZnmlvomhfyT2DlTcrY1OrBKn2UhH7qn5wTC9zMvD0AY7csdPSNwKP+7WiQw==}
    engines: {node: '>= 0.4'}

  array-buffer-byte-length@1.0.2:
    resolution: {integrity: sha512-LHE+8BuR7RYGDKvnrmcuSq3tDcKv9OFEXQt/HpbZhY7V6h0zlUXutnAD82GiFx9rdieCMjkvtcsPqBwgUl1Iiw==}
    engines: {node: '>= 0.4'}

  array-includes@3.1.9:
    resolution: {integrity: sha512-FmeCCAenzH0KH381SPT5FZmiA/TmpndpcaShhfgEN9eCVjnFBqq3l1xrI42y8+PPLI6hypzou4GXw00WHmPBLQ==}
    engines: {node: '>= 0.4'}

  array.prototype.findlast@1.2.5:
    resolution: {integrity: sha512-CVvd6FHg1Z3POpBLxO6E6zr+rSKEQ9L6rZHAaY7lLfhKsWYUBBOuMs0e9o24oopj6H+geRCX0YJ+TJLBK2eHyQ==}
    engines: {node: '>= 0.4'}

  array.prototype.findlastindex@1.2.6:
    resolution: {integrity: sha512-F/TKATkzseUExPlfvmwQKGITM3DGTK+vkAsCZoDc5daVygbJBnjEUCbgkAvVFsgfXfX4YIqZ/27G3k3tdXrTxQ==}
    engines: {node: '>= 0.4'}

  array.prototype.flat@1.3.3:
    resolution: {integrity: sha512-rwG/ja1neyLqCuGZ5YYrznA62D4mZXg0i1cIskIUKSiqF3Cje9/wXAls9B9s1Wa2fomMsIv8czB8jZcPmxCXFg==}
    engines: {node: '>= 0.4'}

  array.prototype.flatmap@1.3.3:
    resolution: {integrity: sha512-Y7Wt51eKJSyi80hFrJCePGGNo5ktJCslFuboqJsbf57CCPcm5zztluPlc4/aD8sWsKvlwatezpV4U1efk8kpjg==}
    engines: {node: '>= 0.4'}

  array.prototype.tosorted@1.1.4:
    resolution: {integrity: sha512-p6Fx8B7b7ZhL/gmUsAy0D15WhvDccw3mnGNbZpi3pmeJdxtWsj2jEaI4Y6oo3XiHfzuSgPwKc04MYt6KgvC/wA==}
    engines: {node: '>= 0.4'}

  arraybuffer.prototype.slice@1.0.4:
    resolution: {integrity: sha512-BNoCY6SXXPQ7gF2opIP4GBE+Xw7U+pHMYKuzjgCN3GwiaIR09UUeKfheyIry77QtrCBlC0KK0q5/TER/tYh3PQ==}
    engines: {node: '>= 0.4'}

  ast-types-flow@0.0.8:
    resolution: {integrity: sha512-OH/2E5Fg20h2aPrbe+QL8JZQFko0YZaF+j4mnQ7BGhfavO7OpSLa8a0y9sBwomHdSbkhTS8TQNayBfnW5DwbvQ==}

  async-function@1.0.0:
    resolution: {integrity: sha512-hsU18Ae8CDTR6Kgu9DYf0EbCr/a5iGL0rytQDobUcdpYOKokk8LEjVphnXkDkgpi0wYVsqrXuP0bZxJaTqdgoA==}
    engines: {node: '>= 0.4'}

  autoprefixer@10.4.21:
    resolution: {integrity: sha512-O+A6LWV5LDHSJD3LjHYoNi4VLsj/Whi7k6zG12xTYaU4cQ8oxQGckXNX8cRHK5yOZ/ppVHe0ZBXGzSV9jXdVbQ==}
    engines: {node: ^10 || ^12 || >=14}
    hasBin: true
    peerDependencies:
      postcss: ^8.1.0

  available-typed-arrays@1.0.7:
    resolution: {integrity: sha512-wvUjBtSGN7+7SjNpq/9M2Tg350UZD3q62IFZLbRAR1bSMlCo1ZaeW+BJ+D090e4hIIZLBcTDWe4Mh4jvUDajzQ==}
    engines: {node: '>= 0.4'}

  axe-core@4.10.3:
    resolution: {integrity: sha512-Xm7bpRXnDSX2YE2YFfBk2FnF0ep6tmG7xPh8iHee8MIcrgq762Nkce856dYtJYLkuIoYZvGfTs/PbZhideTcEg==}
    engines: {node: '>=4'}

  axobject-query@4.1.0:
    resolution: {integrity: sha512-qIj0G9wZbMGNLjLmg1PT6v2mE9AH2zlnADJD/2tC6E00hgmhUOfEB6greHPAfLRSufHqROIUTkw6E+M3lH0PTQ==}
    engines: {node: '>= 0.4'}

  balanced-match@1.0.2:
    resolution: {integrity: sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==}

  binary-extensions@2.3.0:
    resolution: {integrity: sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==}
    engines: {node: '>=8'}

  brace-expansion@1.1.12:
    resolution: {integrity: sha512-9T9UjW3r0UW5c1Q7GTwllptXwhvYmEzFhzMfZ9H7FQWt+uZePjZPjBP/W1ZEyZ1twGWom5/56TF4lPcqjnDHcg==}

  brace-expansion@2.0.2:
    resolution: {integrity: sha512-Jt0vHyM+jmUBqojB7E1NIYadt0vI0Qxjxd2TErW94wDz+E2LAm5vKMXXwg6ZZBTHPuUlDgQHKXvjGBdfcF1ZDQ==}

  braces@3.0.3:
    resolution: {integrity: sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==}
    engines: {node: '>=8'}

  browserslist@4.25.1:
    resolution: {integrity: sha512-KGj0KoOMXLpSNkkEI6Z6mShmQy0bc1I+T7K9N81k4WWMrfz+6fQ6es80B/YLAeRoKvjYE1YSHHOW1qe9xIVzHw==}
    engines: {node: ^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7}
    hasBin: true

  call-bind-apply-helpers@1.0.2:
    resolution: {integrity: sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==}
    engines: {node: '>= 0.4'}

  call-bind@1.0.8:
    resolution: {integrity: sha512-oKlSFMcMwpUg2ednkhQ454wfWiU/ul3CkJe/PEHcTKuiX6RpbehUiFMXu13HalGZxfUwCQzZG747YXBn1im9ww==}
    engines: {node: '>= 0.4'}

  call-bound@1.0.4:
    resolution: {integrity: sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==}
    engines: {node: '>= 0.4'}

  callsites@3.1.0:
    resolution: {integrity: sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==}
    engines: {node: '>=6'}

  camelcase-css@2.0.1:
    resolution: {integrity: sha512-QOSvevhslijgYwRx6Rv7zKdMF8lbRmx+uQGx2+vDc+KI/eBnsy9kit5aj23AgGu3pa4t9AgwbnXWqS+iOY+2aA==}
    engines: {node: '>= 6'}

  caniuse-lite@1.0.30001731:
    resolution: {integrity: sha512-lDdp2/wrOmTRWuoB5DpfNkC0rJDU8DqRa6nYL6HK6sytw70QMopt/NIc/9SM7ylItlBWfACXk0tEn37UWM/+mg==}

  chalk@4.1.2:
    resolution: {integrity: sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==}
    engines: {node: '>=10'}

  chokidar@3.6.0:
    resolution: {integrity: sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==}
    engines: {node: '>= 8.10.0'}

  class-variance-authority@0.7.1:
    resolution: {integrity: sha512-Ka+9Trutv7G8M6WT6SeiRWz792K5qEqIGEGzXKhAE6xOWAY6pPH8U+9IY3oCMv6kqTmLsv7Xh/2w2RigkePMsg==}

  client-only@0.0.1:
    resolution: {integrity: sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA==}

  clsx@2.1.1:
    resolution: {integrity: sha512-eYm0QWBtUrBWZWG0d386OGAw16Z995PiOVo2B7bjWSbHedGl5e0ZWaq65kOGgUSNesEIDkB9ISbTg/JK9dhCZA==}
    engines: {node: '>=6'}

  color-convert@2.0.1:
    resolution: {integrity: sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==}
    engines: {node: '>=7.0.0'}

  color-name@1.1.4:
    resolution: {integrity: sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==}

  color-string@1.9.1:
    resolution: {integrity: sha512-shrVawQFojnZv6xM40anx4CkoDP+fZsw/ZerEMsW/pyzsRbElpsL/DBVW7q3ExxwusdNXI3lXpuhEZkzs8p5Eg==}

  color@4.2.3:
    resolution: {integrity: sha512-1rXeuUUiGGrykh+CeBdu5Ie7OJwinCgQY0bc7GCRxy5xVHy+moaqkpL/jqQq0MtQOeYcrqEz4abc5f0KtU7W4A==}
    engines: {node: '>=12.5.0'}

  commander@4.1.1:
    resolution: {integrity: sha512-NOKm8xhkzAjzFx8B2v5OAHT+u5pRQc2UCa2Vq9jYL/31o2wi9mxBA7LIFs3sV5VSC49z6pEhfbMULvShKj26WA==}
    engines: {node: '>= 6'}

  concat-map@0.0.1:
    resolution: {integrity: sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==}

  cookie@1.0.2:
    resolution: {integrity: sha512-9Kr/j4O16ISv8zBBhJoi4bXOYNTkFLOqSL3UDB0njXxCXNezjeyVrJyGOWtgfs/q2km1gwBcfH8q1yEGoMYunA==}
    engines: {node: '>=18'}

  cross-spawn@7.0.6:
    resolution: {integrity: sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==}
    engines: {node: '>= 8'}

  cssesc@3.0.0:
    resolution: {integrity: sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==}
    engines: {node: '>=4'}
    hasBin: true

  csstype@3.1.3:
    resolution: {integrity: sha512-M1uQkMl8rQK/szD0LNhtqxIPLpimGm8sOBwU7lLnCpSbTyY3yeU1Vc7l4KT5zT4s/yOxHH5O7tIuuLOCnLADRw==}

  damerau-levenshtein@1.0.8:
    resolution: {integrity: sha512-sdQSFB7+llfUcQHUQO3+B8ERRj0Oa4w9POWMI/puGtuf7gFywGmkaLCElnudfTiKZV+NvHqL0ifzdrI8Ro7ESA==}

  data-view-buffer@1.0.2:
    resolution: {integrity: sha512-EmKO5V3OLXh1rtK2wgXRansaK1/mtVdTUEiEI0W8RkvgT05kfxaH29PliLnpLP73yYO6142Q72QNa8Wx/A5CqQ==}
    engines: {node: '>= 0.4'}

  data-view-byte-length@1.0.2:
    resolution: {integrity: sha512-tuhGbE6CfTM9+5ANGf+oQb72Ky/0+s3xKUpHvShfiz2RxMFgFPjsXuRLBVMtvMs15awe45SRb83D6wH4ew6wlQ==}
    engines: {node: '>= 0.4'}

  data-view-byte-offset@1.0.1:
    resolution: {integrity: sha512-BS8PfmtDGnrgYdOonGZQdLZslWIeCGFP9tpan0hi1Co2Zr2NKADsvGYA8XxuG/4UWgJ6Cjtv+YJnB6MM69QGlQ==}
    engines: {node: '>= 0.4'}

  debug@3.2.7:
    resolution: {integrity: sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==}
    peerDependencies:
      supports-color: '*'
    peerDependenciesMeta:
      supports-color:
        optional: true

  debug@4.4.1:
    resolution: {integrity: sha512-KcKCqiftBJcZr++7ykoDIEwSa3XWowTfNPo92BYxjXiyYEVrUQh2aLyhxBCwww+heortUFxEJYcRzosstTEBYQ==}
    engines: {node: '>=6.0'}
    peerDependencies:
      supports-color: '*'
    peerDependenciesMeta:
      supports-color:
        optional: true

  deep-is@0.1.4:
    resolution: {integrity: sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==}

  define-data-property@1.1.4:
    resolution: {integrity: sha512-rBMvIzlpA8v6E+SJZoo++HAYqsLrkg7MSfIinMPFhmkorw7X+dOXVJQs+QT69zGkzMyfDnIMN2Wid1+NbL3T+A==}
    engines: {node: '>= 0.4'}

  define-properties@1.2.1:
    resolution: {integrity: sha512-8QmQKqEASLd5nx0U1B1okLElbUuuttJ/AnYmRXbbbGDWh6uS208EjD4Xqq/I9wK7u0v6O08XhTWnt5XtEbR6Dg==}
    engines: {node: '>= 0.4'}

  detect-libc@2.0.4:
    resolution: {integrity: sha512-3UDv+G9CsCKO1WKMGw9fwq/SWJYbI0c5Y7LU1AXYoDdbhE2AHQ6N6Nb34sG8Fj7T5APy8qXDCKuuIHd1BR0tVA==}
    engines: {node: '>=8'}

  detect-node-es@1.1.0:
    resolution: {integrity: sha512-ypdmJU/TbBby2Dxibuv7ZLW3Bs1QEmM7nHjEANfohJLvE0XVujisn1qPJcZxg+qDucsr+bP6fLD1rPS3AhJ7EQ==}

  didyoumean@1.2.2:
    resolution: {integrity: sha512-gxtyfqMg7GKyhQmb056K7M3xszy/myH8w+B4RT+QXBQsvAOdc3XymqDDPHx1BgPgsdAA5SIifona89YtRATDzw==}

  dlv@1.1.3:
    resolution: {integrity: sha512-+HlytyjlPKnIG8XuRG8WvmBP8xs8P71y+SKKS6ZXWoEgLuePxtDoUEiH7WkdePWrQ5JBpE6aoVqfZfJUQkjXwA==}

  doctrine@2.1.0:
    resolution: {integrity: sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw==}
    engines: {node: '>=0.10.0'}

  dunder-proto@1.0.1:
    resolution: {integrity: sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==}
    engines: {node: '>= 0.4'}

  eastasianwidth@0.2.0:
    resolution: {integrity: sha512-I88TYZWc9XiYHRQ4/3c5rjjfgkjhLyW2luGIheGERbNQ6OY7yTybanSpDXZa8y7VUP9YmDcYa+eyq4ca7iLqWA==}

  electron-to-chromium@1.5.192:
    resolution: {integrity: sha512-rP8Ez0w7UNw/9j5eSXCe10o1g/8B1P5SM90PCCMVkIRQn2R0LEHWz4Eh9RnxkniuDe1W0cTSOB3MLlkTGDcuCg==}

  emoji-regex@8.0.0:
    resolution: {integrity: sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==}

  emoji-regex@9.2.2:
    resolution: {integrity: sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==}

  es-abstract@1.24.0:
    resolution: {integrity: sha512-WSzPgsdLtTcQwm4CROfS5ju2Wa1QQcVeT37jFjYzdFz1r9ahadC8B8/a4qxJxM+09F18iumCdRmlr96ZYkQvEg==}
    engines: {node: '>= 0.4'}

  es-define-property@1.0.1:
    resolution: {integrity: sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==}
    engines: {node: '>= 0.4'}

  es-errors@1.3.0:
    resolution: {integrity: sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==}
    engines: {node: '>= 0.4'}

  es-iterator-helpers@1.2.1:
    resolution: {integrity: sha512-uDn+FE1yrDzyC0pCo961B2IHbdM8y/ACZsKD4dG6WqrjV53BADjwa7D+1aom2rsNVfLyDgU/eigvlJGJ08OQ4w==}
    engines: {node: '>= 0.4'}

  es-object-atoms@1.1.1:
    resolution: {integrity: sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==}
    engines: {node: '>= 0.4'}

  es-set-tostringtag@2.1.0:
    resolution: {integrity: sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA==}
    engines: {node: '>= 0.4'}

  es-shim-unscopables@1.1.0:
    resolution: {integrity: sha512-d9T8ucsEhh8Bi1woXCf+TIKDIROLG5WCkxg8geBCbvk22kzwC5G2OnXVMO6FUsvQlgUUXQ2itephWDLqDzbeCw==}
    engines: {node: '>= 0.4'}

  es-to-primitive@1.3.0:
    resolution: {integrity: sha512-w+5mJ3GuFL+NjVtJlvydShqE1eN3h3PbI7/5LAsYJP/2qtuMXjfL2LpHSRqo4b4eSF5K/DH1JXKUAHSB2UW50g==}
    engines: {node: '>= 0.4'}

  escalade@3.2.0:
    resolution: {integrity: sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==}
    engines: {node: '>=6'}

  escape-string-regexp@4.0.0:
    resolution: {integrity: sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==}
    engines: {node: '>=10'}

  eslint-config-next@15.3.1:
    resolution: {integrity: sha512-GnmyVd9TE/Ihe3RrvcafFhXErErtr2jS0JDeCSp3vWvy86AXwHsRBt0E3MqP/m8ACS1ivcsi5uaqjbhsG18qKw==}
    peerDependencies:
      eslint: ^7.23.0 || ^8.0.0 || ^9.0.0
      typescript: '>=3.3.1'
    peerDependenciesMeta:
      typescript:
        optional: true

  eslint-import-resolver-node@0.3.9:
    resolution: {integrity: sha512-WFj2isz22JahUv+B788TlO3N6zL3nNJGU8CcZbPZvVEkBPaJdCV4vy5wyghty5ROFbCRnm132v8BScu5/1BQ8g==}

  eslint-import-resolver-typescript@3.10.1:
    resolution: {integrity: sha512-A1rHYb06zjMGAxdLSkN2fXPBwuSaQ0iO5M/hdyS0Ajj1VBaRp0sPD3dn1FhME3c/JluGFbwSxyCfqdSbtQLAHQ==}
    engines: {node: ^14.18.0 || >=16.0.0}
    peerDependencies:
      eslint: '*'
      eslint-plugin-import: '*'
      eslint-plugin-import-x: '*'
    peerDependenciesMeta:
      eslint-plugin-import:
        optional: true
      eslint-plugin-import-x:
        optional: true

  eslint-module-utils@2.12.1:
    resolution: {integrity: sha512-L8jSWTze7K2mTg0vos/RuLRS5soomksDPoJLXIslC7c8Wmut3bx7CPpJijDcBZtxQ5lrbUdM+s0OlNbz0DCDNw==}
    engines: {node: '>=4'}
    peerDependencies:
      '@typescript-eslint/parser': '*'
      eslint: '*'
      eslint-import-resolver-node: '*'
      eslint-import-resolver-typescript: '*'
      eslint-import-resolver-webpack: '*'
    peerDependenciesMeta:
      '@typescript-eslint/parser':
        optional: true
      eslint:
        optional: true
      eslint-import-resolver-node:
        optional: true
      eslint-import-resolver-typescript:
        optional: true
      eslint-import-resolver-webpack:
        optional: true

  eslint-plugin-import@2.32.0:
    resolution: {integrity: sha512-whOE1HFo/qJDyX4SnXzP4N6zOWn79WhnCUY/iDR0mPfQZO8wcYE4JClzI2oZrhBnnMUCBCHZhO6VQyoBU95mZA==}
    engines: {node: '>=4'}
    peerDependencies:
      '@typescript-eslint/parser': '*'
      eslint: ^2 || ^3 || ^4 || ^5 || ^6 || ^7.2.0 || ^8 || ^9
    peerDependenciesMeta:
      '@typescript-eslint/parser':
        optional: true

  eslint-plugin-jsx-a11y@6.10.2:
    resolution: {integrity: sha512-scB3nz4WmG75pV8+3eRUQOHZlNSUhFNq37xnpgRkCCELU3XMvXAxLk1eqWWyE22Ki4Q01Fnsw9BA3cJHDPgn2Q==}
    engines: {node: '>=4.0'}
    peerDependencies:
      eslint: ^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9

  eslint-plugin-react-hooks@5.2.0:
    resolution: {integrity: sha512-+f15FfK64YQwZdJNELETdn5ibXEUQmW1DZL6KXhNnc2heoy/sg9VJJeT7n8TlMWouzWqSWavFkIhHyIbIAEapg==}
    engines: {node: '>=10'}
    peerDependencies:
      eslint: ^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0 || ^9.0.0

  eslint-plugin-react@7.37.5:
    resolution: {integrity: sha512-Qteup0SqU15kdocexFNAJMvCJEfa2xUKNV4CC1xsVMrIIqEy3SQ/rqyxCWNzfrd3/ldy6HMlD2e0JDVpDg2qIA==}
    engines: {node: '>=4'}
    peerDependencies:
      eslint: ^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7

  eslint-scope@8.4.0:
    resolution: {integrity: sha512-sNXOfKCn74rt8RICKMvJS7XKV/Xk9kA7DyJr8mJik3S7Cwgy3qlkkmyS2uQB3jiJg6VNdZd/pDBJu0nvG2NlTg==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  eslint-visitor-keys@3.4.3:
    resolution: {integrity: sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}

  eslint-visitor-keys@4.2.1:
    resolution: {integrity: sha512-Uhdk5sfqcee/9H/rCOJikYz67o0a2Tw2hGRPOG2Y1R2dg7brRe1uG0yaNQDHu+TO/uQPF/5eCapvYSmHUjt7JQ==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  eslint@9.32.0:
    resolution: {integrity: sha512-LSehfdpgMeWcTZkWZVIJl+tkZ2nuSkyyB9C27MZqFWXuph7DvaowgcTvKqxvpLW1JZIk8PN7hFY3Rj9LQ7m7lg==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}
    hasBin: true
    peerDependencies:
      jiti: '*'
    peerDependenciesMeta:
      jiti:
        optional: true

  espree@10.4.0:
    resolution: {integrity: sha512-j6PAQ2uUr79PZhBjP5C5fhl8e39FmRnOjsD5lGnWrFU8i2G776tBK7+nP8KuQUTTyAZUwfQqXAgrVH5MbH9CYQ==}
    engines: {node: ^18.18.0 || ^20.9.0 || >=21.1.0}

  esquery@1.6.0:
    resolution: {integrity: sha512-ca9pw9fomFcKPvFLXhBKUK90ZvGibiGOvRJNbjljY7s7uq/5YO4BOzcYtJqExdx99rF6aAcnRxHmcUHcz6sQsg==}
    engines: {node: '>=0.10'}

  esrecurse@4.3.0:
    resolution: {integrity: sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==}
    engines: {node: '>=4.0'}

  estraverse@5.3.0:
    resolution: {integrity: sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==}
    engines: {node: '>=4.0'}

  esutils@2.0.3:
    resolution: {integrity: sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==}
    engines: {node: '>=0.10.0'}

  fast-deep-equal@3.1.3:
    resolution: {integrity: sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==}

  fast-glob@3.3.1:
    resolution: {integrity: sha512-kNFPyjhh5cKjrUltxs+wFx+ZkbRaxxmZ+X0ZU31SOsxCEtP9VPgtq2teZw1DebupL5GmDaNQ6yKMMVcM41iqDg==}
    engines: {node: '>=8.6.0'}

  fast-glob@3.3.3:
    resolution: {integrity: sha512-7MptL8U0cqcFdzIzwOTHoilX9x5BrNqye7Z/LuC7kCMRio1EMSyqRK3BEAUD7sXRq4iT4AzTVuZdhgQ2TCvYLg==}
    engines: {node: '>=8.6.0'}

  fast-json-stable-stringify@2.1.0:
    resolution: {integrity: sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==}

  fast-levenshtein@2.0.6:
    resolution: {integrity: sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==}

  fastq@1.19.1:
    resolution: {integrity: sha512-GwLTyxkCXjXbxqIhTsMI2Nui8huMPtnxg7krajPJAjnEG/iiOS7i+zCtWGZR9G0NBKbXKh6X9m9UIsYX/N6vvQ==}

  fdir@6.4.6:
    resolution: {integrity: sha512-hiFoqpyZcfNm1yc4u8oWCf9A2c4D3QjCrks3zmoVKVxpQRzmPNar1hUJcBG2RQHvEVGDN+Jm81ZheVLAQMK6+w==}
    peerDependencies:
      picomatch: ^3 || ^4
    peerDependenciesMeta:
      picomatch:
        optional: true

  file-entry-cache@8.0.0:
    resolution: {integrity: sha512-XXTUwCvisa5oacNGRP9SfNtYBNAMi+RPwBFmblZEF7N7swHYQS6/Zfk7SRwx4D5j3CH211YNRco1DEMNVfZCnQ==}
    engines: {node: '>=16.0.0'}

  fill-range@7.1.1:
    resolution: {integrity: sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==}
    engines: {node: '>=8'}

  find-up@5.0.0:
    resolution: {integrity: sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==}
    engines: {node: '>=10'}

  flat-cache@4.0.1:
    resolution: {integrity: sha512-f7ccFPK3SXFHpx15UIGyRJ/FJQctuKZ0zVuN3frBo4HnK3cay9VEW0R6yPYFHC0AgqhukPzKjq22t5DmAyqGyw==}
    engines: {node: '>=16'}

  flatted@3.3.3:
    resolution: {integrity: sha512-GX+ysw4PBCz0PzosHDepZGANEuFCMLrnRTiEy9McGjmkCQYwRq4A/X786G/fjM/+OjsWSU1ZrY5qyARZmO/uwg==}

  for-each@0.3.5:
    resolution: {integrity: sha512-dKx12eRCVIzqCxFGplyFKJMPvLEWgmNtUrpTiJIR5u97zEhRG8ySrtboPHZXx7daLxQVrl643cTzbab2tkQjxg==}
    engines: {node: '>= 0.4'}

  foreground-child@3.3.1:
    resolution: {integrity: sha512-gIXjKqtFuWEgzFRJA9WCQeSJLZDjgJUOMCMzxtvFq/37KojM1BFGufqsCy0r4qSQmYLsZYMeyRqzIWOMup03sw==}
    engines: {node: '>=14'}

  fraction.js@4.3.7:
    resolution: {integrity: sha512-ZsDfxO51wGAXREY55a7la9LScWpwv9RxIrYABrlvOFBlH/ShPnrtsXeuUIfXKKOVicNxQ+o8JTbJvjS4M89yew==}

  fsevents@2.3.3:
    resolution: {integrity: sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==}
    engines: {node: ^8.16.0 || ^10.6.0 || >=11.0.0}
    os: [darwin]

  function-bind@1.1.2:
    resolution: {integrity: sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==}

  function.prototype.name@1.1.8:
    resolution: {integrity: sha512-e5iwyodOHhbMr/yNrc7fDYG4qlbIvI5gajyzPnb5TCwyhjApznQh1BMFou9b30SevY43gCJKXycoCBjMbsuW0Q==}
    engines: {node: '>= 0.4'}

  functions-have-names@1.2.3:
    resolution: {integrity: sha512-xckBUXyTIqT97tq2x2AMb+g163b5JFysYk0x4qxNFwbfQkmNZoiRHb6sPzI9/QV33WeuvVYBUIiD4NzNIyqaRQ==}

  get-intrinsic@1.3.0:
    resolution: {integrity: sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==}
    engines: {node: '>= 0.4'}

  get-nonce@1.0.1:
    resolution: {integrity: sha512-FJhYRoDaiatfEkUK8HKlicmu/3SGFD51q3itKDGoSTysQJBnfOcxU5GxnhE1E6soB76MbT0MBtnKJuXyAx+96Q==}
    engines: {node: '>=6'}

  get-proto@1.0.1:
    resolution: {integrity: sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==}
    engines: {node: '>= 0.4'}

  get-symbol-description@1.1.0:
    resolution: {integrity: sha512-w9UMqWwJxHNOvoNzSJ2oPF5wvYcvP7jUvYzhp67yEhTi17ZDBBC1z9pTdGuzjD+EFIqLSYRweZjqfiPzQ06Ebg==}
    engines: {node: '>= 0.4'}

  get-tsconfig@4.10.1:
    resolution: {integrity: sha512-auHyJ4AgMz7vgS8Hp3N6HXSmlMdUyhSUrfBF16w153rxtLIEOE+HGqaBppczZvnHLqQJfiHotCYpNhl0lUROFQ==}

  glob-parent@5.1.2:
    resolution: {integrity: sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==}
    engines: {node: '>= 6'}

  glob-parent@6.0.2:
    resolution: {integrity: sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==}
    engines: {node: '>=10.13.0'}

  glob@10.4.5:
    resolution: {integrity: sha512-7Bv8RF0k6xjo7d4A/PxYLbUCfb6c+Vpd2/mB2yRDlew7Jb5hEXiCD9ibfO7wpk8i4sevK6DFny9h7EYbM3/sHg==}
    hasBin: true

  globals@14.0.0:
    resolution: {integrity: sha512-oahGvuMGQlPw/ivIYBjVSrWAfWLBeku5tpPE2fOPLi+WHffIWbuh2tCjhyQhTBPMf5E9jDEH4FOmTYgYwbKwtQ==}
    engines: {node: '>=18'}

  globalthis@1.0.4:
    resolution: {integrity: sha512-DpLKbNU4WylpxJykQujfCcwYWiV/Jhm50Goo0wrVILAv5jOr9d+H+UR3PhSCD2rCCEIg0uc+G+muBTwD54JhDQ==}
    engines: {node: '>= 0.4'}

  gopd@1.2.0:
    resolution: {integrity: sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==}
    engines: {node: '>= 0.4'}

  graphemer@1.4.0:
    resolution: {integrity: sha512-EtKwoO6kxCL9WO5xipiHTZlSzBm7WLT627TqC/uVRd0HKmq8NXyebnNYxDoBi7wt8eTWrUrKXCOVaFq9x1kgag==}

  has-bigints@1.1.0:
    resolution: {integrity: sha512-R3pbpkcIqv2Pm3dUwgjclDRVmWpTJW2DcMzcIhEXEx1oh/CEMObMm3KLmRJOdvhM7o4uQBnwr8pzRK2sJWIqfg==}
    engines: {node: '>= 0.4'}

  has-flag@4.0.0:
    resolution: {integrity: sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==}
    engines: {node: '>=8'}

  has-property-descriptors@1.0.2:
    resolution: {integrity: sha512-55JNKuIW+vq4Ke1BjOTjM2YctQIvCT7GFzHwmfZPGo5wnrgkid0YQtnAleFSqumZm4az3n2BS+erby5ipJdgrg==}

  has-proto@1.2.0:
    resolution: {integrity: sha512-KIL7eQPfHQRC8+XluaIw7BHUwwqL19bQn4hzNgdr+1wXoU0KKj6rufu47lhY7KbJR2C6T6+PfyN0Ea7wkSS+qQ==}
    engines: {node: '>= 0.4'}

  has-symbols@1.1.0:
    resolution: {integrity: sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==}
    engines: {node: '>= 0.4'}

  has-tostringtag@1.0.2:
    resolution: {integrity: sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==}
    engines: {node: '>= 0.4'}

  hasown@2.0.2:
    resolution: {integrity: sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==}
    engines: {node: '>= 0.4'}

  ignore@5.3.2:
    resolution: {integrity: sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==}
    engines: {node: '>= 4'}

  ignore@7.0.5:
    resolution: {integrity: sha512-Hs59xBNfUIunMFgWAbGX5cq6893IbWg4KnrjbYwX3tx0ztorVgTDA6B2sxf8ejHJ4wz8BqGUMYlnzNBer5NvGg==}
    engines: {node: '>= 4'}

  import-fresh@3.3.1:
    resolution: {integrity: sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==}
    engines: {node: '>=6'}

  imurmurhash@0.1.4:
    resolution: {integrity: sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==}
    engines: {node: '>=0.8.19'}

  internal-slot@1.1.0:
    resolution: {integrity: sha512-4gd7VpWNQNB4UKKCFFVcp1AVv+FMOgs9NKzjHKusc8jTMhd5eL1NqQqOpE0KzMds804/yHlglp3uxgluOqAPLw==}
    engines: {node: '>= 0.4'}

  is-array-buffer@3.0.5:
    resolution: {integrity: sha512-DDfANUiiG2wC1qawP66qlTugJeL5HyzMpfr8lLK+jMQirGzNod0B12cFB/9q838Ru27sBwfw78/rdoU7RERz6A==}
    engines: {node: '>= 0.4'}

  is-arrayish@0.3.2:
    resolution: {integrity: sha512-eVRqCvVlZbuw3GrM63ovNSNAeA1K16kaR/LRY/92w0zxQ5/1YzwblUX652i4Xs9RwAGjW9d9y6X88t8OaAJfWQ==}

  is-async-function@2.1.1:
    resolution: {integrity: sha512-9dgM/cZBnNvjzaMYHVoxxfPj2QXt22Ev7SuuPrs+xav0ukGB0S6d4ydZdEiM48kLx5kDV+QBPrpVnFyefL8kkQ==}
    engines: {node: '>= 0.4'}

  is-bigint@1.1.0:
    resolution: {integrity: sha512-n4ZT37wG78iz03xPRKJrHTdZbe3IicyucEtdRsV5yglwc3GyUfbAfpSeD0FJ41NbUNSt5wbhqfp1fS+BgnvDFQ==}
    engines: {node: '>= 0.4'}

  is-binary-path@2.1.0:
    resolution: {integrity: sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==}
    engines: {node: '>=8'}

  is-boolean-object@1.2.2:
    resolution: {integrity: sha512-wa56o2/ElJMYqjCjGkXri7it5FbebW5usLw/nPmCMs5DeZ7eziSYZhSmPRn0txqeW4LnAmQQU7FgqLpsEFKM4A==}
    engines: {node: '>= 0.4'}

  is-bun-module@2.0.0:
    resolution: {integrity: sha512-gNCGbnnnnFAUGKeZ9PdbyeGYJqewpmc2aKHUEMO5nQPWU9lOmv7jcmQIv+qHD8fXW6W7qfuCwX4rY9LNRjXrkQ==}

  is-callable@1.2.7:
    resolution: {integrity: sha512-1BC0BVFhS/p0qtw6enp8e+8OD0UrK0oFLztSjNzhcKA3WDuJxxAPXzPuPtKkjEY9UUoEWlX/8fgKeu2S8i9JTA==}
    engines: {node: '>= 0.4'}

  is-core-module@2.16.1:
    resolution: {integrity: sha512-UfoeMA6fIJ8wTYFEUjelnaGI67v6+N7qXJEvQuIGa99l4xsCruSYOVSQ0uPANn4dAzm8lkYPaKLrrijLq7x23w==}
    engines: {node: '>= 0.4'}

  is-data-view@1.0.2:
    resolution: {integrity: sha512-RKtWF8pGmS87i2D6gqQu/l7EYRlVdfzemCJN/P3UOs//x1QE7mfhvzHIApBTRf7axvT6DMGwSwBXYCT0nfB9xw==}
    engines: {node: '>= 0.4'}

  is-date-object@1.1.0:
    resolution: {integrity: sha512-PwwhEakHVKTdRNVOw+/Gyh0+MzlCl4R6qKvkhuvLtPMggI1WAHt9sOwZxQLSGpUaDnrdyDsomoRgNnCfKNSXXg==}
    engines: {node: '>= 0.4'}

  is-extglob@2.1.1:
    resolution: {integrity: sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==}
    engines: {node: '>=0.10.0'}

  is-finalizationregistry@1.1.1:
    resolution: {integrity: sha512-1pC6N8qWJbWoPtEjgcL2xyhQOP491EQjeUo3qTKcmV8YSDDJrOepfG8pcC7h/QgnQHYSv0mJ3Z/ZWxmatVrysg==}
    engines: {node: '>= 0.4'}

  is-fullwidth-code-point@3.0.0:
    resolution: {integrity: sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==}
    engines: {node: '>=8'}

  is-generator-function@1.1.0:
    resolution: {integrity: sha512-nPUB5km40q9e8UfN/Zc24eLlzdSf9OfKByBw9CIdw4H1giPMeA0OIJvbchsCu4npfI2QcMVBsGEBHKZ7wLTWmQ==}
    engines: {node: '>= 0.4'}

  is-glob@4.0.3:
    resolution: {integrity: sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==}
    engines: {node: '>=0.10.0'}

  is-map@2.0.3:
    resolution: {integrity: sha512-1Qed0/Hr2m+YqxnM09CjA2d/i6YZNfF6R2oRAOj36eUdS6qIV/huPJNSEpKbupewFs+ZsJlxsjjPbc0/afW6Lw==}
    engines: {node: '>= 0.4'}

  is-negative-zero@2.0.3:
    resolution: {integrity: sha512-5KoIu2Ngpyek75jXodFvnafB6DJgr3u8uuK0LEZJjrU19DrMD3EVERaR8sjz8CCGgpZvxPl9SuE1GMVPFHx1mw==}
    engines: {node: '>= 0.4'}

  is-number-object@1.1.1:
    resolution: {integrity: sha512-lZhclumE1G6VYD8VHe35wFaIif+CTy5SJIi5+3y4psDgWu4wPDoBhF8NxUOinEc7pHgiTsT6MaBb92rKhhD+Xw==}
    engines: {node: '>= 0.4'}

  is-number@7.0.0:
    resolution: {integrity: sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==}
    engines: {node: '>=0.12.0'}

  is-regex@1.2.1:
    resolution: {integrity: sha512-MjYsKHO5O7mCsmRGxWcLWheFqN9DJ/2TmngvjKXihe6efViPqc274+Fx/4fYj/r03+ESvBdTXK0V6tA3rgez1g==}
    engines: {node: '>= 0.4'}

  is-set@2.0.3:
    resolution: {integrity: sha512-iPAjerrse27/ygGLxw+EBR9agv9Y6uLeYVJMu+QNCoouJ1/1ri0mGrcWpfCqFZuzzx3WjtwxG098X+n4OuRkPg==}
    engines: {node: '>= 0.4'}

  is-shared-array-buffer@1.0.4:
    resolution: {integrity: sha512-ISWac8drv4ZGfwKl5slpHG9OwPNty4jOWPRIhBpxOoD+hqITiwuipOQ2bNthAzwA3B4fIjO4Nln74N0S9byq8A==}
    engines: {node: '>= 0.4'}

  is-string@1.1.1:
    resolution: {integrity: sha512-BtEeSsoaQjlSPBemMQIrY1MY0uM6vnS1g5fmufYOtnxLGUZM2178PKbhsk7Ffv58IX+ZtcvoGwccYsh0PglkAA==}
    engines: {node: '>= 0.4'}

  is-symbol@1.1.1:
    resolution: {integrity: sha512-9gGx6GTtCQM73BgmHQXfDmLtfjjTUDSyoxTCbp5WtoixAhfgsDirWIcVQ/IHpvI5Vgd5i/J5F7B9cN/WlVbC/w==}
    engines: {node: '>= 0.4'}

  is-typed-array@1.1.15:
    resolution: {integrity: sha512-p3EcsicXjit7SaskXHs1hA91QxgTw46Fv6EFKKGS5DRFLD8yKnohjF3hxoju94b/OcMZoQukzpPpBE9uLVKzgQ==}
    engines: {node: '>= 0.4'}

  is-weakmap@2.0.2:
    resolution: {integrity: sha512-K5pXYOm9wqY1RgjpL3YTkF39tni1XajUIkawTLUo9EZEVUFga5gSQJF8nNS7ZwJQ02y+1YCNYcMh+HIf1ZqE+w==}
    engines: {node: '>= 0.4'}

  is-weakref@1.1.1:
    resolution: {integrity: sha512-6i9mGWSlqzNMEqpCp93KwRS1uUOodk2OJ6b+sq7ZPDSy2WuI5NFIxp/254TytR8ftefexkWn5xNiHUNpPOfSew==}
    engines: {node: '>= 0.4'}

  is-weakset@2.0.4:
    resolution: {integrity: sha512-mfcwb6IzQyOKTs84CQMrOwW4gQcaTOAWJ0zzJCl2WSPDrWk/OzDaImWFH3djXhb24g4eudZfLRozAvPGw4d9hQ==}
    engines: {node: '>= 0.4'}

  isarray@2.0.5:
    resolution: {integrity: sha512-xHjhDr3cNBK0BzdUJSPXZntQUx/mwMS5Rw4A7lPJ90XGAO6ISP/ePDNuo0vhqOZU+UD5JoodwCAAoZQd3FeAKw==}

  isexe@2.0.0:
    resolution: {integrity: sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==}

  isows@1.0.7:
    resolution: {integrity: sha512-I1fSfDCZL5P0v33sVqeTDSpcstAg/N+wF5HS033mogOVIp4B+oHC7oOCsA3axAbBSGTJ8QubbNmnIRN/h8U7hg==}
    peerDependencies:
      ws: '*'

  iterator.prototype@1.1.5:
    resolution: {integrity: sha512-H0dkQoCa3b2VEeKQBOxFph+JAbcrQdE7KC0UkqwpLmv2EC4P41QXP+rqo9wYodACiG5/WM5s9oDApTU8utwj9g==}
    engines: {node: '>= 0.4'}

  jackspeak@3.4.3:
    resolution: {integrity: sha512-OGlZQpz2yfahA/Rd1Y8Cd9SIEsqvXkLVoSw/cgwhnhFMDbsQFeZYoJJ7bIZBS9BcamUW96asq/npPWugM+RQBw==}

  jiti@1.21.7:
    resolution: {integrity: sha512-/imKNG4EbWNrVjoNC/1H5/9GFy+tqjGBHCaSsN+P2RnPqjsLmv6UD3Ej+Kj8nBWaRAwyk7kK5ZUc+OEatnTR3A==}
    hasBin: true

  js-tokens@4.0.0:
    resolution: {integrity: sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==}

  js-yaml@4.1.0:
    resolution: {integrity: sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==}
    hasBin: true

  json-buffer@3.0.1:
    resolution: {integrity: sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==}

  json-schema-traverse@0.4.1:
    resolution: {integrity: sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==}

  json-stable-stringify-without-jsonify@1.0.1:
    resolution: {integrity: sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==}

  json5@1.0.2:
    resolution: {integrity: sha512-g1MWMLBiz8FKi1e4w0UyVL3w+iJceWAFBAaBnnGKOpNa5f8TLktkbre1+s6oICydWAm+HRUGTmI+//xv2hvXYA==}
    hasBin: true

  jsx-ast-utils@3.3.5:
    resolution: {integrity: sha512-ZZow9HBI5O6EPgSJLUb8n2NKgmVWTwCvHGwFuJlMjvLFqlGG6pjirPhtdsseaLZjSibD8eegzmYpUZwoIlj2cQ==}
    engines: {node: '>=4.0'}

  keyv@4.5.4:
    resolution: {integrity: sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==}

  language-subtag-registry@0.3.23:
    resolution: {integrity: sha512-0K65Lea881pHotoGEa5gDlMxt3pctLi2RplBb7Ezh4rRdLEOtgi7n4EwK9lamnUCkKBqaeKRVebTq6BAxSkpXQ==}

  language-tags@1.0.9:
    resolution: {integrity: sha512-MbjN408fEndfiQXbFQ1vnd+1NoLDsnQW41410oQBXiyXDMYH5z505juWa4KUE1LqxRC7DgOgZDbKLxHIwm27hA==}
    engines: {node: '>=0.10'}

  levn@0.4.1:
    resolution: {integrity: sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==}
    engines: {node: '>= 0.8.0'}

  lilconfig@3.1.3:
    resolution: {integrity: sha512-/vlFKAoH5Cgt3Ie+JLhRbwOsCQePABiU3tJ1egGvyQ+33R/vcwM2Zl2QR/LzjsBeItPt3oSVXapn+m4nQDvpzw==}
    engines: {node: '>=14'}

  lines-and-columns@1.2.4:
    resolution: {integrity: sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==}

  locate-path@6.0.0:
    resolution: {integrity: sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==}
    engines: {node: '>=10'}

  lodash.merge@4.6.2:
    resolution: {integrity: sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==}

  loose-envify@1.4.0:
    resolution: {integrity: sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==}
    hasBin: true

  lru-cache@10.4.3:
    resolution: {integrity: sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==}

  lucide-react@0.511.0:
    resolution: {integrity: sha512-VK5a2ydJ7xm8GvBeKLS9mu1pVK6ucef9780JVUjw6bAjJL/QXnd4Y0p7SPeOUMC27YhzNCZvm5d/QX0Tp3rc0w==}
    peerDependencies:
      react: ^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0

  math-intrinsics@1.1.0:
    resolution: {integrity: sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==}
    engines: {node: '>= 0.4'}

  merge2@1.4.1:
    resolution: {integrity: sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==}
    engines: {node: '>= 8'}

  micromatch@4.0.8:
    resolution: {integrity: sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==}
    engines: {node: '>=8.6'}

  minimatch@3.1.2:
    resolution: {integrity: sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==}

  minimatch@9.0.5:
    resolution: {integrity: sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==}
    engines: {node: '>=16 || 14 >=14.17'}

  minimist@1.2.8:
    resolution: {integrity: sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==}

  minipass@7.1.2:
    resolution: {integrity: sha512-qOOzS1cBTWYF4BH8fVePDBOO9iptMnGUEZwNc/cMWnTV2nVLZ7VoNWEPHkYczZA0pdoA7dl6e7FL659nX9S2aw==}
    engines: {node: '>=16 || 14 >=14.17'}

  ms@2.1.3:
    resolution: {integrity: sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==}

  mz@2.7.0:
    resolution: {integrity: sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==}

  nanoid@3.3.11:
    resolution: {integrity: sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==}
    engines: {node: ^10 || ^12 || ^13.7 || ^14 || >=15.0.1}
    hasBin: true

  napi-postinstall@0.3.2:
    resolution: {integrity: sha512-tWVJxJHmBWLy69PvO96TZMZDrzmw5KeiZBz3RHmiM2XZ9grBJ2WgMAFVVg25nqp3ZjTFUs2Ftw1JhscL3Teliw==}
    engines: {node: ^12.20.0 || ^14.18.0 || >=16.0.0}
    hasBin: true

  natural-compare@1.4.0:
    resolution: {integrity: sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==}

  next-themes@0.4.6:
    resolution: {integrity: sha512-pZvgD5L0IEvX5/9GWyHMf3m8BKiVQwsCMHfoFosXtXBMnaS0ZnIJ9ST4b4NqLVKDEm8QBxoNNGNaBv2JNF6XNA==}
    peerDependencies:
      react: ^16.8 || ^17 || ^18 || ^19 || ^19.0.0-rc
      react-dom: ^16.8 || ^17 || ^18 || ^19 || ^19.0.0-rc

  next@15.4.5:
    resolution: {integrity: sha512-nJ4v+IO9CPmbmcvsPebIoX3Q+S7f6Fu08/dEWu0Ttfa+wVwQRh9epcmsyCPjmL2b8MxC+CkBR97jgDhUUztI3g==}
    engines: {node: ^18.18.0 || ^19.8.0 || >= 20.0.0}
    hasBin: true
    peerDependencies:
      '@opentelemetry/api': ^1.1.0
      '@playwright/test': ^1.51.1
      babel-plugin-react-compiler: '*'
      react: ^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0
      react-dom: ^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0
      sass: ^1.3.0
    peerDependenciesMeta:
      '@opentelemetry/api':
        optional: true
      '@playwright/test':
        optional: true
      babel-plugin-react-compiler:
        optional: true
      sass:
        optional: true

  node-releases@2.0.19:
    resolution: {integrity: sha512-xxOWJsBKtzAq7DY0J+DTzuz58K8e7sJbdgwkbMWQe8UYB6ekmsQ45q0M/tJDsGaZmbC+l7n57UV8Hl5tHxO9uw==}

  normalize-path@3.0.0:
    resolution: {integrity: sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==}
    engines: {node: '>=0.10.0'}

  normalize-range@0.1.2:
    resolution: {integrity: sha512-bdok/XvKII3nUpklnV6P2hxtMNrCboOjAcyBuQnWEhO665FwrSNRxU+AqpsyvO6LgGYPspN+lu5CLtw4jPRKNA==}
    engines: {node: '>=0.10.0'}

  object-assign@4.1.1:
    resolution: {integrity: sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==}
    engines: {node: '>=0.10.0'}

  object-hash@3.0.0:
    resolution: {integrity: sha512-RSn9F68PjH9HqtltsSnqYC1XXoWe9Bju5+213R98cNGttag9q9yAOTzdbsqvIa7aNm5WffBZFpWYr2aWrklWAw==}
    engines: {node: '>= 6'}

  object-inspect@1.13.4:
    resolution: {integrity: sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==}
    engines: {node: '>= 0.4'}

  object-keys@1.1.1:
    resolution: {integrity: sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==}
    engines: {node: '>= 0.4'}

  object.assign@4.1.7:
    resolution: {integrity: sha512-nK28WOo+QIjBkDduTINE4JkF/UJJKyf2EJxvJKfblDpyg0Q+pkOHNTL0Qwy6NP6FhE/EnzV73BxxqcJaXY9anw==}
    engines: {node: '>= 0.4'}

  object.entries@1.1.9:
    resolution: {integrity: sha512-8u/hfXFRBD1O0hPUjioLhoWFHRmt6tKA4/vZPyckBr18l1KE9uHrFaFaUi8MDRTpi4uak2goyPTSNJLXX2k2Hw==}
    engines: {node: '>= 0.4'}

  object.fromentries@2.0.8:
    resolution: {integrity: sha512-k6E21FzySsSK5a21KRADBd/NGneRegFO5pLHfdQLpRDETUNJueLXs3WCzyQ3tFRDYgbq3KHGXfTbi2bs8WQ6rQ==}
    engines: {node: '>= 0.4'}

  object.groupby@1.0.3:
    resolution: {integrity: sha512-+Lhy3TQTuzXI5hevh8sBGqbmurHbbIjAi0Z4S63nthVLmLxfbj4T54a4CfZrXIrt9iP4mVAPYMo/v99taj3wjQ==}
    engines: {node: '>= 0.4'}

  object.values@1.2.1:
    resolution: {integrity: sha512-gXah6aZrcUxjWg2zR2MwouP2eHlCBzdV4pygudehaKXSGW4v2AsRQUK+lwwXhii6KFZcunEnmSUoYp5CXibxtA==}
    engines: {node: '>= 0.4'}

  optionator@0.9.4:
    resolution: {integrity: sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==}
    engines: {node: '>= 0.8.0'}

  own-keys@1.0.1:
    resolution: {integrity: sha512-qFOyK5PjiWZd+QQIh+1jhdb9LpxTF0qs7Pm8o5QHYZ0M3vKqSqzsZaEB6oWlxZ+q2sJBMI/Ktgd2N5ZwQoRHfg==}
    engines: {node: '>= 0.4'}

  p-limit@3.1.0:
    resolution: {integrity: sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==}
    engines: {node: '>=10'}

  p-locate@5.0.0:
    resolution: {integrity: sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==}
    engines: {node: '>=10'}

  package-json-from-dist@1.0.1:
    resolution: {integrity: sha512-UEZIS3/by4OC8vL3P2dTXRETpebLI2NiI5vIrjaD/5UtrkFX/tNbwjTSRAGC/+7CAo2pIcBaRgWmcBBHcsaCIw==}

  parent-module@1.0.1:
    resolution: {integrity: sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==}
    engines: {node: '>=6'}

  path-exists@4.0.0:
    resolution: {integrity: sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==}
    engines: {node: '>=8'}

  path-key@3.1.1:
    resolution: {integrity: sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==}
    engines: {node: '>=8'}

  path-parse@1.0.7:
    resolution: {integrity: sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==}

  path-scurry@1.11.1:
    resolution: {integrity: sha512-Xa4Nw17FS9ApQFJ9umLiJS4orGjm7ZzwUrwamcGQuHSzDyth9boKDaycYdDcZDuqYATXw4HFXgaqWTctW/v1HA==}
    engines: {node: '>=16 || 14 >=14.18'}

  picocolors@1.1.1:
    resolution: {integrity: sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==}

  picomatch@2.3.1:
    resolution: {integrity: sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==}
    engines: {node: '>=8.6'}

  picomatch@4.0.3:
    resolution: {integrity: sha512-5gTmgEY/sqK6gFXLIsQNH19lWb4ebPDLA4SdLP7dsWkIXHWlG66oPuVvXSGFPppYZz8ZDZq0dYYrbHfBCVUb1Q==}
    engines: {node: '>=12'}

  pify@2.3.0:
    resolution: {integrity: sha512-udgsAY+fTnvv7kI7aaxbqwWNb0AHiB0qBO89PZKPkoTmGOgdbrHDKD+0B2X4uTfJ/FT1R09r9gTsjUjNJotuog==}
    engines: {node: '>=0.10.0'}

  pirates@4.0.7:
    resolution: {integrity: sha512-TfySrs/5nm8fQJDcBDuUng3VOUKsd7S+zqvbOTiGXHfxX4wK31ard+hoNuvkicM/2YFzlpDgABOevKSsB4G/FA==}
    engines: {node: '>= 6'}

  possible-typed-array-names@1.1.0:
    resolution: {integrity: sha512-/+5VFTchJDoVj3bhoqi6UeymcD00DAwb1nJwamzPvHEszJ4FpF6SNNbUbOS8yI56qHzdV8eK0qEfOSiodkTdxg==}
    engines: {node: '>= 0.4'}

  postcss-import@15.1.0:
    resolution: {integrity: sha512-hpr+J05B2FVYUAXHeK1YyI267J/dDDhMU6B6civm8hSY1jYJnBXxzKDKDswzJmtLHryrjhnDjqqp/49t8FALew==}
    engines: {node: '>=14.0.0'}
    peerDependencies:
      postcss: ^8.0.0

  postcss-js@4.0.1:
    resolution: {integrity: sha512-dDLF8pEO191hJMtlHFPRa8xsizHaM82MLfNkUHdUtVEV3tgTp5oj+8qbEqYM57SLfc74KSbw//4SeJma2LRVIw==}
    engines: {node: ^12 || ^14 || >= 16}
    peerDependencies:
      postcss: ^8.4.21

  postcss-load-config@4.0.2:
    resolution: {integrity: sha512-bSVhyJGL00wMVoPUzAVAnbEoWyqRxkjv64tUl427SKnPrENtq6hJwUojroMz2VB+Q1edmi4IfrAPpami5VVgMQ==}
    engines: {node: '>= 14'}
    peerDependencies:
      postcss: '>=8.0.9'
      ts-node: '>=9.0.0'
    peerDependenciesMeta:
      postcss:
        optional: true
      ts-node:
        optional: true

  postcss-nested@6.2.0:
    resolution: {integrity: sha512-HQbt28KulC5AJzG+cZtj9kvKB93CFCdLvog1WFLf1D+xmMvPGlBstkpTEZfK5+AN9hfJocyBFCNiqyS48bpgzQ==}
    engines: {node: '>=12.0'}
    peerDependencies:
      postcss: ^8.2.14

  postcss-selector-parser@6.1.2:
    resolution: {integrity: sha512-Q8qQfPiZ+THO/3ZrOrO0cJJKfpYCagtMUkXbnEfmgUjwXg6z/WBeOyS9APBBPCTSiDV+s4SwQGu8yFsiMRIudg==}
    engines: {node: '>=4'}

  postcss-value-parser@4.2.0:
    resolution: {integrity: sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==}

  postcss@8.4.31:
    resolution: {integrity: sha512-PS08Iboia9mts/2ygV3eLpY5ghnUcfLV/EXTOW1E2qYxJKGGBUtNjN76FYHnMs36RmARn41bC0AZmn+rR0OVpQ==}
    engines: {node: ^10 || ^12 || >=14}

  postcss@8.5.6:
    resolution: {integrity: sha512-3Ybi1tAuwAP9s0r1UQ2J4n5Y0G05bJkpUIO0/bI9MhwmD70S5aTWbXGBwxHrelT+XM1k6dM0pk+SwNkpTRN7Pg==}
    engines: {node: ^10 || ^12 || >=14}

  prelude-ls@1.2.1:
    resolution: {integrity: sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==}
    engines: {node: '>= 0.8.0'}

  prop-types@15.8.1:
    resolution: {integrity: sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==}

  punycode@2.3.1:
    resolution: {integrity: sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==}
    engines: {node: '>=6'}

  queue-microtask@1.2.3:
    resolution: {integrity: sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==}

  react-dom@19.1.1:
    resolution: {integrity: sha512-Dlq/5LAZgF0Gaz6yiqZCf6VCcZs1ghAJyrsu84Q/GT0gV+mCxbfmKNoGRKBYMJ8IEdGPqu49YWXD02GCknEDkw==}
    peerDependencies:
      react: ^19.1.1

  react-is@16.13.1:
    resolution: {integrity: sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ==}

  react-remove-scroll-bar@2.3.8:
    resolution: {integrity: sha512-9r+yi9+mgU33AKcj6IbT9oRCO78WriSj6t/cF8DWBZJ9aOGPOTEDvdUDz1FwKim7QXWwmHqtdHnRJfhAxEG46Q==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0
    peerDependenciesMeta:
      '@types/react':
        optional: true

  react-remove-scroll@2.7.1:
    resolution: {integrity: sha512-HpMh8+oahmIdOuS5aFKKY6Pyog+FNaZV/XyJOq7b4YFwsFHe5yYfdbIalI4k3vU2nSDql7YskmUseHsRrJqIPA==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  react-style-singleton@2.2.3:
    resolution: {integrity: sha512-b6jSvxvVnyptAiLjbkWLE/lOnR4lfTtDAl+eUC7RZy+QQWc6wRzIV2CE6xBuMmDxc2qIihtDCZD5NPOFl7fRBQ==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  react@19.1.1:
    resolution: {integrity: sha512-w8nqGImo45dmMIfljjMwOGtbmC/mk4CMYhWIicdSflH91J9TyCyczcPFXJzrZ/ZXcgGRFeP6BU0BEJTw6tZdfQ==}
    engines: {node: '>=0.10.0'}

  read-cache@1.0.0:
    resolution: {integrity: sha512-Owdv/Ft7IjOgm/i0xvNDZ1LrRANRfew4b2prF3OWMQLxLfu3bS8FVhCsrSCMK4lR56Y9ya+AThoTpDCTxCmpRA==}

  readdirp@3.6.0:
    resolution: {integrity: sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==}
    engines: {node: '>=8.10.0'}

  reflect.getprototypeof@1.0.10:
    resolution: {integrity: sha512-00o4I+DVrefhv+nX0ulyi3biSHCPDe+yLv5o/p6d/UVlirijB8E16FtfwSAi4g3tcqrQ4lRAqQSoFEZJehYEcw==}
    engines: {node: '>= 0.4'}

  regexp.prototype.flags@1.5.4:
    resolution: {integrity: sha512-dYqgNSZbDwkaJ2ceRd9ojCGjBq+mOm9LmtXnAnEGyHhN/5R7iDW2TRw3h+o/jCFxus3P2LfWIIiwowAjANm7IA==}
    engines: {node: '>= 0.4'}

  resolve-from@4.0.0:
    resolution: {integrity: sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==}
    engines: {node: '>=4'}

  resolve-pkg-maps@1.0.0:
    resolution: {integrity: sha512-seS2Tj26TBVOC2NIc2rOe2y2ZO7efxITtLZcGSOnHHNOQ7CkiUBfw0Iw2ck6xkIhPwLhKNLS8BO+hEpngQlqzw==}

  resolve@1.22.10:
    resolution: {integrity: sha512-NPRy+/ncIMeDlTAsuqwKIiferiawhefFJtkNSW0qZJEqMEb+qBt/77B/jGeeek+F0uOeN05CDa6HXbbIgtVX4w==}
    engines: {node: '>= 0.4'}
    hasBin: true

  resolve@2.0.0-next.5:
    resolution: {integrity: sha512-U7WjGVG9sH8tvjW5SmGbQuui75FiyjAX72HX15DwBBwF9dNiQZRQAg9nnPhYy+TUnE0+VcrttuvNI8oSxZcocA==}
    hasBin: true

  reusify@1.1.0:
    resolution: {integrity: sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==}
    engines: {iojs: '>=1.0.0', node: '>=0.10.0'}

  run-parallel@1.2.0:
    resolution: {integrity: sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==}

  safe-array-concat@1.1.3:
    resolution: {integrity: sha512-AURm5f0jYEOydBj7VQlVvDrjeFgthDdEF5H1dP+6mNpoXOMo1quQqJ4wvJDyRZ9+pO3kGWoOdmV08cSv2aJV6Q==}
    engines: {node: '>=0.4'}

  safe-push-apply@1.0.0:
    resolution: {integrity: sha512-iKE9w/Z7xCzUMIZqdBsp6pEQvwuEebH4vdpjcDWnyzaI6yl6O9FHvVpmGelvEHNsoY6wGblkxR6Zty/h00WiSA==}
    engines: {node: '>= 0.4'}

  safe-regex-test@1.1.0:
    resolution: {integrity: sha512-x/+Cz4YrimQxQccJf5mKEbIa1NzeCRNI5Ecl/ekmlYaampdNLPalVyIcCZNNH3MvmqBugV5TMYZXv0ljslUlaw==}
    engines: {node: '>= 0.4'}

  scheduler@0.26.0:
    resolution: {integrity: sha512-NlHwttCI/l5gCPR3D1nNXtWABUmBwvZpEQiD4IXSbIDq8BzLIK/7Ir5gTFSGZDUu37K5cMNp0hFtzO38sC7gWA==}

  semver@6.3.1:
    resolution: {integrity: sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==}
    hasBin: true

  semver@7.7.2:
    resolution: {integrity: sha512-RF0Fw+rO5AMf9MAyaRXI4AV0Ulj5lMHqVxxdSgiVbixSCXoEmmX/jk0CuJw4+3SqroYO9VoUh+HcuJivvtJemA==}
    engines: {node: '>=10'}
    hasBin: true

  set-function-length@1.2.2:
    resolution: {integrity: sha512-pgRc4hJ4/sNjWCSS9AmnS40x3bNMDTknHgL5UaMBTMyJnU90EgWh1Rz+MC9eFu4BuN/UwZjKQuY/1v3rM7HMfg==}
    engines: {node: '>= 0.4'}

  set-function-name@2.0.2:
    resolution: {integrity: sha512-7PGFlmtwsEADb0WYyvCMa1t+yke6daIG4Wirafur5kcf+MhUnPms1UeR0CKQdTZD81yESwMHbtn+TR+dMviakQ==}
    engines: {node: '>= 0.4'}

  set-proto@1.0.0:
    resolution: {integrity: sha512-RJRdvCo6IAnPdsvP/7m6bsQqNnn1FCBX5ZNtFL98MmFF/4xAIJTIg1YbHW5DC2W5SKZanrC6i4HsJqlajw/dZw==}
    engines: {node: '>= 0.4'}

  sharp@0.34.3:
    resolution: {integrity: sha512-eX2IQ6nFohW4DbvHIOLRB3MHFpYqaqvXd3Tp5e/T/dSH83fxaNJQRvDMhASmkNTsNTVF2/OOopzRCt7xokgPfg==}
    engines: {node: ^18.17.0 || ^20.3.0 || >=21.0.0}

  shebang-command@2.0.0:
    resolution: {integrity: sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==}
    engines: {node: '>=8'}

  shebang-regex@3.0.0:
    resolution: {integrity: sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==}
    engines: {node: '>=8'}

  side-channel-list@1.0.0:
    resolution: {integrity: sha512-FCLHtRD/gnpCiCHEiJLOwdmFP+wzCmDEkc9y7NsYxeF4u7Btsn1ZuwgwJGxImImHicJArLP4R0yX4c2KCrMrTA==}
    engines: {node: '>= 0.4'}

  side-channel-map@1.0.1:
    resolution: {integrity: sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==}
    engines: {node: '>= 0.4'}

  side-channel-weakmap@1.0.2:
    resolution: {integrity: sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==}
    engines: {node: '>= 0.4'}

  side-channel@1.1.0:
    resolution: {integrity: sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==}
    engines: {node: '>= 0.4'}

  signal-exit@4.1.0:
    resolution: {integrity: sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==}
    engines: {node: '>=14'}

  simple-swizzle@0.2.2:
    resolution: {integrity: sha512-JA//kQgZtbuY83m+xT+tXJkmJncGMTFT+C+g2h2R9uxkYIrE2yy9sgmcLhCnw57/WSD+Eh3J97FPEDFnbXnDUg==}

  source-map-js@1.2.1:
    resolution: {integrity: sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==}
    engines: {node: '>=0.10.0'}

  stable-hash@0.0.5:
    resolution: {integrity: sha512-+L3ccpzibovGXFK+Ap/f8LOS0ahMrHTf3xu7mMLSpEGU0EO9ucaysSylKo9eRDFNhWve/y275iPmIZ4z39a9iA==}

  stop-iteration-iterator@1.1.0:
    resolution: {integrity: sha512-eLoXW/DHyl62zxY4SCaIgnRhuMr6ri4juEYARS8E6sCEqzKpOiE521Ucofdx+KnDZl5xmvGYaaKCk5FEOxJCoQ==}
    engines: {node: '>= 0.4'}

  string-width@4.2.3:
    resolution: {integrity: sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==}
    engines: {node: '>=8'}

  string-width@5.1.2:
    resolution: {integrity: sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==}
    engines: {node: '>=12'}

  string.prototype.includes@2.0.1:
    resolution: {integrity: sha512-o7+c9bW6zpAdJHTtujeePODAhkuicdAryFsfVKwA+wGw89wJ4GTY484WTucM9hLtDEOpOvI+aHnzqnC5lHp4Rg==}
    engines: {node: '>= 0.4'}

  string.prototype.matchall@4.0.12:
    resolution: {integrity: sha512-6CC9uyBL+/48dYizRf7H7VAYCMCNTBeM78x/VTUe9bFEaxBepPJDa1Ow99LqI/1yF7kuy7Q3cQsYMrcjGUcskA==}
    engines: {node: '>= 0.4'}

  string.prototype.repeat@1.0.0:
    resolution: {integrity: sha512-0u/TldDbKD8bFCQ/4f5+mNRrXwZ8hg2w7ZR8wa16e8z9XpePWl3eGEcUD0OXpEH/VJH/2G3gjUtR3ZOiBe2S/w==}

  string.prototype.trim@1.2.10:
    resolution: {integrity: sha512-Rs66F0P/1kedk5lyYyH9uBzuiI/kNRmwJAR9quK6VOtIpZ2G+hMZd+HQbbv25MgCA6gEffoMZYxlTod4WcdrKA==}
    engines: {node: '>= 0.4'}

  string.prototype.trimend@1.0.9:
    resolution: {integrity: sha512-G7Ok5C6E/j4SGfyLCloXTrngQIQU3PWtXGst3yM7Bea9FRURf1S42ZHlZZtsNque2FN2PoUhfZXYLNWwEr4dLQ==}
    engines: {node: '>= 0.4'}

  string.prototype.trimstart@1.0.8:
    resolution: {integrity: sha512-UXSH262CSZY1tfu3G3Secr6uGLCFVPMhIqHjlgCUtCCcgihYc/xKs9djMTMUOb2j1mVSeU8EU6NWc/iQKU6Gfg==}
    engines: {node: '>= 0.4'}

  strip-ansi@6.0.1:
    resolution: {integrity: sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==}
    engines: {node: '>=8'}

  strip-ansi@7.1.0:
    resolution: {integrity: sha512-iq6eVVI64nQQTRYq2KtEg2d2uU7LElhTJwsH4YzIHZshxlgZms/wIc4VoDQTlG/IvVIrBKG06CrZnp0qv7hkcQ==}
    engines: {node: '>=12'}

  strip-bom@3.0.0:
    resolution: {integrity: sha512-vavAMRXOgBVNF6nyEEmL3DBK19iRpDcoIwW+swQ+CbGiu7lju6t+JklA1MHweoWtadgt4ISVUsXLyDq34ddcwA==}
    engines: {node: '>=4'}

  strip-json-comments@3.1.1:
    resolution: {integrity: sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==}
    engines: {node: '>=8'}

  styled-jsx@5.1.6:
    resolution: {integrity: sha512-qSVyDTeMotdvQYoHWLNGwRFJHC+i+ZvdBRYosOFgC+Wg1vx4frN2/RG/NA7SYqqvKNLf39P2LSRA2pu6n0XYZA==}
    engines: {node: '>= 12.0.0'}
    peerDependencies:
      '@babel/core': '*'
      babel-plugin-macros: '*'
      react: '>= 16.8.0 || 17.x.x || ^18.0.0-0 || ^19.0.0-0'
    peerDependenciesMeta:
      '@babel/core':
        optional: true
      babel-plugin-macros:
        optional: true

  sucrase@3.35.0:
    resolution: {integrity: sha512-8EbVDiu9iN/nESwxeSxDKe0dunta1GOlHufmSSXxMD2z2/tMZpDMpvXQGsc+ajGo8y2uYUmixaSRUc/QPoQ0GA==}
    engines: {node: '>=16 || 14 >=14.17'}
    hasBin: true

  supports-color@7.2.0:
    resolution: {integrity: sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==}
    engines: {node: '>=8'}

  supports-preserve-symlinks-flag@1.0.0:
    resolution: {integrity: sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==}
    engines: {node: '>= 0.4'}

  tailwind-merge@3.3.1:
    resolution: {integrity: sha512-gBXpgUm/3rp1lMZZrM/w7D8GKqshif0zAymAhbCyIt8KMe+0v9DQ7cdYLR4FHH/cKpdTXb+A/tKKU3eolfsI+g==}

  tailwindcss-animate@1.0.7:
    resolution: {integrity: sha512-bl6mpH3T7I3UFxuvDEXLxy/VuFxBk5bbzplh7tXI68mwMokNYd1t9qPBHlnyTwfa4JGC4zP516I1hYYtQ/vspA==}
    peerDependencies:
      tailwindcss: '>=3.0.0 || insiders'

  tailwindcss@3.4.17:
    resolution: {integrity: sha512-w33E2aCvSDP0tW9RZuNXadXlkHXqFzSkQew/aIa2i/Sj8fThxwovwlXHSPXTbAHwEIhBFXAedUhP2tueAKP8Og==}
    engines: {node: '>=14.0.0'}
    hasBin: true

  thenify-all@1.6.0:
    resolution: {integrity: sha512-RNxQH/qI8/t3thXJDwcstUO4zeqo64+Uy/+sNVRBx4Xn2OX+OZ9oP+iJnNFqplFra2ZUVeKCSa2oVWi3T4uVmA==}
    engines: {node: '>=0.8'}

  thenify@3.3.1:
    resolution: {integrity: sha512-RVZSIV5IG10Hk3enotrhvz0T9em6cyHBLkH/YAZuKqd8hRkKhSfCGIcP2KUY0EPxndzANBmNllzWPwak+bheSw==}

  tinyglobby@0.2.14:
    resolution: {integrity: sha512-tX5e7OM1HnYr2+a2C/4V0htOcSQcoSTH9KgJnVvNm5zm/cyEWKJ7j7YutsH9CxMdtOkkLFy2AHrMci9IM8IPZQ==}
    engines: {node: '>=12.0.0'}

  to-regex-range@5.0.1:
    resolution: {integrity: sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==}
    engines: {node: '>=8.0'}

  tr46@0.0.3:
    resolution: {integrity: sha512-N3WMsuqV66lT30CrXNbEjx4GEwlow3v6rr4mCcv6prnfwhS01rkgyFdjPNBYd9br7LpXV1+Emh01fHnq2Gdgrw==}

  ts-api-utils@2.1.0:
    resolution: {integrity: sha512-CUgTZL1irw8u29bzrOD/nH85jqyc74D6SshFgujOIA7osm2Rz7dYH77agkx7H4FBNxDq7Cjf+IjaX/8zwFW+ZQ==}
    engines: {node: '>=18.12'}
    peerDependencies:
      typescript: '>=4.8.4'

  ts-interface-checker@0.1.13:
    resolution: {integrity: sha512-Y/arvbn+rrz3JCKl9C4kVNfTfSm2/mEp5FSz5EsZSANGPSlQrpRI5M4PKF+mJnE52jOO90PnPSc3Ur3bTQw0gA==}

  tsconfig-paths@3.15.0:
    resolution: {integrity: sha512-2Ac2RgzDe/cn48GvOe3M+o82pEFewD3UPbyoUHHdKasHwJKjds4fLXWf/Ux5kATBKN20oaFGu+jbElp1pos0mg==}

  tslib@2.8.1:
    resolution: {integrity: sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==}

  type-check@0.4.0:
    resolution: {integrity: sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==}
    engines: {node: '>= 0.8.0'}

  typed-array-buffer@1.0.3:
    resolution: {integrity: sha512-nAYYwfY3qnzX30IkA6AQZjVbtK6duGontcQm1WSG1MD94YLqK0515GNApXkoxKOWMusVssAHWLh9SeaoefYFGw==}
    engines: {node: '>= 0.4'}

  typed-array-byte-length@1.0.3:
    resolution: {integrity: sha512-BaXgOuIxz8n8pIq3e7Atg/7s+DpiYrxn4vdot3w9KbnBhcRQq6o3xemQdIfynqSeXeDrF32x+WvfzmOjPiY9lg==}
    engines: {node: '>= 0.4'}

  typed-array-byte-offset@1.0.4:
    resolution: {integrity: sha512-bTlAFB/FBYMcuX81gbL4OcpH5PmlFHqlCCpAl8AlEzMz5k53oNDvN8p1PNOWLEmI2x4orp3raOFB51tv9X+MFQ==}
    engines: {node: '>= 0.4'}

  typed-array-length@1.0.7:
    resolution: {integrity: sha512-3KS2b+kL7fsuk/eJZ7EQdnEmQoaho/r6KUef7hxvltNA5DR8NAUM+8wJMbJyZ4G9/7i3v5zPBIMN5aybAh2/Jg==}
    engines: {node: '>= 0.4'}

  typescript@5.8.3:
    resolution: {integrity: sha512-p1diW6TqL9L07nNxvRMM7hMMw4c5XOo/1ibL4aAIGmSAt9slTE1Xgw5KWuof2uTOvCg9BY7ZRi+GaF+7sfgPeQ==}
    engines: {node: '>=14.17'}
    hasBin: true

  unbox-primitive@1.1.0:
    resolution: {integrity: sha512-nWJ91DjeOkej/TA8pXQ3myruKpKEYgqvpw9lz4OPHj/NWFNluYrjbz9j01CJ8yKQd2g4jFoOkINCTW2I5LEEyw==}
    engines: {node: '>= 0.4'}

  undici-types@6.21.0:
    resolution: {integrity: sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==}

  unrs-resolver@1.11.1:
    resolution: {integrity: sha512-bSjt9pjaEBnNiGgc9rUiHGKv5l4/TGzDmYw3RhnkJGtLhbnnA/5qJj7x3dNDCRx/PJxu774LlH8lCOlB4hEfKg==}

  update-browserslist-db@1.1.3:
    resolution: {integrity: sha512-UxhIZQ+QInVdunkDAaiazvvT/+fXL5Osr0JZlJulepYu6Jd7qJtDZjlur0emRlT71EN3ScPoE7gvsuIKKNavKw==}
    hasBin: true
    peerDependencies:
      browserslist: '>= 4.21.0'

  uri-js@4.4.1:
    resolution: {integrity: sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==}

  use-callback-ref@1.3.3:
    resolution: {integrity: sha512-jQL3lRnocaFtu3V00JToYz/4QkNWswxijDaCVNZRiRTO3HQDLsdu1ZtmIUvV4yPp+rvWm5j0y0TG/S61cuijTg==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  use-sidecar@1.1.3:
    resolution: {integrity: sha512-Fedw0aZvkhynoPYlA5WXrMCAMm+nSWdZt6lzJQ7Ok8S6Q+VsHmHpRWndVRJ8Be0ZbkfPc5LRYH+5XrzXcEeLRQ==}
    engines: {node: '>=10'}
    peerDependencies:
      '@types/react': '*'
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0 || ^19.0.0-rc
    peerDependenciesMeta:
      '@types/react':
        optional: true

  util-deprecate@1.0.2:
    resolution: {integrity: sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==}

  webidl-conversions@3.0.1:
    resolution: {integrity: sha512-2JAn3z8AR6rjK8Sm8orRC0h/bcl/DqL7tRPdGZ4I1CjdF+EaMLmYxBHyXuKL849eucPFhvBoxMsflfOb8kxaeQ==}

  whatwg-url@5.0.0:
    resolution: {integrity: sha512-saE57nupxk6v3HY35+jzBwYa0rKSy0XR8JSxZPwgLr7ys0IBzhGviA1/TUGJLmSVqs8pb9AnvICXEuOHLprYTw==}

  which-boxed-primitive@1.1.1:
    resolution: {integrity: sha512-TbX3mj8n0odCBFVlY8AxkqcHASw3L60jIuF8jFP78az3C2YhmGvqbHBpAjTRH2/xqYunrJ9g1jSyjCjpoWzIAA==}
    engines: {node: '>= 0.4'}

  which-builtin-type@1.2.1:
    resolution: {integrity: sha512-6iBczoX+kDQ7a3+YJBnh3T+KZRxM/iYNPXicqk66/Qfm1b93iu+yOImkg0zHbj5LNOcNv1TEADiZ0xa34B4q6Q==}
    engines: {node: '>= 0.4'}

  which-collection@1.0.2:
    resolution: {integrity: sha512-K4jVyjnBdgvc86Y6BkaLZEN933SwYOuBFkdmBu9ZfkcAbdVbpITnDmjvZ/aQjRXQrv5EPkTnD1s39GiiqbngCw==}
    engines: {node: '>= 0.4'}

  which-typed-array@1.1.19:
    resolution: {integrity: sha512-rEvr90Bck4WZt9HHFC4DJMsjvu7x+r6bImz0/BrbWb7A2djJ8hnZMrWnHo9F8ssv0OMErasDhftrfROTyqSDrw==}
    engines: {node: '>= 0.4'}

  which@2.0.2:
    resolution: {integrity: sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==}
    engines: {node: '>= 8'}
    hasBin: true

  word-wrap@1.2.5:
    resolution: {integrity: sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==}
    engines: {node: '>=0.10.0'}

  wrap-ansi@7.0.0:
    resolution: {integrity: sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==}
    engines: {node: '>=10'}

  wrap-ansi@8.1.0:
    resolution: {integrity: sha512-si7QWI6zUMq56bESFvagtmzMdGOtoxfR+Sez11Mobfc7tm+VkUckk9bW2UeffTGVUbOksxmSw0AA2gs8g71NCQ==}
    engines: {node: '>=12'}

  ws@8.18.3:
    resolution: {integrity: sha512-PEIGCY5tSlUt50cqyMXfCzX+oOPqN0vuGqWzbcJ2xvnkzkq46oOpz7dQaTDBdfICb4N14+GARUDw2XV2N4tvzg==}
    engines: {node: '>=10.0.0'}
    peerDependencies:
      bufferutil: ^4.0.1
      utf-8-validate: '>=5.0.2'
    peerDependenciesMeta:
      bufferutil:
        optional: true
      utf-8-validate:
        optional: true

  yaml@2.8.0:
    resolution: {integrity: sha512-4lLa/EcQCB0cJkyts+FpIRx5G/llPxfP6VQU5KByHEhLxY3IJCH0f0Hy1MHI8sClTvsIb8qwRJ6R/ZdlDJ/leQ==}
    engines: {node: '>= 14.6'}
    hasBin: true

  yocto-queue@0.1.0:
    resolution: {integrity: sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==}
    engines: {node: '>=10'}

snapshots:

  '@alloc/quick-lru@5.2.0': {}

  '@emnapi/core@1.4.5':
    dependencies:
      '@emnapi/wasi-threads': 1.0.4
      tslib: 2.8.1
    optional: true

  '@emnapi/runtime@1.4.5':
    dependencies:
      tslib: 2.8.1
    optional: true

  '@emnapi/wasi-threads@1.0.4':
    dependencies:
      tslib: 2.8.1
    optional: true

  '@eslint-community/eslint-utils@4.7.0(eslint@9.32.0(jiti@1.21.7))':
    dependencies:
      eslint: 9.32.0(jiti@1.21.7)
      eslint-visitor-keys: 3.4.3

  '@eslint-community/regexpp@4.12.1': {}

  '@eslint/config-array@0.21.0':
    dependencies:
      '@eslint/object-schema': 2.1.6
      debug: 4.4.1
      minimatch: 3.1.2
    transitivePeerDependencies:
      - supports-color

  '@eslint/config-helpers@0.3.0': {}

  '@eslint/core@0.15.1':
    dependencies:
      '@types/json-schema': 7.0.15

  '@eslint/eslintrc@3.3.1':
    dependencies:
      ajv: 6.12.6
      debug: 4.4.1
      espree: 10.4.0
      globals: 14.0.0
      ignore: 5.3.2
      import-fresh: 3.3.1
      js-yaml: 4.1.0
      minimatch: 3.1.2
      strip-json-comments: 3.1.1
    transitivePeerDependencies:
      - supports-color

  '@eslint/js@9.32.0': {}

  '@eslint/object-schema@2.1.6': {}

  '@eslint/plugin-kit@0.3.4':
    dependencies:
      '@eslint/core': 0.15.1
      levn: 0.4.1

  '@floating-ui/core@1.7.2':
    dependencies:
      '@floating-ui/utils': 0.2.10

  '@floating-ui/dom@1.7.2':
    dependencies:
      '@floating-ui/core': 1.7.2
      '@floating-ui/utils': 0.2.10

  '@floating-ui/react-dom@2.1.4(react-dom@19.1.1(react@19.1.1))(react@19.1.1)':
    dependencies:
      '@floating-ui/dom': 1.7.2
      react: 19.1.1
      react-dom: 19.1.1(react@19.1.1)

  '@floating-ui/utils@0.2.10': {}

  '@humanfs/core@0.19.1': {}

  '@humanfs/node@0.16.6':
    dependencies:
      '@humanfs/core': 0.19.1
      '@humanwhocodes/retry': 0.3.1

  '@humanwhocodes/module-importer@1.0.1': {}

  '@humanwhocodes/retry@0.3.1': {}

  '@humanwhocodes/retry@0.4.3': {}

  '@img/sharp-darwin-arm64@0.34.3':
    optionalDependencies:
      '@img/sharp-libvips-darwin-arm64': 1.2.0
    optional: true

  '@img/sharp-darwin-x64@0.34.3':
    optionalDependencies:
      '@img/sharp-libvips-darwin-x64': 1.2.0
    optional: true

  '@img/sharp-libvips-darwin-arm64@1.2.0':
    optional: true

  '@img/sharp-libvips-darwin-x64@1.2.0':
    optional: true

  '@img/sharp-libvips-linux-arm64@1.2.0':
    optional: true

  '@img/sharp-libvips-linux-arm@1.2.0':
    optional: true

  '@img/sharp-libvips-linux-ppc64@1.2.0':
    optional: true

  '@img/sharp-libvips-linux-s390x@1.2.0':
    optional: true

  '@img/sharp-libvips-linux-x64@1.2.0':
    optional: true

  '@img/sharp-libvips-linuxmusl-arm64@1.2.0':
    optional: true

  '@img/sharp-libvips-linuxmusl-x64@1.2.0':
    optional: true

  '@img/sharp-linux-arm64@0.34.3':
    optionalDependencies:
      '@img/sharp-libvips-linux-arm64': 1.2.0
    optional: true

  '@img/sharp-linux-arm@0.34.3':
    optionalDependencies:
      '@img/sharp-libvips-linux-arm': 1.2.0
    optional: true

  '@img/sharp-linux-ppc64@0.34.3':
    optionalDependencies:
      '@img/sharp-libvips-linux-ppc64': 1.2.0
    optional: true

  '@img/sharp-linux-s390x@0.34.3':
    optionalDependencies:
      '@img/sharp-libvips-linux-s390x': 1.2.0
    optional: true

  '@img/sharp-linux-x64@0.34.3':
    optionalDependencies:
      '@img/sharp-libvips-linux-x64': 1.2.0
    optional: true

  '@img/sharp-linuxmusl-arm64@0.34.3':
    optionalDependencies:
      '@img/sharp-libvips-linuxmusl-arm64': 1.2.0
    optional: true

  '@img/sharp-linuxmusl-x64@0.34.3':
    optionalDependencies:
      '@img/sharp-libvips-linuxmusl-x64': 1.2.0
    optional: true

  '@img/sharp-wasm32@0.34.3':
    dependencies:
      '@emnapi/runtime': 1.4.5
    optional: true

  '@img/sharp-win32-arm64@0.34.3':
    optional: true

  '@img/sharp-win32-ia32@0.34.3':
    optional: true

  '@img/sharp-win32-x64@0.34.3':
    optional: true

  '@isaacs/cliui@8.0.2':
    dependencies:
      string-width: 5.1.2
      string-width-cjs: string-width@4.2.3
      strip-ansi: 7.1.0
      strip-ansi-cjs: strip-ansi@6.0.1
      wrap-ansi: 8.1.0
      wrap-ansi-cjs: wrap-ansi@7.0.0

  '@jridgewell/gen-mapping@0.3.12':
    dependencies:
      '@jridgewell/sourcemap-codec': 1.5.4
      '@jridgewell/trace-mapping': 0.3.29

  '@jridgewell/resolve-uri@3.1.2': {}

  '@jridgewell/sourcemap-codec@1.5.4': {}

  '@jridgewell/trace-mapping@0.3.29':
    dependencies:
      '@jridgewell/resolve-uri': 3.1.2
      '@jridgewell/sourcemap-codec': 1.5.4

  '@napi-rs/wasm-runtime@0.2.12':
    dependencies:
      '@emnapi/core': 1.4.5
      '@emnapi/runtime': 1.4.5
      '@tybys/wasm-util': 0.10.0
    optional: true

  '@next/env@15.4.5': {}

  '@next/eslint-plugin-next@15.3.1':
    dependencies:
      fast-glob: 3.3.1

  '@next/swc-darwin-arm64@15.4.5':
    optional: true

  '@next/swc-darwin-x64@15.4.5':
    optional: true

  '@next/swc-linux-arm64-gnu@15.4.5':
    optional: true

  '@next/swc-linux-arm64-musl@15.4.5':
    optional: true

  '@next/swc-linux-x64-gnu@15.4.5':
    optional: true

  '@next/swc-linux-x64-musl@15.4.5':
    optional: true

  '@next/swc-win32-arm64-msvc@15.4.5':
    optional: true

  '@next/swc-win32-x64-msvc@15.4.5':
    optional: true

  '@nodelib/fs.scandir@2.1.5':
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      run-parallel: 1.2.0

  '@nodelib/fs.stat@2.0.5': {}

  '@nodelib/fs.walk@1.2.8':
    dependencies:
      '@nodelib/fs.scandir': 2.1.5
      fastq: 1.19.1

  '@nolyfill/is-core-module@1.0.39': {}

  '@pkgjs/parseargs@0.11.0':
    optional: true

  '@radix-ui/number@1.1.1': {}

  '@radix-ui/primitive@1.1.2': {}

  '@radix-ui/react-arrow@1.1.7(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)':
    dependencies:
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      react: 19.1.1
      react-dom: 19.1.1(react@19.1.1)
    optionalDependencies:
      '@types/react': 19.1.9
      '@types/react-dom': 19.1.7(@types/react@19.1.9)

  '@radix-ui/react-checkbox@1.3.2(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)':
    dependencies:
      '@radix-ui/primitive': 1.1.2
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-context': 1.1.2(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-presence': 1.1.4(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@radix-ui/react-use-controllable-state': 1.2.2(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-use-previous': 1.1.1(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-use-size': 1.1.1(@types/react@19.1.9)(react@19.1.1)
      react: 19.1.1
      react-dom: 19.1.1(react@19.1.1)
    optionalDependencies:
      '@types/react': 19.1.9
      '@types/react-dom': 19.1.7(@types/react@19.1.9)

  '@radix-ui/react-collection@1.1.7(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-context': 1.1.2(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@radix-ui/react-slot': 1.2.3(@types/react@19.1.9)(react@19.1.1)
      react: 19.1.1
      react-dom: 19.1.1(react@19.1.1)
    optionalDependencies:
      '@types/react': 19.1.9
      '@types/react-dom': 19.1.7(@types/react@19.1.9)

  '@radix-ui/react-compose-refs@1.1.2(@types/react@19.1.9)(react@19.1.1)':
    dependencies:
      react: 19.1.1
    optionalDependencies:
      '@types/react': 19.1.9

  '@radix-ui/react-context@1.1.2(@types/react@19.1.9)(react@19.1.1)':
    dependencies:
      react: 19.1.1
    optionalDependencies:
      '@types/react': 19.1.9

  '@radix-ui/react-direction@1.1.1(@types/react@19.1.9)(react@19.1.1)':
    dependencies:
      react: 19.1.1
    optionalDependencies:
      '@types/react': 19.1.9

  '@radix-ui/react-dismissable-layer@1.1.10(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)':
    dependencies:
      '@radix-ui/primitive': 1.1.2
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@radix-ui/react-use-callback-ref': 1.1.1(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-use-escape-keydown': 1.1.1(@types/react@19.1.9)(react@19.1.1)
      react: 19.1.1
      react-dom: 19.1.1(react@19.1.1)
    optionalDependencies:
      '@types/react': 19.1.9
      '@types/react-dom': 19.1.7(@types/react@19.1.9)

  '@radix-ui/react-dropdown-menu@2.1.15(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)':
    dependencies:
      '@radix-ui/primitive': 1.1.2
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-context': 1.1.2(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-id': 1.1.1(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-menu': 2.1.15(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@radix-ui/react-use-controllable-state': 1.2.2(@types/react@19.1.9)(react@19.1.1)
      react: 19.1.1
      react-dom: 19.1.1(react@19.1.1)
    optionalDependencies:
      '@types/react': 19.1.9
      '@types/react-dom': 19.1.7(@types/react@19.1.9)

  '@radix-ui/react-focus-guards@1.1.2(@types/react@19.1.9)(react@19.1.1)':
    dependencies:
      react: 19.1.1
    optionalDependencies:
      '@types/react': 19.1.9

  '@radix-ui/react-focus-scope@1.1.7(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@radix-ui/react-use-callback-ref': 1.1.1(@types/react@19.1.9)(react@19.1.1)
      react: 19.1.1
      react-dom: 19.1.1(react@19.1.1)
    optionalDependencies:
      '@types/react': 19.1.9
      '@types/react-dom': 19.1.7(@types/react@19.1.9)

  '@radix-ui/react-id@1.1.1(@types/react@19.1.9)(react@19.1.1)':
    dependencies:
      '@radix-ui/react-use-layout-effect': 1.1.1(@types/react@19.1.9)(react@19.1.1)
      react: 19.1.1
    optionalDependencies:
      '@types/react': 19.1.9

  '@radix-ui/react-label@2.1.7(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)':
    dependencies:
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      react: 19.1.1
      react-dom: 19.1.1(react@19.1.1)
    optionalDependencies:
      '@types/react': 19.1.9
      '@types/react-dom': 19.1.7(@types/react@19.1.9)

  '@radix-ui/react-menu@2.1.15(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)':
    dependencies:
      '@radix-ui/primitive': 1.1.2
      '@radix-ui/react-collection': 1.1.7(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-context': 1.1.2(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-direction': 1.1.1(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-dismissable-layer': 1.1.10(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@radix-ui/react-focus-guards': 1.1.2(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-focus-scope': 1.1.7(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@radix-ui/react-id': 1.1.1(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-popper': 1.2.7(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@radix-ui/react-portal': 1.1.9(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@radix-ui/react-presence': 1.1.4(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@radix-ui/react-roving-focus': 1.1.10(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@radix-ui/react-slot': 1.2.3(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-use-callback-ref': 1.1.1(@types/react@19.1.9)(react@19.1.1)
      aria-hidden: 1.2.6
      react: 19.1.1
      react-dom: 19.1.1(react@19.1.1)
      react-remove-scroll: 2.7.1(@types/react@19.1.9)(react@19.1.1)
    optionalDependencies:
      '@types/react': 19.1.9
      '@types/react-dom': 19.1.7(@types/react@19.1.9)

  '@radix-ui/react-popper@1.2.7(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)':
    dependencies:
      '@floating-ui/react-dom': 2.1.4(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@radix-ui/react-arrow': 1.1.7(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-context': 1.1.2(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@radix-ui/react-use-callback-ref': 1.1.1(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-use-layout-effect': 1.1.1(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-use-rect': 1.1.1(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-use-size': 1.1.1(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/rect': 1.1.1
      react: 19.1.1
      react-dom: 19.1.1(react@19.1.1)
    optionalDependencies:
      '@types/react': 19.1.9
      '@types/react-dom': 19.1.7(@types/react@19.1.9)

  '@radix-ui/react-portal@1.1.9(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)':
    dependencies:
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@radix-ui/react-use-layout-effect': 1.1.1(@types/react@19.1.9)(react@19.1.1)
      react: 19.1.1
      react-dom: 19.1.1(react@19.1.1)
    optionalDependencies:
      '@types/react': 19.1.9
      '@types/react-dom': 19.1.7(@types/react@19.1.9)

  '@radix-ui/react-presence@1.1.4(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-use-layout-effect': 1.1.1(@types/react@19.1.9)(react@19.1.1)
      react: 19.1.1
      react-dom: 19.1.1(react@19.1.1)
    optionalDependencies:
      '@types/react': 19.1.9
      '@types/react-dom': 19.1.7(@types/react@19.1.9)

  '@radix-ui/react-primitive@2.1.3(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)':
    dependencies:
      '@radix-ui/react-slot': 1.2.3(@types/react@19.1.9)(react@19.1.1)
      react: 19.1.1
      react-dom: 19.1.1(react@19.1.1)
    optionalDependencies:
      '@types/react': 19.1.9
      '@types/react-dom': 19.1.7(@types/react@19.1.9)

  '@radix-ui/react-roving-focus@1.1.10(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)':
    dependencies:
      '@radix-ui/primitive': 1.1.2
      '@radix-ui/react-collection': 1.1.7(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-context': 1.1.2(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-direction': 1.1.1(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-id': 1.1.1(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@radix-ui/react-use-callback-ref': 1.1.1(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-use-controllable-state': 1.2.2(@types/react@19.1.9)(react@19.1.1)
      react: 19.1.1
      react-dom: 19.1.1(react@19.1.1)
    optionalDependencies:
      '@types/react': 19.1.9
      '@types/react-dom': 19.1.7(@types/react@19.1.9)

  '@radix-ui/react-scroll-area@1.2.9(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)':
    dependencies:
      '@radix-ui/number': 1.1.1
      '@radix-ui/primitive': 1.1.2
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-context': 1.1.2(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-direction': 1.1.1(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-presence': 1.1.4(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@radix-ui/react-use-callback-ref': 1.1.1(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-use-layout-effect': 1.1.1(@types/react@19.1.9)(react@19.1.1)
      react: 19.1.1
      react-dom: 19.1.1(react@19.1.1)
    optionalDependencies:
      '@types/react': 19.1.9
      '@types/react-dom': 19.1.7(@types/react@19.1.9)

  '@radix-ui/react-separator@1.1.7(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)':
    dependencies:
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      react: 19.1.1
      react-dom: 19.1.1(react@19.1.1)
    optionalDependencies:
      '@types/react': 19.1.9
      '@types/react-dom': 19.1.7(@types/react@19.1.9)

  '@radix-ui/react-slot@1.2.3(@types/react@19.1.9)(react@19.1.1)':
    dependencies:
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.1.9)(react@19.1.1)
      react: 19.1.1
    optionalDependencies:
      '@types/react': 19.1.9

  '@radix-ui/react-tooltip@1.2.7(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)':
    dependencies:
      '@radix-ui/primitive': 1.1.2
      '@radix-ui/react-compose-refs': 1.1.2(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-context': 1.1.2(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-dismissable-layer': 1.1.10(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@radix-ui/react-id': 1.1.1(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-popper': 1.2.7(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@radix-ui/react-portal': 1.1.9(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@radix-ui/react-presence': 1.1.4(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      '@radix-ui/react-slot': 1.2.3(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-use-controllable-state': 1.2.2(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-visually-hidden': 1.2.3(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      react: 19.1.1
      react-dom: 19.1.1(react@19.1.1)
    optionalDependencies:
      '@types/react': 19.1.9
      '@types/react-dom': 19.1.7(@types/react@19.1.9)

  '@radix-ui/react-use-callback-ref@1.1.1(@types/react@19.1.9)(react@19.1.1)':
    dependencies:
      react: 19.1.1
    optionalDependencies:
      '@types/react': 19.1.9

  '@radix-ui/react-use-controllable-state@1.2.2(@types/react@19.1.9)(react@19.1.1)':
    dependencies:
      '@radix-ui/react-use-effect-event': 0.0.2(@types/react@19.1.9)(react@19.1.1)
      '@radix-ui/react-use-layout-effect': 1.1.1(@types/react@19.1.9)(react@19.1.1)
      react: 19.1.1
    optionalDependencies:
      '@types/react': 19.1.9

  '@radix-ui/react-use-effect-event@0.0.2(@types/react@19.1.9)(react@19.1.1)':
    dependencies:
      '@radix-ui/react-use-layout-effect': 1.1.1(@types/react@19.1.9)(react@19.1.1)
      react: 19.1.1
    optionalDependencies:
      '@types/react': 19.1.9

  '@radix-ui/react-use-escape-keydown@1.1.1(@types/react@19.1.9)(react@19.1.1)':
    dependencies:
      '@radix-ui/react-use-callback-ref': 1.1.1(@types/react@19.1.9)(react@19.1.1)
      react: 19.1.1
    optionalDependencies:
      '@types/react': 19.1.9

  '@radix-ui/react-use-layout-effect@1.1.1(@types/react@19.1.9)(react@19.1.1)':
    dependencies:
      react: 19.1.1
    optionalDependencies:
      '@types/react': 19.1.9

  '@radix-ui/react-use-previous@1.1.1(@types/react@19.1.9)(react@19.1.1)':
    dependencies:
      react: 19.1.1
    optionalDependencies:
      '@types/react': 19.1.9

  '@radix-ui/react-use-rect@1.1.1(@types/react@19.1.9)(react@19.1.1)':
    dependencies:
      '@radix-ui/rect': 1.1.1
      react: 19.1.1
    optionalDependencies:
      '@types/react': 19.1.9

  '@radix-ui/react-use-size@1.1.1(@types/react@19.1.9)(react@19.1.1)':
    dependencies:
      '@radix-ui/react-use-layout-effect': 1.1.1(@types/react@19.1.9)(react@19.1.1)
      react: 19.1.1
    optionalDependencies:
      '@types/react': 19.1.9

  '@radix-ui/react-visually-hidden@1.2.3(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)':
    dependencies:
      '@radix-ui/react-primitive': 2.1.3(@types/react-dom@19.1.7(@types/react@19.1.9))(@types/react@19.1.9)(react-dom@19.1.1(react@19.1.1))(react@19.1.1)
      react: 19.1.1
      react-dom: 19.1.1(react@19.1.1)
    optionalDependencies:
      '@types/react': 19.1.9
      '@types/react-dom': 19.1.7(@types/react@19.1.9)

  '@radix-ui/rect@1.1.1': {}

  '@rtsao/scc@1.1.0': {}

  '@rushstack/eslint-patch@1.12.0': {}

  '@supabase/auth-js@2.71.1':
    dependencies:
      '@supabase/node-fetch': 2.6.15

  '@supabase/functions-js@2.4.5':
    dependencies:
      '@supabase/node-fetch': 2.6.15

  '@supabase/node-fetch@2.6.15':
    dependencies:
      whatwg-url: 5.0.0

  '@supabase/postgrest-js@1.19.4':
    dependencies:
      '@supabase/node-fetch': 2.6.15

  '@supabase/realtime-js@2.11.15':
    dependencies:
      '@supabase/node-fetch': 2.6.15
      '@types/phoenix': 1.6.6
      '@types/ws': 8.18.1
      isows: 1.0.7(ws@8.18.3)
      ws: 8.18.3
    transitivePeerDependencies:
      - bufferutil
      - utf-8-validate

  '@supabase/ssr@0.6.1(@supabase/supabase-js@2.53.0)':
    dependencies:
      '@supabase/supabase-js': 2.53.0
      cookie: 1.0.2

  '@supabase/storage-js@2.10.4':
    dependencies:
      '@supabase/node-fetch': 2.6.15

  '@supabase/supabase-js@2.53.0':
    dependencies:
      '@supabase/auth-js': 2.71.1
      '@supabase/functions-js': 2.4.5
      '@supabase/node-fetch': 2.6.15
      '@supabase/postgrest-js': 1.19.4
      '@supabase/realtime-js': 2.11.15
      '@supabase/storage-js': 2.10.4
    transitivePeerDependencies:
      - bufferutil
      - utf-8-validate

  '@swc/helpers@0.5.15':
    dependencies:
      tslib: 2.8.1

  '@tybys/wasm-util@0.10.0':
    dependencies:
      tslib: 2.8.1
    optional: true

  '@types/estree@1.0.8': {}

  '@types/json-schema@7.0.15': {}

  '@types/json5@0.0.29': {}

  '@types/node@20.19.9':
    dependencies:
      undici-types: 6.21.0

  '@types/phoenix@1.6.6': {}

  '@types/react-dom@19.1.7(@types/react@19.1.9)':
    dependencies:
      '@types/react': 19.1.9

  '@types/react@19.1.9':
    dependencies:
      csstype: 3.1.3

  '@types/ws@8.18.1':
    dependencies:
      '@types/node': 20.19.9

  '@typescript-eslint/eslint-plugin@8.38.0(@typescript-eslint/parser@8.38.0(eslint@9.32.0(jiti@1.21.7))(typescript@5.8.3))(eslint@9.32.0(jiti@1.21.7))(typescript@5.8.3)':
    dependencies:
      '@eslint-community/regexpp': 4.12.1
      '@typescript-eslint/parser': 8.38.0(eslint@9.32.0(jiti@1.21.7))(typescript@5.8.3)
      '@typescript-eslint/scope-manager': 8.38.0
      '@typescript-eslint/type-utils': 8.38.0(eslint@9.32.0(jiti@1.21.7))(typescript@5.8.3)
      '@typescript-eslint/utils': 8.38.0(eslint@9.32.0(jiti@1.21.7))(typescript@5.8.3)
      '@typescript-eslint/visitor-keys': 8.38.0
      eslint: 9.32.0(jiti@1.21.7)
      graphemer: 1.4.0
      ignore: 7.0.5
      natural-compare: 1.4.0
      ts-api-utils: 2.1.0(typescript@5.8.3)
      typescript: 5.8.3
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/parser@8.38.0(eslint@9.32.0(jiti@1.21.7))(typescript@5.8.3)':
    dependencies:
      '@typescript-eslint/scope-manager': 8.38.0
      '@typescript-eslint/types': 8.38.0
      '@typescript-eslint/typescript-estree': 8.38.0(typescript@5.8.3)
      '@typescript-eslint/visitor-keys': 8.38.0
      debug: 4.4.1
      eslint: 9.32.0(jiti@1.21.7)
      typescript: 5.8.3
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/project-service@8.38.0(typescript@5.8.3)':
    dependencies:
      '@typescript-eslint/tsconfig-utils': 8.38.0(typescript@5.8.3)
      '@typescript-eslint/types': 8.38.0
      debug: 4.4.1
      typescript: 5.8.3
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/scope-manager@8.38.0':
    dependencies:
      '@typescript-eslint/types': 8.38.0
      '@typescript-eslint/visitor-keys': 8.38.0

  '@typescript-eslint/tsconfig-utils@8.38.0(typescript@5.8.3)':
    dependencies:
      typescript: 5.8.3

  '@typescript-eslint/type-utils@8.38.0(eslint@9.32.0(jiti@1.21.7))(typescript@5.8.3)':
    dependencies:
      '@typescript-eslint/types': 8.38.0
      '@typescript-eslint/typescript-estree': 8.38.0(typescript@5.8.3)
      '@typescript-eslint/utils': 8.38.0(eslint@9.32.0(jiti@1.21.7))(typescript@5.8.3)
      debug: 4.4.1
      eslint: 9.32.0(jiti@1.21.7)
      ts-api-utils: 2.1.0(typescript@5.8.3)
      typescript: 5.8.3
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/types@8.38.0': {}

  '@typescript-eslint/typescript-estree@8.38.0(typescript@5.8.3)':
    dependencies:
      '@typescript-eslint/project-service': 8.38.0(typescript@5.8.3)
      '@typescript-eslint/tsconfig-utils': 8.38.0(typescript@5.8.3)
      '@typescript-eslint/types': 8.38.0
      '@typescript-eslint/visitor-keys': 8.38.0
      debug: 4.4.1
      fast-glob: 3.3.3
      is-glob: 4.0.3
      minimatch: 9.0.5
      semver: 7.7.2
      ts-api-utils: 2.1.0(typescript@5.8.3)
      typescript: 5.8.3
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/utils@8.38.0(eslint@9.32.0(jiti@1.21.7))(typescript@5.8.3)':
    dependencies:
      '@eslint-community/eslint-utils': 4.7.0(eslint@9.32.0(jiti@1.21.7))
      '@typescript-eslint/scope-manager': 8.38.0
      '@typescript-eslint/types': 8.38.0
      '@typescript-eslint/typescript-estree': 8.38.0(typescript@5.8.3)
      eslint: 9.32.0(jiti@1.21.7)
      typescript: 5.8.3
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/visitor-keys@8.38.0':
    dependencies:
      '@typescript-eslint/types': 8.38.0
      eslint-visitor-keys: 4.2.1

  '@unrs/resolver-binding-android-arm-eabi@1.11.1':
    optional: true

  '@unrs/resolver-binding-android-arm64@1.11.1':
    optional: true

  '@unrs/resolver-binding-darwin-arm64@1.11.1':
    optional: true

  '@unrs/resolver-binding-darwin-x64@1.11.1':
    optional: true

  '@unrs/resolver-binding-freebsd-x64@1.11.1':
    optional: true

  '@unrs/resolver-binding-linux-arm-gnueabihf@1.11.1':
    optional: true

  '@unrs/resolver-binding-linux-arm-musleabihf@1.11.1':
    optional: true

  '@unrs/resolver-binding-linux-arm64-gnu@1.11.1':
    optional: true

  '@unrs/resolver-binding-linux-arm64-musl@1.11.1':
    optional: true

  '@unrs/resolver-binding-linux-ppc64-gnu@1.11.1':
    optional: true

  '@unrs/resolver-binding-linux-riscv64-gnu@1.11.1':
    optional: true

  '@unrs/resolver-binding-linux-riscv64-musl@1.11.1':
    optional: true

  '@unrs/resolver-binding-linux-s390x-gnu@1.11.1':
    optional: true

  '@unrs/resolver-binding-linux-x64-gnu@1.11.1':
    optional: true

  '@unrs/resolver-binding-linux-x64-musl@1.11.1':
    optional: true

  '@unrs/resolver-binding-wasm32-wasi@1.11.1':
    dependencies:
      '@napi-rs/wasm-runtime': 0.2.12
    optional: true

  '@unrs/resolver-binding-win32-arm64-msvc@1.11.1':
    optional: true

  '@unrs/resolver-binding-win32-ia32-msvc@1.11.1':
    optional: true

  '@unrs/resolver-binding-win32-x64-msvc@1.11.1':
    optional: true

  acorn-jsx@5.3.2(acorn@8.15.0):
    dependencies:
      acorn: 8.15.0

  acorn@8.15.0: {}

  ajv@6.12.6:
    dependencies:
      fast-deep-equal: 3.1.3
      fast-json-stable-stringify: 2.1.0
      json-schema-traverse: 0.4.1
      uri-js: 4.4.1

  ansi-regex@5.0.1: {}

  ansi-regex@6.1.0: {}

  ansi-styles@4.3.0:
    dependencies:
      color-convert: 2.0.1

  ansi-styles@6.2.1: {}

  any-promise@1.3.0: {}

  anymatch@3.1.3:
    dependencies:
      normalize-path: 3.0.0
      picomatch: 2.3.1

  arg@5.0.2: {}

  argparse@2.0.1: {}

  aria-hidden@1.2.6:
    dependencies:
      tslib: 2.8.1

  aria-query@5.3.2: {}

  array-buffer-byte-length@1.0.2:
    dependencies:
      call-bound: 1.0.4
      is-array-buffer: 3.0.5

  array-includes@3.1.9:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-abstract: 1.24.0
      es-object-atoms: 1.1.1
      get-intrinsic: 1.3.0
      is-string: 1.1.1
      math-intrinsics: 1.1.0

  array.prototype.findlast@1.2.5:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-abstract: 1.24.0
      es-errors: 1.3.0
      es-object-atoms: 1.1.1
      es-shim-unscopables: 1.1.0

  array.prototype.findlastindex@1.2.6:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-abstract: 1.24.0
      es-errors: 1.3.0
      es-object-atoms: 1.1.1
      es-shim-unscopables: 1.1.0

  array.prototype.flat@1.3.3:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-abstract: 1.24.0
      es-shim-unscopables: 1.1.0

  array.prototype.flatmap@1.3.3:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-abstract: 1.24.0
      es-shim-unscopables: 1.1.0

  array.prototype.tosorted@1.1.4:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-abstract: 1.24.0
      es-errors: 1.3.0
      es-shim-unscopables: 1.1.0

  arraybuffer.prototype.slice@1.0.4:
    dependencies:
      array-buffer-byte-length: 1.0.2
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-abstract: 1.24.0
      es-errors: 1.3.0
      get-intrinsic: 1.3.0
      is-array-buffer: 3.0.5

  ast-types-flow@0.0.8: {}

  async-function@1.0.0: {}

  autoprefixer@10.4.21(postcss@8.5.6):
    dependencies:
      browserslist: 4.25.1
      caniuse-lite: 1.0.30001731
      fraction.js: 4.3.7
      normalize-range: 0.1.2
      picocolors: 1.1.1
      postcss: 8.5.6
      postcss-value-parser: 4.2.0

  available-typed-arrays@1.0.7:
    dependencies:
      possible-typed-array-names: 1.1.0

  axe-core@4.10.3: {}

  axobject-query@4.1.0: {}

  balanced-match@1.0.2: {}

  binary-extensions@2.3.0: {}

  brace-expansion@1.1.12:
    dependencies:
      balanced-match: 1.0.2
      concat-map: 0.0.1

  brace-expansion@2.0.2:
    dependencies:
      balanced-match: 1.0.2

  braces@3.0.3:
    dependencies:
      fill-range: 7.1.1

  browserslist@4.25.1:
    dependencies:
      caniuse-lite: 1.0.30001731
      electron-to-chromium: 1.5.192
      node-releases: 2.0.19
      update-browserslist-db: 1.1.3(browserslist@4.25.1)

  call-bind-apply-helpers@1.0.2:
    dependencies:
      es-errors: 1.3.0
      function-bind: 1.1.2

  call-bind@1.0.8:
    dependencies:
      call-bind-apply-helpers: 1.0.2
      es-define-property: 1.0.1
      get-intrinsic: 1.3.0
      set-function-length: 1.2.2

  call-bound@1.0.4:
    dependencies:
      call-bind-apply-helpers: 1.0.2
      get-intrinsic: 1.3.0

  callsites@3.1.0: {}

  camelcase-css@2.0.1: {}

  caniuse-lite@1.0.30001731: {}

  chalk@4.1.2:
    dependencies:
      ansi-styles: 4.3.0
      supports-color: 7.2.0

  chokidar@3.6.0:
    dependencies:
      anymatch: 3.1.3
      braces: 3.0.3
      glob-parent: 5.1.2
      is-binary-path: 2.1.0
      is-glob: 4.0.3
      normalize-path: 3.0.0
      readdirp: 3.6.0
    optionalDependencies:
      fsevents: 2.3.3

  class-variance-authority@0.7.1:
    dependencies:
      clsx: 2.1.1

  client-only@0.0.1: {}

  clsx@2.1.1: {}

  color-convert@2.0.1:
    dependencies:
      color-name: 1.1.4

  color-name@1.1.4: {}

  color-string@1.9.1:
    dependencies:
      color-name: 1.1.4
      simple-swizzle: 0.2.2
    optional: true

  color@4.2.3:
    dependencies:
      color-convert: 2.0.1
      color-string: 1.9.1
    optional: true

  commander@4.1.1: {}

  concat-map@0.0.1: {}

  cookie@1.0.2: {}

  cross-spawn@7.0.6:
    dependencies:
      path-key: 3.1.1
      shebang-command: 2.0.0
      which: 2.0.2

  cssesc@3.0.0: {}

  csstype@3.1.3: {}

  damerau-levenshtein@1.0.8: {}

  data-view-buffer@1.0.2:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      is-data-view: 1.0.2

  data-view-byte-length@1.0.2:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      is-data-view: 1.0.2

  data-view-byte-offset@1.0.1:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      is-data-view: 1.0.2

  debug@3.2.7:
    dependencies:
      ms: 2.1.3

  debug@4.4.1:
    dependencies:
      ms: 2.1.3

  deep-is@0.1.4: {}

  define-data-property@1.1.4:
    dependencies:
      es-define-property: 1.0.1
      es-errors: 1.3.0
      gopd: 1.2.0

  define-properties@1.2.1:
    dependencies:
      define-data-property: 1.1.4
      has-property-descriptors: 1.0.2
      object-keys: 1.1.1

  detect-libc@2.0.4:
    optional: true

  detect-node-es@1.1.0: {}

  didyoumean@1.2.2: {}

  dlv@1.1.3: {}

  doctrine@2.1.0:
    dependencies:
      esutils: 2.0.3

  dunder-proto@1.0.1:
    dependencies:
      call-bind-apply-helpers: 1.0.2
      es-errors: 1.3.0
      gopd: 1.2.0

  eastasianwidth@0.2.0: {}

  electron-to-chromium@1.5.192: {}

  emoji-regex@8.0.0: {}

  emoji-regex@9.2.2: {}

  es-abstract@1.24.0:
    dependencies:
      array-buffer-byte-length: 1.0.2
      arraybuffer.prototype.slice: 1.0.4
      available-typed-arrays: 1.0.7
      call-bind: 1.0.8
      call-bound: 1.0.4
      data-view-buffer: 1.0.2
      data-view-byte-length: 1.0.2
      data-view-byte-offset: 1.0.1
      es-define-property: 1.0.1
      es-errors: 1.3.0
      es-object-atoms: 1.1.1
      es-set-tostringtag: 2.1.0
      es-to-primitive: 1.3.0
      function.prototype.name: 1.1.8
      get-intrinsic: 1.3.0
      get-proto: 1.0.1
      get-symbol-description: 1.1.0
      globalthis: 1.0.4
      gopd: 1.2.0
      has-property-descriptors: 1.0.2
      has-proto: 1.2.0
      has-symbols: 1.1.0
      hasown: 2.0.2
      internal-slot: 1.1.0
      is-array-buffer: 3.0.5
      is-callable: 1.2.7
      is-data-view: 1.0.2
      is-negative-zero: 2.0.3
      is-regex: 1.2.1
      is-set: 2.0.3
      is-shared-array-buffer: 1.0.4
      is-string: 1.1.1
      is-typed-array: 1.1.15
      is-weakref: 1.1.1
      math-intrinsics: 1.1.0
      object-inspect: 1.13.4
      object-keys: 1.1.1
      object.assign: 4.1.7
      own-keys: 1.0.1
      regexp.prototype.flags: 1.5.4
      safe-array-concat: 1.1.3
      safe-push-apply: 1.0.0
      safe-regex-test: 1.1.0
      set-proto: 1.0.0
      stop-iteration-iterator: 1.1.0
      string.prototype.trim: 1.2.10
      string.prototype.trimend: 1.0.9
      string.prototype.trimstart: 1.0.8
      typed-array-buffer: 1.0.3
      typed-array-byte-length: 1.0.3
      typed-array-byte-offset: 1.0.4
      typed-array-length: 1.0.7
      unbox-primitive: 1.1.0
      which-typed-array: 1.1.19

  es-define-property@1.0.1: {}

  es-errors@1.3.0: {}

  es-iterator-helpers@1.2.1:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-abstract: 1.24.0
      es-errors: 1.3.0
      es-set-tostringtag: 2.1.0
      function-bind: 1.1.2
      get-intrinsic: 1.3.0
      globalthis: 1.0.4
      gopd: 1.2.0
      has-property-descriptors: 1.0.2
      has-proto: 1.2.0
      has-symbols: 1.1.0
      internal-slot: 1.1.0
      iterator.prototype: 1.1.5
      safe-array-concat: 1.1.3

  es-object-atoms@1.1.1:
    dependencies:
      es-errors: 1.3.0

  es-set-tostringtag@2.1.0:
    dependencies:
      es-errors: 1.3.0
      get-intrinsic: 1.3.0
      has-tostringtag: 1.0.2
      hasown: 2.0.2

  es-shim-unscopables@1.1.0:
    dependencies:
      hasown: 2.0.2

  es-to-primitive@1.3.0:
    dependencies:
      is-callable: 1.2.7
      is-date-object: 1.1.0
      is-symbol: 1.1.1

  escalade@3.2.0: {}

  escape-string-regexp@4.0.0: {}

  eslint-config-next@15.3.1(eslint@9.32.0(jiti@1.21.7))(typescript@5.8.3):
    dependencies:
      '@next/eslint-plugin-next': 15.3.1
      '@rushstack/eslint-patch': 1.12.0
      '@typescript-eslint/eslint-plugin': 8.38.0(@typescript-eslint/parser@8.38.0(eslint@9.32.0(jiti@1.21.7))(typescript@5.8.3))(eslint@9.32.0(jiti@1.21.7))(typescript@5.8.3)
      '@typescript-eslint/parser': 8.38.0(eslint@9.32.0(jiti@1.21.7))(typescript@5.8.3)
      eslint: 9.32.0(jiti@1.21.7)
      eslint-import-resolver-node: 0.3.9
      eslint-import-resolver-typescript: 3.10.1(eslint-plugin-import@2.32.0)(eslint@9.32.0(jiti@1.21.7))
      eslint-plugin-import: 2.32.0(@typescript-eslint/parser@8.38.0(eslint@9.32.0(jiti@1.21.7))(typescript@5.8.3))(eslint-import-resolver-typescript@3.10.1)(eslint@9.32.0(jiti@1.21.7))
      eslint-plugin-jsx-a11y: 6.10.2(eslint@9.32.0(jiti@1.21.7))
      eslint-plugin-react: 7.37.5(eslint@9.32.0(jiti@1.21.7))
      eslint-plugin-react-hooks: 5.2.0(eslint@9.32.0(jiti@1.21.7))
    optionalDependencies:
      typescript: 5.8.3
    transitivePeerDependencies:
      - eslint-import-resolver-webpack
      - eslint-plugin-import-x
      - supports-color

  eslint-import-resolver-node@0.3.9:
    dependencies:
      debug: 3.2.7
      is-core-module: 2.16.1
      resolve: 1.22.10
    transitivePeerDependencies:
      - supports-color

  eslint-import-resolver-typescript@3.10.1(eslint-plugin-import@2.32.0)(eslint@9.32.0(jiti@1.21.7)):
    dependencies:
      '@nolyfill/is-core-module': 1.0.39
      debug: 4.4.1
      eslint: 9.32.0(jiti@1.21.7)
      get-tsconfig: 4.10.1
      is-bun-module: 2.0.0
      stable-hash: 0.0.5
      tinyglobby: 0.2.14
      unrs-resolver: 1.11.1
    optionalDependencies:
      eslint-plugin-import: 2.32.0(@typescript-eslint/parser@8.38.0(eslint@9.32.0(jiti@1.21.7))(typescript@5.8.3))(eslint-import-resolver-typescript@3.10.1)(eslint@9.32.0(jiti@1.21.7))
    transitivePeerDependencies:
      - supports-color

  eslint-module-utils@2.12.1(@typescript-eslint/parser@8.38.0(eslint@9.32.0(jiti@1.21.7))(typescript@5.8.3))(eslint-import-resolver-node@0.3.9)(eslint-import-resolver-typescript@3.10.1)(eslint@9.32.0(jiti@1.21.7)):
    dependencies:
      debug: 3.2.7
    optionalDependencies:
      '@typescript-eslint/parser': 8.38.0(eslint@9.32.0(jiti@1.21.7))(typescript@5.8.3)
      eslint: 9.32.0(jiti@1.21.7)
      eslint-import-resolver-node: 0.3.9
      eslint-import-resolver-typescript: 3.10.1(eslint-plugin-import@2.32.0)(eslint@9.32.0(jiti@1.21.7))
    transitivePeerDependencies:
      - supports-color

  eslint-plugin-import@2.32.0(@typescript-eslint/parser@8.38.0(eslint@9.32.0(jiti@1.21.7))(typescript@5.8.3))(eslint-import-resolver-typescript@3.10.1)(eslint@9.32.0(jiti@1.21.7)):
    dependencies:
      '@rtsao/scc': 1.1.0
      array-includes: 3.1.9
      array.prototype.findlastindex: 1.2.6
      array.prototype.flat: 1.3.3
      array.prototype.flatmap: 1.3.3
      debug: 3.2.7
      doctrine: 2.1.0
      eslint: 9.32.0(jiti@1.21.7)
      eslint-import-resolver-node: 0.3.9
      eslint-module-utils: 2.12.1(@typescript-eslint/parser@8.38.0(eslint@9.32.0(jiti@1.21.7))(typescript@5.8.3))(eslint-import-resolver-node@0.3.9)(eslint-import-resolver-typescript@3.10.1)(eslint@9.32.0(jiti@1.21.7))
      hasown: 2.0.2
      is-core-module: 2.16.1
      is-glob: 4.0.3
      minimatch: 3.1.2
      object.fromentries: 2.0.8
      object.groupby: 1.0.3
      object.values: 1.2.1
      semver: 6.3.1
      string.prototype.trimend: 1.0.9
      tsconfig-paths: 3.15.0
    optionalDependencies:
      '@typescript-eslint/parser': 8.38.0(eslint@9.32.0(jiti@1.21.7))(typescript@5.8.3)
    transitivePeerDependencies:
      - eslint-import-resolver-typescript
      - eslint-import-resolver-webpack
      - supports-color

  eslint-plugin-jsx-a11y@6.10.2(eslint@9.32.0(jiti@1.21.7)):
    dependencies:
      aria-query: 5.3.2
      array-includes: 3.1.9
      array.prototype.flatmap: 1.3.3
      ast-types-flow: 0.0.8
      axe-core: 4.10.3
      axobject-query: 4.1.0
      damerau-levenshtein: 1.0.8
      emoji-regex: 9.2.2
      eslint: 9.32.0(jiti@1.21.7)
      hasown: 2.0.2
      jsx-ast-utils: 3.3.5
      language-tags: 1.0.9
      minimatch: 3.1.2
      object.fromentries: 2.0.8
      safe-regex-test: 1.1.0
      string.prototype.includes: 2.0.1

  eslint-plugin-react-hooks@5.2.0(eslint@9.32.0(jiti@1.21.7)):
    dependencies:
      eslint: 9.32.0(jiti@1.21.7)

  eslint-plugin-react@7.37.5(eslint@9.32.0(jiti@1.21.7)):
    dependencies:
      array-includes: 3.1.9
      array.prototype.findlast: 1.2.5
      array.prototype.flatmap: 1.3.3
      array.prototype.tosorted: 1.1.4
      doctrine: 2.1.0
      es-iterator-helpers: 1.2.1
      eslint: 9.32.0(jiti@1.21.7)
      estraverse: 5.3.0
      hasown: 2.0.2
      jsx-ast-utils: 3.3.5
      minimatch: 3.1.2
      object.entries: 1.1.9
      object.fromentries: 2.0.8
      object.values: 1.2.1
      prop-types: 15.8.1
      resolve: 2.0.0-next.5
      semver: 6.3.1
      string.prototype.matchall: 4.0.12
      string.prototype.repeat: 1.0.0

  eslint-scope@8.4.0:
    dependencies:
      esrecurse: 4.3.0
      estraverse: 5.3.0

  eslint-visitor-keys@3.4.3: {}

  eslint-visitor-keys@4.2.1: {}

  eslint@9.32.0(jiti@1.21.7):
    dependencies:
      '@eslint-community/eslint-utils': 4.7.0(eslint@9.32.0(jiti@1.21.7))
      '@eslint-community/regexpp': 4.12.1
      '@eslint/config-array': 0.21.0
      '@eslint/config-helpers': 0.3.0
      '@eslint/core': 0.15.1
      '@eslint/eslintrc': 3.3.1
      '@eslint/js': 9.32.0
      '@eslint/plugin-kit': 0.3.4
      '@humanfs/node': 0.16.6
      '@humanwhocodes/module-importer': 1.0.1
      '@humanwhocodes/retry': 0.4.3
      '@types/estree': 1.0.8
      '@types/json-schema': 7.0.15
      ajv: 6.12.6
      chalk: 4.1.2
      cross-spawn: 7.0.6
      debug: 4.4.1
      escape-string-regexp: 4.0.0
      eslint-scope: 8.4.0
      eslint-visitor-keys: 4.2.1
      espree: 10.4.0
      esquery: 1.6.0
      esutils: 2.0.3
      fast-deep-equal: 3.1.3
      file-entry-cache: 8.0.0
      find-up: 5.0.0
      glob-parent: 6.0.2
      ignore: 5.3.2
      imurmurhash: 0.1.4
      is-glob: 4.0.3
      json-stable-stringify-without-jsonify: 1.0.1
      lodash.merge: 4.6.2
      minimatch: 3.1.2
      natural-compare: 1.4.0
      optionator: 0.9.4
    optionalDependencies:
      jiti: 1.21.7
    transitivePeerDependencies:
      - supports-color

  espree@10.4.0:
    dependencies:
      acorn: 8.15.0
      acorn-jsx: 5.3.2(acorn@8.15.0)
      eslint-visitor-keys: 4.2.1

  esquery@1.6.0:
    dependencies:
      estraverse: 5.3.0

  esrecurse@4.3.0:
    dependencies:
      estraverse: 5.3.0

  estraverse@5.3.0: {}

  esutils@2.0.3: {}

  fast-deep-equal@3.1.3: {}

  fast-glob@3.3.1:
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      '@nodelib/fs.walk': 1.2.8
      glob-parent: 5.1.2
      merge2: 1.4.1
      micromatch: 4.0.8

  fast-glob@3.3.3:
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      '@nodelib/fs.walk': 1.2.8
      glob-parent: 5.1.2
      merge2: 1.4.1
      micromatch: 4.0.8

  fast-json-stable-stringify@2.1.0: {}

  fast-levenshtein@2.0.6: {}

  fastq@1.19.1:
    dependencies:
      reusify: 1.1.0

  fdir@6.4.6(picomatch@4.0.3):
    optionalDependencies:
      picomatch: 4.0.3

  file-entry-cache@8.0.0:
    dependencies:
      flat-cache: 4.0.1

  fill-range@7.1.1:
    dependencies:
      to-regex-range: 5.0.1

  find-up@5.0.0:
    dependencies:
      locate-path: 6.0.0
      path-exists: 4.0.0

  flat-cache@4.0.1:
    dependencies:
      flatted: 3.3.3
      keyv: 4.5.4

  flatted@3.3.3: {}

  for-each@0.3.5:
    dependencies:
      is-callable: 1.2.7

  foreground-child@3.3.1:
    dependencies:
      cross-spawn: 7.0.6
      signal-exit: 4.1.0

  fraction.js@4.3.7: {}

  fsevents@2.3.3:
    optional: true

  function-bind@1.1.2: {}

  function.prototype.name@1.1.8:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      define-properties: 1.2.1
      functions-have-names: 1.2.3
      hasown: 2.0.2
      is-callable: 1.2.7

  functions-have-names@1.2.3: {}

  get-intrinsic@1.3.0:
    dependencies:
      call-bind-apply-helpers: 1.0.2
      es-define-property: 1.0.1
      es-errors: 1.3.0
      es-object-atoms: 1.1.1
      function-bind: 1.1.2
      get-proto: 1.0.1
      gopd: 1.2.0
      has-symbols: 1.1.0
      hasown: 2.0.2
      math-intrinsics: 1.1.0

  get-nonce@1.0.1: {}

  get-proto@1.0.1:
    dependencies:
      dunder-proto: 1.0.1
      es-object-atoms: 1.1.1

  get-symbol-description@1.1.0:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      get-intrinsic: 1.3.0

  get-tsconfig@4.10.1:
    dependencies:
      resolve-pkg-maps: 1.0.0

  glob-parent@5.1.2:
    dependencies:
      is-glob: 4.0.3

  glob-parent@6.0.2:
    dependencies:
      is-glob: 4.0.3

  glob@10.4.5:
    dependencies:
      foreground-child: 3.3.1
      jackspeak: 3.4.3
      minimatch: 9.0.5
      minipass: 7.1.2
      package-json-from-dist: 1.0.1
      path-scurry: 1.11.1

  globals@14.0.0: {}

  globalthis@1.0.4:
    dependencies:
      define-properties: 1.2.1
      gopd: 1.2.0

  gopd@1.2.0: {}

  graphemer@1.4.0: {}

  has-bigints@1.1.0: {}

  has-flag@4.0.0: {}

  has-property-descriptors@1.0.2:
    dependencies:
      es-define-property: 1.0.1

  has-proto@1.2.0:
    dependencies:
      dunder-proto: 1.0.1

  has-symbols@1.1.0: {}

  has-tostringtag@1.0.2:
    dependencies:
      has-symbols: 1.1.0

  hasown@2.0.2:
    dependencies:
      function-bind: 1.1.2

  ignore@5.3.2: {}

  ignore@7.0.5: {}

  import-fresh@3.3.1:
    dependencies:
      parent-module: 1.0.1
      resolve-from: 4.0.0

  imurmurhash@0.1.4: {}

  internal-slot@1.1.0:
    dependencies:
      es-errors: 1.3.0
      hasown: 2.0.2
      side-channel: 1.1.0

  is-array-buffer@3.0.5:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      get-intrinsic: 1.3.0

  is-arrayish@0.3.2:
    optional: true

  is-async-function@2.1.1:
    dependencies:
      async-function: 1.0.0
      call-bound: 1.0.4
      get-proto: 1.0.1
      has-tostringtag: 1.0.2
      safe-regex-test: 1.1.0

  is-bigint@1.1.0:
    dependencies:
      has-bigints: 1.1.0

  is-binary-path@2.1.0:
    dependencies:
      binary-extensions: 2.3.0

  is-boolean-object@1.2.2:
    dependencies:
      call-bound: 1.0.4
      has-tostringtag: 1.0.2

  is-bun-module@2.0.0:
    dependencies:
      semver: 7.7.2

  is-callable@1.2.7: {}

  is-core-module@2.16.1:
    dependencies:
      hasown: 2.0.2

  is-data-view@1.0.2:
    dependencies:
      call-bound: 1.0.4
      get-intrinsic: 1.3.0
      is-typed-array: 1.1.15

  is-date-object@1.1.0:
    dependencies:
      call-bound: 1.0.4
      has-tostringtag: 1.0.2

  is-extglob@2.1.1: {}

  is-finalizationregistry@1.1.1:
    dependencies:
      call-bound: 1.0.4

  is-fullwidth-code-point@3.0.0: {}

  is-generator-function@1.1.0:
    dependencies:
      call-bound: 1.0.4
      get-proto: 1.0.1
      has-tostringtag: 1.0.2
      safe-regex-test: 1.1.0

  is-glob@4.0.3:
    dependencies:
      is-extglob: 2.1.1

  is-map@2.0.3: {}

  is-negative-zero@2.0.3: {}

  is-number-object@1.1.1:
    dependencies:
      call-bound: 1.0.4
      has-tostringtag: 1.0.2

  is-number@7.0.0: {}

  is-regex@1.2.1:
    dependencies:
      call-bound: 1.0.4
      gopd: 1.2.0
      has-tostringtag: 1.0.2
      hasown: 2.0.2

  is-set@2.0.3: {}

  is-shared-array-buffer@1.0.4:
    dependencies:
      call-bound: 1.0.4

  is-string@1.1.1:
    dependencies:
      call-bound: 1.0.4
      has-tostringtag: 1.0.2

  is-symbol@1.1.1:
    dependencies:
      call-bound: 1.0.4
      has-symbols: 1.1.0
      safe-regex-test: 1.1.0

  is-typed-array@1.1.15:
    dependencies:
      which-typed-array: 1.1.19

  is-weakmap@2.0.2: {}

  is-weakref@1.1.1:
    dependencies:
      call-bound: 1.0.4

  is-weakset@2.0.4:
    dependencies:
      call-bound: 1.0.4
      get-intrinsic: 1.3.0

  isarray@2.0.5: {}

  isexe@2.0.0: {}

  isows@1.0.7(ws@8.18.3):
    dependencies:
      ws: 8.18.3

  iterator.prototype@1.1.5:
    dependencies:
      define-data-property: 1.1.4
      es-object-atoms: 1.1.1
      get-intrinsic: 1.3.0
      get-proto: 1.0.1
      has-symbols: 1.1.0
      set-function-name: 2.0.2

  jackspeak@3.4.3:
    dependencies:
      '@isaacs/cliui': 8.0.2
    optionalDependencies:
      '@pkgjs/parseargs': 0.11.0

  jiti@1.21.7: {}

  js-tokens@4.0.0: {}

  js-yaml@4.1.0:
    dependencies:
      argparse: 2.0.1

  json-buffer@3.0.1: {}

  json-schema-traverse@0.4.1: {}

  json-stable-stringify-without-jsonify@1.0.1: {}

  json5@1.0.2:
    dependencies:
      minimist: 1.2.8

  jsx-ast-utils@3.3.5:
    dependencies:
      array-includes: 3.1.9
      array.prototype.flat: 1.3.3
      object.assign: 4.1.7
      object.values: 1.2.1

  keyv@4.5.4:
    dependencies:
      json-buffer: 3.0.1

  language-subtag-registry@0.3.23: {}

  language-tags@1.0.9:
    dependencies:
      language-subtag-registry: 0.3.23

  levn@0.4.1:
    dependencies:
      prelude-ls: 1.2.1
      type-check: 0.4.0

  lilconfig@3.1.3: {}

  lines-and-columns@1.2.4: {}

  locate-path@6.0.0:
    dependencies:
      p-locate: 5.0.0

  lodash.merge@4.6.2: {}

  loose-envify@1.4.0:
    dependencies:
      js-tokens: 4.0.0

  lru-cache@10.4.3: {}

  lucide-react@0.511.0(react@19.1.1):
    dependencies:
      react: 19.1.1

  math-intrinsics@1.1.0: {}

  merge2@1.4.1: {}

  micromatch@4.0.8:
    dependencies:
      braces: 3.0.3
      picomatch: 2.3.1

  minimatch@3.1.2:
    dependencies:
      brace-expansion: 1.1.12

  minimatch@9.0.5:
    dependencies:
      brace-expansion: 2.0.2

  minimist@1.2.8: {}

  minipass@7.1.2: {}

  ms@2.1.3: {}

  mz@2.7.0:
    dependencies:
      any-promise: 1.3.0
      object-assign: 4.1.1
      thenify-all: 1.6.0

  nanoid@3.3.11: {}

  napi-postinstall@0.3.2: {}

  natural-compare@1.4.0: {}

  next-themes@0.4.6(react-dom@19.1.1(react@19.1.1))(react@19.1.1):
    dependencies:
      react: 19.1.1
      react-dom: 19.1.1(react@19.1.1)

  next@15.4.5(react-dom@19.1.1(react@19.1.1))(react@19.1.1):
    dependencies:
      '@next/env': 15.4.5
      '@swc/helpers': 0.5.15
      caniuse-lite: 1.0.30001731
      postcss: 8.4.31
      react: 19.1.1
      react-dom: 19.1.1(react@19.1.1)
      styled-jsx: 5.1.6(react@19.1.1)
    optionalDependencies:
      '@next/swc-darwin-arm64': 15.4.5
      '@next/swc-darwin-x64': 15.4.5
      '@next/swc-linux-arm64-gnu': 15.4.5
      '@next/swc-linux-arm64-musl': 15.4.5
      '@next/swc-linux-x64-gnu': 15.4.5
      '@next/swc-linux-x64-musl': 15.4.5
      '@next/swc-win32-arm64-msvc': 15.4.5
      '@next/swc-win32-x64-msvc': 15.4.5
      sharp: 0.34.3
    transitivePeerDependencies:
      - '@babel/core'
      - babel-plugin-macros

  node-releases@2.0.19: {}

  normalize-path@3.0.0: {}

  normalize-range@0.1.2: {}

  object-assign@4.1.1: {}

  object-hash@3.0.0: {}

  object-inspect@1.13.4: {}

  object-keys@1.1.1: {}

  object.assign@4.1.7:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-object-atoms: 1.1.1
      has-symbols: 1.1.0
      object-keys: 1.1.1

  object.entries@1.1.9:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-object-atoms: 1.1.1

  object.fromentries@2.0.8:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-abstract: 1.24.0
      es-object-atoms: 1.1.1

  object.groupby@1.0.3:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-abstract: 1.24.0

  object.values@1.2.1:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-object-atoms: 1.1.1

  optionator@0.9.4:
    dependencies:
      deep-is: 0.1.4
      fast-levenshtein: 2.0.6
      levn: 0.4.1
      prelude-ls: 1.2.1
      type-check: 0.4.0
      word-wrap: 1.2.5

  own-keys@1.0.1:
    dependencies:
      get-intrinsic: 1.3.0
      object-keys: 1.1.1
      safe-push-apply: 1.0.0

  p-limit@3.1.0:
    dependencies:
      yocto-queue: 0.1.0

  p-locate@5.0.0:
    dependencies:
      p-limit: 3.1.0

  package-json-from-dist@1.0.1: {}

  parent-module@1.0.1:
    dependencies:
      callsites: 3.1.0

  path-exists@4.0.0: {}

  path-key@3.1.1: {}

  path-parse@1.0.7: {}

  path-scurry@1.11.1:
    dependencies:
      lru-cache: 10.4.3
      minipass: 7.1.2

  picocolors@1.1.1: {}

  picomatch@2.3.1: {}

  picomatch@4.0.3: {}

  pify@2.3.0: {}

  pirates@4.0.7: {}

  possible-typed-array-names@1.1.0: {}

  postcss-import@15.1.0(postcss@8.5.6):
    dependencies:
      postcss: 8.5.6
      postcss-value-parser: 4.2.0
      read-cache: 1.0.0
      resolve: 1.22.10

  postcss-js@4.0.1(postcss@8.5.6):
    dependencies:
      camelcase-css: 2.0.1
      postcss: 8.5.6

  postcss-load-config@4.0.2(postcss@8.5.6):
    dependencies:
      lilconfig: 3.1.3
      yaml: 2.8.0
    optionalDependencies:
      postcss: 8.5.6

  postcss-nested@6.2.0(postcss@8.5.6):
    dependencies:
      postcss: 8.5.6
      postcss-selector-parser: 6.1.2

  postcss-selector-parser@6.1.2:
    dependencies:
      cssesc: 3.0.0
      util-deprecate: 1.0.2

  postcss-value-parser@4.2.0: {}

  postcss@8.4.31:
    dependencies:
      nanoid: 3.3.11
      picocolors: 1.1.1
      source-map-js: 1.2.1

  postcss@8.5.6:
    dependencies:
      nanoid: 3.3.11
      picocolors: 1.1.1
      source-map-js: 1.2.1

  prelude-ls@1.2.1: {}

  prop-types@15.8.1:
    dependencies:
      loose-envify: 1.4.0
      object-assign: 4.1.1
      react-is: 16.13.1

  punycode@2.3.1: {}

  queue-microtask@1.2.3: {}

  react-dom@19.1.1(react@19.1.1):
    dependencies:
      react: 19.1.1
      scheduler: 0.26.0

  react-is@16.13.1: {}

  react-remove-scroll-bar@2.3.8(@types/react@19.1.9)(react@19.1.1):
    dependencies:
      react: 19.1.1
      react-style-singleton: 2.2.3(@types/react@19.1.9)(react@19.1.1)
      tslib: 2.8.1
    optionalDependencies:
      '@types/react': 19.1.9

  react-remove-scroll@2.7.1(@types/react@19.1.9)(react@19.1.1):
    dependencies:
      react: 19.1.1
      react-remove-scroll-bar: 2.3.8(@types/react@19.1.9)(react@19.1.1)
      react-style-singleton: 2.2.3(@types/react@19.1.9)(react@19.1.1)
      tslib: 2.8.1
      use-callback-ref: 1.3.3(@types/react@19.1.9)(react@19.1.1)
      use-sidecar: 1.1.3(@types/react@19.1.9)(react@19.1.1)
    optionalDependencies:
      '@types/react': 19.1.9

  react-style-singleton@2.2.3(@types/react@19.1.9)(react@19.1.1):
    dependencies:
      get-nonce: 1.0.1
      react: 19.1.1
      tslib: 2.8.1
    optionalDependencies:
      '@types/react': 19.1.9

  react@19.1.1: {}

  read-cache@1.0.0:
    dependencies:
      pify: 2.3.0

  readdirp@3.6.0:
    dependencies:
      picomatch: 2.3.1

  reflect.getprototypeof@1.0.10:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-abstract: 1.24.0
      es-errors: 1.3.0
      es-object-atoms: 1.1.1
      get-intrinsic: 1.3.0
      get-proto: 1.0.1
      which-builtin-type: 1.2.1

  regexp.prototype.flags@1.5.4:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-errors: 1.3.0
      get-proto: 1.0.1
      gopd: 1.2.0
      set-function-name: 2.0.2

  resolve-from@4.0.0: {}

  resolve-pkg-maps@1.0.0: {}

  resolve@1.22.10:
    dependencies:
      is-core-module: 2.16.1
      path-parse: 1.0.7
      supports-preserve-symlinks-flag: 1.0.0

  resolve@2.0.0-next.5:
    dependencies:
      is-core-module: 2.16.1
      path-parse: 1.0.7
      supports-preserve-symlinks-flag: 1.0.0

  reusify@1.1.0: {}

  run-parallel@1.2.0:
    dependencies:
      queue-microtask: 1.2.3

  safe-array-concat@1.1.3:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      get-intrinsic: 1.3.0
      has-symbols: 1.1.0
      isarray: 2.0.5

  safe-push-apply@1.0.0:
    dependencies:
      es-errors: 1.3.0
      isarray: 2.0.5

  safe-regex-test@1.1.0:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      is-regex: 1.2.1

  scheduler@0.26.0: {}

  semver@6.3.1: {}

  semver@7.7.2: {}

  set-function-length@1.2.2:
    dependencies:
      define-data-property: 1.1.4
      es-errors: 1.3.0
      function-bind: 1.1.2
      get-intrinsic: 1.3.0
      gopd: 1.2.0
      has-property-descriptors: 1.0.2

  set-function-name@2.0.2:
    dependencies:
      define-data-property: 1.1.4
      es-errors: 1.3.0
      functions-have-names: 1.2.3
      has-property-descriptors: 1.0.2

  set-proto@1.0.0:
    dependencies:
      dunder-proto: 1.0.1
      es-errors: 1.3.0
      es-object-atoms: 1.1.1

  sharp@0.34.3:
    dependencies:
      color: 4.2.3
      detect-libc: 2.0.4
      semver: 7.7.2
    optionalDependencies:
      '@img/sharp-darwin-arm64': 0.34.3
      '@img/sharp-darwin-x64': 0.34.3
      '@img/sharp-libvips-darwin-arm64': 1.2.0
      '@img/sharp-libvips-darwin-x64': 1.2.0
      '@img/sharp-libvips-linux-arm': 1.2.0
      '@img/sharp-libvips-linux-arm64': 1.2.0
      '@img/sharp-libvips-linux-ppc64': 1.2.0
      '@img/sharp-libvips-linux-s390x': 1.2.0
      '@img/sharp-libvips-linux-x64': 1.2.0
      '@img/sharp-libvips-linuxmusl-arm64': 1.2.0
      '@img/sharp-libvips-linuxmusl-x64': 1.2.0
      '@img/sharp-linux-arm': 0.34.3
      '@img/sharp-linux-arm64': 0.34.3
      '@img/sharp-linux-ppc64': 0.34.3
      '@img/sharp-linux-s390x': 0.34.3
      '@img/sharp-linux-x64': 0.34.3
      '@img/sharp-linuxmusl-arm64': 0.34.3
      '@img/sharp-linuxmusl-x64': 0.34.3
      '@img/sharp-wasm32': 0.34.3
      '@img/sharp-win32-arm64': 0.34.3
      '@img/sharp-win32-ia32': 0.34.3
      '@img/sharp-win32-x64': 0.34.3
    optional: true

  shebang-command@2.0.0:
    dependencies:
      shebang-regex: 3.0.0

  shebang-regex@3.0.0: {}

  side-channel-list@1.0.0:
    dependencies:
      es-errors: 1.3.0
      object-inspect: 1.13.4

  side-channel-map@1.0.1:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      get-intrinsic: 1.3.0
      object-inspect: 1.13.4

  side-channel-weakmap@1.0.2:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      get-intrinsic: 1.3.0
      object-inspect: 1.13.4
      side-channel-map: 1.0.1

  side-channel@1.1.0:
    dependencies:
      es-errors: 1.3.0
      object-inspect: 1.13.4
      side-channel-list: 1.0.0
      side-channel-map: 1.0.1
      side-channel-weakmap: 1.0.2

  signal-exit@4.1.0: {}

  simple-swizzle@0.2.2:
    dependencies:
      is-arrayish: 0.3.2
    optional: true

  source-map-js@1.2.1: {}

  stable-hash@0.0.5: {}

  stop-iteration-iterator@1.1.0:
    dependencies:
      es-errors: 1.3.0
      internal-slot: 1.1.0

  string-width@4.2.3:
    dependencies:
      emoji-regex: 8.0.0
      is-fullwidth-code-point: 3.0.0
      strip-ansi: 6.0.1

  string-width@5.1.2:
    dependencies:
      eastasianwidth: 0.2.0
      emoji-regex: 9.2.2
      strip-ansi: 7.1.0

  string.prototype.includes@2.0.1:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-abstract: 1.24.0

  string.prototype.matchall@4.0.12:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-abstract: 1.24.0
      es-errors: 1.3.0
      es-object-atoms: 1.1.1
      get-intrinsic: 1.3.0
      gopd: 1.2.0
      has-symbols: 1.1.0
      internal-slot: 1.1.0
      regexp.prototype.flags: 1.5.4
      set-function-name: 2.0.2
      side-channel: 1.1.0

  string.prototype.repeat@1.0.0:
    dependencies:
      define-properties: 1.2.1
      es-abstract: 1.24.0

  string.prototype.trim@1.2.10:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      define-data-property: 1.1.4
      define-properties: 1.2.1
      es-abstract: 1.24.0
      es-object-atoms: 1.1.1
      has-property-descriptors: 1.0.2

  string.prototype.trimend@1.0.9:
    dependencies:
      call-bind: 1.0.8
      call-bound: 1.0.4
      define-properties: 1.2.1
      es-object-atoms: 1.1.1

  string.prototype.trimstart@1.0.8:
    dependencies:
      call-bind: 1.0.8
      define-properties: 1.2.1
      es-object-atoms: 1.1.1

  strip-ansi@6.0.1:
    dependencies:
      ansi-regex: 5.0.1

  strip-ansi@7.1.0:
    dependencies:
      ansi-regex: 6.1.0

  strip-bom@3.0.0: {}

  strip-json-comments@3.1.1: {}

  styled-jsx@5.1.6(react@19.1.1):
    dependencies:
      client-only: 0.0.1
      react: 19.1.1

  sucrase@3.35.0:
    dependencies:
      '@jridgewell/gen-mapping': 0.3.12
      commander: 4.1.1
      glob: 10.4.5
      lines-and-columns: 1.2.4
      mz: 2.7.0
      pirates: 4.0.7
      ts-interface-checker: 0.1.13

  supports-color@7.2.0:
    dependencies:
      has-flag: 4.0.0

  supports-preserve-symlinks-flag@1.0.0: {}

  tailwind-merge@3.3.1: {}

  tailwindcss-animate@1.0.7(tailwindcss@3.4.17):
    dependencies:
      tailwindcss: 3.4.17

  tailwindcss@3.4.17:
    dependencies:
      '@alloc/quick-lru': 5.2.0
      arg: 5.0.2
      chokidar: 3.6.0
      didyoumean: 1.2.2
      dlv: 1.1.3
      fast-glob: 3.3.3
      glob-parent: 6.0.2
      is-glob: 4.0.3
      jiti: 1.21.7
      lilconfig: 3.1.3
      micromatch: 4.0.8
      normalize-path: 3.0.0
      object-hash: 3.0.0
      picocolors: 1.1.1
      postcss: 8.5.6
      postcss-import: 15.1.0(postcss@8.5.6)
      postcss-js: 4.0.1(postcss@8.5.6)
      postcss-load-config: 4.0.2(postcss@8.5.6)
      postcss-nested: 6.2.0(postcss@8.5.6)
      postcss-selector-parser: 6.1.2
      resolve: 1.22.10
      sucrase: 3.35.0
    transitivePeerDependencies:
      - ts-node

  thenify-all@1.6.0:
    dependencies:
      thenify: 3.3.1

  thenify@3.3.1:
    dependencies:
      any-promise: 1.3.0

  tinyglobby@0.2.14:
    dependencies:
      fdir: 6.4.6(picomatch@4.0.3)
      picomatch: 4.0.3

  to-regex-range@5.0.1:
    dependencies:
      is-number: 7.0.0

  tr46@0.0.3: {}

  ts-api-utils@2.1.0(typescript@5.8.3):
    dependencies:
      typescript: 5.8.3

  ts-interface-checker@0.1.13: {}

  tsconfig-paths@3.15.0:
    dependencies:
      '@types/json5': 0.0.29
      json5: 1.0.2
      minimist: 1.2.8
      strip-bom: 3.0.0

  tslib@2.8.1: {}

  type-check@0.4.0:
    dependencies:
      prelude-ls: 1.2.1

  typed-array-buffer@1.0.3:
    dependencies:
      call-bound: 1.0.4
      es-errors: 1.3.0
      is-typed-array: 1.1.15

  typed-array-byte-length@1.0.3:
    dependencies:
      call-bind: 1.0.8
      for-each: 0.3.5
      gopd: 1.2.0
      has-proto: 1.2.0
      is-typed-array: 1.1.15

  typed-array-byte-offset@1.0.4:
    dependencies:
      available-typed-arrays: 1.0.7
      call-bind: 1.0.8
      for-each: 0.3.5
      gopd: 1.2.0
      has-proto: 1.2.0
      is-typed-array: 1.1.15
      reflect.getprototypeof: 1.0.10

  typed-array-length@1.0.7:
    dependencies:
      call-bind: 1.0.8
      for-each: 0.3.5
      gopd: 1.2.0
      is-typed-array: 1.1.15
      possible-typed-array-names: 1.1.0
      reflect.getprototypeof: 1.0.10

  typescript@5.8.3: {}

  unbox-primitive@1.1.0:
    dependencies:
      call-bound: 1.0.4
      has-bigints: 1.1.0
      has-symbols: 1.1.0
      which-boxed-primitive: 1.1.1

  undici-types@6.21.0: {}

  unrs-resolver@1.11.1:
    dependencies:
      napi-postinstall: 0.3.2
    optionalDependencies:
      '@unrs/resolver-binding-android-arm-eabi': 1.11.1
      '@unrs/resolver-binding-android-arm64': 1.11.1
      '@unrs/resolver-binding-darwin-arm64': 1.11.1
      '@unrs/resolver-binding-darwin-x64': 1.11.1
      '@unrs/resolver-binding-freebsd-x64': 1.11.1
      '@unrs/resolver-binding-linux-arm-gnueabihf': 1.11.1
      '@unrs/resolver-binding-linux-arm-musleabihf': 1.11.1
      '@unrs/resolver-binding-linux-arm64-gnu': 1.11.1
      '@unrs/resolver-binding-linux-arm64-musl': 1.11.1
      '@unrs/resolver-binding-linux-ppc64-gnu': 1.11.1
      '@unrs/resolver-binding-linux-riscv64-gnu': 1.11.1
      '@unrs/resolver-binding-linux-riscv64-musl': 1.11.1
      '@unrs/resolver-binding-linux-s390x-gnu': 1.11.1
      '@unrs/resolver-binding-linux-x64-gnu': 1.11.1
      '@unrs/resolver-binding-linux-x64-musl': 1.11.1
      '@unrs/resolver-binding-wasm32-wasi': 1.11.1
      '@unrs/resolver-binding-win32-arm64-msvc': 1.11.1
      '@unrs/resolver-binding-win32-ia32-msvc': 1.11.1
      '@unrs/resolver-binding-win32-x64-msvc': 1.11.1

  update-browserslist-db@1.1.3(browserslist@4.25.1):
    dependencies:
      browserslist: 4.25.1
      escalade: 3.2.0
      picocolors: 1.1.1

  uri-js@4.4.1:
    dependencies:
      punycode: 2.3.1

  use-callback-ref@1.3.3(@types/react@19.1.9)(react@19.1.1):
    dependencies:
      react: 19.1.1
      tslib: 2.8.1
    optionalDependencies:
      '@types/react': 19.1.9

  use-sidecar@1.1.3(@types/react@19.1.9)(react@19.1.1):
    dependencies:
      detect-node-es: 1.1.0
      react: 19.1.1
      tslib: 2.8.1
    optionalDependencies:
      '@types/react': 19.1.9

  util-deprecate@1.0.2: {}

  webidl-conversions@3.0.1: {}

  whatwg-url@5.0.0:
    dependencies:
      tr46: 0.0.3
      webidl-conversions: 3.0.1

  which-boxed-primitive@1.1.1:
    dependencies:
      is-bigint: 1.1.0
      is-boolean-object: 1.2.2
      is-number-object: 1.1.1
      is-string: 1.1.1
      is-symbol: 1.1.1

  which-builtin-type@1.2.1:
    dependencies:
      call-bound: 1.0.4
      function.prototype.name: 1.1.8
      has-tostringtag: 1.0.2
      is-async-function: 2.1.1
      is-date-object: 1.1.0
      is-finalizationregistry: 1.1.1
      is-generator-function: 1.1.0
      is-regex: 1.2.1
      is-weakref: 1.1.1
      isarray: 2.0.5
      which-boxed-primitive: 1.1.1
      which-collection: 1.0.2
      which-typed-array: 1.1.19

  which-collection@1.0.2:
    dependencies:
      is-map: 2.0.3
      is-set: 2.0.3
      is-weakmap: 2.0.2
      is-weakset: 2.0.4

  which-typed-array@1.1.19:
    dependencies:
      available-typed-arrays: 1.0.7
      call-bind: 1.0.8
      call-bound: 1.0.4
      for-each: 0.3.5
      get-proto: 1.0.1
      gopd: 1.2.0
      has-tostringtag: 1.0.2

  which@2.0.2:
    dependencies:
      isexe: 2.0.0

  word-wrap@1.2.5: {}

  wrap-ansi@7.0.0:
    dependencies:
      ansi-styles: 4.3.0
      string-width: 4.2.3
      strip-ansi: 6.0.1

  wrap-ansi@8.1.0:
    dependencies:
      ansi-styles: 6.2.1
      string-width: 5.1.2
      strip-ansi: 7.1.0

  ws@8.18.3: {}

  yaml@2.8.0: {}

  yocto-queue@0.1.0: {}

```

---
### File: `components.json`
---

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}

```

---
### File: `middleware.ts`
---

```typescript
import { updateSession } from "@/lib/supabase/middleware";
import { type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

```

---
### File: `.eslintrc.json` (Not Found or Excluded)
---

---
### File: `.gitignore`
---

```text
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

```

---
### File: `.env.example` (Not Found or Excluded)
---

---
### File: `next-env.d.ts`
---

```typescript
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

```

## Directory: `app`

---
### File: `app\favicon.ico` (Image)
---

![favicon.ico](app\favicon.ico)

*(Content of app\favicon.ico (image file) is not embedded)*

---
### File: `app\globals.css`
---

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3.9%;
    --primary: 0 0% 9%;
    --primary-foreground: 0 0% 98%;
    --secondary: 0 0% 96.1%;
    --secondary-foreground: 0 0% 9%;
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
    --accent: 0 0% 96.1%;
    --accent-foreground: 0 0% 9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 0 0% 3.9%;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
    --radius: 0.5rem;
  }
  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --card: 0 0% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 0 0% 9%;
    --secondary: 0 0% 14.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 14.9%;
    --muted-foreground: 0 0% 63.9%;
    --accent: 0 0% 14.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 14.9%;
    --input: 0 0% 14.9%;
    --ring: 0 0% 83.1%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

```

---
### File: `app\layout.tsx`
---

```typescript
// app/layout.tsx

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { UserProvider } from "@/lib/contexts/UserContext"; // NEW: Import UserProvider

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* NEW: Wrap children with UserProvider */}
          <UserProvider>
            {children}
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

---
### File: `app\opengraph-image.png` (Image)
---

![opengraph-image.png](app\opengraph-image.png)

*(Content of app\opengraph-image.png (image file) is not embedded)*

---
### File: `app\page.tsx`
---

```typescript
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { Hero } from "@/components/hero";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ConnectSupabaseSteps } from "@/components/tutorial/connect-supabase-steps";
import { SignUpUserSteps } from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
              <Link href={"/"}>Next.js Supabase Starter</Link>
              
            </div>
            {!hasEnvVars ? <EnvVarWarning hasEnvVars={hasEnvVars} /> : <AuthButton />}
          </div>
        </nav>
        <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5">
          <Hero />
          <main className="flex-1 flex flex-col gap-6 px-4">
            <h2 className="font-medium text-xl mb-4">Next steps</h2>
            {hasEnvVars ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
          </main>
        </div>

        <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
          <p>
            Powered by{" "}
            <a
              href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
              target="_blank"
              className="font-bold hover:underline"
              rel="noreferrer"
            >
              Supabase
            </a>
          </p>
          <ThemeSwitcher />
        </footer>
      </div>
    </main>
  );
}

```

---
### File: `app\twitter-image.png` (Image)
---

![twitter-image.png](app\twitter-image.png)

*(Content of app\twitter-image.png (image file) is not embedded)*

---
### File: `app\auth\confirm\route.ts`
---

```typescript
import { createClient } from "@/lib/supabase/server";
import { type EmailOtpType } from "@supabase/supabase-js";
import { redirect } from "next/navigation";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = searchParams.get("next") ?? "/";

  if (token_hash && type) {
    const supabase = await createClient();

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });
    if (!error) {
      // redirect user to specified redirect URL or root of app
      redirect(next);
    } else {
      // redirect the user to an error page with some instructions
      redirect(`/auth/error?error=${error?.message}`);
    }
  }

  // redirect the user to an error page with some instructions
  redirect(`/auth/error?error=No token hash or type`);
}

```

---
### File: `app\auth\error\page.tsx`
---

```typescript
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ error: string }>;
}) {
  const params = await searchParams;

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                Sorry, something went wrong.
              </CardTitle>
            </CardHeader>
            <CardContent>
              {params?.error ? (
                <p className="text-sm text-muted-foreground">
                  Code error: {params.error}
                </p>
              ) : (
                <p className="text-sm text-muted-foreground">
                  An unspecified error occurred.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

```

---
### File: `app\auth\forgot-password\page.tsx`
---

```typescript
import { ForgotPasswordForm } from "@/components/forgot-password-form";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <ForgotPasswordForm />
      </div>
    </div>
  );
}

```

---
### File: `app\auth\login\page.tsx`
---

```typescript
import { LoginForm } from "@/components/login-form";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}

```

---
### File: `app\auth\sign-up\page.tsx`
---

```typescript
import { SignUpForm } from "@/components/sign-up-form";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignUpForm />
      </div>
    </div>
  );
}

```

---
### File: `app\auth\sign-up-success\page.tsx`
---

```typescript
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                Thank you for signing up!
              </CardTitle>
              <CardDescription>Check your email to confirm</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                You&apos;ve successfully signed up. Please check your email to
                confirm your account before signing in.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

```

---
### File: `app\auth\update-password\page.tsx`
---

```typescript
import { UpdatePasswordForm } from "@/components/update-password-form";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <UpdatePasswordForm />
      </div>
    </div>
  );
}

```

---
### File: `app\protected\layout.tsx`
---

```typescript
// app/protected/layout.tsx

import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { checkSupabaseEnvVars } from "@/lib/env"; // NEW IMPORT
import Link from "next/link";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const hasSupabaseEnvVars = checkSupabaseEnvVars(); // NEW: Perform check on server

  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
              <Link href={"/protected"} className="hover:underline">
                RAG APP
              </Link>
           
            </div>
            <EnvVarWarning hasEnvVars={hasSupabaseEnvVars} />
            {hasSupabaseEnvVars && <AuthButton />}
          </div>
        </nav>
        <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5">
          {children}
        </div>

        <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
          <p>
            Powered by{" "}
            <a
              href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
              target="_blank"
              className="font-bold hover:underline"
              rel="noreferrer"
            >
              Supabase
            </a>
          </p>
          <ThemeSwitcher />
        </footer>
      </div>
    </main>
  );
}
```

---
### File: `app\protected\page.tsx`
---

```typescript
// app/protected/page.tsx

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { InfoIcon } from "lucide-react";

import { SessionProvider } from "@/lib/contexts/SessionContext"; // Import the SessionProvider
import { IngestionForm } from "@/components/rag/IngestionForm"; // Import the IngestionForm
import { SessionList } from "@/components/rag/SessionList"; // Import the SessionList

export default async function ProtectedDashboardPage() {
  const supabase = await createClient();

  // Ensure the user is authenticated to access this page
  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/auth/login"); // Redirect to login if not authenticated
  }

  return (
    // Wrap the entire content with SessionProvider
    <SessionProvider>
      <div className="flex-1 w-full flex flex-col gap-12">
    
        {/* Ingestion Form Section */}
        <div className="flex flex-col gap-4 items-start">
          <IngestionForm />
        </div>

        {/* Session List Section */}
        <div className="flex flex-col gap-4 items-start">
          <h2 className="font-bold text-2xl">Your workspace</h2>
          <SessionList />
        </div>
      </div>
    </SessionProvider>
  );
}
```

---
### File: `app\protected\chat\[sessionId]\page.tsx`
---

```typescript
// app/protected/chat/[sessionId]/page.tsx

"use client"; // Make this a client component to use state and hooks

import { createClientComponentClient } from "@/lib/supabase/client-component";
import { redirect } from "next/navigation";
import { InfoIcon } from "lucide-react";
import { useState, useEffect, use } from "react"; // Import 'use'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChatComponent } from "@/components/rag/ChatComponent";
import { ragApiClient } from "@/lib/api/rag-api-client";
import { SessionData } from "@/lib/api/rag-api-types";

interface ChatPageProps {
  params: Promise<{
    sessionId: string;
  }>;
}

export default function ChatPage({ params }: ChatPageProps) {
  const { sessionId } = use(params); // Use the 'use' hook to unwrap params
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthAndFetchData = async () => {
      const supabase = createClientComponentClient();
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (userError || !user) {
        redirect("/auth/login");
      }
      setIsAuthenticated(true); // Authenticated, proceed to fetch session details
    };
    checkAuthAndFetchData();
  }, []); // Empty dependency array means this runs once on mount
  const [sessionData, setSessionData] = useState<SessionData | null>(null);
  const [chatTitle, setChatTitle] = useState<string>("");
  const [isEditingTitle, setIsEditingTitle] = useState<boolean>(false);
  const [tempTitle, setTempTitle] = useState<string>("");

  useEffect(() => {
    const fetchSessionDetails = async () => {
      if (!isAuthenticated) return; // Don't fetch if not authenticated yet

      try {
        const data: SessionData = await ragApiClient.getSession(sessionId);
        setSessionData(data);
        const initialTitle = data.input_value || new Date().toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric', 
          hour: '2-digit', 
          minute: '2-digit' 
        });
        setChatTitle(initialTitle);
        setTempTitle(initialTitle);
      } catch (err) {
        console.error("Failed to fetch session details:", err);
        // Fallback to default title if fetching fails
        const defaultTitle = new Date().toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric', 
          hour: '2-digit', 
          minute: '2-digit' 
        });
        setChatTitle(defaultTitle);
        setTempTitle(defaultTitle);
      }
    };

    fetchSessionDetails();
  }, [sessionId, isAuthenticated]); // Add isAuthenticated to dependency array

  const handleTitleClick = () => {
    setIsEditingTitle(true);
    setTempTitle(chatTitle); // Ensure tempTitle is current when starting edit
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempTitle(e.target.value);
  };

  const handleTitleBlur = () => {
    setChatTitle(tempTitle);
    setIsEditingTitle(false);
  };

  const handleTitleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setChatTitle(tempTitle);
      setIsEditingTitle(false);
    } else if (e.key === "Escape") {
      setTempTitle(chatTitle); // Revert to last saved title
      setIsEditingTitle(false);
    }
  };

  if (!isAuthenticated) {
    return null; // Or a loading spinner
  }

  return (
    <div className="w-full flex flex-col items-start justify-start min-h-[calc(100vh-4rem)] py-8 px-4"> 
      <div className="w-full max-w-3xl mb-6">
        {isEditingTitle ? (
          <Input
            type="text"
            value={tempTitle}
            onChange={handleTitleChange}
            onBlur={handleTitleBlur}
            onKeyDown={handleTitleKeyDown}
            autoFocus
            className="text-2xl font-bold p-2 border-2 border-primary rounded"
          />
        ) : (
          <h1 
            className="text-2xl font-bold cursor-pointer hover:bg-accent p-2 rounded transition-colors duration-200"
            onClick={handleTitleClick}
            title="Click to edit title"
          >
            {chatTitle}
          </h1>
        )}
      </div>
      <div className="w-full max-w-3xl flex-1 flex flex-col">
        <ChatComponent sessionId={sessionId} />
      </div>
    </div>
  );
}

```

## Directory: `components`

---
### File: `components\auth-button.tsx`
---

```typescript
import Link from "next/link";
import { Button } from "./ui/button";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "./logout-button";

export async function AuthButton() {
  const supabase = await createClient();

  // You can also use getUser() which will be slower.
  const { data } = await supabase.auth.getClaims();

  const user = data?.claims;

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <LogoutButton />
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant={"outline"}>
        <Link href="/auth/login">Sign in</Link>
      </Button>
      <Button asChild size="sm" variant={"default"}>
        <Link href="/auth/sign-up">Sign up</Link>
      </Button>
    </div>
  );
}

```

---
### File: `components\deploy-button.tsx`
---

```typescript
import Link from "next/link";
import { Button } from "./ui/button";

export function DeployButton() {
  return (
    <>
      <Link
        href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fwith-supabase&project-name=nextjs-with-supabase&repository-name=nextjs-with-supabase&demo-title=nextjs-with-supabase&demo-description=This+starter+configures+Supabase+Auth+to+use+cookies%2C+making+the+user%27s+session+available+throughout+the+entire+Next.js+app+-+Client+Components%2C+Server+Components%2C+Route+Handlers%2C+Server+Actions+and+Middleware.&demo-url=https%3A%2F%2Fdemo-nextjs-with-supabase.vercel.app%2F&external-id=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fwith-supabase&demo-image=https%3A%2F%2Fdemo-nextjs-with-supabase.vercel.app%2Fopengraph-image.png"
        target="_blank"
      >
        <Button className="flex items-center gap-2" size="sm">
          <svg
            className="h-3 w-3"
            viewBox="0 0 76 65"
            fill="hsl(var(--background)/1)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="inherit" />
          </svg>
          <span>Deploy to Vercel</span>
        </Button>
      </Link>
    </>
  );
}

```

---
### File: `components\env-var-warning.tsx`
---

```typescript
// components/env-var-warning.tsx

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

// Component now accepts a prop for hasEnvVars
export function EnvVarWarning({ hasEnvVars }: { hasEnvVars: boolean }) {
  if (hasEnvVars) {
    return null; // Don't render if env vars are present
  }

  return (
    <div className="flex gap-4 items-center">
      <Badge variant={"outline"} className="font-normal">
        Supabase environment variables required
      </Badge>
      <div className="flex gap-2">
        <Button size="sm" variant={"outline"} disabled>
          Sign in
        </Button>
        <Button size="sm" variant={"default"} disabled>
          Sign up
        </Button>
      </div>
    </div>
  );
}
```

---
### File: `components\forgot-password-form.tsx`
---

```typescript
"use client";

import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      // The url which will be included in the email. This URL needs to be configured in your redirect URLs in the Supabase dashboard at https://supabase.com/dashboard/project/_/auth/url-configuration
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/update-password`,
      });
      if (error) throw error;
      setSuccess(true);
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      {success ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Check Your Email</CardTitle>
            <CardDescription>Password reset instructions sent</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              If you registered using your email and password, you will receive
              a password reset email.
            </p>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Reset Your Password</CardTitle>
            <CardDescription>
              Type in your email and we&apos;ll send you a link to reset your
              password
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleForgotPassword}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send reset email"}
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link
                  href="/auth/login"
                  className="underline underline-offset-4"
                >
                  Login
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

```

---
### File: `components\hero.tsx`
---

```typescript
import { NextLogo } from "./next-logo";
import { SupabaseLogo } from "./supabase-logo";

export function Hero() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex gap-8 justify-center items-center">
        <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          rel="noreferrer"
        >
          <SupabaseLogo />
        </a>
        <span className="border-l rotate-45 h-6" />
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          <NextLogo />
        </a>
      </div>
      <h1 className="sr-only">Supabase and Next.js Starter Template</h1>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        The fastest way to build apps with{" "}
        <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Supabase
        </a>{" "}
        and{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Next.js
        </a>
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}

```

---
### File: `components\login-form.tsx`
---

```typescript
"use client";

import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      // Update this route to redirect to an authenticated route. The user already has an active session.
      router.push("/protected");
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/auth/forgot-password"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/sign-up"
                className="underline underline-offset-4"
              >
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

```

---
### File: `components\logout-button.tsx`
---

```typescript
"use client";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/auth/login");
  };

  return <Button onClick={logout}>Logout</Button>;
}

```

---
### File: `components\next-logo.tsx`
---

```typescript
export function NextLogo() {
  return (
    <svg
      aria-label="Next.js logotype"
      height="68"
      role="img"
      viewBox="0 0 394 79"
      width="100"
    >
      <path
        d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z"
        fill="currentColor"
      />
      <path
        d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z"
        fill="currentColor"
      />
      <path
        d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z"
        fill="currentColor"
      />
      <path
        d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z"
        fill="currentColor"
      />
      <path
        clipRule="evenodd"
        d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z"
        fill="currentColor"
      />
      <path
        d="M356.84 45.4453H362.872V68.6846C362.863 70.8204 362.401 72.6472 361.498 74.1832C360.585 75.7191 359.321 76.8914 357.698 77.7185C356.084 78.5364 354.193 78.9546 352.044 78.9546C350.079 78.9546 348.318 78.6001 346.75 77.9094C345.182 77.2187 343.937 76.1826 343.024 74.8193C342.101 73.456 341.649 71.7565 341.649 69.7207H347.691C347.7 70.6114 347.903 71.3838 348.29 72.0291C348.677 72.6744 349.212 73.1651 349.895 73.5105C350.586 73.8559 351.38 74.0286 352.274 74.0286C353.243 74.0286 354.073 73.8286 354.746 73.4196C355.419 73.0197 355.936 72.4199 356.296 71.6201C356.646 70.8295 356.831 69.8479 356.84 68.6846V45.4453Z"
        fill="currentColor"
      />
      <path
        d="M387.691 54.5338C387.544 53.1251 386.898 52.0254 385.773 51.2438C384.638 50.4531 383.172 50.0623 381.373 50.0623C380.11 50.0623 379.022 50.2532 378.118 50.6258C377.214 51.0075 376.513 51.5164 376.033 52.1617C375.554 52.807 375.314 53.5432 375.295 54.3703C375.295 55.061 375.461 55.6608 375.784 56.1607C376.107 56.6696 376.54 57.0968 377.103 57.4422C377.656 57.7966 378.274 58.0874 378.948 58.3237C379.63 58.56 380.313 58.76 380.995 58.9236L384.14 59.6961C385.404 59.9869 386.631 60.3778 387.802 60.8776C388.973 61.3684 390.034 61.9955 390.965 62.7498C391.897 63.5042 392.635 64.413 393.179 65.4764C393.723 66.5397 394 67.7848 394 69.2208C394 71.1566 393.502 72.8562 392.496 74.3285C391.491 75.7917 390.043 76.9369 388.143 77.764C386.252 78.582 383.965 79 381.272 79C378.671 79 376.402 78.6002 374.493 77.8004C372.575 77.0097 371.08 75.8463 370.001 74.3194C368.922 72.7926 368.341 70.9294 368.258 68.7391H374.235C374.318 69.8842 374.687 70.8386 375.314 71.6111C375.95 72.3745 376.78 72.938 377.795 73.3197C378.819 73.6923 379.962 73.8832 381.226 73.8832C382.545 73.8832 383.707 73.6832 384.712 73.2924C385.708 72.9016 386.492 72.3564 387.055 71.6475C387.627 70.9476 387.913 70.1206 387.922 69.1754C387.913 68.312 387.654 67.5939 387.156 67.0304C386.649 66.467 385.948 65.9944 385.053 65.6127C384.15 65.231 383.098 64.8856 381.899 64.5857L378.081 63.6223C375.323 62.9225 373.137 61.8592 371.541 60.4323C369.937 59.0054 369.143 57.115 369.143 54.7429C369.143 52.798 369.678 51.0894 370.758 49.6261C371.827 48.1629 373.294 47.0268 375.148 46.2179C377.011 45.4 379.114 45 381.456 45C383.836 45 385.92 45.4 387.719 46.2179C389.517 47.0268 390.929 48.1538 391.952 49.5897C392.976 51.0257 393.511 52.6707 393.539 54.5338H387.691Z"
        fill="currentColor"
      />
    </svg>
  );
}

```

---
### File: `components\sign-up-form.tsx`
---

```typescript
"use client";

import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    if (password !== repeatPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/protected`,
        },
      });
      if (error) throw error;
      router.push("/auth/sign-up-success");
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Sign up</CardTitle>
          <CardDescription>Create a new account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignUp}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="repeat-password">Repeat Password</Label>
                </div>
                <Input
                  id="repeat-password"
                  type="password"
                  required
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Creating an account..." : "Sign up"}
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/auth/login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

```

---
### File: `components\supabase-logo.tsx`
---

```typescript
export function SupabaseLogo() {
  return (
    <svg
      aria-label="Supabase logo"
      width="140"
      height="30"
      viewBox="0 0 115 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4671_51136)">
        <g clipPath="url(#clip1_4671_51136)">
          <path
            d="M13.4028 21.8652C12.8424 22.5629 11.7063 22.1806 11.6928 21.2898L11.4954 8.25948H20.3564C21.9614 8.25948 22.8565 10.0924 21.8585 11.3353L13.4028 21.8652Z"
            fill="url(#paint0_linear_4671_51136)"
          />
          <path
            d="M13.4028 21.8652C12.8424 22.5629 11.7063 22.1806 11.6928 21.2898L11.4954 8.25948H20.3564C21.9614 8.25948 22.8565 10.0924 21.8585 11.3353L13.4028 21.8652Z"
            fill="url(#paint1_linear_4671_51136)"
            fillOpacity="0.2"
          />
          <path
            d="M9.79895 0.89838C10.3593 0.200591 11.4954 0.582929 11.5089 1.47383L11.5955 14.5041H2.84528C1.24026 14.5041 0.345103 12.6711 1.34316 11.4283L9.79895 0.89838Z"
            fill="#3ECF8E"
          />
        </g>
        <path
          d="M30.5894 13.3913C30.7068 14.4766 31.7052 16.3371 34.6026 16.3371C37.1279 16.3371 38.3418 14.7479 38.3418 13.1976C38.3418 11.8022 37.3824 10.6588 35.4836 10.2712L34.1131 9.98049C33.5846 9.88359 33.2323 9.5929 33.2323 9.12777C33.2323 8.58512 33.7804 8.17818 34.4656 8.17818C35.5618 8.17818 35.9729 8.89521 36.0513 9.45725L38.2243 8.97275C38.1069 7.94561 37.1867 6.22083 34.446 6.22083C32.3709 6.22083 30.844 7.63555 30.844 9.34094C30.844 10.6781 31.6856 11.7828 33.5454 12.1898L34.8179 12.4805C35.5618 12.6355 35.8555 12.9844 35.8555 13.4107C35.8555 13.9146 35.4444 14.3603 34.583 14.3603C33.4476 14.3603 32.8797 13.6626 32.8212 12.9068L30.5894 13.3913Z"
          fill="currentColor"
        />
        <path
          d="M46.6623 16.0464H49.1486C49.1094 15.717 49.0506 15.0581 49.0506 14.3216V6.51154H46.4468V12.0542C46.4468 13.1588 45.7813 13.934 44.6263 13.934C43.4126 13.934 42.8643 13.0813 42.8643 12.0154V6.51154H40.2606V12.5387C40.2606 14.6123 41.5918 16.2984 43.9215 16.2984C44.9393 16.2984 46.0556 15.9108 46.5841 15.0193C46.5841 15.4069 46.6231 15.8526 46.6623 16.0464Z"
          fill="currentColor"
        />
        <path
          d="M54.433 19.7286V15.1162C54.9027 15.7558 55.8817 16.279 57.213 16.279C59.9341 16.279 61.7545 14.1472 61.7545 11.2596C61.7545 8.43021 60.1298 6.29842 57.3108 6.29842C55.8623 6.29842 54.7855 6.93792 54.3548 7.67439V6.51159H51.8295V19.7286H54.433ZM59.19 11.279C59.19 12.9845 58.133 13.9728 56.8017 13.9728C55.4708 13.9728 54.394 12.9651 54.394 11.279C54.394 9.59299 55.4708 8.6046 56.8017 8.6046C58.133 8.6046 59.19 9.59299 59.19 11.279Z"
          fill="currentColor"
        />
        <path
          d="M63.229 13.4495C63.229 14.9417 64.4818 16.3177 66.5375 16.3177C67.9662 16.3177 68.8865 15.6588 69.3758 14.9029C69.3758 15.2712 69.4149 15.7944 69.4737 16.0464H71.862C71.8033 15.7169 71.7449 15.0386 71.7449 14.5348V9.84482C71.7449 7.92622 70.6093 6.22083 67.5555 6.22083C64.9713 6.22083 63.5811 7.86807 63.4248 9.36033L65.7347 9.84482C65.8131 9.0115 66.4395 8.29445 67.5747 8.29445C68.6713 8.29445 69.1998 8.85646 69.1998 9.53475C69.1998 9.86421 69.0238 10.1355 68.4755 10.2131L66.1068 10.5619C64.5015 10.7945 63.229 11.744 63.229 13.4495ZM67.0854 14.3991C66.2438 14.3991 65.8325 13.8565 65.8325 13.2945C65.8325 12.558 66.361 12.1898 67.0268 12.0929L69.1998 11.7634V12.1898C69.1998 13.8759 68.1818 14.3991 67.0854 14.3991Z"
          fill="currentColor"
        />
        <path
          d="M76.895 16.0465V14.8837C77.4038 15.6976 78.4217 16.279 79.7531 16.279C82.4941 16.279 84.2951 14.1278 84.2951 11.2403C84.2951 8.4108 82.6701 6.25965 79.851 6.25965C78.4217 6.25965 77.3648 6.8798 76.934 7.55806V2.01546H74.3696V16.0465H76.895ZM81.6911 11.2596C81.6911 13.0038 80.6341 13.9728 79.3028 13.9728C77.9912 13.9728 76.895 12.9845 76.895 11.2596C76.895 9.51543 77.9912 8.56584 79.3028 8.56584C80.6341 8.56584 81.6911 9.51543 81.6911 11.2596Z"
          fill="currentColor"
        />
        <path
          d="M85.7692 13.4495C85.7692 14.9417 87.022 16.3177 89.0776 16.3177C90.5065 16.3177 91.4269 15.6588 91.916 14.9029C91.916 15.2712 91.9554 15.7944 92.014 16.0464H94.4023C94.3439 15.7169 94.2851 15.0386 94.2851 14.5348V9.84482C94.2851 7.92622 93.1495 6.22083 90.0955 6.22083C87.5115 6.22083 86.1216 7.86807 85.965 9.36033L88.2747 9.84482C88.3533 9.0115 88.9798 8.29445 90.1149 8.29445C91.2115 8.29445 91.74 8.85646 91.74 9.53475C91.74 9.86421 91.5638 10.1355 91.0156 10.2131L88.647 10.5619C87.0418 10.7945 85.7692 11.744 85.7692 13.4495ZM89.6258 14.3991C88.784 14.3991 88.3727 13.8565 88.3727 13.2945C88.3727 12.558 88.9012 12.1898 89.5671 12.0929L91.74 11.7634V12.1898C91.74 13.8759 90.722 14.3991 89.6258 14.3991Z"
          fill="currentColor"
        />
        <path
          d="M96.087 13.3913C96.2042 14.4766 97.2028 16.3371 100.1 16.3371C102.626 16.3371 103.839 14.7479 103.839 13.1976C103.839 11.8022 102.88 10.6588 100.981 10.2712L99.6105 9.98049C99.082 9.88359 98.7299 9.5929 98.7299 9.12777C98.7299 8.58512 99.2778 8.17818 99.963 8.17818C101.06 8.17818 101.471 8.89521 101.549 9.45725L103.722 8.97275C103.604 7.94561 102.684 6.22083 99.9436 6.22083C97.8683 6.22083 96.3416 7.63555 96.3416 9.34094C96.3416 10.6781 97.183 11.7828 99.043 12.1898L100.316 12.4805C101.06 12.6355 101.353 12.9844 101.353 13.4107C101.353 13.9146 100.942 14.3603 100.081 14.3603C98.9451 14.3603 98.3776 13.6626 98.3188 12.9068L96.087 13.3913Z"
          fill="currentColor"
        />
        <path
          d="M107.794 10.1937C107.852 9.32158 108.596 8.31381 109.947 8.31381C111.435 8.31381 112.062 9.24406 112.101 10.1937H107.794ZM112.355 12.6743C112.042 13.527 111.376 14.1278 110.163 14.1278C108.87 14.1278 107.794 13.2169 107.735 11.9573H114.626C114.626 11.9184 114.665 11.5309 114.665 11.1626C114.665 8.10064 112.884 6.22083 109.908 6.22083C107.441 6.22083 105.17 8.19753 105.17 11.2402C105.17 14.4572 107.5 16.3371 110.143 16.3371C112.512 16.3371 114.039 14.9611 114.528 13.3138L112.355 12.6743Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_4671_51136"
          x1="11.4954"
          y1="11.1486"
          x2="19.3439"
          y2="14.4777"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#249361" />
          <stop offset="1" stopColor="#3ECF8E" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4671_51136"
          x1="8.00382"
          y1="6.42177"
          x2="11.5325"
          y2="13.1398"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <clipPath id="clip0_4671_51136">
          <rect
            width="113.85"
            height="21.8943"
            fill="currentColor"
            transform="translate(0.922119 0.456161)"
          />
        </clipPath>
        <clipPath id="clip1_4671_51136">
          <rect
            width="21.3592"
            height="21.8943"
            fill="currentColor"
            transform="translate(0.919006 0.497101)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

```

---
### File: `components\theme-switcher.tsx`
---

```typescript
"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const ICON_SIZE = 16;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size={"sm"}>
          {theme === "light" ? (
            <Sun
              key="light"
              size={ICON_SIZE}
              className={"text-muted-foreground"}
            />
          ) : theme === "dark" ? (
            <Moon
              key="dark"
              size={ICON_SIZE}
              className={"text-muted-foreground"}
            />
          ) : (
            <Laptop
              key="system"
              size={ICON_SIZE}
              className={"text-muted-foreground"}
            />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-content" align="start">
        <DropdownMenuRadioGroup
          value={theme}
          onValueChange={(e) => setTheme(e)}
        >
          <DropdownMenuRadioItem className="flex gap-2" value="light">
            <Sun size={ICON_SIZE} className="text-muted-foreground" />{" "}
            <span>Light</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="flex gap-2" value="dark">
            <Moon size={ICON_SIZE} className="text-muted-foreground" />{" "}
            <span>Dark</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="flex gap-2" value="system">
            <Laptop size={ICON_SIZE} className="text-muted-foreground" />{" "}
            <span>System</span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { ThemeSwitcher };

```

---
### File: `components\update-password-form.tsx`
---

```typescript
"use client";

import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function UpdatePasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      // Update this route to redirect to an authenticated route. The user already has an active session.
      router.push("/protected");
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Reset Your Password</CardTitle>
          <CardDescription>
            Please enter your new password below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleForgotPassword}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="password">New password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="New password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Saving..." : "Save new password"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

```

---
### File: `components\rag\ChatComponent.tsx`
---

```typescript
// components/rag/ChatComponent.tsx

"use client";

import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ragApiClient } from "@/lib/api/rag-api-client";
import { ChatMessage, ChatResource, SessionData } from "@/lib/api/rag-api-types";
import { Loader2, Send, Bot, User, FileText } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ChatComponentProps {
  sessionId: string;
}

export function ChatComponent({ sessionId }: ChatComponentProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the bottom of the chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Fetch initial session data and chat history
  useEffect(() => {
    const fetchSessionHistory = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const session: SessionData = await ragApiClient.getSession(sessionId);
        setMessages(session.chat_history || []);
      } catch (err: any) {
        setError(err.message || "Failed to load chat history.");
        console.error("Error fetching chat history:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSessionHistory();
  }, [sessionId]);

  // Scroll to bottom whenever messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: "user",
      content: inputMessage,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);
    setError(null);

    try {
      const response = await ragApiClient.chat(sessionId, inputMessage);
      const assistantMessage: ChatMessage = {
        role: "assistant",
        content: response.answer,
        timestamp: new Date().toISOString(),
        resources: response.resources,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: any) {
      setError(err.message || "Failed to get a response from the AI.");
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Error: ${err.message || "Could not get a response."}`,
          timestamp: new Date().toISOString(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderMessage = (message: ChatMessage, index: number) => (
    <div
      key={index}
      className={`flex gap-3 p-4 rounded-lg ${
        message.role === "user"
          ? "bg-primary-foreground text-primary-foreground-content justify-end"
          : "bg-muted text-muted-foreground"
      }`}
    >
      {message.role === "assistant" && (
        <Bot className="h-6 w-6 shrink-0 text-muted-foreground" />
      )}
      <div className="flex flex-col">
        <p className="text-sm font-semibold">
          {message.role === "user" ? "You" : "AI Assistant"}
        </p>
        <p className="text-base whitespace-pre-wrap">{message.content}</p>
        {message.resources && message.resources.length > 0 && (
          <div className="mt-2 text-xs text-muted-foreground/80">
            <h5 className="font-semibold mb-1">Sources:</h5>
            <ul className="list-disc list-inside">
              {message.resources.map((resource, resIndex) => (
                <li key={resIndex}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="cursor-help underline-offset-2 hover:underline">
                          {resource.source}
                          {resource.page ? ` (Page ${resource.page})` : ""}
                        </span>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs p-2 text-xs">
                        <p>{resource.text_snippet}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {message.role === "user" && (
        <User className="h-6 w-6 shrink-0 text-primary-foreground-content" />
      )}
    </div>
  );

  return (
    // Adjusted height to fill available space, removed fixed height
    <Card className="flex flex-col flex-1 w-full max-w-3xl mx-auto">
      <CardContent className="flex-1 p-0 flex flex-col overflow-hidden">
        <ScrollArea className="flex-1 p-4">
          <div className="flex flex-col gap-4">
            {messages.length === 0 && !isLoading ? (
              <div className="text-center text-muted-foreground p-8">
                Start by asking a question about your document!
              </div>
            ) : (
              messages.map(renderMessage)
            )}
            {isLoading && (
              <div className="flex justify-center items-center p-4">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
              </div>
            )}
            <div ref={messagesEndRef} /> {/* Scroll target */}
          </div>
        </ScrollArea>
      </CardContent>
      <Separator className="my-0" />
      <CardFooter className="p-4">
        <form onSubmit={handleSendMessage} className="flex w-full gap-2">
          <Input
            type="text"
            placeholder="Ask a question..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            disabled={isLoading}
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
        {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
      </CardFooter>
    </Card>
  );
}
```

---
### File: `components\rag\IngestionForm.tsx`
---

```typescript
// components/rag/IngestionForm.tsx

"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ragApiClient } from "@/lib/api/rag-api-client";
import { useSessions } from "@/lib/contexts/SessionContext";
import { Loader2, UploadCloud } from "lucide-react";

export function IngestionForm() {
  const [url, setUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { addSession } = useSessions();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      let response;
      if (file) {
        const formData = new FormData();
        formData.append("input_type", "pdf");
        formData.append("pdf_file", file);
        response = await ragApiClient.ingestContent(formData);
      } else if (url) {
        const formData = new FormData(); // Ensure website also uses FormData
        formData.append("input_type", "website");
        formData.append("web_url", url);
        response = await ragApiClient.ingestContent(formData);
      } else {
        setError("Please provide a URL or upload a PDF.");
        return;
      }

      addSession({
        user_session_id: response.session_id,
        input_type: file ? "pdf" : "website",
        input_value: file ? file.name : url,
        status: response.status,
        message: response.message,
        // Other optional fields are omitted, SessionContext will provide defaults
      });

      setUrl("");
      setFile(null);
    } catch (err: unknown) {
      setError(
        err instanceof Error 
          ? err.message 
          : "An unexpected error occurred during ingestion."
      );
      console.error("Ingestion error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Ingest New Content</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* URL Input */}
          <div className="grid gap-2">
            <Label htmlFor="url">Website URL</Label>
            <Input
              id="url"
              type="url"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                setFile(null); // Clear file selection if URL is typed
              }}
              disabled={isLoading}
            />
          </div>

          <div className="flex items-center justify-between text-muted-foreground text-sm">
            <span className="flex-grow border-t border-border"></span>
            <span className="px-2">OR</span>
            <span className="flex-grow border-t border-border"></span>
          </div>

          {/* File Upload Input */}
          <div className="grid gap-2">
            <Label htmlFor="pdf-file">Upload PDF</Label>
            <Input
              id="pdf-file"
              type="file"
              accept=".pdf"
              onChange={(e) => {
                setFile(e.target.files ? e.target.files[0] : null);
                setUrl(""); // Clear URL if file is selected
              }}
              disabled={isLoading}
            />
            {file && (
              <p className="text-xs text-muted-foreground mt-1">
                Selected: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
              </p>
            )}
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <UploadCloud className="mr-2 h-4 w-4" />
                Ingest Content
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

```

---
### File: `components\rag\SessionList.tsx`
---

```typescript
// components/rag/SessionList.tsx

"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Modal } from "@/components/ui/modal"; // Import Modal
import { useSessions } from "@/lib/contexts/SessionContext";
import { Loader2, MessageSquare, BookText, ExternalLink, UploadCloud } from "lucide-react"; // Added UploadCloud
import { ragApiClient } from "@/lib/api/rag-api-client"; // For FAQ generation

export function SessionList() {
  const { sessions, loading, error, fetchSessions, updateSessionStatus } =
    useSessions();
  const [faqLoadingSessionId, setFaqLoadingSessionId] = useState<string | null>(
    null,
  );
  const [faqErrorSessionId, setFaqErrorSessionId] = useState<string | null>(
    null,
  );
  const [isFaqModalOpen, setIsFaqModalOpen] = useState(false);
  const [selectedFaqsForModal, setSelectedFaqsForModal] = useState<any>(null); // Consider a more specific type if possible

  const handleGenerateFaqs = async (sessionId: string) => {
    setFaqLoadingSessionId(sessionId);
    setFaqErrorSessionId(null);
    try {
      const response = await ragApiClient.generateFaqs(sessionId);
      updateSessionStatus(sessionId, response); // Update local state with new status
      // Fetch the updated session data to display in modal
      const updatedSessionData = await ragApiClient.getSession(sessionId);
      setSelectedFaqsForModal(updatedSessionData);
      setIsFaqModalOpen(true);
    } catch (err: unknown) {
      setFaqErrorSessionId(sessionId);
      console.error(`Failed to generate FAQs for session ${sessionId}:`, err);
    } finally {
      setFaqLoadingSessionId(null);
    }
  };

  const handleCloseFaqModal = () => {
    setIsFaqModalOpen(false);
    setSelectedFaqsForModal(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        <p className="ml-4 text-muted-foreground">Loading sessions...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-8">
        <p>Error loading sessions: {error}</p>
        <Button onClick={fetchSessions} className="mt-4">
          Retry
        </Button>
      </div>
    );
  }

  if (sessions.length === 0) {
    return (
      <p className="text-muted-foreground text-center p-8">
        No document sessions found. Ingest new content above!
      </p>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {sessions.map((session) => (
        <Card key={session.user_session_id}>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2 flex-wrap">
              {session.input_type === "website" ? (
                <ExternalLink size={18} />
              ) : (
                <UploadCloud size={18} />
              )}
              <span className="truncate">
                {(session.input_value ?? "").length > 30
                  ? `${formatWebsiteUrl(session.input_value).substring(0, 27)}...`
                  : formatWebsiteUrl(session.input_value) || "Untitled Session"}
              </span>
            </CardTitle>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="outline">
                {session.input_type === "website" ? "Web" : "PDF"}
              </Badge>
            </div>
            <CardDescription>
              Session ID:{" "}
              <span className="font-mono text-xs">
                {session.user_session_id.substring(0, 8)}...
              </span>
            </CardDescription>
            <div className="flex items-center gap-2 mt-2">
              <Badge
                variant={
                  session.status === "ready"
                    ? "default"
                    : session.status === "error"
                      ? "destructive"
                      : "secondary"
                }
              >
                {session.status.replace(/_/g, " ")}
              </Badge>
              {session.status !== "ready" && session.status !== "error" && (
                <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
              )}
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">
              {session.message}
            </p>
            <div className="flex gap-2 mt-4">
              {session.context_is_ready ? (
                <>
                  <Button asChild size="sm">
                    <Link href={`/protected/chat/${session.user_session_id}`}>
                      <MessageSquare className="mr-2" /> Chat
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleGenerateFaqs(session.user_session_id)}
                    disabled={
                      faqLoadingSessionId === session.user_session_id ||
                      session.status === "faq_processing"
                    }
                  >
                    {faqLoadingSessionId === session.user_session_id ||
                    session.status === "faq_processing" ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <BookText className="mr-2" />
                    )}
                    Generate FAQs
                  </Button>
                </>
              ) : (
                <Button size="sm" disabled>
                  Processing...
                </Button>
              )}
            </div>
            {faqErrorSessionId === session.user_session_id && (
              <p className="text-sm text-red-500 mt-2">
                Failed to generate FAQs for this session.
              </p>
            )}
            {/* Removed inline FAQ display */}
          </CardContent>
        </Card>
      ))}

      <Modal
        isOpen={isFaqModalOpen}
        onClose={handleCloseFaqModal}
        title="Generated FAQs"
        className="max-w-3xl"
      >
        {selectedFaqsForModal && selectedFaqsForModal.generated_faqs &&
          selectedFaqsForModal.generated_faqs.length > 0 ? (
          <div className="max-h-96 overflow-y-auto">
            <ul className="space-y-4">
              {selectedFaqsForModal.generated_faqs.map((faq: any, index: number) => (
                <li key={index} className="border-b pb-4 last:border-b-0">
                  <p className="font-semibold text-primary">Q: {faq.question}</p>
                  <p className="text-muted-foreground mt-1">A: {faq.answer}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-muted-foreground">No FAQs generated yet or an error occurred.</p>
        )}
      </Modal>
    </div>
  );
}

// Helper function to clean website URLs
function formatWebsiteUrl(url: string | null | undefined): string {
  if (!url) return "";
  let formattedUrl = url;
  if (url.startsWith("https://")) {
    formattedUrl = url.substring(8);
  } else if (url.startsWith("http://")) {
    formattedUrl = url.substring(7);
  }
  if (formattedUrl.startsWith("www.")) {
    formattedUrl = formattedUrl.substring(4);
  }
  return formattedUrl;
}

```

---
### File: `components\tutorial\code-block.tsx`
---

```typescript
"use client";

import { useState } from "react";
import { Button } from "../ui/button";

const CopyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export function CodeBlock({ code }: { code: string }) {
  const [icon, setIcon] = useState(CopyIcon);

  const copy = async () => {
    await navigator?.clipboard?.writeText(code);
    setIcon(CheckIcon);
    setTimeout(() => setIcon(CopyIcon), 2000);
  };

  return (
    <pre className="bg-muted rounded-md p-6 my-6 relative">
      <Button
        size="icon"
        onClick={copy}
        variant={"outline"}
        className="absolute right-2 top-2"
      >
        {icon}
      </Button>
      <code className="text-xs p-3">{code}</code>
    </pre>
  );
}

```

---
### File: `components\tutorial\connect-supabase-steps.tsx`
---

```typescript
import { TutorialStep } from "./tutorial-step";

export function ConnectSupabaseSteps() {
  return (
    <ol className="flex flex-col gap-6">
      <TutorialStep title="Create Supabase project">
        <p>
          Head over to{" "}
          <a
            href="https://app.supabase.com/project/_/settings/api"
            target="_blank"
            className="font-bold hover:underline text-foreground/80"
            rel="noreferrer"
          >
            database.new
          </a>{" "}
          and create a new Supabase project.
        </p>
      </TutorialStep>

      <TutorialStep title="Declare environment variables">
        <p>
          Rename the{" "}
          <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs font-medium text-secondary-foreground border">
            .env.example
          </span>{" "}
          file in your Next.js app to{" "}
          <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs font-medium text-secondary-foreground border">
            .env.local
          </span>{" "}
          and populate with values from{" "}
          <a
            href="https://app.supabase.com/project/_/settings/api"
            target="_blank"
            className="font-bold hover:underline text-foreground/80"
            rel="noreferrer"
          >
            your Supabase project&apos;s API Settings
          </a>
          .
        </p>
      </TutorialStep>

      <TutorialStep title="Restart your Next.js development server">
        <p>
          You may need to quit your Next.js development server and run{" "}
          <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs font-medium text-secondary-foreground border">
            npm run dev
          </span>{" "}
          again to load the new environment variables.
        </p>
      </TutorialStep>

      <TutorialStep title="Refresh the page">
        <p>
          You may need to refresh the page for Next.js to load the new
          environment variables.
        </p>
      </TutorialStep>
    </ol>
  );
}

```

---
### File: `components\tutorial\fetch-data-steps.tsx`
---

```typescript
import { TutorialStep } from "./tutorial-step";
import { CodeBlock } from "./code-block";

const create = `create table notes (
  id bigserial primary key,
  title text
);

insert into notes(title)
values
  ('Today I created a Supabase project.'),
  ('I added some data and queried it from Next.js.'),
  ('It was awesome!');
`.trim();

const server = `import { createClient } from '@/utils/supabase/server'

export default async function Page() {
  const supabase = await createClient()
  const { data: notes } = await supabase.from('notes').select()

  return <pre>{JSON.stringify(notes, null, 2)}</pre>
}
`.trim();

const client = `'use client'

import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'

export default function Page() {
  const [notes, setNotes] = useState<any[] | null>(null)
  const supabase = createClient()

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from('notes').select()
      setNotes(data)
    }
    getData()
  }, [])

  return <pre>{JSON.stringify(notes, null, 2)}</pre>
}
`.trim();

export function FetchDataSteps() {
  return (
    <ol className="flex flex-col gap-6">
      <TutorialStep title="Create some tables and insert some data">
        <p>
          Head over to the{" "}
          <a
            href="https://supabase.com/dashboard/project/_/editor"
            className="font-bold hover:underline text-foreground/80"
            target="_blank"
            rel="noreferrer"
          >
            Table Editor
          </a>{" "}
          for your Supabase project to create a table and insert some example
          data. If you&apos;re stuck for creativity, you can copy and paste the
          following into the{" "}
          <a
            href="https://supabase.com/dashboard/project/_/sql/new"
            className="font-bold hover:underline text-foreground/80"
            target="_blank"
            rel="noreferrer"
          >
            SQL Editor
          </a>{" "}
          and click RUN!
        </p>
        <CodeBlock code={create} />
      </TutorialStep>

      <TutorialStep title="Query Supabase data from Next.js">
        <p>
          To create a Supabase client and query data from an Async Server
          Component, create a new page.tsx file at{" "}
          <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs font-medium text-secondary-foreground border">
            /app/notes/page.tsx
          </span>{" "}
          and add the following.
        </p>
        <CodeBlock code={server} />
        <p>Alternatively, you can use a Client Component.</p>
        <CodeBlock code={client} />
      </TutorialStep>

      <TutorialStep title="Explore the Supabase UI Library">
        <p>
          Head over to the{" "}
          <a
            href="https://supabase.com/ui"
            className="font-bold hover:underline text-foreground/80"
          >
            Supabase UI library
          </a>{" "}
          and try installing some blocks. For example, you can install a
          Realtime Chat block by running:
        </p>
        <CodeBlock
          code={
            "npx shadcn@latest add https://supabase.com/ui/r/realtime-chat-nextjs.json"
          }
        />
      </TutorialStep>

      <TutorialStep title="Build in a weekend and scale to millions!">
        <p>You&apos;re ready to launch your product to the world! 🚀</p>
      </TutorialStep>
    </ol>
  );
}

```

---
### File: `components\tutorial\sign-up-user-steps.tsx`
---

```typescript
import Link from "next/link";
import { TutorialStep } from "./tutorial-step";
import { ArrowUpRight } from "lucide-react";

export function SignUpUserSteps() {
  return (
    <ol className="flex flex-col gap-6">
      {process.env.VERCEL_ENV === "preview" ||
      process.env.VERCEL_ENV === "production" ? (
        <TutorialStep title="Set up redirect urls">
          <p>It looks like this App is hosted on Vercel.</p>
          <p className="mt-4">
            This particular deployment is
            <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs font-medium text-secondary-foreground border">
              &quot;{process.env.VERCEL_ENV}&quot;
            </span>{" "}
            on
            <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs font-medium text-secondary-foreground border">
              https://{process.env.VERCEL_URL}
            </span>
            .
          </p>
          <p className="mt-4">
            You will need to{" "}
            <Link
              className="text-primary hover:text-foreground"
              href={
                "https://supabase.com/dashboard/project/_/auth/url-configuration"
              }
            >
              update your Supabase project
            </Link>{" "}
            with redirect URLs based on your Vercel deployment URLs.
          </p>
          <ul className="mt-4">
            <li>
              -{" "}
              <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs font-medium text-secondary-foreground border">
                http://localhost:3000/**
              </span>
            </li>
            <li>
              -{" "}
              <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs font-medium text-secondary-foreground border">
                {`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/**`}
              </span>
            </li>
            <li>
              -{" "}
              <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs font-medium text-secondary-foreground border">
                {`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL?.replace(
                  ".vercel.app",
                  "",
                )}-*-[vercel-team-url].vercel.app/**`}
              </span>{" "}
              (Vercel Team URL can be found in{" "}
              <Link
                className="text-primary hover:text-foreground"
                href="https://vercel.com/docs/accounts/create-a-team#find-your-team-id"
                target="_blank"
              >
                Vercel Team settings
              </Link>
              )
            </li>
          </ul>
          <Link
            href="https://supabase.com/docs/guides/auth/redirect-urls#vercel-preview-urls"
            target="_blank"
            className="text-primary/50 hover:text-primary flex items-center text-sm gap-1 mt-4"
          >
            Redirect URLs Docs <ArrowUpRight size={14} />
          </Link>
        </TutorialStep>
      ) : null}
      <TutorialStep title="Sign up your first user">
        <p>
          Head over to the{" "}
          <Link
            href="auth/sign-up"
            className="font-bold hover:underline text-foreground/80"
          >
            Sign up
          </Link>{" "}
          page and sign up your first user. It&apos;s okay if this is just you
          for now. Your awesome idea will have plenty of users later!
        </p>
      </TutorialStep>
    </ol>
  );
}

```

---
### File: `components\tutorial\tutorial-step.tsx`
---

```typescript
import { Checkbox } from "../ui/checkbox";

export function TutorialStep({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="relative">
      <Checkbox
        id={title}
        name={title}
        className={`absolute top-[3px] mr-2 peer`}
      />
      <label
        htmlFor={title}
        className={`relative text-base text-foreground peer-checked:line-through font-medium`}
      >
        <span className="ml-8">{title}</span>
        <div
          className={`ml-8 text-sm peer-checked:line-through font-normal text-muted-foreground`}
        >
          {children}
        </div>
      </label>
    </li>
  );
}

```

---
### File: `components\ui\badge.tsx`
---

```typescript
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

```

---
### File: `components\ui\button.tsx`
---

```typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

```

---
### File: `components\ui\card.tsx`
---

```typescript
import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};

```

---
### File: `components\ui\checkbox.tsx`
---

```typescript
"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };

```

---
### File: `components\ui\dropdown-menu.tsx`
---

```typescript
"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
      className,
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};

```

---
### File: `components\ui\input.tsx`
---

```typescript
import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };

```

---
### File: `components\ui\label.tsx`
---

```typescript
"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };

```

---
### File: `components\ui\modal.tsx`
---

```typescript
"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Modal({ isOpen, onClose, title, children, className }: ModalProps) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        className={cn(
          "relative w-full max-w-2xl rounded-lg border bg-background p-6 shadow-lg",
          className
        )}
      >
        {title && (
          <div className="flex items-center justify-between border-b pb-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        )}
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}

```

---
### File: `components\ui\scroll-area.tsx`
---

```typescript
"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" &&
          "h-2.5 flex-col border-t border-t-transparent",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="bg-border relative flex-1 rounded-full"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}

export { ScrollArea, ScrollBar }

```

---
### File: `components\ui\separator.tsx`
---

```typescript
"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  )
}

export { Separator }

```

---
### File: `components\ui\tooltip.tsx`
---

```typescript
"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }

```

## Directory: `lib`

---
### File: `lib\env.ts`
---

```typescript
// lib/env.ts

// This function will only run on the server side.
// It explicitly checks for the presence of the environment variables.
export function checkSupabaseEnvVars(): boolean {
    const hasUrl = !!process.env.NEXT_PUBLIC_SUPABASE_URL;
    const hasKey = !!process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY;
  
    return hasUrl && hasKey;
  }
  
  // This function provides the RAG API URL, ensuring it's set.
  export function getRagApiUrl(): string {
    const url = process.env.NEXT_PUBLIC_RAG_API_URL;
    if (!url) {
      // In production, this should ideally be caught at build time or deployment
      console.error("NEXT_PUBLIC_RAG_API_URL is not set!");
      throw new Error("RAG API URL is not configured. Please set NEXT_PUBLIC_RAG_API_URL in your .env.local file.");
    }
    return url;
  }
```

---
### File: `lib\utils.ts`
---

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// This check can be removed, it is just for tutorial purposes
export const hasEnvVars = !!(
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY
);

```

---
### File: `lib\api\rag-api-client.ts`
---

```typescript
// lib/api/rag-api-client.ts

import {
    IngestResponse,
    StatusResponse,
    ChatResponse,
    FAQGenerationResponse,
    SessionData,
  } from "./rag-api-types"; // We will create this file next
  import { getRagApiUrl } from "@/lib/env"; // This will be created soon
  
  const RAG_API_BASE_URL = getRagApiUrl();
  
  // Helper function for API requests
  async function callApi<T>(
    endpoint: string,
    method: string,
    body?: unknown,
    headers?: HeadersInit,
  ): Promise<T> {
    const url = `${RAG_API_BASE_URL}${endpoint}`;
  
    const requestHeaders: Record<string, string> = {
      "Content-Type": "application/json",
      ...(headers as Record<string, string>),
    };
  
    const config: RequestInit = {
      method,
      headers: requestHeaders,
    };
  
    if (body) {
      if (body instanceof FormData) {
        delete requestHeaders["Content-Type"];
        config.body = body;
      } else {
        config.body = JSON.stringify(body);
      }
    }
  
    try {
      const response = await fetch(url, config);
  
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.detail ||
            `API Error: ${response.status} ${response.statusText}`,
        );
      }
  
      return await response.json();
    } catch (error) {
      console.error(`Error calling API endpoint ${endpoint}:`, error);
      throw error;
    }
  }
  
  // --- API Client Functions ---
  
  export const ragApiClient = {
    /**
     * Initiates content ingestion for a website URL or PDF file.
     * @param data - Either { input_type: 'website', web_url: string } or FormData for PDF.
     */
    ingestContent: async (
      data: { input_type: "website"; web_url: string } | FormData,
    ): Promise<IngestResponse> => {
      if (!(data instanceof FormData)) {
        const formData = new FormData();
        formData.append("input_type", data.input_type);
        formData.append("web_url", data.web_url);
        data = formData;
      }
      return callApi<IngestResponse>("/api/v1/ingest", "POST", data);
    },
  
    /**
     * Checks the status of a content ingestion job.
     * @param sessionId - The ID of the session.
     */
    getIngestionStatus: async (sessionId: string): Promise<StatusResponse> => {
      return callApi<StatusResponse>(`/api/v1/ingest/status/${sessionId}`, "GET");
    },
  
    /**
     * Submits a question to an active session and receives a context-aware answer.
     * @param sessionId - The ID of the session.
     * @param question - The user's question.
     */
    chat: async (sessionId: string, question: string): Promise<ChatResponse> => {
      return callApi<ChatResponse>(`/api/v1/chat/${sessionId}`, "POST", {
        question,
      });
    },
  
    /**
     * Initiates an asynchronous job to generate FAQs for an already ingested session.
     * @param sessionId - The ID of the session.
     */
    generateFaqs: async (sessionId: string): Promise<FAQGenerationResponse> => {
      return callApi<FAQGenerationResponse>(
        `/api/v1/faq/generate/${sessionId}`,
        "POST",
      );
    },
  
    /**
     * Retrieves the complete data object for a given session.
     * @param sessionId - The ID of the session.
     */
    getSession: async (sessionId: string): Promise<SessionData> => {
      return callApi<SessionData>(`/api/v1/session/${sessionId}`, "GET");
    },
  
    /**
     * Updates a session object with the provided data.
     * @param sessionId - The ID of the session.
     * @param updates - A partial object of session fields to update.
     */
    updateSession: async (
      sessionId: string,
      updates: Partial<SessionData>,
    ): Promise<SessionData> => {
      return callApi<SessionData>(`/api/v1/session/${sessionId}`, "PUT", updates);
    },
  };

```

---
### File: `lib\api\rag-api-types.ts`
---

```typescript
// lib/api/rag-api-types.ts

// --- API Request/Response Models ---

export type IngestResponse = {
    session_id: string;
    // CORRECTED: Make status more specific
    status: "processing" | "faq_processing" | "ready" | "error";
    message: string;
  };
  
  export type StatusResponse = {
    session_id: string;
    status: "processing" | "faq_processing" | "ready" | "error";
    message: string;
  };
  
  export type ChatRequest = {
    question: string;
  };
  
  export type ChatResource = {
    source: string;
    text_snippet: string;
    page?: number; // Optional for PDFs
    line_range?: string; // Optional for PDFs
  };
  
  export type ChatResponse = {
    answer: string;
    resources: ChatResource[];
  };
  
  export type FAQGenerationResponse = {
    session_id: string;
    // CORRECTED: Make status more specific
    status: "processing" | "faq_processing" | "ready" | "error";
    message: string;
  };
  
  // --- Session Data Model (matches your Python SessionData Pydantic model) ---
  
  export type ChatMessage = {
    role: "user" | "assistant";
    content: string;
    timestamp: string; // ISO format datetime
    resources?: ChatResource[]; // Only for assistant messages
  };
  
  export type GeneratedFAQ = {
    question: string;
    answer: string;
  };
  
  export type SessionData = {
    user_session_id: string;
    input_type: string | null;
    input_value: string | null;
  
    processed_content?: string | null;
    pdf_file_content_b64?: string | null;
    generated_faqs?: GeneratedFAQ[];
    active_namespaces?: string[];
  
    chat_history: ChatMessage[];
  
    context_is_ready: boolean;
  
    status: "processing" | "faq_processing" | "ready" | "error";
    message: string;
  };
```

---
### File: `lib\contexts\SessionContext.tsx`
---

```typescript
// lib/contexts/SessionContext.tsx

"use client";

import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import { SessionData, StatusResponse } from "@/lib/api/rag-api-types";
import { useSessionManagement } from "./useSessionManagement"; // NEW IMPORT
import { useSessionPolling } from "./useSessionPolling"; // NEW IMPORT

// Define the shape of our context state
interface SessionContextType {
  sessions: SessionData[];
  loading: boolean;
  error: string | null;
  fetchSessions: () => Promise<void>;
  addSession: (newSessionPartial: Partial<SessionData>) => Promise<void>;
  updateSessionStatus: (sessionId: string, status: StatusResponse) => void;
}

// Create the context
const SessionContext = createContext<SessionContextType | undefined>(undefined);

// Define the provider component
export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [sessions, setSessions] = useState<SessionData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Use the new custom hook for polling logic
  const { pollingIntervals, startPolling, updateSessionStatus, clearIntervals } =
    useSessionPolling({ setSessions, setError });

  // Use the new custom hook for session management (fetch/add)
  const { fetchSessions, addSession } = useSessionManagement({
    setSessions,
    setLoading,
    setError,
    startPolling,
    updateSessionStatus,
  });

  // Effect to fetch sessions on initial load or user change
  useEffect(() => {
    fetchSessions();

    // Cleanup polling intervals on unmount
    return () => {
      clearIntervals();
    };
  }, [fetchSessions, clearIntervals]); // Depend on fetchSessions and clearIntervals

  const value = useMemo(
    () => ({
      sessions,
      loading,
      error,
      fetchSessions,
      addSession,
      updateSessionStatus,
    }),
    [sessions, loading, error, fetchSessions, addSession, updateSessionStatus],
  );

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  );
}

// Custom hook to use the session context
export function useSessions() {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error("useSessions must be used within a SessionProvider");
  }
  return context;
}
```

---
### File: `lib\contexts\UserContext.tsx`
---

```typescript
// lib/contexts/UserContext.tsx

"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client"; // Import client-side Supabase client
import { User } from "@supabase/supabase-js"; // Supabase User type

// Define the shape of our UserContext state
interface UserContextType {
  user: User | null;
  loading: boolean; // True if still fetching initial user state
}

// Create the context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Define the provider component
export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient(); // Get the client-side Supabase instance

  useEffect(() => {
    // Fetch initial user data
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    fetchUser();

    // Set up a real-time listener for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
      setLoading(false); // Ensure loading is false after any auth change
    });

    // Cleanup subscription on unmount
    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]); // Re-run if supabase client instance changes (unlikely)

  const value = { user, loading };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

// Custom hook to use the UserContext
export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
```

---
### File: `lib\contexts\useSessionManagement.ts`
---

```typescript
// lib/contexts/useSessionManagement.ts

import { useCallback } from "react";
import { ragApiClient } from "@/lib/api/rag-api-client";
import { SessionData, StatusResponse } from "@/lib/api/rag-api-types";
import { useUser } from "@/lib/contexts/UserContext";
import { createClient as createSupabaseClient } from "@/lib/supabase/client";

interface UseSessionManagementProps {
  setSessions: React.Dispatch<React.SetStateAction<SessionData[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  startPolling: (sessionId: string) => void;
  updateSessionStatus: (sessionId: string, status: StatusResponse) => void;
}

export function useSessionManagement({
  setSessions,
  setLoading,
  setError,
  startPolling,
  updateSessionStatus,
}: UseSessionManagementProps) {
  const { user, loading: userLoading } = useUser();
  const supabase = createSupabaseClient();

  // Function to fetch all sessions for the current user from Supabase and RAG API
  const fetchSessions = useCallback(async () => {
    // Only fetch if user is loaded and logged in
    if (userLoading || !user?.id) {
      setLoading(false);
      setSessions([]); // Clear sessions if no user
      return;
    }

    setLoading(true);
    setError(null);
    try {
      // 1. Fetch user's RAG session IDs from Supabase
      const { data: userRagSessions, error: dbError } = await supabase
        .from("user_rag_sessions")
        .select("rag_session_id")
        .eq("user_id", user.id);

      if (dbError) {
        throw new Error(dbError.message || "Failed to fetch session IDs from Supabase.");
      }

      const fetchedSessions: SessionData[] = [];
      const sessionIdsToPoll: string[] = [];

      // 2. Fetch full session data from RAG API for each ID
      const fetchPromises = (userRagSessions || []).map(async ({ rag_session_id }) => {
        try {
          const session = await ragApiClient.getSession(rag_session_id);
          if (
            session.status === "processing" ||
            session.status === "faq_processing"
          ) {
            sessionIdsToPoll.push(session.user_session_id);
          }
          return session;
        } catch (sessionFetchError: any) {
          console.error(
            `Failed to fetch RAG session ${rag_session_id} from API:`,
            sessionFetchError,
          );
          return {
            user_session_id: rag_session_id,
            input_type: null,
            input_value: `Error loading: ${rag_session_id}`,
            processed_content: null,
            pdf_file_content_b64: null,
            generated_faqs: [],
            active_namespaces: [],
            chat_history: [],
            context_is_ready: false,
            status: "error",
            message: sessionFetchError.message || "Failed to load session data from RAG API",
          } as SessionData;
        }
      });

      const results = await Promise.allSettled(fetchPromises);

      results.forEach((result) => {
        if (result.status === "fulfilled") {
          fetchedSessions.push(result.value);
        }
      });

      setSessions(fetchedSessions);

      // 3. Start polling for any sessions still in progress
      sessionIdsToPoll.forEach((id) => startPolling(id));
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred while fetching sessions.");
      console.error("Error in fetchSessions:", err);
    } finally {
      setLoading(false);
    }
  }, [user?.id, userLoading, supabase, startPolling, setSessions, setLoading, setError]);

  // Function to add a new session to the local state and Supabase
  const addSession = useCallback(
    async (newSessionPartial: Partial<SessionData>) => {
      if (!user?.id) {
        setError("User not authenticated. Cannot add session.");
        return;
      }

      const newSession: SessionData = {
        processed_content: null,
        pdf_file_content_b64: null,
        generated_faqs: [],
        active_namespaces: [],
        chat_history: [],
        context_is_ready: false,
        ...newSessionPartial,
        user_session_id: newSessionPartial.user_session_id!,
        input_type: newSessionPartial.input_type!,
        input_value: newSessionPartial.input_value!,
        status: newSessionPartial.status!,
        message: newSessionPartial.message!,
      };

      // Add to local state immediately for quick UI feedback
      setSessions((prevSessions) => [...prevSessions, newSession]);

      try {
        // Save the new session ID to Supabase
        const { error: dbError } = await supabase.from("user_rag_sessions").insert({
          user_id: user.id,
          rag_session_id: newSession.user_session_id,
        });

        if (dbError) {
          throw new Error(dbError.message || "Failed to save session to database.");
        }

        // Only start polling if Supabase save was successful
        if (
          newSession.status === "processing" ||
          newSession.status === "faq_processing"
        ) {
          startPolling(newSession.user_session_id);
        }
      } catch (err: any) {
        setError(err.message || "Failed to add session.");
        console.error("Add session error:", err);
        // Remove the session from local state if Supabase save fails
        setSessions((prev) =>
          prev.filter((s) => s.user_session_id !== newSession.user_session_id),
        );
      }
    },
    [user?.id, supabase, startPolling, setSessions, setError],
  );

  return { fetchSessions, addSession };
}
```

---
### File: `lib\contexts\useSessionPolling.ts`
---

```typescript
// lib/contexts/useSessionPolling.ts

import { useState, useCallback, useRef } from "react";
import { ragApiClient } from "@/lib/api/rag-api-client";
import { SessionData, StatusResponse } from "@/lib/api/rag-api-types";

interface UseSessionPollingProps {
  setSessions: React.Dispatch<React.SetStateAction<SessionData[]>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

export function useSessionPolling({
  setSessions,
  setError,
}: UseSessionPollingProps) {
  const pollingIntervalsRef = useRef<Map<string, NodeJS.Timeout>>(new Map());

  // Function to update a session's status in the local state
  // This function is crucial as it's called by the polling and by addSession/generateFaqs
  const updateSessionStatus = useCallback(
    (sessionId: string, statusResponse: StatusResponse) => {
      setSessions((prevSessions) => {
        const updatedSessions = prevSessions.map((session) =>
          session.user_session_id === sessionId
            ? {
                ...session,
                status: statusResponse.status,
                message: statusResponse.message,
                context_is_ready: statusResponse.status === "ready",
              }
            : session,
        );

        // After updating the status, if it's still processing/faq_processing,
        // ensure polling is active for this session.
        // This handles cases where status is updated externally (e.g., from generateFaqs click)
        const currentSession = updatedSessions.find(s => s.user_session_id === sessionId);
        if (currentSession && (currentSession.status === "processing" || currentSession.status === "faq_processing")) {
            // Ensure polling is running for this session
            // We use a direct call here to avoid circular dependencies with startPolling's useCallback
            if (!pollingIntervalsRef.current.has(sessionId)) {
                console.log(`[Polling] Re-starting polling for ${sessionId} due to status update to ${currentSession.status}`);
                // Call the internal polling logic directly, not the memoized startPolling
                // This is a common pattern when a callback needs to trigger another callback
                // that depends on a ref, without creating a dependency loop.
                const interval = setInterval(async () => {
                    try {
                        const statusResp = await ragApiClient.getIngestionStatus(sessionId);
                        console.log(`Polling status for ${sessionId}:`, statusResp.status);
                        updateSessionStatus(sessionId, statusResp); // Recursive call is fine here

                        if (statusResp.status === "ready" || statusResp.status === "error") {
                            clearInterval(interval);
                            pollingIntervalsRef.current.delete(sessionId);
                            if (statusResp.status === "ready") {
                                const fullSessionData = await ragApiClient.getSession(sessionId);
                                setSessions(p => p.map(s => s.user_session_id === sessionId ? fullSessionData : s));
                            }
                        }
                    } catch (err: any) {
                        console.error(`Error polling session ${sessionId}:`, err);
                        clearInterval(interval);
                        pollingIntervalsRef.current.delete(sessionId);
                        updateSessionStatus(sessionId, {
                            session_id: sessionId,
                            status: "error",
                            message: err.message || "Polling error",
                        });
                    }
                }, 5000);
                pollingIntervalsRef.current.set(sessionId, interval);
            }
        }
        return updatedSessions;
      });
    },
    [setSessions, setError], // Dependencies for updateSessionStatus
  );


  // Function to start polling for a session's status (primarily for initial setup)
  const startPolling = useCallback(
    (sessionId: string) => {
      // Only start if not already polling
      if (!pollingIntervalsRef.current.has(sessionId)) {
        console.log(`[Polling] Initial start polling for ${sessionId}`);
        const interval = setInterval(async () => {
          try {
            const statusResponse = await ragApiClient.getIngestionStatus(
              sessionId,
            );
            console.log(`Polling status for ${sessionId}:`, statusResponse.status);
            updateSessionStatus(sessionId, statusResponse); // This call is now safe

            if (
              statusResponse.status === "ready" ||
              statusResponse.status === "error"
            ) {
              clearInterval(interval);
              pollingIntervalsRef.current.delete(sessionId);
              if (statusResponse.status === "ready") {
                const fullSessionData = await ragApiClient.getSession(sessionId);
                setSessions((prevSessions) =>
                  prevSessions.map((session) =>
                    session.user_session_id === sessionId
                      ? fullSessionData
                      : session,
                  ),
                );
              }
            }
          } catch (err: any) {
            console.error(`Error polling session ${sessionId}:`, err);
            clearInterval(interval);
            pollingIntervalsRef.current.delete(sessionId);
            updateSessionStatus(sessionId, {
              session_id: sessionId,
              status: "error",
              message: err.message || "Polling error",
            });
          }
        }, 5000); // Poll every 5 seconds

        pollingIntervalsRef.current.set(sessionId, interval);
      }
    },
    [updateSessionStatus, setSessions, setError], // Dependencies for startPolling
  );

  // Function to clear all active polling intervals
  const clearIntervals = useCallback(() => {
    pollingIntervalsRef.current.forEach((interval) => clearInterval(interval));
    pollingIntervalsRef.current.clear();
  }, []);

  return { pollingIntervals: pollingIntervalsRef.current, startPolling, updateSessionStatus, clearIntervals };
}
```

---
### File: `lib\supabase\client-component.ts`
---

```typescript
import { createBrowserClient } from "@supabase/ssr";

/**
 * A Supabase client for use in Client Components.
 * This client uses browser cookies and does not rely on server-side APIs.
 */
export function createClientComponentClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY!
  );
}

```

---
### File: `lib\supabase\client.ts`
---

```typescript
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY!,
  );
}

```

---
### File: `lib\supabase\middleware.ts`
---

```typescript
// lib/supabase/middleware.ts

import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { checkSupabaseEnvVars } from "../env"; // NEW IMPORT

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  // If the env vars are not set, skip middleware check. You can remove this
  // once you setup the project.
  if (!checkSupabaseEnvVars()) {
    return supabaseResponse;
  }

  // With Fluid compute, don't put this client in a global environment
  // variable. Always create a new one on each request.
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // Do not run code between createServerClient and
  // supabase.auth.getClaims(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  // IMPORTANT: If you remove getClaims() and you use server-side rendering
  // with the Supabase client, your users may be randomly logged out.
  const { data } = await supabase.auth.getClaims();
  const user = data?.claims;

  if (
    request.nextUrl.pathname !== "/" &&
    !user &&
    !request.nextUrl.pathname.startsWith("/login") &&
    !request.nextUrl.pathname.startsWith("/auth")
  ) {
    // no user, potentially respond by redirecting the user to the login page
    const url = request.nextUrl.clone();
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);
  }

  // IMPORTANT: You *must* return the supabaseResponse object as it is.
  // If you're creating a new response object with NextResponse.next() make sure to:
  // 1. Pass the request in it, like so:
  //    const myNewResponse = NextResponse.next({ request })
  // 2. Copy over the cookies, like so:
  //    myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
  // 3. Change the myNewResponse object to fit your needs, but avoid changing
  //    the cookies!
  // 4. Finally:
  //    return myNewResponse
  // If this is not done, you may be causing the browser and server to go out
  // of sync and terminate the user's session prematurely!

  return supabaseResponse;
}
```

---
### File: `lib\supabase\server.ts`
---

```typescript
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * Especially important if using Fluid compute: Don't put this client in a
 * global variable. Always create a new client within each function when using
 * it.
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  );
}

```

