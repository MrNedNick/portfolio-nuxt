type PortfolioSeo = {
  title: string;
  description: string;
  path: string;
  type?: "article" | "website";
};

export function usePortfolioSeo({
  title,
  description,
  path,
  type = "website",
}: PortfolioSeo) {
  const config = useRuntimeConfig();
  const siteUrl = String(config.public.siteUrl).replace(/\/$/, "");
  const canonicalUrl = `${siteUrl}${path}`;
  const imageUrl = `${siteUrl}/images/og/portfolio.png`;

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: type,
    ogUrl: canonicalUrl,
    ogImage: imageUrl,
    ogImageAlt: "A quiet developer workspace with a laptop and notebook.",
    twitterCard: "summary_large_image",
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: imageUrl,
  });

  useHead({
    link: [{ rel: "canonical", href: canonicalUrl }],
  });
}
