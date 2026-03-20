import { z } from "zod";

export const iceCreamFlavours = [
  "chocolate",
  "vanilla",
  "stracciatella",
  "mango",
  "lemon",
];

// # Runtime validation for form data
// * A schema lets the UI accept flexible input first, then normalize and validate it in one place.
const IceCreamOrderSchema = z.object({
  scoop: z.array(z.enum(iceCreamFlavours)).min(1, {
    error: "Please choose at least one flavour.",
  }),
  cone: z.boolean(),
  sprinkles: z
    .string()
    .trim()
    .min(3, {
      error: "Sprinkles must be at least 3 characters.",
    })
    .optional(),
  spoon: z.boolean().default(false),
  creamAmount: z.coerce
    .number()
    .min(0, { error: "Too little cream." })
    .max(5, { error: "Too much cream" }),
});

export { IceCreamOrderSchema };

// # Demo parse result
// * This example shows why schemas are useful: one invalid value can explain exactly what failed.
const sampleOrder = {
  scoop: ["chocolate", "nougat"],
  sprinkles: "chocolate",
  spoon: true,
  creamAmount: -3,
};

const sampleOrderResult = IceCreamOrderSchema.safeParse(sampleOrder);

if (import.meta.env.DEV) {
  if (sampleOrderResult.success) {
    console.log("sampleOrderResult", sampleOrderResult.data);
  }

  if (!sampleOrderResult.success) {
    // ! `z.prettifyError` is useful for teaching because it turns nested issues into readable feedback.
    console.log("sampleOrderError", z.prettifyError(sampleOrderResult.error));
  }
}
