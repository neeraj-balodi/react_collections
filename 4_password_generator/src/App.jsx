import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += `~!@#$%^&*()-_=+[{]}|\;:'",<.>/?`;

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-blue-500 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
          Password Generator
        </h1>

        <input
          type="text"
          value={password}
          placeholder="Generated Password"
          readOnly
          className="w-full px-4 py-2 mb-4 bg-gray-100 text-gray-800 rounded outline-none select-none"
          onMouseDown={(e) => e.preventDefault()}
          ref={passwordRef}
        />

        <button
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none transform transition-transform hover:scale-105 active:scale-95"
          onClick={copyPasswordToClipboard}>
          Copy
        </button>

        <div className="flex items-center justify-between mt-4">
          <label className="text-gray-700">Password Length:</label>
          <span className="text-gray-700">{length}</span>
        </div>
        <input
          type="range"
          min={6}
          max={20}
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="w-full mt-2"
        />

        <div className="mt-4">
          <input
            type="checkbox"
            checked={numberAllowed}
            id="numberInput"
            onChange={() => setNumberAllowed((prev) => !prev)}
            className="mr-2"
          />
          <label htmlFor="numberInput" className="text-gray-700">
            Include Numbers
          </label>
        </div>

        <div className="mt-2">
          <input
            type="checkbox"
            checked={charAllowed}
            id="charInput"
            onChange={() => setCharAllowed((prev) => !prev)}
            className="mr-2"
          />
          <label htmlFor="charInput" className="text-gray-700">
            Include Special Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
