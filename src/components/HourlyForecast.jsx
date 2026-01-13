import dropdown from "../assets/img/icon-dropdown.svg";
function HourlyForecast() {
  return (
    <div className="hourly-forecast-container my-8 rounded-3xl p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-amber-50">Hourly Forecast</h1>

        <div className=" unit-dropdown rounded-lg px-6 py-2 flex gap-4">
          <span>Moday</span>
          <img src={dropdown} alt="" />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="hourly-forecast rounded-lg h-full ">8pm</div>
        <div className="hourly-forecast rounded-lg h-full ">8pm</div>
        <div className="hourly-forecast rounded-lg h-full ">8pm</div>
        <div className="hourly-forecast rounded-lg h-full ">8pm</div>
        <div className="hourly-forecast rounded-lg h-full ">8pm</div>
        <div className="hourly-forecast rounded-lg h-full ">8pm</div>
        <div className="hourly-forecast rounded-lg h-full ">8pm</div>
        <div className="hourly-forecast rounded-lg h-full ">8pm</div>
      </div>
    </div>
  );
}

export default HourlyForecast;
