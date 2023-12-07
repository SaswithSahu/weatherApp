import {Component} from "react"
import {AiOutlineSearch} from 'react-icons/ai'
import DateAndTime from "./Components/DateAndTime";
import {ThreeDots} from 'react-loader-spinner'
// import WhetherDetails from "./Components/WhetherDetails";
import Cards from "./Components/cards"
import './App.css';

//import WhetherDetails from "./Components/DateAndTime/WhetherDetails";



class App extends Component{
  state = {whetherData:{weather:[{description:""}],main:{temp:0},wind:{},sys:{}},searchValue:"Initial",isLoading:false}
  getData = async() =>{
    const {searchValue} = this.state
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=a6d3a913c8e0eefd525680f21f19a33c`)
    const data = await res.json()
    if(data.cod === 200 ){
      this.setState({whetherData:{...data},isLoading:false})
    }
    else{
      this.setState({searchValue:"none",isLoading:false})
    }
}

  onClickButton = () =>{
    this.setState({isLoading:true})
    const value = document.getElementById("input").value
    this.setState({searchValue:value},this.getData)
    document.getElementById("input").value = ""
  }

  renderDetails = () =>{
    const {whetherData} = this.state
    console.log(whetherData)
    let {weather,main,wind,sys} = whetherData
    const temp = (main.temp - 273).toFixed(0)
    const weatherDetails = weather[0]
    const date = new Date(whetherData.dt * 1000)
    const formatedDate = date.toUTCString()
    return(
        <div className="whether-details">
        <p className="city-name">{whetherData.name},{sys.country}</p>
        <p className="description">{weatherDetails.description}</p>
        <div className="temperature-details">
          <img src = "https://cdn.jim-nielsen.com/ios/512/weather-2019-02-07.png" alt="temp" className="image"/>
          <div>
          <span className="temperature">{temp}°C</span><br/>
          <span className="temperature">{(((main.temp - 273.15)*9/5)+32).toFixed(2)}°F</span>
          </div>
        </div>
         <DateAndTime date = {formatedDate}/>
         <Cards main = {main} wind = {wind}/>
        </div>
    )
  }

  failed = () =>(
    <div className="failed-case">
      <h1>The City you tried to search is not found ! Please try again</h1>
    </div>
  )
  initial = () =>(
    <div className="failed-case">
    <h1>Please enter the city name that you want search!</h1>
  </div>
  )
  render(){
    const {searchValue,isLoading} = this.state
    return(
    <div className = "Container">
    <div className="searchContainer">
     <input
       type="search"
       placeholder="Search"
       id = "input"
     />
     <button type="button" onClick={this.onClickButton}>
       <AiOutlineSearch />
     </button>
   </div>
    {isLoading && (  <div className="products-loader-container">
      <ThreeDots color="whitesmoke" height="50" width="50" />
    </div>)}
      {(searchValue === "Initial" && isLoading === false) && this.initial()}
      {(searchValue === "none" && isLoading === false) && this.failed()}
      {(searchValue !== "none" && searchValue !== "Initial" && isLoading === false) && this.renderDetails()}

   </div>
    )
  }
}
export default App;
