import * as s from "superstruct";

const schema = s.object({
  GOOGLE_ANALYTICS_ID: s.string(),
});

const [isInvalid, values] = s.validate(
  { GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID },
  schema,
);

if (isInvalid) {
  throw new Error("invalid ga env.");
}

export const { GOOGLE_ANALYTICS_ID } = values;
