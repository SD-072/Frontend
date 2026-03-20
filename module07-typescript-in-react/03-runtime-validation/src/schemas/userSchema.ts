import { z } from "zod";

// type UserResponse = {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: {
//     street: string;
//     suite: string;
//     city: string;
//     zipcode: string;
//     geo: {
//       lat: string;
//       lng: string;
//     };
//   };
//   phone: string;
//   website: string;
//   company: {
//     name: string;
//     catchPhrase: string;
//     bs: string;
//   };
// };

const AddressSchema = z.object({
  street: z.string(),
  suite: z.string(),
  city: z.string(),
  zipcode: z.string(),
  geo: z.object({
    //     lat: z.union([
    //       z.number({ error: "This should be a number or a string" }),
    //       z.string(),
    //     ]),
    //     lng: z.number().or(z.string()), // shorthand version of union - order doesn't matter
    //   }),
    lat: z.coerce.number({ error: "This should be a number" }),
    lng: z.coerce.number(),
  }),
});

const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  username: z.string(),
  email: z.email(),
  address: AddressSchema,
  phone: z.string(),
  website: z.string(),
  company: z.object({
    name: z.string(),
    catchPhrase: z.string(),
    bs: z.string(),
  }),
});

const UserResponseSchema = z.array(UserSchema);

export { UserSchema, UserResponseSchema };
