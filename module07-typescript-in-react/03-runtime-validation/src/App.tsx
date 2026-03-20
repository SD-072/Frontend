import { type SubmitEvent, useId, useState } from "react";
import { z } from "zod";

import "./App.css";
import {
  IceCreamOrderSchema,
  iceCreamFlavours,
} from "./schemas/iceCreamSchema";
import type { IceCreamOrderType } from "./types";

const initialForm = {
  scoop: [] as string[],
  cone: true,
  sprinkles: "",
  spoon: false,
  creamAmount: "0",
};

function App() {
  // # Runtime validation inside a React form
  // * The form stores raw input strings first, then Zod validates and transforms the final payload on submit.
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [submittedOrder, setSubmittedOrder] =
    useState<IceCreamOrderType | null>(null);
  const id = useId();

  function handleScoopChange(flavour: string, checked: boolean) {
    setForm((currentForm) => ({
      ...currentForm,
      scoop: checked
        ? [...currentForm.scoop, flavour]
        : currentForm.scoop.filter((item) => item !== flavour),
    }));
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    // * `safeParse` keeps invalid form input from crashing the component and returns a typed result when valid.
    const result = IceCreamOrderSchema.safeParse({
      ...form,
      sprinkles: form.sprinkles.trim() || undefined,
    });

    if (!result.success) {
      setError(z.prettifyError(result.error));
      setSubmittedOrder(null);
      return;
    }

    setError("");
    setSubmittedOrder(result.data);
    setForm(initialForm);
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="mt-5">
        <fieldset className="my-3">
          <legend id={`${id}-scoops`} className="mb-2">
            Ice Cream Flavors:
          </legend>

          {iceCreamFlavours.map((flavour) => (
            <label
              key={flavour}
              htmlFor={`${id}-${flavour}`}
              className="block capitalize"
            >
              <input
                id={`${id}-${flavour}`}
                type="checkbox"
                checked={form.scoop.includes(flavour)}
                onChange={(event) =>
                  handleScoopChange(flavour, event.target.checked)
                }
              />
              {flavour}
            </label>
          ))}
        </fieldset>

        <div className="my-3">
          <label>
            <input
              type="checkbox"
              checked={form.cone}
              onChange={(event) =>
                setForm((currentForm) => ({
                  ...currentForm,
                  cone: event.target.checked,
                }))
              }
            />
            Serve in cone
          </label>
        </div>

        <div className="my-3">
          <label>
            Sprinkles:
            <input
              type="text"
              placeholder="Enter sprinkles type"
              className="border border-gray-400 rounded p-1"
              value={form.sprinkles}
              onChange={(event) =>
                setForm((currentForm) => ({
                  ...currentForm,
                  sprinkles: event.target.value,
                }))
              }
            />
          </label>
        </div>

        <div className="my-3">
          <label>
            <input
              type="checkbox"
              checked={form.spoon}
              onChange={(event) =>
                setForm((currentForm) => ({
                  ...currentForm,
                  spoon: event.target.checked,
                }))
              }
            />
            Need a spoon
          </label>
        </div>

        <div className="my-3">
          <label>
            Cream amount (0-5):
            <input
              type="number"
              min="0"
              max="5"
              className="border border-gray-400 rounded p-1"
              value={form.creamAmount}
              onChange={(event) =>
                setForm((currentForm) => ({
                  ...currentForm,
                  creamAmount: event.target.value,
                }))
              }
            />
          </label>
        </div>

        <button type="submit" className="border border-gray-400 rounded p-1">
          Place Order
        </button>
      </form>

      {error ? (
        <p className="whitespace-pre-wrap text-red-500">{error}</p>
      ) : null}
      {submittedOrder ? (
        <pre>{JSON.stringify(submittedOrder, null, 2)}</pre>
      ) : null}
    </main>
  );
}

export default App;
