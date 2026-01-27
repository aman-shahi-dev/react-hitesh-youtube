import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let tempPassword = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbersAllowed) str += "0123456789";
    if (charactersAllowed) str += "@#$%^&*~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      tempPassword += str.charAt(char);
    }

    setPassword(tempPassword);
  }, [length, numbersAllowed, charactersAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 3)
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbersAllowed, charactersAllowed, passwordGenerator]);

  return (
    <div className="bg-black text-white h-screen flex md:p-0 p-4">
      <div className="h-fit w-fit m-auto">
        <h1 className="text-2xl md:text-4xl text-center mb-4">
          PASSWORD GENERATOR
        </h1>
        <div className="w-full border h-full shadow-lg shadow-orange-400 rounded text-orange-400 p-2 md:p-4 text-shadow-sm text-shadow-orange-400">
          <div className="flex">
            <input
              type="text"
              value={password}
              className="border w-full py-3 px-4 rounded rounded-r-none border-r-0 focus:outline-none"
              placeholder="password"
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyPasswordToClipboard}
              className="outline-none bg-orange-500 font-semibold text-white rounded rounded-l-none px-4 py-1 cursor-pointer"
            >
              Copy
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-6">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={50}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label htmlFor="">Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numbersAllowed}
                id="numbersInput"
                onChange={() => {
                  setNumbersAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={charactersAllowed}
                id="charactersInput"
                onChange={() => {
                  setCharactersAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
