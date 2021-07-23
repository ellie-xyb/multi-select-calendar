import {h, render} from 'preact';
import register from 'preact-custom-element';
import {useState} from 'preact/hooks';
import './index.css';

function Cell({value}) {
  return (
    <div className="cell">
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
    out.push(new Date(activeDate.getFullYear(), activeDate.getMonth(), i).toLocaleString('default', {day: 'numeric'}))
  }

  return out;
}


function Calendar({availableDates="", outputName="selected-dates"}){
  const [selectedDates, setSelectedDates] = useState([]);
  const [activeDate, setActiveDate] = useState(new Date());

  const month = activeDate.toLocaleString('default', {month: 'long'});
  const year = activeDate.toLocaleString('default', {year: 'numeric'});

  const weekdays = [
    new Date(2020, 12, 31).toLocaleString('default', {weekday: 'short'}),
    new Date(2021, 1, 1).toLocaleString('default', {weekday: 'short'}),
    new Date(2021, 1, 2).toLocaleString('default', {weekday: 'short'}),
    new Date(2021, 1, 3).toLocaleString('default', {weekday: 'short'}),
    new Date(2021, 1, 4).toLocaleString('default', {weekday: 'short'}),
    new Date(2021, 1, 5).toLocaleString('default', {weekday: 'short'}),
    new Date(2021, 1, 6).toLocaleString('default', {weekday: 'short'}),
  ];

  const days = monthDays(activeDate);

  return (
    <div class="calendarbox">
      <div class="month-year-title">
        <p>{month} {year}</p>
        <p class="right-arr">&lt;</p>
        <p class="left-arr">&gt;</p>
      </div>
      <div class="week-row">
        { weekdays.map(day => <Cell key={"cell-" + day} value={day} />) }
        { days.map(day => <Cell key={"cell-" + day} value={day} />) }
      </div>

      <input type='hidden' value={selectedDates.join(",")} name={outputName} />
    </div>
  );
}

register(Calendar, 'x-calendar', ['available-dates', 'output-name']);
