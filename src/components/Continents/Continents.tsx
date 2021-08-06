import { useQuery } from "@apollo/client";
import { LOAD_CONTINENTS } from '../../GraphQL/Queries';
import ContinentItem from './ContinentItem';
import { ContData } from '../../ModelTS/ModelTS';
import styles from './Continents.module.css';


const Continents = () => {

    const { error, loading, data } = useQuery<ContData>(LOAD_CONTINENTS);

    return (
        <ul className={styles.list}>
            {loading && <p>loading...</p>}
            {error && <h3>{error.message}</h3>}
            {data?.continents.map(elem => {
                return <ContinentItem key={elem.code} name={elem.name} code={elem.code} />
            })}
        </ul>
    )
}

export default Continents;
