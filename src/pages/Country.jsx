import { useEffect, useTransition, useState } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/UI/Loader";
import { CountryCard } from "../components/Layout/CountryCard";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country = () => {
    const [isPending, startTransition] = useTransition();  //no isLoading req now
    const [countries, setCountries] = useState([]); 
    
    const [search, setSearch] = useState();
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        startTransition(async () => {
            const response = await getCountryData();
            setCountries(response.data);  //way
        });
    }, []);

    if (isPending) return <Loader />  //import loader , 
    // console.log(search, filter); 
    
    //search logic
    const searchCountry = (country) => {
        if (search) {
          return country.name.common.toLowerCase().includes(search.toLowerCase());
        }
        return country;
      };
      
      //filter logic
      const filterRegion = (country) => {
        if (filter === "all") return country;
        return country.region === filter;
      };
    
      // here is the main logic
      //combine both the logic
      const filterCountries = countries.filter(
        (country) => searchCountry(country) && filterRegion(country)
      );
    
    //Adding Loop for country data
    //pass in this variable
    return <section className="country-section">
        <SearchFilter 
           search={search} 
           setSearch={setSearch} 
           filter={filter} 
           setFilter={setFilter}
           countries={countries}
           setCountries={setCountries}
        />
        {/* running loop in that variable  */}
        <ul className="grid grid-four-cols">
            {filterCountries.map((curCountry, index) => {
                return <CountryCard country={curCountry} key={index} />           
            })}
        </ul>
    </section>

}
