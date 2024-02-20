import * as s from "superstruct";

const schema = s.object({
  HOST: s.string(),
});

const [isInvalid, values] = s.validate({ HOST: process.env.HOST }, schema);

if (isInvalid) {
  throw new Error("invalid host env.");
}

export const { HOST } = values;
