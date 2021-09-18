import React, { useState } from "react";
import { Collapse } from "react-collapse";

const Menu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <nav className="grid gap-y-4">
      <div className="text-lg text-getir-secondary flex justify-between">
        <h6>{title}</h6>
        <a
          className="md:hidden bg-getir-secondary bg-opacity-10 rounded-md flex items-center justify-center px-0.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`transition-all transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </a>
      </div>
      <Collapse isOpened={isOpen}>
        <nav>
          <ul className="grid gap-y-2">
            {items.map((item, index) => {
              return (
                <li key={index}>
                  <a href="/" className="text-sm">
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </Collapse>
    </nav>
  );
};

export default Menu;
