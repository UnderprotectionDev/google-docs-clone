<div align="center">

# Real-time Collaborative Document Editor 📝

<!-- Start Generation Here -->
<p>A real-time collaborative document editor built with Next.js, Convex, Liveblocks, and Tiptap. Experience seamless multi-user editing, rich text formatting, and secure authentication powered by Clerk.</p>
<!-- End Generation Here -->

![Home](/public/project-images/homepage.png)

[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Convex](https://img.shields.io/badge/Convex-000000?style=for-the-badge&logo=convex&logoColor=white)](https://www.convex.dev/)
[![Liveblocks](https://img.shields.io/badge/Liveblocks-3D3BFF?style=for-the-badge&logo=liveblocks&logoColor=white)](https://liveblocks.io/)
[![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/)
[![Tiptap](https://img.shields.io/badge/Tiptap-0D0D0D?style=for-the-badge&logo=tiptap&logoColor=white)](https://tiptap.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Shadcn/ui](https://img.shields.io/badge/Shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

</div>

## ✨ Features

<div align="center">

| Feature                    | Description                                                                                         |
| -------------------------- | --------------------------------------------------------------------------------------------------- |
| 👥 Real-time Collaboration | Multiple users can edit the same document simultaneously with live cursors and presence indicators. |
| ✍️ Rich Text Editor        | Utilizes Tiptap for a powerful and extensible rich text editing experience.                         |
| 💾 Document Management     | Create, view, and manage documents stored securely in Convex.                                       |
| 🔄 Real-time Data Sync     | Instant data synchronization across all clients powered by Convex and Liveblocks.                   |
| 🔐 Secure Authentication   | User authentication and management handled securely via Clerk.                                      |
| 🎨 Customizable UI         | Built with Shadcn/ui and Tailwind CSS for a modern and customizable user interface.                 |
| 📱 Responsive Design       | Enjoy a consistent experience across different screen sizes.                                        |

</div>

## 🌟 Tech Highlights

- Real-time collaboration features powered by Liveblocks (Presence, Storage).
- Reactive database backend using Convex for seamless data synchronization.
- Robust rich text editing capabilities provided by Tiptap and its extensions.
- Secure and easy-to-implement authentication using Clerk.
- Modern UI components from Shadcn/ui styled with Tailwind CSS.
- Type safety throughout the application with TypeScript.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/google-docs-clone.git

cd google-docs-clone

# Install dependencies
npm install

# Create your environment variables file
cp .env.example .env

# (Optional) Start the local Convex development server
npx convex dev

# Start the development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to use the application.

## 🛠️ Tech Stack

<details>
  <summary>Click to expand tech stack details</summary>

### Core Frameworks & Libraries

- **[Next.js](https://nextjs.org/)** - React framework for server-side rendering and static site generation.
- **[React](https://reactjs.org/)** - Library for building user interfaces.
- **[TypeScript](https://www.typescriptlang.org/)** - Typed superset of JavaScript.

### Backend & Real-time

- **[Convex](https://www.convex.dev/)** - Real-time backend database.
- **[Liveblocks](https://liveblocks.io/)** - APIs for adding real-time collaboration features.

### Authentication

- **[Clerk](https://clerk.com/)** - User authentication and management.

### Rich Text Editor

- **[Tiptap](https://tiptap.dev/)** - Headless wrapper around ProseMirror for WYSIWYG editor building.

### State Management

- **[Zustand](https://github.com/pmndrs/zustand)** - Small, fast, and scalable state-management solution.

### UI & Styling

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework.
- **[Shadcn/ui](https://ui.shadcn.com/)** - Re-usable components built using Radix UI and Tailwind CSS.
- **[Lucide React](https://lucide.dev/)** - Icon library.

### Development & Deployment

- **[ESLint](https://eslint.org/)** - Pluggable linting utility.
- **[Prettier](https://prettier.io/)** - Opinionated code formatter (Assumed, standard practice).
- **[Vercel](https://vercel.com/)** - Deployment platform optimized for Next.js.

</details>

## 📸 Screenshots

<div align="center">

### Document Editor View

![Editor](/public/project-images/docs-page.png) <!-- TODO: Add a screenshot -->

</div>

## 🔐 Environment Variables

Create a `.env.local` file in the root of your project and add the following environment variables:

| Variable                            | Description                                           | Found In               |
| ----------------------------------- | ----------------------------------------------------- | ---------------------- |
| `NEXT_PUBLIC_CONVEX_URL`            | URL for your Convex deployment backend service.       | Convex Dashboard       |
| `CONVEX_DEPLOYMENT`                 | Specific Convex deployment identifier.                | Convex Dashboard / CLI |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key for client-side authentication. | Clerk Dashboard        |
| `CLERK_SECRET_KEY`                  | Clerk secret key for server-side authentication.      | Clerk Dashboard        |
| `CLERK_ISSUER_URL`                  | Clerk issuer URL for authentication configuration.    | Clerk Dashboard        |
| `LIVEBLOCKS_SECRET_KEY`             | Liveblocks secret key for backend authentication.     | Liveblocks Dashboard   |

```dotenv
# Convex
CONVEX_DEPLOYMENT=your_convex_deployment_id
NEXT_PUBLIC_CONVEX_URL=your_convex_url_here

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here
CLERK_ISSUER_URL=your_clerk_issuer_url_here

# Liveblocks
LIVEBLOCKS_SECRET_KEY=your_liveblocks_secret_key_here

```

**Note:** Ensure you add the necessary webhook endpoints in Clerk and potentially Convex/Liveblocks depending on your specific setup.
