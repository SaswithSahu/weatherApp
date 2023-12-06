
import "./index.css"
const DateAndTime = (props) =>{
    const {date} = props
    const dateObject = new Date(date);
    const formattedDate = dateObject.toLocaleDateString('en', {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
});
    let week
    switch (dateObject.getDay()){
        case 0:
            week = "Sunday"
            break;
        case 1:
            week = "Sunday"
            break
        case 2:
            week = "Tuesday"
            break
        case 3:
            week = "Wednesday"
            break
        case 4:
            week = "Thursday"
            break
        case 5:
        week = "Friday"
        break
        case 6:
            week = "Saturday"
            break;
        default:
            week = NaN
    }

return(
    <div className="dateandtimecard">
        <p className="date">{formattedDate}</p>
        <h3 className="time">{week},{dateObject.getUTCHours()}:{dateObject.getUTCMonth()}</h3>
    </div>
)
}

export default DateAndTime