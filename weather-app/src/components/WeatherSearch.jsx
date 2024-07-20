import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import styles from "./WeatherSearch.module.css"
import { useState } from "react";


const WeatherSearch=()=>{
     const [weatherInfo,setweatherInfo]= useState({
        city:"Delhi",
       feelsLike: 39.84,
       humidity:75,
       temp: 32.84,
       tempMax: 33.05,
       tempMin: 32.84,
       weather: "haze",
     });

     let updateinfo=(newInfo)=>{
         setweatherInfo(newInfo);
     };

    return(
        <center>
        <div className={styles.main} >
            <SearchBox updateinfo={updateinfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
        </div>
        </center>
    );
}

export default WeatherSearch;