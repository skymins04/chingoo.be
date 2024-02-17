import * as z from "zod";

const schema = z.object({
  GOOGLE_ANALYTICS_ID: z.string(),
});

export const { GOOGLE_ANALYTICS_ID } = schema.parse(process.env);
