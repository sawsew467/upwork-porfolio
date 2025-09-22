export interface Project {
  slug: string;
  title: string;
  client: string;
  summary: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  technologies: string[];
  image: string;
  gallery: string[];
  kpis: {
    label: string;
    value: string;
    icon: string;
  }[];
}

export const projects: Project[] = [
  {
    slug: "fuem",
    title: "FUEM - E-learning Platform",
    client: "FUEM Education",
    summary: "A comprehensive e-learning platform with course management and student progress tracking.",
    description: "FUEM is an e-learning platform designed for educational institutions to offer online courses, track student progress, and manage educational content.",
    problem: "The client needed a scalable e-learning solution that could handle thousands of concurrent users, support video streaming, and provide detailed analytics on student performance.",
    solution: "I developed a custom e-learning platform using Next.js for the frontend and NestJS for the backend. The solution includes features such as course creation, student enrollment, progress tracking, and interactive quizzes.",
    result: "The platform now serves over 5,000 students, with a 40% increase in course completion rates compared to their previous solution.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "NestJS", "PostgreSQL", "AWS S3", "Redis"],
    image: "https://img.heroui.chat/image/dashboard?w=800&h=600&u=1",
    gallery: [
      "https://img.heroui.chat/image/dashboard?w=800&h=600&u=2",
      "https://img.heroui.chat/image/dashboard?w=800&h=600&u=3",
      "https://img.heroui.chat/image/dashboard?w=800&h=600&u=4"
    ],
    kpis: [
      {
        label: "Increase in Student Engagement",
        value: "45%",
        icon: "lucide:trending-up"
      },
      {
        label: "Course Completion Rate",
        value: "78%",
        icon: "lucide:check-circle"
      },
      {
        label: "Reduction in Support Tickets",
        value: "60%",
        icon: "lucide:help-circle"
      }
    ]
  },
  {
    slug: "monde-forain",
    title: "Monde Forain - E-commerce Platform",
    client: "Monde Forain",
    summary: "A custom e-commerce platform for a specialty retailer with inventory management and order processing.",
    description: "Monde Forain is an e-commerce platform for a specialty retailer selling unique products. The platform includes inventory management, order processing, and customer management features.",
    problem: "The client was using a generic e-commerce solution that couldn't handle their unique product catalog and custom pricing rules. They needed a tailored solution that could scale with their business.",
    solution: "I built a custom e-commerce platform with Next.js and a headless CMS for content management. The solution includes features such as product categorization, custom pricing rules, and integration with payment gateways.",
    result: "The new platform increased sales by 35% in the first quarter after launch, with a 25% reduction in cart abandonment rate.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Strapi CMS", "Stripe", "MongoDB", "Vercel"],
    image: "https://img.heroui.chat/image/dashboard?w=800&h=600&u=5",
    gallery: [
      "https://img.heroui.chat/image/dashboard?w=800&h=600&u=6",
      "https://img.heroui.chat/image/dashboard?w=800&h=600&u=7",
      "https://img.heroui.chat/image/dashboard?w=800&h=600&u=8"
    ],
    kpis: [
      {
        label: "Increase in Sales",
        value: "35%",
        icon: "lucide:dollar-sign"
      },
      {
        label: "Reduction in Cart Abandonment",
        value: "25%",
        icon: "lucide:shopping-cart"
      },
      {
        label: "Mobile Conversion Rate",
        value: "18%",
        icon: "lucide:smartphone"
      }
    ]
  },
  {
    slug: "wetex",
    title: "Wetex - Admin Dashboard",
    client: "Wetex Industries",
    summary: "A comprehensive admin dashboard for managing inventory, orders, and customer data for a manufacturing company.",
    description: "Wetex is an admin dashboard for a manufacturing company to manage their inventory, orders, and customer data. The dashboard provides real-time insights into business operations.",
    problem: "The client was using multiple disconnected systems to manage their business operations, leading to inefficiencies and data inconsistencies. They needed a centralized solution to streamline their processes.",
    solution: "I developed a comprehensive admin dashboard using React and NestJS. The solution includes features such as inventory management, order processing, customer management, and real-time analytics.",
    result: "The centralized dashboard reduced administrative time by 30% and improved data accuracy by 40%.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "NestJS", "PostgreSQL", "Docker", "AWS"],
    image: "https://img.heroui.chat/image/dashboard?w=800&h=600&u=9",
    gallery: [
      "https://img.heroui.chat/image/dashboard?w=800&h=600&u=10",
      "https://img.heroui.chat/image/dashboard?w=800&h=600&u=11",
      "https://img.heroui.chat/image/dashboard?w=800&h=600&u=12"
    ],
    kpis: [
      {
        label: "Reduction in Administrative Time",
        value: "30%",
        icon: "lucide:clock"
      },
      {
        label: "Improvement in Data Accuracy",
        value: "40%",
        icon: "lucide:check-square"
      },
      {
        label: "Increase in Order Processing Speed",
        value: "50%",
        icon: "lucide:package"
      }
    ]
  }
];
