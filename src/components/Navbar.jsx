import { useState } from "react";

function Navbar() {
  const [isActive, setIsActive] = useState(null);

  const handleSetActive = (index) => {
    setIsActive(index);
  };

  return (
    <div className="w-full flex flex-row justify-between mt-5">
      <img src="/images/logo.png" className="w-[100px] h-[60px] ml-10" />
      <nav className="mr-[80px]">
        <ul className="flex flex-row gap-20 font-bold">
          <li
            className="transition 
            transform hover:scale-105 hover:text-yellowi"
          >
            <a
              href="/#"
              className={isActive === 0 && "text-yellowi text-shadow"}
              onClick={() => handleSetActive(0)}
            >
              Accueil
            </a>
          </li>
          <li
            className="transition 
            transform hover:scale-105 hover:text-yellowi"
          >
            <a
              href="/#services"
              className={isActive === 1 && "text-yellowi text-shadow"}
              onClick={() => handleSetActive(1)}
            >
              Service
            </a>
          </li>
          <li
            className="transition 
            transform hover:scale-105 hover:text-yellowi"
          >
            <a
              href="/#trainings"
              className={isActive === 2 && "text-yellowi text-shadow"}
              onClick={() => handleSetActive(1)}
            >
              Formation
            </a>
          </li>
          <li
            className="transition 
            transform hover:scale-105 hover:text-yellowi"
          >
            <a
              href="/#project"
              className={isActive === 3 && "text-yellowi text-shadow"}
              onClick={() => handleSetActive(3)}
            >
              Project
            </a>
          </li>
          <li
            className="transition 
            transform hover:scale-105 hover:text-yellowi"
          >
            <a
              href="/contact"
              className={isActive === 4 && "text-yellowi text-shadow"}
              onClick={() => handleSetActive(4)}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
