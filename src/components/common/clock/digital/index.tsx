"use client";

import React, { useEffect, useState } from "react";
import digitalClock from "@/styles/common/clock/digital/digital-clock.module.scss";

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
  months.set(1, "January");
  months.set(2, "Febnuary");
  months.set(3, "March");
  months.set(4, "April");
  months.set(5, "May");
  months.set(6, "June");
  months.set(7, "July");
  months.set(8, "August");
  months.set(9, "September");
  months.set(10, "October");
  months.set(11, "November");
  months.set(12, "December");

  const [time, setTime] = useState<string>();
  const [hours, setHours] = useState<number>();
  const [minutes, setMinutes] = useState<number>();
  const [day, setDay] = useState<string>();
  const [date, setDate] = useState<string>();
  const [ordinalPostfix, setOrdinalPostfix] = useState<string>("th");
  const [month, setMonth] = useState<number>();
  const [year, setYear] = useState<string>();

  const updateDateTime = () => {
    const dateObject = new Date();
    setTime(dateObject.toLocaleTimeString());
    setHours(dateObject.getHours());
    setMinutes(dateObject.getMinutes());
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
    setMonth(dateObject.getMonth() + 1);
    setYear(dateObject.getFullYear().toString());
  };

  useEffect(() => {
    updateDateTime();
  }, []);

  setInterval(() => {
    updateDateTime();
  }, 1000);

  return (
    <div className={digitalClock.container}>
      {/* <p>{date}.{months.forEach((value, key) => {return key;})}.{year}</p> */}
      <div className={digitalClock.sm}>
        <span>{date + "/" + month + "/" + year}</span>
        <span>
          {" "}
          - {hours + ":" + (minutes! < 10 ? "0" + minutes : minutes)}
        </span>
      </div>
      <div className={digitalClock.md}>
        <span>{day}, {months.get(month)} {date + ordinalPostfix}, {year}</span>
        <span>
          {" "}
          - {hours + ":" + (minutes! < 10 ? "0" + minutes : minutes)}
        </span>
      </div>
    </div>
  );
};

export default DigitalClock;
