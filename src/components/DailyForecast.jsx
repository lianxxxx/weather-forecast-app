import React from "react";

function DailyForecast() {
  return (
    <div>
      <h1>Daily Forecast</h1>
      <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
        <div className="daily-forecast h-full rounded-xl">Mon</div>
        <div className="daily-forecast h-full rounded-xl">Tue</div>
        <div className="daily-forecast h-full rounded-xl">Wed</div>
        <div className="daily-forecast h-full rounded-xl">Thur</div>
        <div className="daily-forecast h-full rounded-xl">Fri</div>
        <div className="daily-forecast h-full rounded-xl">Sat</div>
        <div className="daily-forecast h-full rounded-xl">Sun</div>
      </div>
    </div>
  );
}

export default DailyForecast;
