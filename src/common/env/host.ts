import * as z from "zod";

const schema = z.object({
  HOST: z.string(),
});

export const { HOST } = schema.parse(process.env);
