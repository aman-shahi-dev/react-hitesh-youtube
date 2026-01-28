import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();
  return (
    <div
      className={`flex rounded-2xl p-3 bg-neutral-600 ${className} shadow-md shadow-white/60`}
    >
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="mb-2 flex">
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          placeholder="Amount"
          className="outline-none w-full p-2 bg-transparent border rounded"
          disabled={amountDisable}
          value={amount === 0 ? "" : amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="mb-2 w-full">Currency Type</p>
        <select
          className="rounded p-1 w-1/2 bg-neutral-700 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
