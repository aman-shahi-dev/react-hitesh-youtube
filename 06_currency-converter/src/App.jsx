import { useState } from "react";
import { InputBox } from "./components/index.js";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";
import { RefreshCcw } from "lucide-react";
import { useEffect } from "react";

function App() {
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(fromCurrency);

  const currencyOptions = Object.keys(currencyInfo);

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    if (currencyInfo) {
      setConvertedAmount(amount * (currencyInfo[toCurrency] || 0));
    }
  };

  useEffect(() => {
    convert();
  }, [fromCurrency, toCurrency, amount, currencyInfo]);

  return (
    <div
      className="
        min-h-screen
        flex flex-col
        items-center justify-center
        bg-black
        text-white
        p-4
      "
    >
      <h1 className="text-xl md:text-4xl text-shadow-white text-shadow-xs font-bold tracking-wide">
        Currency Converter
      </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
        className="md:w-120 w-fit rounded-2xl bg-neutral-700/40 mt-6 p-4 flex flex-col gap-1 shadow-lg shadow-white"
      >
        <InputBox
          label="From"
          amount={amount}
          currencyOptions={currencyOptions}
          onCurrencyChange={(currency) => setFromCurrency(currency)}
          selectCurrency={fromCurrency}
          onAmountChange={(amount) => {
            setAmount(amount);
          }}
        />

        <button
          className="
            p-2 bg-neutral-700
            text-lg md:text-xl 
            cursor-pointer active:scale-95 
            transition duration-300 
            rounded-full mx-auto 
            text-shadow-white 
            text-shadow-xs 
            font-light 
            hover:scale-105
            m-2
          "
          type="button"
          onClick={swap}
        >
          <RefreshCcw size={26} />
        </button>

        <InputBox
          label="To"
          amount={convertedAmount}
          currencyOptions={currencyOptions}
          onCurrencyChange={(currency) => {
            setToCurrency(currency);
          }}
          selectCurrency={toCurrency}
          amountDisable
          onAmountChange={(amount) => {
            setConvertedAmount(amount);
          }}
        />

        <button
          className="
            px-3 py-1 bg-orange-400 
            text-lg md:text-xl 
            cursor-pointer active:scale-95 
            transition duration-300 
            rounded-full mx-auto 
            text-shadow-white 
            text-shadow-xs 
            font-light 
            hover:scale-105
            mt-4
            shadow-lg shadow-orange-400/70
          "
        >
          Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
        </button>
      </form>
    </div>
  );
}

export default App;
