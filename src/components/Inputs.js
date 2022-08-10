import Searchimg from "../images/icons8-search-50.png";

export default function Inputs(props) {
    return (
        <div className="inputs">
            <div className="search-input-container">
                <img src={Searchimg} className="search-img" alt="search-img"/>
                <input className="input-1" type="search" placeholder="search for a country ..." onChange={props.searchCountry}/>
            </div>
            <div className="select-input-container">
                <select className="input-2" onChange={props.selectChange} value={props.selectValue}>
                    <option value="">All Regions</option>
                    <option value="africa">Africa</option>
                    <option value="americas">Americas</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>
        </div>
    )
}