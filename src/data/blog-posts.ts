export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  coverImage: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-scalable-nextjs-applications",
    title: "Building Scalable Next.js Applications: Best Practices",
    excerpt: "Learn how to structure your Next.js applications for scalability, performance, and maintainability.",
    date: "2023-10-15",
    author: {
      name: "John Doe",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=1"
    },
    coverImage: "https://img.heroui.chat/image/ai?w=800&h=400&u=1",
    tags: ["Next.js", "React", "Performance", "Architecture"],
    content: `
# Building Scalable Next.js Applications: Best Practices

Next.js has become one of the most popular React frameworks for building modern web applications. Its built-in features like server-side rendering, static site generation, and API routes make it a powerful choice for developers. However, as your application grows, you need to ensure that your codebase remains maintainable and scalable.

## Project Structure

A well-organized project structure is crucial for scalability. Here's a recommended structure for large Next.js applications:

\`\`\`
/src
  /components
    /ui          # Reusable UI components
    /layout      # Layout components
    /features    # Feature-specific components
  /hooks         # Custom React hooks
  /lib           # Utility functions and libraries
  /pages         # Next.js pages
  /api           # API routes
  /styles        # Global styles
  /types         # TypeScript type definitions
  /context       # React context providers
  /services      # External service integrations
\`\`\`

## Component Organization

Organize your components based on their responsibility:

1. **UI Components**: Reusable, presentational components like buttons, inputs, cards, etc.
2. **Layout Components**: Components that define the structure of your pages, like headers, footers, and navigation.
3. **Feature Components**: Components specific to a feature or domain of your application.

## State Management

For state management in large applications, consider:

- **React Context**: For global state that doesn't change frequently
- **SWR or React Query**: For server state management
- **Zustand or Jotai**: For complex client-side state

## Performance Optimization

Next.js provides several features for performance optimization:

1. **Image Optimization**: Use the Next.js Image component for automatic image optimization
2. **Code Splitting**: Next.js automatically splits your code by pages
3. **Dynamic Imports**: Use dynamic imports for components that are not needed immediately

## Conclusion

Building scalable Next.js applications requires thoughtful planning and organization. By following these best practices, you can ensure that your application remains maintainable and performant as it grows.
    `
  },
  {
    slug: "mastering-tailwind-css",
    title: "Mastering Tailwind CSS: From Basics to Advanced Techniques",
    excerpt: "Dive deep into Tailwind CSS and learn how to leverage its utility-first approach for building modern UIs.",
    date: "2023-09-22",
    author: {
      name: "Jane Smith",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=2"
    },
    coverImage: "https://img.heroui.chat/image/ai?w=800&h=400&u=2",
    tags: ["Tailwind CSS", "CSS", "Frontend", "Design"],
    content: `
# Mastering Tailwind CSS: From Basics to Advanced Techniques

Tailwind CSS has revolutionized the way developers approach styling in web applications. Its utility-first methodology allows for rapid UI development without leaving your HTML. In this article, we'll explore how to master Tailwind CSS, from basic concepts to advanced techniques.

## Understanding the Utility-First Approach

Unlike traditional CSS frameworks that provide pre-designed components, Tailwind provides low-level utility classes that let you build completely custom designs. This approach offers several advantages:

- No more naming CSS classes
- Consistent design system
- Lower CSS bundle size (with proper purging)
- Faster development iterations

## Basic Usage

Tailwind makes it easy to style elements directly in your HTML:

\`\`\`html
<div class="bg-white rounded-lg shadow-md p-6">
  <h2 class="text-xl font-bold text-gray-800 mb-2">Card Title</h2>
  <p class="text-gray-600">Card content goes here...</p>
  <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    Click me
  </button>
</div>
\`\`\`

## Responsive Design

Tailwind makes responsive design straightforward with responsive prefixes:

\`\`\`html
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- This div will be full width on mobile, half width on medium screens, and one-third width on large screens -->
</div>
\`\`\`

## Customization

Tailwind is highly customizable through the tailwind.config.js file:

\`\`\`js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
      }
    }
  }
}
\`\`\`

## Advanced Techniques

### 1. Component Extraction

For reusable patterns, extract components:

\`\`\`jsx
function Button({ children, ...props }) {
  return (
    <button 
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" 
      {...props}
    >
      {children}
    </button>
  );
}
\`\`\`

### 2. Using @apply for Complex Components

For complex components, use @apply to extract common patterns:

\`\`\`css
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50;
  }
}
\`\`\`

### 3. Dark Mode

Implement dark mode with Tailwind's dark variant:

\`\`\`html
<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
  <!-- Content that adapts to dark mode -->
</div>
\`\`\`

## Conclusion

Mastering Tailwind CSS allows you to build modern, responsive interfaces quickly and consistently. By understanding its utility-first approach and leveraging advanced techniques, you can create beautiful UIs without writing custom CSS.
    `
  },
  {
    slug: "nestjs-for-enterprise-applications",
    title: "NestJS for Enterprise Applications: A Comprehensive Guide",
    excerpt: "Explore how NestJS provides a robust foundation for building enterprise-grade backend applications.",
    date: "2023-08-05",
    author: {
      name: "Mike Johnson",
      avatar: "https://img.heroui.chat/image/avatar?w=200&h=200&u=3"
    },
    coverImage: "https://img.heroui.chat/image/ai?w=800&h=400&u=3",
    tags: ["NestJS", "Backend", "TypeScript", "Enterprise"],
    content: `
# NestJS for Enterprise Applications: A Comprehensive Guide

NestJS has emerged as a powerful framework for building scalable and maintainable backend applications. Its architecture, inspired by Angular, provides a structured approach to building server-side applications with TypeScript. In this guide, we'll explore how NestJS can be used for enterprise applications.

## Why NestJS for Enterprise?

Enterprise applications have specific requirements that NestJS addresses effectively:

1. **Scalability**: NestJS's modular architecture makes it easy to scale applications
2. **Maintainability**: The structured approach helps maintain code quality as the team grows
3. **TypeScript Integration**: Strong typing reduces runtime errors
4. **Dependency Injection**: Built-in DI container simplifies testing and promotes loose coupling
5. **Versatility**: Works with various databases, message brokers, and other services

## Core Concepts

### Modules

Modules help organize your application into cohesive blocks of functionality:

\`\`\`typescript
@Module({
  imports: [DatabaseModule, ConfigModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
\`\`\`

### Controllers

Controllers handle incoming requests and return responses:

\`\`\`typescript
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }
}
\`\`\`

### Providers

Providers are services, repositories, factories, helpers, etc.:

\`\`\`typescript
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }
}
\`\`\`

## Enterprise Patterns with NestJS

### Repository Pattern

NestJS works well with TypeORM to implement the repository pattern:

\`\`\`typescript
@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async findByEmail(email: string): Promise<User | undefined> {
    return this.findOne({ where: { email } });
  }
}
\`\`\`

### CQRS Pattern

For complex domains, NestJS supports Command Query Responsibility Segregation:

\`\`\`typescript
@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(private repository: UsersRepository) {}

  async execute(command: CreateUserCommand): Promise<void> {
    const { userData } = command;
    await this.repository.createUser(userData);
  }
}
\`\`\`

### Microservices

NestJS has built-in support for microservices:

\`\`\`typescript
const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  transport: Transport.KAFKA,
  options: {
    client: {
      brokers: ['localhost:9092'],
    },
  },
});
\`\`\`

## Best Practices for Enterprise Applications

1. **Structured Error Handling**: Create a centralized error handling system
2. **Validation**: Use class-validator for input validation
3. **Authentication & Authorization**: Implement robust security with Guards
4. **Logging**: Set up comprehensive logging for production monitoring
5. **Testing**: Write unit, integration, and e2e tests
6. **Documentation**: Use Swagger for API documentation

## Conclusion

NestJS provides a robust foundation for building enterprise-grade applications. Its structured approach, combined with TypeScript's type safety, makes it an excellent choice for teams building complex backend systems.
    `
  }
];
