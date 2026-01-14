function HoursDropdown() {
  return (
    <div className=" flex flex-col gap-2 w-54 days-dropdown absolute right-0 rounded-xl p-2 text-start">
      <div className="px-4 py-2 cursor-pointer rounded active">Monday</div>
      <div className="px-4 py-2  cursor-pointer rounded">Tuesday</div>
      <div className="px-4 py-2 cursor-pointer rounded">Wednesday</div>
      <div className="px-4 py-2 cursor-pointer rounded">Thursday</div>
      <div className="px-4 py-2  cursor-pointer rounded">Friday</div>
      <div className="px-4 py-2  cursor-pointer rounded">Saturday</div>
      <div className="px-4 py-2 cursor-pointer rounded">Sunday</div>
    </div>
  );
}

export default HoursDropdown;
