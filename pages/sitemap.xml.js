// // pages/sitemap.xml.js

// const homepage = "https://capitaltaxplus.com"

// function generateSiteMap() {
//   return `<?xml version="1.0" encoding="UTF-8"?>
//     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//       <url>
//         <loc>${homepage}</loc>
//         <lastmod>${new Date().toISOString()}</lastmod>
//       </url>
//       <url>
//         <loc>${homepage}/Pricing</loc>
//         <lastmod>${new Date().toISOString()}</lastmod>
//       </url>
//     </urlset>
//   `;
// }

// export async function getServerSideProps({ res }) {
//   const sitemap = generateSiteMap();

//   res.setHeader("Content-Type", "text/xml");
//   res.write(sitemap);
//   res.end();

//   return {
//     props: {},
//   };
// }

// export default function SiteMap() {}


// pages/sitemap.xml.js

const homepage = "https://capitaltaxplus.com";

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${homepage}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${homepage}/Pricing</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
      <loc>${homepage}/contactUs</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    </urlset>
  `;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();

  // Set the correct content type header
  res.setHeader("Content-Type", "application/xml");

  // Write the XML content to the response
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {}
