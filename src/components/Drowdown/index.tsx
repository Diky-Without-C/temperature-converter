import { useEffect, useRef, useState } from "react";

interface Dropdown {
  options: string[];
  getValue?: (value: string) => void;
}

export default function Dropdown({ options, getValue }: Dropdown) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(0);
  const DropdownRef = useRef<HTMLDivElement>(null);

  function handleClickOutside(event: MouseEvent) {
    if (
      DropdownRef.current &&
      !DropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function toggleDropdown() {
    setIsOpen((prev) => !prev);
  }

  function handleSelect(value: number) {
    if (getValue) getValue(options[value]);
    setIsSelected(value);
  }

  return (
    <div ref={DropdownRef} className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex w-28 justify-center rounded-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
      >
        {options[isSelected]}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="-mr-1 ml-2 h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`${isOpen ? "block" : "hidden"} absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5`}
      >
        <div className="p-2 py-2">
          <ul>
            {options.map((item, index) => {
              return (
                <span
                  key={index}
                  onClick={() => handleSelect(index)}
                  className={`${isSelected == index && "bg-gray-200"} flex cursor-pointer rounded-md p-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100`}
                >
                  {item}
                </span>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
