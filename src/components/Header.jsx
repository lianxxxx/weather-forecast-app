import logo from "../assets/img/logo.svg";
import UnitsDropdown from "./UnitsDropdown";

function Header({ showTitle = true }) {
  return (
    <div>
      <div className="flex justify-between">
        <img src={logo} alt="Logo" className=" w-32" />
        <UnitsDropdown />
      </div>
      {showTitle && (
        <h1 className="text-5xl/14 title-header my-14 text-center">
          How's the sky looking today?
        </h1>
      )}
    </div>
  );
}

export default Header;
