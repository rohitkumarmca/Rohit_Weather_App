import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from "./SearchBox.module.css"
import { useState } from 'react';
const SearchBox=({updateinfo})=>{
    let [city, setcity]= useState("");
    let [err,seterr]= useState(false)

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="1031e82180981b48e6b9fba105594774";

    let getWeatherInfo= async ()=>{
      try{
       let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse= await response.json();
       //console.log(jsonResponse);
       let result={
        city:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
       }
       return result;
      } catch(err){
         throw err;
      }
    };

    

    let handalonChange=(event)=>{
          setcity(event.target.value);
    };

    let handalsubmit=async (event)=>{
      try{
        event.preventDefault();
        //console.log(city);
        setcity("");
        let newInfo=await getWeatherInfo();
        updateinfo(newInfo);
      } catch(err){
         seterr(true);
      }
    };

      return(
        <>
        <center>
          
           <h3> Search For the Weather: </h3>
           <form onSubmit={handalsubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handalonChange}/>
            <br></br>
            <br></br>
            <Button variant="contained" type='submit' className={styles.button}>Search</Button>
           </form>
           
        </center>
        </>
      );
}

export default SearchBox;