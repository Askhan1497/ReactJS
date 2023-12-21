import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*()?<>|/[]{}";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, char, number, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, char, passwordGenerator]);

  const passwordRef = useRef(null);


  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password])
  return (
    <>
    <h1 className="text-center text-3xl py-4 text-orange-500 mt-3 text font-semibold">Generate a random Password</h1>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-28 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3 font-semibold">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 py-3">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 font-semibold"
            placeholder="password"
            readOnly
            ref = {passwordRef}
          />
          <button className="outline-none bg-blue-600 hover:bg-orange-500 text-white px-3 py-0.5 shrink-0 font-semibold" onClick={copyPassword}>
            Copy
          </button>
        </div>

        <div className="flex  flex-wrap gap-x-2 py-3 text-lg">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="cursor-pointer"
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={number}
              onChange={() => setNumber((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              id="charcterInput"
              defaultChecked={char}
              onChange={() => setChar((prev) => !prev)}
            />
            <label htmlFor="numberInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
