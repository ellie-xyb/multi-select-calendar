import {h, render} from 'preact';
import register from 'preact-custom-element';
import {useState} from 'preact/hooks';
import './index.css';

function Cell({value, onClick, fullDate='', active, available}) {
  let className = active ? "cell cell-active" : "cell";

  if (available) {
    className += " cell-available";
  } else {
    className += " cell-unavailable";
  }
  return (
    <div onClick={onClick} className={className} data-full-date={fullDate}>
      { value }
    </div>
  );
}

function monthDays(activeDate) {
  const firstDate = new Date(activeDate.getFullYear(), activeDate.getMonth(), 1);
  const firstWeekDay = firstDate.getDay();
  let lastDate = firstDate;
  lastDate.setMonth(lastDate.getMonth() + 1);
  // This sets the date to the last day of the activeDate month
  lastDate.setDate(0);
  lastDate = lastDate.getDate();

  let out = [];

  for (let i = 0; i < firstWeekDay; i++) {
    out.push("");
  }

  for (let i = 1; i <= lastDate; i++) {
    out.push([i,
            new Date(activeDate.getFullYear(), activeDate.getMonth(), i).toLocaleString('en', {day: 'numeric'})])
  }

  return out;
}

function weekDays(){
  return [
    new Date(2020, 12, 31).toLocaleString('en', {weekday: 'short'}),
    new Date(2021, 1, 1).toLocaleString('en', {weekday: 'short'}),
    new Date(2021, 1, 2).toLocaleString('en', {weekday: 'short'}),
    new Date(2021, 1, 3).toLocaleString('en', {weekday: 'short'}),
    new Date(2021, 1, 4).toLocaleString('en', {weekday: 'short'}),
    new Date(2021, 1, 5).toLocaleString('en', {weekday: 'short'}),
    new Date(2021, 1, 6).toLocaleString('en', {weekday: 'short'}),
  ];
}

function Calendar({availableDates=null, outputName="selected-dates"}){
  const availableDatesArr = availableDates===null ? "" : availableDates.split(",");
  const [selectedDates, setSelectedDates] = useState([]);
  const [activeDate, setActiveDate] = useState(new Date());

  const month = activeDate.toLocaleString('en', {month: 'long'});
  const year = activeDate.toLocaleString('en', {year: 'numeric'});

  const weekdays = weekDays();

  const days = monthDays(activeDate);

  function toggleSelectedDate(event){
    let newSelectedDates = [...selectedDates];
    const fullDate = event.target.dataset.fullDate;
    const idx = newSelectedDates.indexOf(fullDate);

    if (availableDates !== null && availableDatesArr.indexOf(fullDate) < 0) {
      return;
    }

    if (idx >= 0){
      newSelectedDates.splice(idx, 1);
    } else {
      newSelectedDates.push(fullDate);
    }

    setSelectedDates(newSelectedDates);
  }

  function prevMon(){
    let lastMonDay = new Date(activeDate.getFullYear(), activeDate.getMonth()-1, 1);
    setActiveDate(lastMonDay);
  }

  function nextMon(){
    let nextMonDay = new Date(activeDate.getFullYear(), activeDate.getMonth()+1, 1);
    setActiveDate(nextMonDay);
  }

  return (
    <div class="wrapbox">
      <div class="calendarbox">
        <div class="month-year-box">
          <p class= "month-year"><strong>{month} {year}</strong></p>
          <div class="arr">
            <p class="right-arr" onClick={prevMon}>&lt;</p>
            <p class="left-arr" onClick={nextMon}>&gt;</p>
          </div>
        </div>
        <div class="week-row">
          { weekdays.map(day => <Cell key={"cell-" + day} value={day} available={true} />) }
          { days.map(([daynum, day]) => {
            const fullDate = `${activeDate.getFullYear()}-${activeDate.getMonth()+1}-${daynum}`;
            return (
              <Cell
                key={"cell-" + daynum}
                value={day}
                onClick={toggleSelectedDate}
                fullDate={fullDate}
                active={selectedDates.indexOf(fullDate) >= 0}
                available={availableDates===null || availableDatesArr.indexOf(fullDate) >= 0}
              />
            )
          }
        )}
        </div>
      </div>
      <input type='hidden' value={selectedDates.join(",")} name={outputName} />
    </div>
  );
}

register(Calendar, 'x-calendar', ['available-dates', 'output-name']);
