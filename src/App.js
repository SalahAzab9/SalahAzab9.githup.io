import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/pages/HomePage';
import DetailsPage from './components/pages/DetailsPage';
import { useEffect, useState } from 'react';
import {Routes, Route} from "react-router-dom"

function App() {
  let [countries, setCountries] = useState([]);
  let [searchValue, setSearchvalue] = useState("");
  let [selectValue, setSelectValue] = useState("");
  let [selectedCountry, setSelectedCountry] = useState("");

  useEffect(()=> {
    let request = async function () {
      let data1 = await fetch("https://restcountries.com/v3.1/all");
      let data2 = await data1.json();
      setCountries(data2);
    }
    if(searchValue === ""){
      request()
    }
  },[searchValue]);

  useEffect(()=>{
    setCountries(prevState => prevState.filter(country => country.name.common.toLowerCase().includes(searchValue) ))
  },[searchValue]);

  function searchCountry(e) {
    setSearchvalue(e.target.value.trim().toLowerCase())
  };

  function selectChange(e) {
    setSelectValue(e.target.value.toLowerCase())
  };

  function countrySelected(country){
    setSelectedCountry(country)
  };

  function change() {
    setSearchvalue("")
  };

  function bordercountry(border) {
    for(let i = 0 ; i<countries.length ; i++){
      if(border === countries[i].cca3){
        setSelectedCountry(countries[i]);
      }
    }
  };

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage countries={countries} searchCountry={searchCountry} selectValue={selectValue} selectChange={selectChange} countrySelected={countrySelected}/>}/>
        <Route path="/country-details" element={<DetailsPage selectedCountry={selectedCountry} change={change} bordercountry={bordercountry}/>}/>
      </Routes>
    </div> 
  );
}

export default App;
