import { useQuery } from "@apollo/client";
import { LOAD_CONTINENTS } from '../../GraphQL/Queries';

import styles from './Continents.module.css';


interface ContElement {
    code: string;
    name: string;
}

interface ContData {
    continents: ContElement[];
}


const Continents = () => {

    const { error, loading, data } = useQuery<ContData>(LOAD_CONTINENTS);

    return (
        <ul className={styles.list}>
            {loading && <p>loading...</p>}
            {error && <h3>{error.message}</h3>}
            {data?.continents.map(elem => {
                return <li key={elem.code} >{elem.name} **** {elem.code}</li>
            })}
        </ul>
    )
}

export default Continents;
