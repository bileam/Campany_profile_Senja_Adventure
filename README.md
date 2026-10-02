# Senja Adventure

Senja Adventure is a responsive company profile and outdoor equipment rental website. Visitors can learn about the company, browse camping and hiking equipment, add items to a cart, and prepare a booking request for WhatsApp.

## Features

- Company profile, history, advantages, gallery, and contact pages.
- Equipment catalog with category filters, text search, product details, and selectable variants.
- Shopping cart with quantity controls, subtotal calculation, and browser `localStorage` persistence.
- Booking form that formats cart and customer details into a WhatsApp message.
- Responsive Sonner notifications when an item is added to the cart.

## Tech Stack

- React 19
- Vite
- React Router
- Tailwind CSS 4
- Sonner
- Framer Motion, AOS, and Swiper
- Lucide React and React Icons

## Getting Started

### Requirements

- Node.js
- npm

### Install dependencies

```bash
npm ci
```

### Start the development server

```bash
npm run dev
```

Vite prints the local URL in the terminal after the server starts.

## Available Scripts

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the Vite development server.    |
| `npm run build`   | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint`    | Run ESLint across the project.        |

## Routes

| Path         | Page                           |
| ------------ | ------------------------------ |
| `/`          | Home                           |
| `/about`     | About Senja Adventure          |
| `/peralatan` | Equipment catalog              |
| `/galery`    | Gallery                        |
| `/kontak`    | Contact information and map    |
| `/cart`      | Shopping cart and booking form |

## Project Structure

```text
src/
  assets/       Images, logos, and other static assets
  components/   Page sections and reusable UI components
  Context/      Equipment and shopping cart state
  Data/         Equipment, category, and variant data
  Layout/       Shared navigation and footer layouts
  Page/         Route-level page components
  App.jsx       Application routes
  main.jsx      React entry point and providers
```

## Project Configuration

- Equipment, category, and variant records are defined in `src/Data/DataDammy.js`.
- Cart contents are stored in the visitor's browser using `localStorage`.
- Update the WhatsApp admin number in `src/Page/Cart.jsx` before deploying the booking flow.