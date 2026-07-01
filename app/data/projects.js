export const projects = [
  {
    id: "Art-Hub",
    title: "ArtHub",
    shortDesc: "A full-stack MERN digital art marketplace connecting artists and collectors with role-based dashboards, Stripe-powered payments, and tiered subscription plans.",
    image: "/ArtHub.png",
    tags: ["Next.js", "MongoDB", "Express.js", "Stripe", "BetterAuth", "Tailwind CSS", "JavaScript"],
    liveLink: "https://arthub-by-abid.vercel.app",
    githubLink: "https://github.com/Abid-Hossain-Sifat/ArtHub",
    techStack: [
      "Next.js (App Router)",
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "BetterAuth (JWT + Google OAuth)",
      "Stripe (Checkout + Webhooks)",
      "Framer Motion",
      "Recharts",
      "React Hot Toast",
      "JavaScript (ES6+)"],
    description:
      "ArtHub is a full-stack digital art marketplace built with the MERN stack that connects independent artists with art collectors. It features a role-based system (Admin, Artist, Buyer) with dedicated dashboards, Stripe Checkout for one-time artwork purchases and subscription upgrades, tiered subscription plans (Free, Pro, Premium) with monthly purchase limits, BetterAuth authentication with email/password and Google OAuth, and an admin analytics dashboard with Recharts-powered daily revenue tracking. The platform also includes search, category filtering, sorting, server-side pagination, and a comment system for buyers.",
    challenges: [
      "Building a reliable Stripe webhook-driven purchase flow that inserts purchase records, marks artworks as sold, and updates monthly purchase counters atomically.",
      "Designing a role-based access system (Admin, Artist, Buyer) with protected routes and automatic redirects to an unauthorized page on role mismatch.",
      "Enforcing subscription business rules such as monthly purchase limits, auto-resetting counters each month, and blocking artists from purchasing or commenting.",
      "Combining search, category/status filtering, sorting, and server-side pagination into a single MongoDB query pipeline for the artworks endpoint."
    ],
    improvements: [
      "Add real-time notifications for purchases and comments using WebSockets or SSE.",
      "Build public artist portfolio pages showcasing all artworks by an artist.",
      "Implement a wishlist/favorites system so buyers can save artworks for later.",
      "Add an artist payout system using Stripe Connect for direct revenue splits."
    ],
  },
  {
    id: "Paws-Connect",
    title: "PawsConnect",
    shortDesc: "A full-stack MERN pet adoption platform connecting shelters and adopters with JWT-based auth, dashboards, and adoption request management.",
    image: "/PawsConnect.png",
    tags: ["Next.js", "MongoDB", "Express.js", "JWT", "Tailwind CSS", "JavaScript", "Node.js"],
    liveLink: "https://pawsconnectbyabid.vercel.app",
    githubLink: "https://github.com/Abid-Hossain-Sifat/PawsConnect",
    techStack: [
      "Next.js (App Router)",
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JSON Web Tokens (JWT)",
      "React Toastify",
      "JavaScript (ES6+)"],
    description:
      "PawsConnect is a full-stack pet adoption web application built with the MERN stack that bridges the gap between animal shelters/owners and people looking to adopt. It offers an interactive catalog of pets with real-time search and multi-category filtering, dual-layer JWT authentication with HTTPOnly cookies, and role-based dashboards where adopters can track their adoption requests while owners manage their pet listings and approve or reject incoming requests.",
    challenges: [
      "Implementing dual-layer JWT authentication with HTTPOnly cookies and custom server-side middleware to protect private routes.",
      "Preventing forced logout on hard reloads by building robust session persistence for authenticated dashboard users.",
      "Designing MongoDB queries using $regex for name search and $in for multi-category species filtering.",
      "Enforcing adoption business rules so owners can't request their own pets, and locking out competing requests once one is approved."
    ],
    improvements: [
      "Add real-time chat between adopters and pet owners.",
      "Integrate image upload for pet listings instead of static URLs.",
      "Add email/SMS notifications for adoption request status updates.",
      "Implement pagination and advanced sorting for the pet catalog."
    ],
  },
  {
    id: "sun-cart",
    title: "SunCart - Summer Essentials Store",
    shortDesc: "A modern eCommerce web application for exploring and purchasing summer essentials with authentication and protected routes.",
    image: "/P-SunCart.png",
    tags: ["Next.js", "React", "BetterAuth", "Tailwind CSS", "JavaScript"],
    liveLink: "https://suncart-by-abid.vercel.app",
    githubLink: "https://github.com/Abid-Hossain-Sifat/SunCart",
    techStack: [
      "Next.js (App Router)",
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "BetterAuth",
      "React Toastify",
      "JavaScript (ES6+)",
      "Static JSON Data"],
    description:
      "SunCart is a modern summer-themed eCommerce web application built with Next.js. It allows users to explore seasonal products such as sunglasses, summer outfits, skincare items, and beach accessories. The platform includes authentication, protected routes, dynamic product pages, and a fully responsive UI with a clean user experience.",
    challenges: [
      "Implementing protected routes for product details page with authentication flow.",
      "Managing redirect flow after login, signup, and unauthorized access handling.",
      "Building a clean UI with conditional rendering based on authentication state.",
      "Handling user profile update with instant UI sync using BetterAuth."
    ],
    improvements: [
      "Add cart and wishlist functionality for better shopping experience.",
      "Integrate real backend database instead of JSON-based product data.",
      "Add payment gateway for full e-commerce functionality.","Implement product search and filtering system."
    ],
  },
  {
    id: "keen-keeper",
    title: "Keen Keeper - Communication Manager",
    shortDesc: "A smart communication management web app for tracking calls, messages, and video interactions with friends.",
    image: "/P-KeenKeeper.png",
    tags: ["React", "Tailwind CSS", "DaisyUI", "JavaScript", "React Router"],
    liveLink: "https://assignment7-keen-keeper.vercel.app",
    githubLink: "https://github.com/Abid-Hossain-Sifat/Assignment7-Keen-Keeper",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "DaisyUI",
      "JavaScript (ES6+)",
      "React Router",
      "React Toastify",
      "React Icons",
      "Local Storage",
      "JSON Data"],
    description:
      "Keen Keeper is a modern communication management web application built with React. It allows users to interact with friends through call, chat, and video features while tracking all interactions in a timeline-based history system. The app includes dynamic routing, filtering, and data visualization for a smooth user experience.",
    challenges: [
      "Implementing dynamic routing for individual friend details pages.",
      "Managing communication history with Local Storage persistence.",
      "Building filter system for calls, texts, and videos with sorting options.",
      "Handling state management across multiple routes without backend."
    ],
    improvements: [
      "Add real-time chat system using WebSockets.",
      "Integrate backend database instead of Local Storage.",
      "Add authentication system for user-specific data.",
      "Improve analytics dashboard with advanced charts."
    ],
  },
  {
    id: "digi-tools-platform",
    title: "DigiTools Platform - Digital Marketplace",
    shortDesc: "A modern React-based digital marketplace for AI tools and software subscriptions with cart system and notifications.",
    image: "/P-DigiToolsPlatform.png",
    tags: ["React", "Tailwind CSS", "DaisyUI", "JavaScript"],
    liveLink: "https://skycheck-weather.vercel.app",
    githubLink: "https://github.com/abidhossain/skycheck",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "DaisyUI",
      "JavaScript (ES6+)",
      "React Toastify",
      "JSON Data"
    ],
    description:
      "DigiTools Platform is a modern React-based digital marketplace designed for browsing and managing AI tools and software subscriptions. It provides a clean and fast UI experience for users to explore digital products, add them to cart, and receive real-time feedback through notifications.",
    challenges: [
       "Implementing cart system with duplicate prevention logic.","Managing dynamic cart state and navbar counter updates.","Handling real-time UI feedback using React Toastify.","Designing a clean and responsive marketplace UI without backend."
    ],
    improvements: [
      "Add backend database for real product management.","Implement user authentication and personalized cart system.",
      "Add payment gateway integration.",
      "Introduce product categories and advanced filtering system."
    ],
  },
];
