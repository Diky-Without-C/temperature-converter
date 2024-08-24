import { useRef, useState, ChangeEvent } from "react";
import getTemperature from "@/libs/physic/convert-temperature";
import Temp from "@/libs/physic/temperature.json";
import Dropdown from "@/components/Drowdown";
import Equation from "./components/Equation";
import Termometer from "./components/Termometer";
import { TempList } from "./model.type";

export default function Physics() {
  const [isShow, setIsShow] = useState(false);
  const [units, setUnit] = useState(["Celcius", "Celcius"]);
  const [input, setInput] = useState("");
  const InputRef = useRef(null);

  const dropdownOptions = ["Celcius", "Fahrenheit", "Reamur", "Kelvin"];

  const [key1, key2] = units.map(
    (unit) => unit.toLowerCase() as keyof TempList,
  );

  const { steps, result } = getTemperature(
    Number(input),
    Temp[key1],
    Temp[key2],
  );

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    if (value === "" || !isNaN(Number(value))) {
      setInput(value);
    }
  }

  function handleClick() {
    setIsShow((prev) => !prev);
  }

  const getValue = (value: string, index: number) => {
    setUnit((prev) => {
      const newUnits = [...prev];
      newUnits[index] = value;
      return newUnits;
    });
  };

  return (
    <main className="relative flex h-full w-full flex-col bg-white p-2">
      <section className="mx-auto flex h-1/3 w-full items-center justify-around rounded-lg bg-blue-600 text-white">
        <Termometer {...Temp[key1]} />
        <Termometer {...Temp[key2]} />
      </section>
      <main className="relative mt-2 h-2/3 w-full rounded border border-black bg-slate-50 p-2">
        <section className="flex h-12 w-full items-center justify-between border-b border-black pb-2">
          <h1 className="text-lg font-bold">Temperture Converter</h1>
          <button
            onClick={handleClick}
            className="w-28 rounded-md border border-gray-300 bg-blue-600 p-2 py-2 text-center text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          >
            {isShow ? "Hide steps" : "Show steps"}
          </button>
        </section>
        <section className="relative flex h-16 w-full items-center justify-around border-b border-black text-lg">
          <span className="ml-2 mr-3">
            <input
              type="number"
              value={input}
              ref={InputRef}
              onChange={handleInput}
              className="h-10 w-12 rounded-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            />
          </span>
          <Dropdown
            options={dropdownOptions}
            getValue={(value) => getValue(value, 0)}
          />
          <span className="mx-3">To</span>
          <Dropdown
            options={dropdownOptions}
            getValue={(value) => getValue(value, 1)}
          />
        </section>
        <section className="mt-2 h-64 overflow-y-auto border-b border-black p-2">
          {isShow ? (
            Object.values(steps).map((step, index) => {
              return <Equation key={index} value={step} />;
            })
          ) : (
            <Equation value={result} />
          )}
        </section>
      </main>
    </main>
  );
}
