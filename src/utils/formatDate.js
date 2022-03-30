const formatDate = (date) => {
    const dates = new Date(date);
    let month = `${dates.getMonth() + 1}`;
    let day = `${dates.getDate()}`
    const year = dates.getFullYear()

    if(month.length < 2){
        month = 0 + month;
    }
    if(day.length < 2){
        day = 0 + day;
    }
    return [year, month, day].join('-')
}

export default formatDate;