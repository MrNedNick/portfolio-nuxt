import { serverQueryContent } from "#content/server";

const staticRoutes = ["/", "/about", "/projects", "/blog"];

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => {
    return {
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      "'": "&apos;",
      '\"': "&quot;",
    }[character]!;
  });
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const siteUrl = String(config.public.siteUrl).replace(/\/$/, "");
  const documents = await serverQueryContent(event).find();
  const articleRoutes = documents
    .map((document) => document._path)
    .filter((path): path is string => Boolean(path?.startsWith("/blog/")));
  const routes = [...staticRoutes, ...articleRoutes];
  const urls = routes
    .map((path) => `<url><loc>${escapeXml(`${siteUrl}${path}`)}</loc></url>`)
    .join("");

  setHeader(event, "content-type", "application/xml; charset=UTF-8");
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
});
