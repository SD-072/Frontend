// components/Greeting.tsx
// This component should receive a `name` string prop, if no name is passed, render 'Hello Stranger'

type GreetingProps = {
  name?: string;
};

const Greeting = (props: GreetingProps) => {
  const { name } = props;

  return <h1>Hello, {name || 'Hello Stranger'}!</h1>;
};

// && ||  check for falsy: false, 0, -0, 0n, "", null, undefined, NaN
// ?? checks for null & undefined only
// ? checks for null & undefined only

// let variable = null
// let variable2;

export default Greeting;
