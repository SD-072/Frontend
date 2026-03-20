import { z } from "zod";

// # Nested API response validation
// * Backend data often arrives as strings in deep objects. Schemas keep that conversion close to the shape being validated.
const AddressSchema = z.object({
  street: z.string(),
  suite: z.string(),
  city: z.string(),
  zipcode: z.string(),
  //     lat: z.union([
  //       z.number({ error: "This should be a number or a string" }),
  //       z.string(),
  //     ]),
  //     lng: z.number().or(z.string()), // shorthand version of union - order doesn't matter
  //   }),
  geo: z.object({
    // * `coerce` is cleaner than a union when the API is allowed to send numeric strings.
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
