import { MetadataRoute } from 'next'

export default function sitemap() {
    return [
      {
        url: 'https://capitaltaxplus.com',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://capitaltaxplus.com/Pricing',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
    //   {
    //     url: 'https://acme.com/blog',
    //     lastModified: new Date(),
    //     changeFrequency: 'weekly',
    //     priority: 0.5,
    //   },
    ];
  }
  