import {h, render} from 'preact';
import register from 'preact-custom-element';
import {useState} from 'preact/hooks';
import './index.css';

function Calendar({availableDates="", outputName="selected-dates"}){
  const [selectedDates, setSelectedDates] = useState([]);
  const [activeDate, setActiveDate] = useState(new Date());

  let month = activeDate.toLocaleString('default', {month: 'long'});
  let year = activeDate.toLocaleString('default', {year: 'numeric'});

  return (
    <div>
      <p>{month} {year}</p>
      <p>&lt;</p>
       &gt;


      <input type='hidden' value={selectedDates.join(",")} name={outputName} />
    </div>
  );
}

register(Calendar, 'x-calendar', ['available-dates', 'output-name']);
