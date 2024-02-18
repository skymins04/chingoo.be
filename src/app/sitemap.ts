import { getReceiptSitemapDataFromDB } from "@/create-receipt";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const receiptSitemapData = await getReceiptSitemapDataFromDB();

  const viewReceiptSitemaps: MetadataRoute.Sitemap = receiptSitemapData.map(
    ({ id, updated_at }) => ({
      url: `https://chingoo.be/receipt/${id}`,
      lastModified: new Date(updated_at),
    }),
  );

  return [
    {
      url: "https://chingoo.be",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://chingoo.be/create",
      lastModified: new Date(),
      priority: 1,
    },
    ...viewReceiptSitemaps,
  ];
}
