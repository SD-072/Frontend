import { useState } from 'react';

//   {
//     darkTheme: false;
//   }
// const darktheme = props.darkTheme
const Counter = ({ darkTheme }) => {
  const [counter, setCounter] = useState(0);
  //   const [isDisabled, setIsDisabled] = useState(false);
  //   const [name, setName] = useState("Samara");
  //   const [theme, setTheme] = useState("light");

  //   const increaseCounter = () => {
  //     setCounter((prev) => prev + 1);
  //   };

  //   const decreaseCounter = () => {
  //     setCounter((prev) => prev - 1);
  //   };

  const handleClick = e => {
    // console.log(e.target.value);
    const operation = e.target.value;
    //     if (operation === "+") {
    //       setCounter((prev) => prev + 1);
    //     } else if (operation === "-") {
    //       if (counter <= 0) return;
    //       setCounter((prev) => prev - 1);
    //     }
    //   };

    if (operation === '+') {
      setCounter(prev => prev + 1);
      return;
    }
    if (operation === '-') {
      setCounter(prev => (prev <= 0 ? 0 : prev - 1));
      return;
    }
  };

  //   const handleClick = () => {
  //     // * Direct value update - when previous value doesn't matter
  //     // setCounter(2);
  //     // setName("Renke");
  //     // <- tells React: "schedule a state update" = 1

  //     // * Function update - when the new state depends on the previous state
  //     setCounter((prev) => {
  //       return prev + 1;
  //     }); // 0 + 1 ->  scheduled value 1
  //     setCounter((prev) => {
  //       return prev + 1;
  //     }); // 1 + 1 -> scheduled value 2
  //     // console.log(`New value of counter ${counter}`); // <- logs the *old/current render* value
  //   };

  const textColor = darkTheme ? 'text-white' : 'text-black';

  return (
    <>
      <div
        className={`flex w-36 justify-between border-2 ${darkTheme ? 'border-gray-100' : 'border-black'}`}>
        <button
          value='+'
          onClick={handleClick}
          type='button'
          className={`w-12 cursor-pointer bg-green-400 p-4 font-bold ${textColor}`}>
          +
        </button>
        <span className={`p-4 ${textColor}`}>{counter}</span>
        <button
          value='-'
          onClick={handleClick}
          type='button'
          //   className={
          //     counter === 0
          //       ? "bg-gray-400 w-12 p-4 font-bold"
          //       : "bg-red-400 w-12 p-4 font-bold cursor-pointer"
          //   }
          className={`${counter === 0 ? 'bg-gray-400' : 'cursor-pointer bg-red-400'} w-12 bg-gray-400 p-4 font-bold ${textColor}`}
          // disabled={counter === 0 ? true : false}
          disabled={counter <= 0}>
          -
        </button>
      </div>
      <button
        type='button'
        className='mt-1 cursor-pointer bg-gray-300 p-2'
        onClick={() => {
          setCounter(0);
        }}>
        Clear
      </button>
      {/* {name} */}
    </>
  );
};

export default Counter;
