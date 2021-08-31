# multi-select-calendar
![calendar example](https://res.cloudinary.com/ellie-xyb/image/upload/v1630385604/calendar-s_mtwrdo.png) 
![alt calendar example](https://res.cloudinary.com/ellie-xyb/image/upload/v1630386168/calendar-s2_yjzee0.png)

## Features

+ Supports multi-day selection (including non-contiguous)
+ Supports setting available days which can be selected
+ Supports localization into any language supported by the browser / device
+ Outputs an array of selected days in ```%Y-%-m-%-d``` format in a hidden `<input>`
+ No moment.js needed
+ Supports customizing styles by providing your own CSS

## Usage

+ Install by executing ``` yarn add @ellie-xyb/multi-select-calendar ``` or ```npm install  @ellie-xyb/multi-select-calendar```
+ Require by adding ```require("@ellie-xyb/multi-select-calendar")``` or import by adding ```import "@ellie-xyb/multi-select-calendar"```
+ Use by adding ```<x-calendar available-dates="see Configuration" output-name="see Configuration" />``` to your HTML

### Configuration

Configure these attributes on the `<x-calendar>` HTML tag to change the behavior of the calendar.

| attribute | example | description |
| --- | --- | --- |
| `available-days`  | ```['2021-8-1', '2021-8-6', '2021-8-7','2021-8-10']```  | `available-days` is an array of dates in ```%Y-%-m-%-d``` format which are available to be selected. The default behavior is to allow all dates to be selected. |
| `output-name`  | `selected-dates`  | See [Output](#Output). The default name is `selected-dates`. |

### Output

Selected dates are output via a hidden `<input>` tag. This allows you to submit selected dates as part of a form, or query them via javascript.

#### Using in a form

```html
<form>
  <x-calendar output-name="selected-dates" />
<form>
```

#### Using via JS

```javascript
let output = document.querySelector("[name=selected-dates]").value;
```
