export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  timeframe: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "saas-mvp",
    title: "SaaS/MVP Development",
    description: "Turn your idea into a functional SaaS product or MVP in 4-6 weeks. Perfect for startups and entrepreneurs looking to validate their concept.",
    icon: "lucide:rocket",
    timeframe: "4-6 weeks",
    features: [
      "User authentication & authorization",
      "Core feature implementation",
      "Responsive UI/UX design",
      "Basic analytics integration",
      "Payment processing (optional)",
      "Deployment to production"
    ]
  },
  {
    id: "ecommerce",
    title: "E-commerce / B2B Platform",
    description: "Custom e-commerce solutions for retail or B2B businesses. From product catalogs to checkout flows and order management.",
    icon: "lucide:shopping-bag",
    timeframe: "6-8 weeks",
    features: [
      "Product catalog management",
      "Shopping cart & checkout",
      "Payment gateway integration",
      "Order management system",
      "Customer accounts",
      "Inventory tracking",
      "Analytics & reporting"
    ]
  },
  {
    id: "admin-dashboard",
    title: "Multi-role System / Admin Dashboard",
    description: "Comprehensive admin dashboards and multi-role systems for managing your business operations efficiently.",
    icon: "lucide:layout-dashboard",
    timeframe: "6-10 weeks",
    features: [
      "Role-based access control",
      "Data visualization & reporting",
      "User management",
      "Content management",
      "Activity logging & audit trails",
      "Notification system",
      "API integrations"
    ]
  },
  {
    id: "debugging",
    title: "Debugging & Stabilization",
    description: "Fix bugs, improve performance, and stabilize your existing application. Get your project back on track.",
    icon: "lucide:bug",
    timeframe: "1-4 weeks",
    features: [
      "Code review & analysis",
      "Bug identification & fixing",
      "Performance optimization",
      "Security improvements",
      "Documentation",
      "Knowledge transfer",
      "Maintenance planning"
    ]
  }
];
