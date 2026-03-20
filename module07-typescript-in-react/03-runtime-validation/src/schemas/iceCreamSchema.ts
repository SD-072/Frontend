import { z } from "zod";

export const iceCreamFlavours = [
  "chocolate",
  "vanialla",
  "stracciatella",
  "mango",
  "lemon",
];

const IceCreamOrderSchema = z.object({
  scoop: z.array(z.enum(iceCreamFlavours)).min(1, {
    error: "Please choose at least one flavour.",
  }), // ["chocolate", "vanialla", "stracciatella"],
  cone: z.boolean(), // true,
  sprinkles: z
    .string()
    .trim()
    .min(3, {
      error: "Sprinkles must be at least 3 characters.",
    })
    .optional(), // "chocolate",
  spoon: z.boolean().default(false), // true,
  creamAmount: z.coerce
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
