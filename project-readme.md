---
project: Mini Astro Blog
---

// 📁 Folder structure

```
astro-mini-blog/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── BlogLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── blog/
│   │       ├── post-1.md
│   │       └── post-2.md
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

// 🧩 Component: Header.astro
```astro
<header>
  <h1><a href="/">My Astro Blog</a></h1>
</header>
```

// 🧩 Component: Footer.astro
```astro
<footer>
  <p>&copy; 2025 Ernestico’s Blog</p>
</footer>
```

// 🧩 Layout: BlogLayout.astro
```astro
---
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
---
<html>
  <head>
    <title>My Astro Blog</title>
    <link rel="stylesheet" href="/styles/global.css">
  </head>
  <body>
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </body>
</html>
```

// 📄 Page: index.astro
```astro
---
import BlogLayout from '../layouts/BlogLayout.astro';
---
<BlogLayout>
  <h2>Welcome to My Blog</h2>
  <ul>
    <li><a href="/blog/post-1">First Post</a></li>
    <li><a href="/blog/post-2">Second Post</a></li>
  </ul>
</BlogLayout>
```

// 📄 Blog Post: post-1.md
```markdown
---
title: "First Post"
pubDate: 2025-05-23
layout: ../layouts/BlogLayout.astro
---

# My First Blog Post

Welcome to my first Astro-powered blog!
```

// 📄 Blog Post: post-2.md
```markdown
---
title: "Second Post"
pubDate: 2025-05-24
layout: ../layouts/BlogLayout.astro
---

# Another Post

Here’s another article powered by Astro.
```

// 🎨 Styles: global.css
```css
body {
  font-family: system-ui, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: #f8f8f8;
}
a {
  color: #0070f3;
  text-decoration: none;
}
```

// 🧪 To run:
```bash
npm create astro@latest
cd astro-mini-blog
npm install
npm run dev
```

You now have a fast, SEO-friendly mini blog with Markdown support and zero JavaScript shipped by default 🚀
