import { useState } from 'react';
import LightBulb from './components/LightBulb';

const App = () => {
  const [lightSwitch, setLightSwitch] = useState(false);
  // const lightSwitch = false;
  const [counter, setCounter] = useState(0);

  const maxTurns = 3;

  function handleClick() {
    if (counter < maxTurns) {
      setLightSwitch(l => !l);
      // setLightSwitch(l => (l === false ? true : false));
    }
    // if (lightSwitch) {
    //   setCounter(c => c + 1);
    // }
    setCounter(c => (lightSwitch ? c + 1 : c));
  }

  const handleReset = () => {
    setLightSwitch(false);
    setCounter(0);
  };

  // console.log(counter);

  return (
    <>
      <button disabled={counter >= maxTurns} type='button' onClick={handleClick}>
        {/* {lightSwitch ? 'Switched on' : 'Switched off'} */}
        {!lightSwitch && counter >= maxTurns ?
          'Locked'
        : lightSwitch ?
          'Switched on'
        : 'Switched off'}
      </button>
      <button type='button' onClick={handleReset}>
        Reset
      </button>
      <LightBulb lightSwitch={lightSwitch} />
    </>
  );
};

export default App;
