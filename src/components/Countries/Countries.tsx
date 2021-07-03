import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { LOAD_CONTINENTS_COUNTRIES } from '../../GraphQL/Queries'



interface CountryLanguages {
    name: string;
}

interface CountriesData {
    code: string;
    name: string;
    emoji: string;
    languages: CountryLanguages[];
}

interface ContElement {
    code: string;
    name: string;
    countries: CountriesData[];
}

interface ContData {
    continents: ContElement[];
}

interface ParamTypes {
    continentCode: string
  }

const Countries = () => {


    const {error, loading, data } = useQuery<ContData>(LOAD_CONTINENTS_COUNTRIES);

    const params = useParams<ParamTypes>();

    const matchContinent = data?.continents.find( cont => {
       return cont.code === params.continentCode;
    })

    let content = <div>
        loading.....
    </div>;

    if (data) {
        content = <div>
            {matchContinent?.countries.map( e => {
            return <div>{e.name}</div>
        })}
        </div>
    }

    const check = () => {
        console.log(data?.continents);
        console.log(matchContinent);
    }
    

    return (
        <div>
            <button onClick={check}>check</button>
            {params.continentCode}
            {content}
        </div>
    )
}

export default Countries;
