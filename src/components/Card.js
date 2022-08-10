import { Link } from "react-router-dom"

export default function Card(props) {
    return (
        <div className="mycard">
            <Link to="/country-details"><img onClick={() => props.countrySelected(props.country)} className="mycard-img" src={props.country.flags.png} alt={props.country.flag}/></Link> 
            <div className="mycard-content">
                <Link to="/country-details"><h1 className="mycard-title" onClick={() => props.countrySelected(props.country)}>{props.country.name.common}</h1></Link>
                <span className="span-1">Population:</span> <span className="span-2">{props.country.population}</span> <br />
                <span className="span-1">Region:</span> <span className="span-2">{props.country.region}</span><br />
                <span className="span-1">Capital:</span> <span className="span-2">{props.country.capital}</span>
            </div>
        </div>
    )
}