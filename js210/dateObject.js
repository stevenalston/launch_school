let today = new Date();

function formattedDate(date) {
  let day = formattedDay(date);
  let month = formattedMonth(date);

  console.log(`Today's day is ${formattedDay()}, ${formattedMonth().month} ${formattedMonth().dayOf}${suffix(formattedMonth().dayOf)}`);
}

function formattedDay(date) {
  let day = date.getDay();
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return daysOfWeek[day];
}

function formattedMonth(date) {
  let dayOfMonth = date.getDate();
  let month = date.getMonth();
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return {
    month: months[month],
    dayOf: dayOfMonth,
  }
}


function suffix(dayOfMonth) {
  switch (dayOfMonth) {
    case 1:
    case 21:
    case 31:
      return 'st';
    case 2:
    case 22:
      return 'nd';
    case 3:
    case 23:
      return 'rd';
    default:
      return 'th'
  }
}

