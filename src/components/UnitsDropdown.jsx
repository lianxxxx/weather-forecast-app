import units from "../assets/img/icon-units.svg";
import dropdown from "../assets/img/icon-dropdown.svg";
import iconCheckmark from "../assets/img/icon-checkmark.svg";

function UnitsDropdown() {
  return (
    <div className="relative">
      <button className="flex gap-2 unit-dropdown rounded-lg px-3 py-2">
        <img src={units} alt="" />
        <span className="text-sm">Units</span>
        <img src={dropdown} alt="" />
      </button>

      <div className="absolute right-0  rounded-xl shadow-lg text-sm p-2 w-54 units-dropdown-options text-start mt-3 z-10">
        <h1 className="mb-4 mt-2">Switch to Imperial</h1>
        <div>
          <h1 className="unit-dropdown-label ps-1">Temperature</h1>
          <div className=" my-4  flex justify-between unit-option-selected py-2 px-2 rounded-md">
            <span>Celsius(°C)</span>
            <img src={iconCheckmark} alt="selected" className="w-4 h-4" />
          </div>
          <span className="ps-2">Fahrenheit(°F)</span>
        </div>
        <hr className="my-4 " />
        <div>
          <h1 className="unit-dropdown-label ps-1 ">Wind Speed</h1>
          <div className=" my-4  flex justify-between unit-option-selected py-2 px-2 rounded-md">
            <span>km/h</span>
            <img src={iconCheckmark} alt="selected" className="w-4 h-4" />
          </div>
          <span className="ps-2">mph</span>
        </div>
        <hr className="my-4" />
        <div>
          <h1 className="unit-dropdown-label ps-1 ">Precipitation</h1>
          <div className=" my-4  flex justify-between unit-option-selected py-2 px-2 rounded-md">
            <span>Milimeters(mm)</span>
            <img src={iconCheckmark} alt="selected" className="w-4 h-4" />
          </div>
          <span className="ps-2">Inches(in)</span>
        </div>
      </div>
    </div>
  );
}

export default UnitsDropdown;
