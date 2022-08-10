import Inputs from "../Inputs";
import Card from "../Card";

export default function HomePage(props) {
    return(
        <section className="home-page">
            <Inputs searchCountry={props.searchCountry} selectValue={props.selectValue} selectChange={props.selectChange}/>
            <div className="cards">
                {props.selectValue === "" ? props.countries.map(country => {
                    return <Card key={country.name.common} country={country} countrySelected={props.countrySelected}/>
                }) : props.countries.filter(country => country.region.toLowerCase() === props.selectValue)
                .map(country => {
                    return <Card key={country.name.common} country={country} countrySelected={props.countrySelected}/>
                })}
            </div>
        </section>
        
    )
};