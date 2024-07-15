# Creati AI - A Modern Next.js 14 SaaS AI Platform.

This project is a SaaS AI Platform application built using Next.js. It features user authentication with Clerk, payment processing with Stripe, and includes 5 types of services for clients.

## Folder Structure

Here is the folder structure of this app.

```bash
creati-ai/
  |- app/
    |-- (auth)/
        |--- (routes)/
            |---- sign-in/[[...sign-in]]/
            |---- sign-up/[[...sign-up]]/
        |--- layout.tsx
    |-- (dashboard)/
        |--- (routes)/
            |---- code/
            |---- conversation/
            |---- dashboard/
            |---- image/
            |---- music/
            |---- settings/
            |---- video/
        |--- layout.tsx
    |-- (landing)/
        |--- layout.tsx
        |--- page.tsx
    |-- api/
        |--- code/
        |--- conversation/
        |--- image/
        |--- music/
        |--- stripe/
        |--- video/
        |--- webhook/
    |-- globals.css
    |-- layout.tsx
  |- components/
    |-- ui/
    |-- bot-avatar.tsx
    |-- crisp-chat.tsx
    |-- empty.tsx
    |-- free-counter.tsx
    |-- heading.tsx
    |-- landing-content.tsx
    |-- landing-footer.tsx
    |-- landing-hero.tsx
    |-- landing-navbar.tsx
    |-- loader.tsx
    |-- mobile-sidebar.tsx
    |-- navbar.tsx
    |-- pro-modal.tsx
    |-- sidebar.tsx
    |-- subscription-button.tsx
    |-- user-avatar.tsx
    |-- crisp-provider.tsx
    |-- modal-provider.tsx
    |-- toaster-provider.tsx
  |- hooks/
    |-- use-pro-modal.tsx
  |- lib/
    |-- api-limit.ts
    |-- prismadb.ts
    |-- stripe.ts
    |-- subscription.ts
    |-- utils.ts
  |- prisma/
    |-- schema.prisma
  |- public/
    |-- testimonials/
    |-- empty.png
    |-- logo.png
  |- .env
  |- config.ts
  |- constants.ts
  |- schemas.ts
  |- .eslintrc.json
  |- .gitignore
  |- components.json
  |- next.config.js
  |- package-lock.json
  |- package.json
  |- postcss.config.js
  |- tailwind.config.ts
  |- tsconfig.json
```

## Features

- **User Authentication**: Secure authentication using Clerk.
- **Payment Processing**: Integrated with Stripe for subscription plans.

## Technology Stack

- **Frontend**: Next.js, TailwindCSS
- **Authentication**: Clerk
- **Payments**: Stripe
- **Database**: MySQL

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS")
[![Next JS](https://skillicons.dev/icons?i=next "Next JS")](https://nextjs.org/ "Next JS")
[![Typescript](https://skillicons.dev/icons?i=ts "Typescript")](https://www.typescriptlang.org/ "Typescript")
[![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS")
[![Netlify](https://skillicons.dev/icons?i=netlify "Netlify")](https://netlify.app/ "Netlify")
[![Prisma](https://skillicons.dev/icons?i=prisma "Prisma")](https://prisma.io/ "Prisma")
[![MySQL](https://skillicons.dev/icons?i=mysql "MySQL")](https://mysql.com/ "MySQL")

## Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env` file in **root** directory.
4. Contents of `.env`:

```env
# .env

# clerk auth keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

# clerk redirect uri
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# openai api key
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# replicate api token
REPLICATE_API_TOKEN=r8_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# aiven database url
DATABASE_URL="mysql://<username>:<password>@<host>:<port>/genius-ai?ssl-mode=REQUIRED"

# stripe api/webhook secret key
STRIPE_API_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# app base url
NEXT_PUBLIC_APP_URL=http://localhost:3000

# crisp website id
NEXT_PUBLIC_CRISP_WEBSITE_ID=xxxxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx
```

5. Open terminal in root directory. Run `npm install --legacy-peer-deps` or `yarn install --legacy-peer-deps`.

6. Now app is fully configured 👍 and you can start using this app using either one of `npm run dev` or `yarn dev`.

**NOTE:** Please make sure to keep your API keys and configuration values secure and do not expose them publicly.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contributing

Contributions to this project are welcome. Follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## Contact

Darshan Chobarkar - [@dchobarkar](https://www.linkedin.com/in/dchobarkar/) - [@barbatos\_\_08](https://twitter.com/barbatos__08) - contact@darshanwebdev.com

Project Link: [https://github.com/dchobarkar/saas-ai-platform](https://github.com/dchobarkar/saas-ai-platform)
