export const dateDayParser =  (date: string) => {
    const newDate = new Date(date);
    let weekday= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return weekday[newDate.getDay()];
}

export const dailyDateParser = (date: string) => {
    const newDate = new Date(date);
    let weekday= ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    console.log(date)
    console.log(weekday[newDate.getDay()] + ' ' + newDate.getDay())

    return weekday[newDate.getDay()] + ' ' + newDate.getDay();
};

export const hourDateParser = (date: string) => {
    const newDate = new Date(date);

    return newDate.getHours() + ':00';
};

export const realtimeClock = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes}`;
}