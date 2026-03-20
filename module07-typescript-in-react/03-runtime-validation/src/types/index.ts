import type z from "zod";
import type { IceCreamOrderSchema } from "../schemas/iceCreamSchema";
import type { UserSchema } from "../schemas/userSchema";

type IceCreamOrderType = z.infer<typeof IceCreamOrderSchema>;

type User = z.infer<typeof UserSchema>;

type IceCreamForm = {
  scoop: string;
  cone: string | undefined;
  spoon: string | undefined;
  creamAmount: number;
  sprinkles?: string | undefined;
};

export type { IceCreamOrderType, User, IceCreamForm };
