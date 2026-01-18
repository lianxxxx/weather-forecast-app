function HoursDropdown({ daysArray, selectedDay, onSelectDay }) {
  return (
    <div className=" flex flex-col gap-2 w-54 days-dropdown absolute right-0 rounded-xl p-2 text-start cursor-pointer">
      {daysArray.map((day) => (
        <div
          key={day}
          onClick={() => onSelectDay(day)}
          className={`px-4 py-2 cursor-pointer rounded ${
            selectedDay === day ? "active" : ""
          }`}
        >
          {day}
        </div>
      ))}
    </div>
  );
}

export default HoursDropdown;
