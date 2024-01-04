import React, { useState, useEffect } from "react";
import arrow from '../assets/images/icon-arrow.svg';
import { differenceInDays } from 'date-fns';

const Container = () => {
  const CurrentDate = new Date();
  const CurrentYear = CurrentDate.getFullYear();
  const CurrentMonth = CurrentDate.getMonth() + 1;
  const CurrentDay = CurrentDate.getDate();

  const [BirthYear, setBirthYear] = useState(CurrentYear);
  const [BirthMonth, setBirthMonth] = useState(CurrentMonth);
  const [BirthDay, setBirthDay] = useState(CurrentDay);

  const [Years, setYears] = useState("--");
  const [Months, setMonths] = useState("--");
  const [Days, setDays] = useState("--");

  const [animate, setAnimate] = useState(false);

  const isInvalidDate = (month, day, year) => {
    const maxDay = 31;
    const maxMonth = 12;
    const maxYear = CurrentYear;
    const minYear = 1000;

    if (month < 1 || month > maxMonth || day < 1 || day > maxDay || year < minYear || year > maxYear) {
      return true;
    }

    if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
      return true;
    }

    if (month === 2 && day > 29) {
      return true;
    }

    return false;
  };

  const handleDayChange = (e) => {
    setBirthDay(e.target.value);
    e.target.setCustomValidity('');
  };

  const handleMonthChange = (e) => {
    setBirthMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setBirthYear(e.target.value);
  };

  const calculateAge = () => {
    const birthDate = new Date(BirthYear, BirthMonth - 1, BirthDay);
    const amountofdays = differenceInDays(CurrentDate, birthDate);

    let years = Math.floor(amountofdays / 365);
    let months = Math.floor((amountofdays % 365) / 30);
    let days = (amountofdays % 365) % 30;

    setYears(years);
    setMonths(months);
    setDays(days);
  };

  const handleFormSubmit = (e) => {
    if (isInvalidDate(BirthMonth, BirthDay, BirthYear)) {
      e.target[0].setCustomValidity('Invalid Date');
      e.target[0].reportValidity();
    } else {
      e.target[0].setCustomValidity('');
      calculateAge();
    }
    e.preventDefault();
  };

  const click = () => {
    if (isInvalidDate(BirthMonth, BirthDay, BirthYear)) {
    //   alert('Invalid Date'); // You can replace this with your preferred way of displaying the message
    } else {
      calculateAge();
    }
  };

  useEffect(() => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 1000);
  }, [Years, Months, Days]);


  return (
    <div className="bg-White lg:w-7/12 w-11/12 h-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[1.5rem] rounded-br-[8rem] py-10">
      <div className="w-10/12 mx-auto">
        {/* Form */}
        <div className="grid lg:pb-10 pb-16">
           <form className="flex lg:gap-8 gap-5 " onSubmit={(e) => handleFormSubmit(e)}>
          <div className="grid gap-2">
            <label className="uppercase font-semibold text-SmokeyGrey text-xs">Day</label>
            <input
              id="birth-day"
              name="birth-day"
              min="1"
              max="12"
              placeholder="MM"
              onChange={handleDayChange}
              required
              className={`outline outline-[1px] outline-LightGrey rounded-md lg:h-[4rem] lg:w-[9rem] w-full h-[3rem] px-2 uppercase font-extrabold lg:text-3xl text-2xl focus:outline-Purple ${isInvalidDate(BirthMonth, BirthDay, BirthYear) ? 'border border-LightRed' : ''}`}
            />

          </div>
          <div className="grid gap-2">
            <label className="uppercase font-semibold text-SmokeyGrey text-xs">Month</label>
            <input
              id="birth-month"
              name="birth-month"
              min="1"
              max="31"
              placeholder="DD"
              onChange={handleDayChange}
              required
              className={`outline outline-[1px] outline-LightGrey rounded-md lg:h-[4rem] lg:w-[9rem] w-full h-[3rem] px-2 uppercase font-extrabold lg:text-3xl text-2xl focus:outline-Purple ${isInvalidDate(BirthMonth, BirthDay, BirthYear) ? 'border border-LightRed' : ''}`}
            />
          </div>
          <div className="grid gap-2">
            <label className="uppercase font-semibold text-SmokeyGrey text-xs">Year</label>
            <input
              id="birth-year"
              name="birth-year"
              min="1000"
              max={CurrentYear}
              placeholder="YYYY"
              onChange={handleDayChange}
              required
              className={`outline outline-[1px] outline-LightGrey rounded-md lg:h-[4rem] lg:w-[9rem] w-full h-[3rem] px-2 uppercase font-extrabold lg:text-3xl text-2xl focus:outline-Purple ${
                isInvalidDate(BirthMonth, BirthDay, BirthYear) ? 'border border-LightRed' : ''
              }`}
            />
          </div>
        
           </form>
           <div>
                {isInvalidDate(BirthMonth, BirthDay, BirthYear) && (
                <p className="text-LightRed text-xs mt-1">Mustbe a valid date</p> )}
           </div>
        </div>
      
        {/* Form ends */}

        {/* Divider and Button */}
        <div className="relative">
          <div className="bg-LightGrey h-[1px] w-full "></div>
          <div className="lg:block hidden absolute top-0 -translate-y-1/2 right-0">
            <button type="submit" onClick={click} className="relative bg-Purple hover:bg-OffBlack w-20 h-20 rounded-full">
              <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src={arrow} alt="Arrow Icon" />
            </button>
          </div>
          <div className="lg:hidden block absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <button type="submit" onClick={click} className="relative bg-Purple hover:bg-OffBlack lg:w-20 lg:h-20 w-16 h-16 rounded-full">
              <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-8" src={arrow} alt="Arrow Icon" />
            </button>
          </div>
        </div>
        {/* Divider and Button ends */}

        {/* Display Section */}
        <div className="lg:pt-10 pt-20 font-black italic lg:text-[6rem] text-[3rem] leading-none text-Purple">
          <div className="flex gap-2 items-center">
            <p>
              <span>{Years}</span>
              <span className="text-OffBlack"> years</span>
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <p>
              <span>{Months}</span>
              <span className="text-OffBlack"> months</span>
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <p>
              <span>{Days}</span>
              <span className="text-OffBlack"> days</span>
            </p>
          </div>
        </div>
        {/* Display Section Ends */}
      </div>
    </div>
  );
};

export default Container;
