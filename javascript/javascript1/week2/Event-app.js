// find event day after some days later

 days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getEventWeekday(eventDays)
{
    const todayDate = new Date();
    let eventDayOfweek = (todayDate.getDay() + eventDays) % 7;
    return days[eventDayOfweek];
}
console.log(getEventWeekday(21));
console.log(getEventWeekday(12));