
import { WiHumidity } from "react-icons/wi";
import { LiaWindSolid } from "react-icons/lia";
import "./index.css"
const Cards = (props) =>{
    const {wind,main} = props
    return(
        <ul className="cards-container">
            <li className="card">
                <div className="card-header">
                  <p className="parameter">Humidity</p>
                  <WiHumidity className="icon"/>
                </div>
                <h1 className="value">{main.humidity}%</h1>
            </li>
            <li className="card">
                <div className="card-header">
                  <p className="parameter">Wind</p>
                  <LiaWindSolid className="icon"/>
                </div>
                <h1 className="value">{wind.speed}km/hrs</h1>
            </li>
            <li className="card">
                <div className="card-header">
                  <p className="parameter">Pressure</p>
                  <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6xAiAFqM4LpiypHWyis0odPmEkm7tBq6Ag&usqp=CAU" alt="pressure"  />
                </div>
                <h1 className="value">{main.pressure}hPa</h1>
            </li>
            <li className="card">
                <div className="card-header">
                  <p className="parameter">RealFeel</p>
                  <img src ="https://static-00.iconduck.com/assets.00/thermometer-icon-192x256-angnul33.png" alt = "feel-like"/>
                </div>
                <h1 className="value">{main.feels_like}°F</h1>
            </li>
        </ul>
    )
}

export default Cards