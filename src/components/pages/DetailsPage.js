import { Link } from "react-router-dom";
import LeftArrow from "../../images/icons8-left-24.png";
export default function DetailsPage(props) {
    function languages(){
        let languges = [];
        for(let lang in props.selectedCountry.languages){
            if(props.selectedCountry.languages[lang] ===props.selectedCountry.languages[Object.keys(props.selectedCountry.languages)[Object.keys(props.selectedCountry.languages).length - 1]]){
                languges.push(props.selectedCountry.languages[lang])
            }else {
                languges.push(props.selectedCountry.languages[lang] + ",")
            }
        }
        return languges
    };

    function Currencies(){
        let currencies = [];
        for(let currency in props.selectedCountry.currencies){
            if(props.selectedCountry.currencies[currency] === props.selectedCountry.currencies[Object.keys(props.selectedCountry.currencies)[Object.keys(props.selectedCountry.currencies).length - 1]]){
                currencies.push(props.selectedCountry.currencies[currency].name)
            }else {
                currencies.push(props.selectedCountry.currencies[currency].name + ",")
            }
        }
        return currencies
    };

    function Nativename(){
        let nativenames = [];
        for(let nativename in props.selectedCountry.name.nativeName){
            if(props.selectedCountry.name.nativeName[nativename] === props.selectedCountry.name.nativeName[Object.keys(props.selectedCountry.name.nativeName)[Object.keys(props.selectedCountry.name.nativeName).length - 1]]){
                nativenames.push(props.selectedCountry.name.nativeName[nativename].common)
            }else {
                nativenames.push(props.selectedCountry.name.nativeName[nativename].common + ",")
            }
        }
        return nativenames
    };
    
    return(
        <section className="country-details">
            <div className="container">
                <Link to="/"><button onClick={props.change}><img src={LeftArrow} className="back-img"/> Back</button></Link>
                <div className="row d-flex justify-content-between align-content-center country">
                    <div className="col-md-5">
                        <img src={props.selectedCountry.flags.png} alt={props.selectedCountry.flag}/>            
                    </div>
                    <div className="col-md-6 mt-3">
                        <h1>{props.selectedCountry.name.common}</h1>
                        <div className="row d-flex justify-content-between align-content-center">
                            <div className="col-md-5">
                                <span className="span-1">Native Name:</span> <span className="span-2">{Nativename()}</span> <br />
                                <span className="span-1">Population:</span> <span className="span-2">{props.selectedCountry.population}</span><br />
                                <span className="span-1">Region:</span> <span className="span-2">{props.selectedCountry.region}</span><br />
                                <span className="span-1">Sub Region:</span> <span className="span-2">{props.selectedCountry.subregion}</span><br />
                                <span className="span-1">Capital:</span> <span className="span-2">{props.selectedCountry.capital}</span>
                            </div>
                            <div className="col-md-5">
                                <span className="span-1">Top level domain:</span> <span className="span-2">{props.selectedCountry.tld}</span><br />
                                <span className="span-1">Currencies:</span> <span className="span-2">{Currencies()}</span><br />
                                <span className="span-1">Languages:</span> <span className="span-2">{languages()}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mt-5">
                                <span className="span-1">Border Countries:</span>
                                {props.selectedCountry.borders?props.selectedCountry.borders.map(border => {
                                    return <button className="span-2 border-country-btn" onClick={() => props.bordercountry(border)}>{border}</button>
                                }): <code> No border countries for this country</code>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}