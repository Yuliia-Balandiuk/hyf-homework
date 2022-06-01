const daysOfTheWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

function getEventWeekday(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return `The event will be held on ${daysOfTheWeek[date.getDay()]}.`;
}

console.log(getEventWeekday(6));
