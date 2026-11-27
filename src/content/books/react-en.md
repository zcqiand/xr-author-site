---
{
  "slug": "react",
  "lang": "en",
  "title": "React: From Beginner to Project Practice",
  "subtitle": "A Complete Guide to Modern Front-End Development with React 19 + TypeScript",
  "series": "frontend",
  "asin": "B0HS1FHJ64",
  "market": "com",
  "onSale": true,
  "cover": "/covers/react-en.jpg",
  "description": "In December 2024, React 19 reached its official stable release, yet the Chinese-language book market barely reacted. This is a disconnect I felt over and over while learning and teaching React.",
  "faq": [],
  "toc": [
    {
      "part": "Target Readers",
      "items": [
        "Front-end developers with a JavaScript foundation who want a systematic grasp of React",
        "Engineers migrating from the class-component/jQuery era to modern React",
        "HTML/CSS and basic JavaScript syntax",
        "Experience with the command line and an editor",
        "An interest in building production-grade front-end projects",
        "It does not teach JavaScript syntax from scratch (Chapter 2 is only a necessary refresher)",
        "\"UI = f(state)\" serves as the unified mental model throughout the book",
        "The two comprehensive case studies (a construction-engineering laboratory management system and a SaaS Multi-Tenant Multi-Application Identity Platform) transfer to real business scenarios"
      ]
    },
    {
      "part": "Chapter 1 What React Is and How It Thinks",
      "items": [
        "1.1 Chapter Goals and Takeaways",
        "1.2 Declarative vs. Imperative: Two Ways of Thinking",
        "1.3 One-Way Data Flow: A Traceable Data Path",
        "1.4 The Virtual DOM and Reconciliation: React's Update Strategy",
        "1.5 From jQuery to React: Imperative vs. Declarative",
        "1.6 Hands-on Practice",
        "1.7 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 2 A JavaScript Refresher",
      "items": [
        "2.1 Chapter Goals and Takeaways",
        "2.2 const, let, and var: Bidding Farewell to var's Two Bad Habits",
        "2.3 Destructuring and the Spread Operator: React's Most-Used Modern Syntax",
        "2.4 Arrow Functions: More Than a Shorthand",
        "2.5 Promises and async/await: From Callback Hell to Synchronous-Style Code",
        "2.6 ES Modules: How React Projects Organize Code",
        "2.7 Hands-on Practice",
        "2.8 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 3 Setting Up the Development Environment",
      "items": [
        "3.1 Chapter Goals and Takeaways",
        "3.2 Node.js and Environment Preparation",
        "3.3 Why Vite Instead of CRA",
        "3.4 Creating Your First React Project",
        "3.5 Understanding the Project Configuration",
        "3.6 Hands-on Practice",
        "3.7 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 4 JSX and the Component Model",
      "items": [
        "4.1 Chapter Goals and Takeaways",
        "4.2 JSX Is Not a Template Engine",
        "4.3 The Key Differences Between JSX and HTML",
        "4.4 Function Components: The Atomic Units of UI",
        "4.5 JavaScript Expressions Inside Curly Braces",
        "4.6 Hands-on Practice",
        "4.7 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 5 Anatomy of the Project Structure",
      "items": [
        "5.1 Chapter Goals and Takeaways",
        "5.2 The Full Vite Project Directory at a Glance",
        "5.3 Principles for Organizing the src Directory",
        "5.4 Common Directory-Organization Mistakes and Counterexamples",
        "5.5 Configuration Files at a Glance",
        "5.6 The Design Motivation Behind the Layering",
        "5.7 Hands-on Practice",
        "5.8 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 6 Props and Component Communication",
      "items": [
        "6.1 Chapter Goals and Takeaways",
        "6.2 Props Basics: Passing Data from Parent to Child",
        "6.3 TypeScript and Props Type Definitions",
        "6.4 Callback Functions: Child-to-Parent Communication",
        "6.5 The children Prop and Container Components",
        "6.6 The Prop Drilling Dilemma",
        "6.7 Hands-on Practice",
        "6.8 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 7 Event Handling and Forms",
      "items": [
        "7.1 Chapter Goals and Takeaways",
        "7.2 The React Event System and TypeScript Type Annotations",
        "7.3 Controlled Components: value + onChange in Sync",
        "7.4 A Complete Registration Form: Multi-Field Controlled Forms",
        "7.5 Form Validation: Live Validation and Error Messages",
        "7.6 Uncontrolled Components: Reading Form Values with useRef",
        "7.7 Hands-on Practice",
        "7.8 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 8 Styling with Tailwind CSS",
      "items": [
        "8.1 Chapter Goals and Takeaways",
        "8.2 Installing and Configuring Tailwind CSS",
        "8.3 Building a Card Component with Utility Classes",
        "8.4 A Responsive Navbar",
        "8.5 Dark Mode Toggle",
        "8.6 Putting It All Together: A Responsive Product Card Grid",
        "8.7 Hands-on Practice",
        "8.8 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 9 Conditional Rendering and List Rendering",
      "items": [
        "9.1 Chapter Goals and Takeaways",
        "9.2 Four Ways to Do Conditional Rendering",
        "9.3 List Rendering Basics",
        "9.4 Combined Example: A Searchable, Filterable User List",
        "9.5 Common List Rendering Mistakes",
        "9.6 How Conditional Rendering and List Rendering Work Together",
        "9.7 Hands-on Practice",
        "9.8 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 10 useState and the Foundations of State",
      "items": [
        "10.1 Chapter Goals and Takeaways",
        "10.2 useState Basics: A Counter Component",
        "10.3 The Asynchrony of State Updates: Why You Read a Stale Value Right After setCount",
        "10.4 Functional Updates: When to Use prev => prev + 1",
        "10.5 Object State Updates: The Immutability Principle and the Spread Operator",
        "10.6 Multiple Independent States vs. a Single Object State",
        "10.7 Hands-on Practice",
        "10.8 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 11 useEffect and Side Effects",
      "items": [
        "11.1 Chapter Goals and Takeaways",
        "11.2 The Three Dependency Array Forms of useEffect",
        "11.3 Fetching Data with useEffect",
        "11.4 Cleanup Functions: Subscribing and Unsubscribing",
        "11.5 The Closure Trap: Stale State Values Inside Timers",
        "11.6 Infinite Loops: Missing Dependencies Causing Repeated Effect Triggers",
        "11.7 Hands-on Practice",
        "11.8 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 12 useRef and DOM Manipulation",
      "items": [
        "12.1 Chapter Goals and Takeaways",
        "12.2 state vs. ref: Two Easily Confused Concepts",
        "12.3 Getting DOM Elements with useRef",
        "12.4 Storing Mutable Values with useRef",
        "12.5 The state vs. ref Comparison Experiment",
        "12.6 Solving the useEffect Closure Trap with useRef",
        "12.7 Hands-on Practice",
        "12.8 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 13 useReducer and Complex State",
      "items": [
        "13.1 Chapter Goals and Takeaways",
        "13.2 The Limits of useState: When State Logic Gets Complex",
        "13.3 Enter useReducer: From useState to the Reducer Pattern",
        "13.4 A Multi-Step Wizard Form: Managing Complex Flows with useReducer",
        "13.5 A Common Mistake: Mutating State Directly",
        "13.6 useState or useReducer: How to Choose",
        "13.7 Hands-on Practice",
        "13.8 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 14 useMemo and useCallback",
      "items": [
        "14.1 Chapter Goals and Takeaways",
        "14.2 Rethinking \"Performance Optimization\"",
        "14.3 useMemo: Caching Expensive Computations",
        "14.4 useCallback: Stabilizing Function References",
        "14.5 The React.memo + useCallback Combo Pattern",
        "14.6 The Over-Optimization Trap",
        "14.7 Hands-on Practice",
        "14.8 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 15 Designing Custom Hooks",
      "items": [
        "15.1 Chapter Goals and Takeaways",
        "15.2 What a Custom Hook Is: Beyond Copy-Paste",
        "15.3 Your First Custom Hook: useLocalStorage",
        "15.4 useDebounce: A Debounce Hook",
        "15.5 useFetch: A Hook for Three-State Management",
        "15.6 Decision Boundaries: When to Extract a Hook",
        "15.7 The Rules of Hooks and Multi-Component Reuse",
        "15.8 Hands-on Practice",
        "15.9 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 16 Integrating TypeScript with React",
      "items": [
        "16.1 Chapter Goals and Takeaways",
        "16.2 Two Ways to Define Props: interface and type",
        "16.3 Typing Events: Why onClick's Type Isn't MouseEvent",
        "16.4 The satisfies Operator: Check Without Changing Inference",
        "16.5 Typing Custom Hooks",
        "16.6 The Cost of any: Why You Should Never Use It Again",
        "16.7 Adding Complete Type Annotations to Your Components",
        "16.8 Hands-on Practice",
        "16.9 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 17 Component Design Patterns",
      "items": [
        "17.1 Chapter Goals and Takeaways",
        "17.2 The Five Signals for Splitting a Component",
        "17.3 Separating Container and Presentational Components",
        "17.4 The Composition Pattern: Flexible Assembly with children and Named Slots",
        "17.5 Render Props: Handing Rendering Decisions to the Caller",
        "17.6 Hands-on Practice",
        "17.7 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 18 Advanced Forms and Validation",
      "items": [
        "18.1 Chapter Goals and Takeaways",
        "18.2 From Per-Field useState to a Form State Object",
        "18.3 Batch Validation: From Scattered if-else to a Centralized Pure Function",
        "18.4 Dynamic Form Items: Array State Management",
        "18.5 The useForm Custom Hook: Wrapping Up Form State Management",
        "18.6 Hands-on Practice",
        "18.7 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 19 Routing Fundamentals: React Router",
      "items": [
        "19.1 Chapter Goals and Takeaways",
        "19.2 Why Client-Side Routing Is Needed",
        "19.3 Core Concepts of React Router 7.x",
        "19.4 Page Navigation: Link and useNavigate",
        "19.5 Dynamic Routes: Path Parameters and useParams",
        "19.6 A Complete Multi-Page SPA",
        "19.7 Hands-on Practice",
        "19.8 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 20 Advanced Routing: Nesting and Guards",
      "items": [
        "20.1 Chapter Goals and Takeaways",
        "20.2 Nested Routing: Write Layout Code Only Once",
        "20.3 Route Guards: You Decide Who Sees Which Page",
        "20.4 Lazy Loading: Don't Make the Home Page Carry the Whole Site's Code",
        "20.5 The Complete Enterprise Router Configuration",
        "20.6 Hands-on Practice",
        "20.7 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 21 Data Fetching and Async Operations",
      "items": [
        "21.1 Chapter Goals and Takeaways",
        "21.2 useEffect + fetch: The Basic Pattern for Data Fetching",
        "21.3 Race Conditions: The Bug When Switching Quickly",
        "21.4 A More Advanced useFetch: Caching and Manual Triggering",
        "21.5 Where to Fetch: Components vs. the Router Layer",
        "21.6 Full Example — A User Management Page",
        "21.7 Production-Grade Data Fetching: An Introduction to React Query",
        "21.8 Hands-on Practice",
        "21.9 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 22 Context and Cross-Layer Communication",
      "items": [
        "22.1 Chapter Goals and Takeaways",
        "22.2 The Predicament of Prop Drilling",
        "22.3 Context's Broadcast Model",
        "22.4 Context's Performance Trap",
        "22.5 A Decision Framework for When Context Fits",
        "22.6 Hands-on Practice",
        "22.7 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 23 Zustand and Global State",
      "items": [
        "23.1 Chapter Goals and Takeaways",
        "23.2 Why You Need Zustand",
        "23.3 How Stores and Selectors Work",
        "23.4 TypeScript Types and Complete Practice",
        "23.5 The Slice Pattern and Splitting by Business Domain",
        "23.6 Middleware Composition",
        "23.7 A Decision Framework for State Management",
        "23.8 A Decision Framework for Styling",
        "23.9 A Decision Framework for Data Fetching",
        "23.10 Hands-on Practice",
        "23.11 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 24 Error Boundaries and User Experience",
      "items": [
        "24.1 Chapter Goals and Takeaways",
        "24.2 The White-Screen Crash: React's Default Behavior",
        "24.3 A Complete ErrorBoundary Implementation",
        "24.4 Strategies for Multi-Level Error Boundaries",
        "24.5 Hands-on Practice",
        "24.6 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 25 New Hooks in React 18/19",
      "items": [
        "25.1 Chapter Goals and Takeaways",
        "25.2 The Redundant Pattern of Traditional Form Submission",
        "25.3 useActionState: Form Submission State Management",
        "25.4 useOptimistic: Optimistic Updates",
        "25.5 useFormStatus: Sensing Submission from Inside the Form",
        "25.6 The use() API: Reading a Promise During Rendering",
        "25.7 Three Concurrent Hooks: useTransition / useDeferredValue / useId",
        "25.8 Hands-on Practice: Putting the Actions Pattern Together",
        "25.9 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 26 Performance Optimization Strategies",
      "items": [
        "26.1 Chapter Goals and Takeaways",
        "26.2 Measure First, Then Optimize: React DevTools Profiler",
        "26.3 React.memo and Re-render Control",
        "26.4 Code Splitting and Suspense Lazy Loading",
        "26.5 React Compiler and Automatic Optimization",
        "26.6 Hands-on Practice",
        "26.7 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 27 Fundamentals of Component Testing",
      "items": [
        "27.1 Chapter Goals and Takeaways",
        "27.2 The Right Way to Test: Behavior, Not Implementation",
        "27.3 Setting Up Vitest and Writing Your First Test",
        "27.4 Rendering Tests for Components",
        "27.5 Interaction Testing and Async Testing",
        "27.6 Hands-on Practice",
        "27.7 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 28 Testing Hooks and Integration Tests",
      "items": [
        "28.1 Chapter Goals and Takeaways",
        "28.2 Testing Custom Hooks in Isolation",
        "28.3 Testing Hooks with Side Effects",
        "28.4 Multi-Component Integration Tests",
        "28.5 Hands-on Practice",
        "28.6 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 29 Getting Started with Server Components",
      "items": [
        "29.1 Chapter Goals and Takeaways",
        "29.2 Why We Need Server Components",
        "29.3 The Difference Between Server Components and Client Components",
        "29.4 The 'use client' Directive and Drawing Component Boundaries",
        "29.5 Server/Client Collaboration in Next.js",
        "29.6 Hands-on Practice",
        "29.7 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 30 Next.js and SSR/SSG",
      "items": [
        "30.1 Chapter Goals and Takeaways",
        "30.2 An Overview of the Four Rendering Modes",
        "30.3 Rendering Strategies in the Next.js App Router",
        "30.4 Data Fetching and Caching",
        "30.5 A Decision Framework for Choosing a Rendering Mode",
        "30.6 Server Actions: the \"use server\" Directive and Server-Side Functions",
        "30.7 Hands-on Practice",
        "30.8 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 31 Build and Deployment",
      "items": [
        "31.1 Chapter Goals and Takeaways",
        "31.2 Production Builds with Vite",
        "31.3 Environment Variables and Multi-Environment Configuration",
        "31.4 Deployment: Vercel and Nginx",
        "31.5 Hands-on Practice",
        "31.6 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 32 Front-End and Back-End Integration in Practice",
      "items": [
        "32.1 Chapter Goals and Takeaways",
        "32.2 Wrapping the HTTP Client",
        "32.3 Cross-Origin Issues and Proxy Configuration",
        "32.4 Token Authentication and Request Interception",
        "32.5 Hands-on Practice: A Complete CRUD Flow",
        "32.6 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 33 Migration Guide: React 16/17/18 to 19",
      "items": [
        "33.1 Chapter Goals and Takeaways",
        "33.2 React 19's breaking changes",
        "33.3 Migration Steps and Tooling",
        "33.4 Common Migration Problems and Fixes",
        "33.5 Hands-on Practice",
        "33.6 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 34 Case Study 1: Project Initiation and Architecture Design",
      "items": [
        "34.1 Chapter Goals and Takeaways",
        "34.2 Project Initiation: Business and Requirements Boundaries",
        "34.3 Technology Choices: A Stack-Drift Comparison with the Teaching Chapters",
        "34.4 Directory Layering and Infrastructure",
        "34.5 The Minimal Closed Loop: Login → Dynamic Menus → Route Guards → Home Page → Logout",
        "34.6 Deliverables and Hands-on Practice",
        "34.7 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 35 Case Study 1: Business-Module CRUD — Contracts, Sample Receipts, and Code-Table Dictionaries",
      "items": [
        "35.1 Chapter Goals and Takeaways",
        "35.2 The Data Layer Is in Place: What orval Already Gives You",
        "35.3 Contract Management: The Standard CRUD Skeleton",
        "35.4 Sample Receipts: Flow Filtering and Wiring Up useMutation",
        "35.5 Supplemental ext Fields: A Definition-Driven Dynamic Form",
        "35.6 Receipt Detail: The Field Wall, the Flow Timeline, and Report Preview",
        "35.7 One Generic Implementation Powers Four Code-Table Pages",
        "35.8 Deliverables and Hands-on Practice",
        "35.9 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 36 Case Study 1: Inspection Capability Configuration — Specialties, Parameters, Standards, and Report Names",
      "items": [
        "36.1 Chapter Goals and Takeaways",
        "36.2 Eight Configuration Pages and One Web: Slice the Names Clean First",
        "36.3 One Component Carries Four Code-Table Pages: When Differences Can Be Expressed as Data, Abstract",
        "36.4 Client-Side Composed Filtering: When the Contract Doesn't Give You a Dimension, the Frontend Computes the Intersection Itself",
        "36.5 Composite Primary Keys: When the Differences Live in the Structure, Copy Honestly",
        "36.6 Link Dialogs: Toggle Means Save Instantly",
        "36.7 Referential-Protection Deletion: The Backend Decides, the Frontend Presents",
        "36.8 The Blueprint and the Unclosed Edges: Honest Labels Beat Fake Completeness",
        "36.9 Deliverables and Hands-on Practice",
        "36.10 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 37 Case Study 1: The Flow Engine — A Seven-Stage Pipeline from Task Assignment to Archiving",
      "items": [
        "37.1 Chapter Goals and Takeaways",
        "37.2 The Seven-Stage State Machine: Read the Map First, Then the Pages",
        "37.3 Task Assignment: A Dedicated Endpoint and a Familiar Combo",
        "37.4 Data Entry: Where the Capability Web Plugs into the Flow",
        "37.5 One verdict, Two Roads: Automatic Assessment and Manual Re-verdict",
        "37.6 The Four Report Stages: Abstraction vs. Copying Lands a Third Time",
        "37.7 The Unclosed Edges: No \"Submit to Review\" Button on the Entry Page",
        "37.8 Summary Table Consumption: The Same States, Another Set of Labels",
        "37.9 Deliverables and Hands-on Practice",
        "37.10 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 38 Case Study 1: Testing and Delivery",
      "items": [
        "38.1 Chapter Goals and Takeaways",
        "38.2 Scoping First: Which Pages Get Tests",
        "38.3 Checklist Item One: Component Tests, Testing What the User Can See",
        "38.4 Checklist Item Two: Hook Tests and Pure-Logic Tests",
        "38.5 Checklist Item Three: Integration Tests, and the Truth About Mock Strategy",
        "38.6 Checklist Items Four and Five: Production Build and Deployment",
        "38.7 Deliverables: The Pre-Delivery Checklist and Hands-on Practice",
        "38.8 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 39 Case Study 2: SaaS Architecture and Multi-Tenancy",
      "items": [
        "39.1 Chapter Goals and Takeaways",
        "39.2 Three Isolation Problems: Routing, State, and Theming",
        "39.3 Platform Tenant Management: TenantListPage",
        "39.4 Tenant Subscribed Applications: TenantApplicationsListPage",
        "39.5 The Tenant Switcher: Token Reissue and Context Consolidation",
        "39.6 Isolation Design Trade-offs",
        "39.7 Hands-on Practice",
        "39.8 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 40 Case Study 2: Login Authentication and RBAC Menu Authorization",
      "items": [
        "40.1 Chapter Goals and Takeaways",
        "40.2 Login and Logout: LoginPage and Local Cleanup",
        "40.3 SSO Authorization Code Flow: The Backend Carries It — What the Frontend Sees",
        "40.4 Role CRUD: RoleListPage",
        "40.5 Role-Menu Authorization: RoleMenuGrantPage and Whole-Batch Setup",
        "40.6 Menu Tree Maintenance: MenuTreePage",
        "40.7 Dynamic Navigation as It Really Is: A Static List, Placeholder Substitution, and an Unwired Hook",
        "40.8 Hands-on Practice",
        "40.9 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 41 Case Study 2: User Management and Application Integration",
      "items": [
        "41.1 Chapter Goals and Takeaways",
        "41.2 Member Management: CRUD and Role Assignment on UserListPage",
        "41.3 Member Status and Tenant Context",
        "41.4 OAuth Application Registration: AppListPage",
        "41.5 Application Enable/Disable and the Subscription Loop",
        "41.6 Hands-on Practice",
        "41.7 Chapter Summary"
      ]
    },
    {
      "part": "Chapter 42 Full-Stack Project Wrap-Up and Deployment",
      "items": [
        "42.1 Chapter Goals and Takeaways",
        "42.2 An Architecture Retrospective on the Two Case Studies",
        "42.3 State Management's Different Paths, Same Destination: Zustand versus React Query + Context",
        "42.4 The Full-Stack Deployment Workflow",
        "42.5 The Go-Live Checklist",
        "42.6 Hands-on Practice",
        "42.7 Chapter Summary"
      ]
    }
  ],
  "sample": [
    {
      "heading": "1.2 Declarative vs. Imperative: Two Ways of Thinking",
      "lang": "text",
      "code": "\nSave it as `counter-vanilla.html` and open it in a browser to run. You manage the `count` variable by hand, find the DOM node by hand, and write the new value in by hand. If a requirement comes along—\"turn the number red when it exceeds 10\"—you have to insert an if-else into the `updateDisplay` function to manipulate the styles. The more requirements arrive, the more bloated the function gets.\n\nNow look at how React implements the same counter declaratively. A few notations in this code are ones you haven't learned yet—just get familiar with them for now: `import` brings in utilities from an external file, like pulling a screwdriver out of a toolbox; `JSX.Element` and `<number>` are TypeScript type annotations—the former tells the editor \"this function returns a piece of UI description,\" the latter tells React \"this piece of state holds a number\"—no worries if they don't make sense yet, Chapters 2 and 16 cover them systematically; `=>` is the ES6 arrow function syntax, which you can treat as shorthand for `function() {}`.\n\n```tsx {title=\"Listing 1-2: A counter as a React function component—the declarative way\"}\nimport { useState } from 'react';\n\nfunction Counter(): JSX.Element {\n  const [count, setCount] = useState<number>(0);\n\n  return (\n    <div style={{ textAlign: 'center', marginTop: '20vh' }}>\n      <div style={{ fontSize: '3rem', margin: '1rem 0' }}>{count}</div>\n      <div>\n        <button\n          style={{ fontSize: '1.2rem', padding: '0.5rem 1.5rem', margin: '0 0.5rem' }}\n          onClick={() => setCount(count - 1)}\n        >\n          -1\n        </button>\n        <button\n          style={{ fontSize: '1.2rem', padding: '0.5rem 1.5rem', margin: '0 0.5rem' }}\n          onClick={() => setCount(count + 1)}\n        >\n          +1\n        </button>\n      </div>\n    </div>\n  );\n}\n\nexport default Counter;"
    },
    {
      "heading": "1.2 Declarative vs. Imperative: Two Ways of Thinking",
      "lang": "text",
      "code": "\nYou don't need to create a project by hand to run this code—Chapter 3 walks you through setting up the development environment step by step. For now, just focus on the difference in style and approach and build up an intuition. If you already have a Node.js environment, you can run `npm create vite@latest my-react-app -- --template react-ts` to scaffold a project quickly; see Chapter 3 for the details.\n\nCompare the two listings: in Listing 1-1 you are telling the browser \"find the node, read the value, compute, write back to the node\"; in Listing 1-2 you merely declare \"however count is, that's what the interface shows.\" Once `setCount` is called, React re-renders automatically—you don't need to care about any detail of the DOM update.\n\n## 1.3 One-Way Data Flow: A Traceable Data Path\n\nWhen an application grows from \"one component\" to \"dozens of components nested inside each other,\" how do state and data flow between components? React's answer is **one-way data flow**: data flows down from parent components through Props, child components communicate upward through callback functions, and the path of every state change is traceable.\n\nLet's walk through it with an e-commerce shopping cart page. The cart page (CartPage) is your root component, containing the item list (CartItemList), the total-price display (CartSummary), and the checkout button (CheckoutButton). The cart state lives in CartPage and is passed down through Props for the child components to display. The data flow is one-way: from CartPage down to each child component.\n\nWhen the user taps the \"+\" button on an item inside CartItemList, CartItemList cannot modify the quantity directly—the data was handed down by the parent, and the child is only responsible for displaying it. CartPage passes a callback function to CartItemList, and when the user taps \"+\", the child invokes that callback to notify the parent to update its state. Once CartPage receives the notification, it updates the state, React re-renders automatically, and the total price in CartSummary updates along with it.\n\nWhy does React insist on one-way flow, unlike frameworks that support two-way binding? Because one-way data flow gives every state change a clear origin. If you want to trace \"why did the total become 299,\" you only need to look at the state-change logic in CartPage—that is the only place state can be modified. If child components could modify parent data directly, tracing it would be like finding a crate that got moved in a warehouse with no surveillance: everyone could have moved it, and you have no idea who moved it or when. When the application grows from three components to thirty, and from one developer to three collaborating, this predictable path saves enormous amounts of debugging time.\n\n## 1.4 The Virtual DOM and Reconciliation: React's Update Strategy\n\nUI = f(state) tells you \"when the state changes, the interface updates,\" but it doesn't answer a key question: how does React know which part of the page should update? Re-rendering the entire page on every state change is unacceptable performance-wise.\n\nReact's solution is the **Virtual DOM** and **reconciliation**.\n\nThe Virtual DOM is a lightweight JavaScript object tree representing the UI, maintained by React in memory. It is not real DOM nodes, and creating and comparing it costs far less than manipulating the real DOM. When state changes, React first generates a new UI tree on the Virtual DOM, then diffs it against the old Virtual DOM tree, computes the differences, and finally applies only those differences to the real DOM.\n\nWhy not manipulate the real DOM directly? Because DOM operations are expensive—modifying a single node may trigger the browser to recompute layout, repaint, even rearrange surrounding elements. Change 100 nodes in one go, and every change triggers a browser reflow, visibly slowing down the page. The core value of the Virtual DOM is this: it consolidates scattered DOM operations into batched updates, reducing the number of browser reflows.\n\nYou can think of the relationship between the Virtual DOM and reconciliation as an architect and a construction crew. The architect (Virtual DOM) draws blueprints—\"add a window here, tear down that wall.\" Drawing blueprints is fast, because it is just changing paper. Once the blueprint is done, the construction crew (the reconciliation algorithm) compares the new drawing with the old, finds the changes, and executes only the necessary work on the actual building (the real DOM). Summarizing all changes into a single work order before building is far more efficient than breaking ground after every single line item.\n\nThe limits of this analogy: a real building cannot \"roll back,\" but the Virtual DOM lets you discard a design you don't like at any time; a construction crew can build in any order, but the order of DOM updates affects rendering performance. The specific strategy of the reconciliation algorithm (diffing based on element type and the key prop) is left to later chapters—for now you only need to remember: the goal of reconciliation is \"the fewest DOM operations needed to reach the target state.\"\n\nThe Virtual DOM is not a silver bullet. If you only change one text node, directly setting `element.textContent = 'new value'` will always be faster than going through a Virtual DOM diff. Where the Virtual DOM shines: frequent state changes, updates touching many nodes, and a desire to describe the interface declaratively. React's trade-off is this: pay a small, predictable cost in JavaScript computation to avoid a large, unpredictable cost in DOM operations.\n\n## 1.5 From jQuery to React: Imperative vs. Declarative\n\nThrough a concrete comparison, get a feel for the gap between imperative and declarative styles in real-world development.\n\nGo back to the jQuery era. Suppose you need to build a counter: it shows the current number, with \"plus 1\" and \"minus 1\" buttons beside it. When the number exceeds 10, it turns red and shows a warning; when it drops back below 10, it recovers. The jQuery approach: lay out the elements in the HTML, bind click events with jQuery, and in the handlers read the current number, compute the new value, and write it back to the DOM—plus if checks for the color and the warning.\n\nSeems not too complicated? But the defining trait of this code is that you are manually maintaining an implicit \"state\" and personally guaranteeing it stays in sync with the interface. If the product manager adds three requirements—\"show a different warning when the count goes negative,\" \"disable the minus button above 5,\" \"turn the background gray when the number is even\"—the click handlers will quickly balloon into nested if-else trees, with every line manipulating a different DOM node.\n\nImperative DOM manipulation has three core pain points:\n\n**Pain point one: manual state syncing.** State lives in the text content of DOM nodes. Every change forces you to manually find every affected node and update them one by one—miss one, and the interface becomes inconsistent.\n\n**Pain point two: code is hard to reuse.** The \"turn red and warn above a threshold\" logic has to be copy-pasted wherever another page needs it; DOM manipulation and business logic are coupled so tightly that they cannot be separated.\n\n**Pain point three: performance optimization is hard.** Every state change hits the DOM directly. When state changes frequently, you may mutate the DOM dozens of times to produce a single visual update; manually batching the operations is possible, but code complexity climbs further.\n\nWith the React approach, your job becomes: define a state variable `count`, write the rendering rule (red plus warning when count > 10, otherwise black with no warning), and call `setCount` on button clicks. You don't touch the DOM, and you don't sync anything by hand. When the product manager adds requirements, you only add conditions to the rendering rule—the mapping is static text, and you can see the interface for every state in one place.\n\n```tsx {title=\"Listing 1-3: A minimal React + TypeScript component—HelloWorld\"}\nimport { useState } from 'react';\n\nfunction HelloWorld(): JSX.Element {\n  const [greeting, setGreeting] = useState<string>('Hello, React!');\n\n  return (\n    <div style={{ textAlign: 'center', marginTop: '20vh' }}>\n      <h1>{greeting}</h1>\n      <button\n        onClick={() => setGreeting('You have just taken your first step with React!')}",
      "note": "… excerpt truncated (68 lines total) — see the book for the full listing."
    }
  ],
  "caseRepo": "https://github.com/zcqiand/react-book",
  "videos": []
}
---
> React: From Beginner to Project Practice — A Complete Guide to Modern Front-End Development with React 19 + TypeScript

(Detailed page content is filled in the content batch.)

Buy: https://www.amazon.com/dp/B0HS1FHJ64