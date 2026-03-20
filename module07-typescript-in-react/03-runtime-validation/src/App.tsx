import { useActionState, useId, useState } from "react";
import "./App.css";

import z from "zod";
import {
  IceCreamOrderSchema,
  iceCreamFlavours,
} from "./schemas/iceCreamSchema";

const initialState: IceCreamState = {
  error: "",
  cone: true,
  creamAmount: 0,
  scoops: "",
  spoon: false,
  sprinkles: undefined,
};

//  Action for processing the ice cream order
async function iceCreamAction(_prev: IceCreamState, formData: FormData) {
  const rawData = Object.fromEntries(formData);
  const scoops = String(rawData.scoops ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  // Transforms the raw form data into the expected order format
  const orderToSend = {
    scoop: scoops,
    // Checkbox to Boolean: If "on", then true
    cone: !!rawData.cone,
    spoon: !!rawData.spoon,
    // String to Number
    creamAmount: Number(rawData.cream) || 0,
    // ... and the other fields
    sprinkles: rawData.sprinkles,
  };

  // Validates the order with the Zod schema
  // safeParse returns an object with success, data and error
  const { error, success } = IceCreamOrderSchema.safeParse(orderToSend);

  // If validation was successful
  if (success) {
    console.log("Doing the fetch");
    // Normally an API call would take place here
    // Form is reset to initial state
    return initialState;
  }

  // In case of validation errors: Returns the current state with error message
  // Keeps the entered values so the user can correct them
  return {
    ...initialState,
    scoops: rawData.scoops as string,
    sprinkles: rawData.sprinkles as string | undefined,
    // Formats the Zod error into a readable error message
    error: z.prettifyError(error),
  };
}

function App() {
  const [scoops, setScoops] = useState<string[]>([]);
  const [state, action, pending] = useActionState(iceCreamAction, initialState);
  const id = useId();

  console.log(scoops);

  return (
    <div>
      <form action={action} style={{ marginTop: "20px" }}>
        <div style={{ margin: "15px 0" }}>
          <label htmlFor={`${id}-scoops`}>Ice Cream Flavors:</label>
          <select
            name="scoops-collect"
            id={`${id}-scoops-collect`}
            style={{ textTransform: "capitalize" }}
            onChange={(e) => setScoops((s) => [...s, e.target.value])}
          >
            {iceCreamFlavours.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
          <input
            name="scoops"
            id={`${id}-scoops`}
            defaultValue={scoops.join(",")} // ["a", "b"] => "a,b"
            // readOnly
          ></input>
        </div>

        <div style={{ margin: "15px 0" }}>
          <label>
            <input type="checkbox" name="cone" defaultChecked={state.cone} />
            Serve in cone
          </label>
        </div>

        <div style={{ margin: "15px 0" }}>
          <label>
            Sprinkles:
            <input
              type="text"
              name="sprinkles"
              placeholder="Enter sprinkles type"
              defaultValue={state.sprinkles}
            />
          </label>
        </div>

        <div style={{ margin: "15px 0" }}>
          <label>
            <input type="checkbox" name="spoon" defaultChecked={state.spoon} />
            Need a spoon
          </label>
        </div>

        <div style={{ margin: "15px 0" }}>
          <label>
            Cream amount (1-5):
            <input
              type="number"
              name="cream"
              min="0"
              max="5"
              defaultValue={state.creamAmount}
            />
          </label>
        </div>

        <button type="submit" disabled={pending}>
          {pending ? "Placing Order..." : "Place Order"}
        </button>
      </form>
      {state.error && <p style={{ color: "red" }}>{state.error}</p>}
    </div>
  );
}

export default App;
