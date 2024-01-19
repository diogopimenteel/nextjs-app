# NextJs

## App Route

- Homepage (/) -> app/page.js

- About (/about) -> app/about/page.js

  - About Company (/about/company) -> app/about/company/page.js

  - About Career (/about/career) -> app/about/career/page.js

- Contact (/contact) -> app/contact/page.js

- Blog (/blog) -> app/blog/page.js
  - (/blog/post-1) -> [id]/page.js
  - (/blog/post-2) -> [id]/page.js
  - (/blog/post-3) -> [id]/page.js

# Rendering

- SSR -> Server Side Rendering (Default React)

  - User -> Browser -> Server
    - Server creates a rendered(react) html file and send to user browser
    - And send js (only for interactivity)

- Pros

  - The initial page load is faster
  - Better old devices and slow internet connection
  - Better for SEO(Search Engine Optimization)

- Cons

  - Less interaction
  - Increased server loads
  - Slower subsequent page loads
  - State management complexity

- CSR -> Client Side Rendering (Default Next)

  - User -> Browser -> Server
    - Server creates a html file (empty) and send to user browser and js bundle(all js)
    - The initial load is slower and after render the page, the page is readable(react) and also interactive

- Pros
  - Better performance after initial load
  - Less server load
  - Best for the user interactivity
  - May affect SEO
  - Slower initial load
  - Dependency on client resources

Obs. "use client" when you want to interact with the user.

Examples:

```js
"use client";

const TestPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const a = Math.random();

  return <div>{isClient && a}</div>;
};

export default TestPage;
```

```js
// HydrationText.jsx
const HydrationTest = () => {
  const a = Math.random();
  console.log(a);

  return <div>{a}</div>;
};

export default HydrationTest;

// TestPage.jsx
const HydrationTestNoSSR = dynamic(() => import("@/components/hydrationTest"), { ssr: false });

const TestPage = () => {
  return <div><HydrationTestNoSSR /></div>;
};

export default TestPage;
```

# Navigation
