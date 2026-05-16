export const projects = [
  {
    id: "sun-cart",
    title: "SunCart - Summer Essentials Store",
    shortDesc: "A modern eCommerce web application for exploring and purchasing summer essentials with authentication and protected routes.",
    image: "/P-SunCart.png",
    tags: ["Next.js", "React", "BetterAuth", "Tailwind CSS", "JavaScript"],
    liveLink: "https://assignment8-sun-cart.vercel.app",
    githubLink: "https://github.com/Abid-Hossain-Sifat/Assignment8-SunCart",
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
