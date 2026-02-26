export default function sitemap() {
  const baseUrl = "https://www.wrexon.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.7,
    },
  ];
}