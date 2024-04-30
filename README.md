# Geekbits.dev Agency

This is the [Geekbits.dev](https://geekbits.io/) agency project.

## Getting Started

Run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech

- React Next JS
- Shadcn
- Tailwind CSS
- TypeScript

## Goals

Below are the tasks to accomplish.

- Create an About page
- Create a portfolio section to showcase our works on the home page
- Create the blog page and section for the featured post on the home page.
- Create the Contact Us page
- Create the docs page.

**More tasks/features coming**...

## Folder Structure

### 1. app folder

This will contain all the routes for the site. New pages/routes get a folder inside the app directory. eg: `app/about/page.tsx`

### 2. components

This is where all the reusable code is found.

Currently, this folder has the `Services`, `Navbar`, `Testimonials`, `hero` and `footer` components. These are used to create the layout of the homepage.

> **Primitives**:
>
> Contains code that use a combination of smaller components like buttons. An example of a primitive is a card. A card has an image, description and a button. So it uses the smaller button component.
>
> **ui**:
>
> This is where shadcn components like buttons and badges are stored. If you install a shadcn component, this is where you can access it from.

### 3. Constants

This folder has an `index.ts` file that contains the hard coded data such as the nav links. The reason for this is to avoid code repetition so we just loop over the data.

### 4. lib

This is used by tailwind

### 5. Public

This folder contains Images that are used all over the site.

## Colors

Under tailwind config colors, we have the Primary and Secondary colors. The primary colors is for the brand and accent colors. The secondary color is mostly for colors, it's a shade of gray color palette.

## Deploy on Vercel
