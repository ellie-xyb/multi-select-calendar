import {h, render} from 'preact';
import register from 'preact-custom-element';
import {useState} from 'preact/hooks';

function Calendar({availableDates="", outputName="selected-dates"}){
  const [selectedDates, setSelectedDates] = useState([]);

  return (
    <div>
      <p>haha</p>
      <input type='hidden' value={selectedDates.join(",")} name={outputName} />
    </div>
  );
}

register(Calendar, 'x-calendar', ['available-dates', 'output-name']);
