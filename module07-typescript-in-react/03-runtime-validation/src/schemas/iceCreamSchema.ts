import { z } from "zod";

export const iceCreamFlavours = [
  "chocolate",
  "vanialla",
  "stracciatella",
  "mango",
  "lemon",
  "smurf",
];

const IceCreamOrderSchema = z.object({
  scoop: z.array(z.enum(iceCreamFlavours)), // ["chocolate", "vanialla", "stracciatella"],
  cone: z.boolean(), // true,
  sprinkles: z.string().trim().optional(), // "chocolate",
  spoon: z.boolean().default(false), // true,
  creamAmount: z
    .number()
    .min(0, { error: "Too little cream." })
    .max(5, { error: "Too much cream" }), // 2,
});

export { IceCreamOrderSchema };

// const order = {
//   scoop: ["chocolate", "nougat"],
//   sprinkles: "chocolate",
//   spoon: true,
//   creamAmount: -3,
// };

// const { data, error, success } = IceCreamOderSchema.safeParse(order);

// if (success) {
//   console.log("success:  ", success, data);
// }

// if (!success) {
//   console.log("error: ", z.prettifyError(error));
// }
