import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { LOAD_CONTINENTS_COUNTRIES } from '../../GraphQL/Queries';
import { Link } from "react-router-dom";

import styles from './Countries.module.css'


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


    const { error, loading, data } = useQuery<ContData>(LOAD_CONTINENTS_COUNTRIES);

    const params = useParams<ParamTypes>();

    const matchContinent = data?.continents.find(cont => {
        return cont.code === params.continentCode;
    })

    let content = <div>
        loading.....
    </div>;

    if (matchContinent !== undefined) {
        content = <div className={styles.wrapper}>
            {matchContinent?.countries.map(e => {
                return <div>{e.name}</div>
            })}
        </div>
    } else if (!loading && params.continentCode) {
        content = <div>Page not found. Consider another path.</div>;
    }

    const check = () => {
        console.log(data?.continents);
        console.log(matchContinent);
    }


    return (
        <>
            <div className={styles.btnContainer}>
                <Link to="./">
                    <button className={styles.backBtn}>back</button>
                </Link>
                <h2>Current continent code: {params.continentCode}</h2>
            </div>
            <div>
                <button onClick={check}>check</button>
                {error && <h3> {error.message} </h3>}
                {content}
            </div>
        </>
    )
}

export default Countries;
