import units from "../assets/img/icon-units.svg";
import dropdown from "../assets/img/icon-dropdown.svg";
import iconCheckmark from "../assets/img/icon-checkmark.svg";
import { useState } from "react";

function UnitsDropdown({ currentUnit, onUnitChange }) {
  const [isUnitDropdownOpen, setIsUnitDropdownOpen] = useState(false);

  const handleUnitSwitch = () => {
    const newUnit = currentUnit === "metric" ? "imperial" : "metric";
    onUnitChange(newUnit);
    setIsUnitDropdownOpen(false); // Close dropdown after switch
  };

  const isMetric = currentUnit === "metric";

  return (
    <div className="relative">
      <button
        className="flex gap-2 unit-dropdown rounded-lg px-3 py-2 cursor-pointer"
        onClick={() => setIsUnitDropdownOpen((prev) => !prev)}
      >
        <img src={units} alt="" />
        <span className="text-sm">Units</span>
        <img src={dropdown} alt="" />
      </button>

      {isUnitDropdownOpen && (
        <div className="absolute right-0 rounded-xl shadow-lg text-sm p-2 w-54 units-dropdown-options text-start mt-3 z-10">
          {/* Header - Dynamic text */}
          <h1
            className="mb-4 mt-2 cursor-pointer hover:opacity-80"
            onClick={handleUnitSwitch}
          >
            Switch to {isMetric ? "Imperial" : "Metric"}
          </h1>

          {/* Temperature */}
          <div>
            <h1 className="unit-dropdown-label ps-1">Temperature</h1>

            {/* Celsius */}
            <div
              className={`my-4 flex justify-between py-2 px-2 rounded-md cursor-pointer hover:opacity-80 ${
                isMetric ? "unit-option-selected" : ""
              }`}
              onClick={() => onUnitChange("metric")}
            >
              <span>Celsius (°C)</span>
              {isMetric && (
                <img src={iconCheckmark} alt="selected" className="w-4 h-4" />
              )}
            </div>

            {/* Fahrenheit */}
            <div
              className={`flex justify-between py-2 px-2 rounded-md cursor-pointer hover:opacity-80 ${
                !isMetric ? "unit-option-selected" : ""
              }`}
              onClick={() => onUnitChange("imperial")}
            >
              <span>Fahrenheit (°F)</span>
              {!isMetric && (
                <img src={iconCheckmark} alt="selected" className="w-4 h-4" />
              )}
            </div>
          </div>

          <hr className="my-4" />

          {/* Wind Speed */}
          <div>
            <h1 className="unit-dropdown-label ps-1">Wind Speed</h1>

            {/* km/h */}
            <div
              className={`my-4 flex justify-between py-2 px-2 rounded-md cursor-pointer hover:opacity-80 ${
                isMetric ? "unit-option-selected" : ""
              }`}
              onClick={() => onUnitChange("metric")}
            >
              <span>km/h</span>
              {isMetric && (
                <img src={iconCheckmark} alt="selected" className="w-4 h-4" />
              )}
            </div>

            {/* mph */}
            <div
              className={`flex justify-between py-2 px-2 rounded-md cursor-pointer hover:opacity-80 ${
                !isMetric ? "unit-option-selected" : ""
              }`}
              onClick={() => onUnitChange("imperial")}
            >
              <span>mph</span>
              {!isMetric && (
                <img src={iconCheckmark} alt="selected" className="w-4 h-4" />
              )}
            </div>
          </div>

          <hr className="my-4" />

          {/* Precipitation */}
          <div>
            <h1 className="unit-dropdown-label ps-1">Precipitation</h1>

            {/* Millimeters */}
            <div
              className={`my-4 flex justify-between py-2 px-2 rounded-md cursor-pointer hover:opacity-80 ${
                isMetric ? "unit-option-selected" : ""
              }`}
              onClick={() => onUnitChange("metric")}
            >
              <span>Millimeters (mm)</span>
              {isMetric && (
                <img src={iconCheckmark} alt="selected" className="w-4 h-4" />
              )}
            </div>

            {/* Inches */}
            <div
              className={`flex justify-between py-2 px-2 rounded-md cursor-pointer hover:opacity-80 ${
                !isMetric ? "unit-option-selected" : ""
              }`}
              onClick={() => onUnitChange("imperial")}
            >
              <span>Inches (in)</span>
              {!isMetric && (
                <img src={iconCheckmark} alt="selected" className="w-4 h-4" />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UnitsDropdown;
