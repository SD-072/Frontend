// components/Toggle.tsx
// This component should receive `isOn` (boolean) and `onToggle` (function that takes no arguments and returns void)
// The onToggle function should change the value of `isOn` meaning you need to pass state down ;)

import type { Dispatch, SetStateAction } from 'react';

type ToggleProps = {
  isOn: boolean;
  // onToggle: () => void;
  // onToggle: MouseEventHandler<HTMLButtonElement>;
  setIsOn: Dispatch<SetStateAction<boolean>>;
  add: (a: number, b: number) => number;
};

const Toggle = ({ isOn, setIsOn }: ToggleProps) => {
  return (
    <button onClick={() => setIsOn((o) => !o)} type='button'>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
};

export default Toggle;
