import { z } from "zod";

// # Runtime validation with `safeParse`
// * TypeScript only checks types while you write code. Zod protects values that arrive at runtime.
let myMessage: unknown = "Hello Mars";
myMessage = 123435;

const MessageSchema = z.string();
const messageResult = MessageSchema.safeParse(myMessage);

// ! `safeParse` never throws. It gives you a success flag so beginners can inspect both paths safely.
console.log("messageResult", {
  success: messageResult.success,
  data: messageResult.success ? messageResult.data : undefined,
  error: messageResult.success ? undefined : messageResult.error.issues,
});
