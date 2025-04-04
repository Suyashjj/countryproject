import { NavLink } from "react-router-dom"; 

export const CountryCard = ({country}) => {
    const {name, capital, population, flags, region} = country;
    return <li className="country-card">
        <div className="container-card bg-white-box">
          <img src={flags.svg} alt={flags.alt} />

          <div className="countryInfo">
            <p className="card-title">
                {/* done , so length of card not increase , limit the length of card */}
                {name.common.length > 10
                ? name.common.substring(0, 10) + "..." 
                : name.common}
                </p>
            <span className ="card-description">Population:</span>
            {population.toLocaleString()}
            <p>
            <span className ="card-description">Region:</span>
            {region}
            </p>
            <p>
            <span className ="card-description">Capital:</span>
            {capital[0]}
            </p>
            {/* NavLink spelling should be same  */}
            <NavLink to={`/country/${name.common}`}>
            <button>Read More</button>
            </NavLink>  
          </div>     
        </div>
    </li>;
}
