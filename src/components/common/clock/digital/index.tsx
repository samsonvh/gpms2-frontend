"use client";

import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  const dayOfWeeks = new Map();
  dayOfWeeks.set(0, "Sunday");
  dayOfWeeks.set(1, "Monday");
  dayOfWeeks.set(2, "Tuesday");
  dayOfWeeks.set(3, "Wednesday");
  dayOfWeeks.set(4, "Thursday");
  dayOfWeeks.set(5, "Friday");
  dayOfWeeks.set(6, "Saturday");

  const months = new Map();
  months.set(0, "January");
  months.set(1, "Febnuary");
  months.set(2, "March");
  months.set(3, "April");
  months.set(4, "May");
  months.set(5, "June");
  months.set(6, "July");
  months.set(7, "August");
  months.set(8, "September");
  months.set(9, "October");
  months.set(10, "November");
  months.set(11, "December");

  const [time, setTime] = useState<string>();
  const [day, setDay] = useState<string>();
  const [date, setDate] = useState<string>();
  const [ordinalPostfix, setOrdinalPostfix] = useState<string>();
  const [month, setMonth] = useState<string>();
  const [year, setYear] = useState<string>();

  const updateDateTime = () => {
    const dateObject = new Date();
    setTime(dateObject.toLocaleTimeString());
    setDay(dayOfWeeks.get(dateObject.getDay()));

    const currentDate = dateObject.getDate().toString();
    setDate(currentDate);
    switch (currentDate[currentDate.length - 1]) {
      case "1":
        setOrdinalPostfix("st");
        break;
      case "2":
        setOrdinalPostfix("nd");
        break;
      case "3":
        setOrdinalPostfix("rd");
        break;
      default:
        setOrdinalPostfix("th");
    }
    setMonth(months.get(dateObject.getMonth()));
    setYear(dateObject.getFullYear().toString());
  };

  useEffect(() => {
    updateDateTime();
  }, []);
  // const day = dayOfWeeks.get(date.getDay());
  // const currentDate = date.getDate();
  // let ordinalPostfix = "st";
  // switch (currentDate.toString()[currentDate.toString().length - 1]) {
  //   case "1":
  //     ordinalPostfix = "st";
  //     break;
  //   case "2":
  //     ordinalPostfix = "nd";
  //     break;
  //   case "3":
  //     ordinalPostfix = "rd";
  //     break;
  //   default:
  //     ordinalPostfix = "th";
  // }
  // const month = months.get(date.getMonth());
  // const year = date.getFullYear();

  setInterval(() => {
    updateDateTime();
  }, 1000);

  return (
    <div className="tw-flex">
      <p className="tw-font-semibold tw-underline tw-text-justify tw-w-20">{time}</p>
      <p>
        {day}, <span className="tw-font-semibold">{month} {date}{ordinalPostfix}</span>, {year}
      </p>
    </div>
  );
};

export default DigitalClock;
