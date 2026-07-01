# Devlog Post Instructions

Use this checklist whenever you add a new devlog post to the portfolio.

## 1. Create the MDX file

Create a new file in:

```text
content/devlog/
```

Use a short lowercase slug for the filename:

```text
content/devlog/my-new-project.mdx
```

## 2. Add frontmatter

Use this structure at the top of the file:

```mdx
---
title: "Post Title"
date: "YYYY-MM-DD"
summary: "One short sentence describing the post."
tags:
  - JavaScript
  - The Odin Project
links:
  - label: "GitHub"
    href: "https://github.com/your-link"
  - label: "Live demo"
    href: "https://your-demo-link.com"
---
```

## 3. Write the post body

Good devlog posts should answer:

- What did I build?
- Why did I build it?
- What did I practice?
- What did I learn?
- What would I improve next?

## 4. Optional: add an iframe demo

```mdx
<iframe
  title="Project demo"
  src="https://your-demo-link.com/"
  width="100%"
  height="700"
  style={{ border: "1px solid #ddd", borderRadius: "8px" }}
/>

<p className="rounded-md border border-jade-soft/40 bg-cream px-4 py-3 text-sm leading-6 text-charcoal">
  Try the embedded Etch-a-Sketch above. It is the actual project running in an
  iframe, so you can draw directly inside the demo.
</p>
```

## 5. Optional: add screenshots

Create an asset folder for the post:

```text
public/devlog/post-slug/
```

Example:

```text
public/devlog/jade-journal/home.png
public/devlog/jade-journal/write.png
public/devlog/jade-journal/timeline.png
public/devlog/jade-journal/insights.png
```

Use this layout for four screenshots:

```mdx
<div className="grid gap-6 md:grid-cols-2">
  <figure>
    <img
      src="/devlog/post-slug/home.png"
      alt="Project home screen"
      className="w-full rounded-md"
    />
    <figcaption className="mt-2 text-center text-sm leading-6 text-charcoal">
      Home screen
    </figcaption>
  </figure>

<figure>
  <img
    src="/devlog/post-slug/write.png"
    alt="Writing screen"
    className="w-full rounded-md"
  />
  <figcaption className="mt-2 text-center text-sm leading-6 text-charcoal">
    Writing view
  </figcaption>
</figure>

<figure>
  <img
    src="/devlog/post-slug/timeline.png"
    alt="Timeline screen"
    className="w-full rounded-md"
  />
  <figcaption className="mt-2 text-center text-sm leading-6 text-charcoal">
    Timeline view
  </figcaption>
</figure>

  <figure>
    <img
      src="/devlog/post-slug/insights.png"
      alt="Insights screen"
      className="w-full rounded-md"
    />
    <figcaption className="mt-2 text-center text-sm leading-6 text-charcoal">
      Insights view
    </figcaption>
  </figure>
</div>
```

## 6. Update previous and next navigation

Open:

```text
lib/devlog.ts
```

Add the new post at the top of `orderedDevlogPosts`:

```ts
export const orderedDevlogPosts = [
  {
    slug: "my-new-project",
    title: "Post Title",
  },
  {
    slug: "jade-journal",
    title: "Jade Journal",
  },
];
```

The slug must match the MDX filename exactly.

## 7. Preview locally

Run:

```powershell
npm run dev
```

## 8. Check before commit

Run:

```powershell
npm run typecheck
git status
git diff
```
