import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { LOAD_COUNTRIES } from '../../GraphQL/Queries';
import { Link } from "react-router-dom";
import styles from './Countries.module.css'
import CountriesItem from "./CountriesItem";
import { Cont, ParamTypes } from '../../ModelTS/ModelTS';


const Countries = () => {
    const params = useParams<ParamTypes>();

    const { data, loading, error } = useQuery<Cont>(LOAD_COUNTRIES, {
        variables: { code: params.continentCode }
    });

    console.log(params.continentCode);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    if (data && data.continent !== null) {
        console.log(data);
        return <div>
            <div className={styles.btnContainer}>
                <Link to="./">
                    <button className={styles.backBtn}>back</button>
                </Link>
                <h2>Current continent code: {params.continentCode}</h2>
            </div>
            <div className={styles.wrapper}>{data.continent.countries.map(e => {
                return <CountriesItem key={e.code} code={e.code} name={e.name} emoji={e.emoji} languages={e.languages} />
            })}</div>
        </div>
    } else if (!loading && params.continentCode) {
        return <div>Page not found. Consider another path.</div>
    }

    return <div>Page not found. </div>

}

export default Countries;
