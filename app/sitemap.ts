import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thangtvb.work'
  
  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // You can add dynamic routes here by fetching data
  // For example, blog posts and work projects
  // const blogPosts = await getBlogPosts()
  // const workProjects = await getWorkProjects()
  
  // const dynamicRoutes: MetadataRoute.Sitemap = [
  //   ...blogPosts.map((post) => ({
  //     url: `${baseUrl}/blog/${post.slug}`,
  //     lastModified: new Date(post.updatedAt),
  //     changeFrequency: 'monthly' as const,
  //     priority: 0.6,
  //   })),
  //   ...workProjects.map((project) => ({
  //     url: `${baseUrl}/work/${project.slug}`,
  //     lastModified: new Date(project.updatedAt),
  //     changeFrequency: 'monthly' as const,
  //     priority: 0.7,
  //   })),
  // ]

  return staticRoutes
}