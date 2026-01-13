import logo from "../assets/img/logo.svg";
import units from "../assets/img/icon-units.svg";
import dropdown from "../assets/img/icon-dropdown.svg";
function Header() {
  return (
    <div>
      <div className="flex justify-between">
        <img src={logo} alt="Logo" className=" w-32" />
        <div className="flex gap-1 unit-dropdown rounded-lg p-2">
          <img src={units} alt="" /> <span className=" text-sm">Units</span>
          <img src={dropdown} alt="" />
        </div>
      </div>
      <h1 className="text-5xl/14 title-header my-14 ">
        How's the sky looking today?
      </h1>
    </div>
  );
}

export default Header;
