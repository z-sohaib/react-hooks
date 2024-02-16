import { useState, useEffect, useMemo } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [string, setString] = useState("Hello World");

  useEffect(() => {
    console.log("the current value of counter: " + counter);
  }, [counter]);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  const doubleCounter = useMemo(() => {
    return counter * 2;
  }, [counter]);

  return (
    <div className="mt-8 flex flex-col justify-center">
      <p className="text-center text-xl">{counter}</p>
      <div className="flex justify-center gap-x-4 items-center">
        <button
          onClick={decrement}
          className="mx-auto bg-red-500 text-white py-2 px-4 rounded-lg"
        >
          Decrement
        </button>
        <button
          onClick={increment}
          className="mx-auto bg-green-500 text-white py-2 px-4 rounded-lg"
        >
          Increment
        </button>
      </div>
      <p className="text-center">
        The double value of the counter: {doubleCounter}
      </p>
      <input
        value={string}
        onChange={(e) => setString(e.target.value)}
        className="mx-auto mt-4 p-2 border-2 border-gray-300 rounded-lg w-1/2 text-center"
      />
    </div>
  );
}

export default App;
