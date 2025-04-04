import countryFacts from '../api/countryData.json';  //data get

export const About = () => {
    return <section className="section-about container">
        <div className="container-title-wrapper">
        <h2
            className="container-title text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-center glowing-text"
        >
            Explore the Most Captivating Facts About Our Planet
        </h2>
        <div className="title-underline glowing-underline"></div>
        </div>

        <div className="gradient-cards">
            {countryFacts.map((country) => {
                const {id, countryName, capital, population, interestingFact} = country;
                return (
            <div className="card" key={id}>
                <div className="container-card bg-blue-box">
                    <p className="card-title">{countryName}</p>
                    <p>
                        <span className="card-description"> Captital : </span>
                        {capital}                        
                    </p>
                    <p>
                        <span className="card-description"> Population : </span>
                        {population}                        
                    </p>
                    <p>
                        <span className="card-description"> Interesting Fact : </span>
                        {interestingFact}                        
                    </p>
                  
                </div>
            </div>
                )
            })}
            
        </div>
        
    </section>
}
