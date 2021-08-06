import styles from './CountriesItem.module.css';
import { Countries } from '../../ModelTS/ModelTS';

const CountriesItem: React.FC<Countries> = (props) => {
    

    return(
        <div className={styles.card}>
            <h4>{props.name}</h4>
            <p>{props.emoji}</p>
            
            <p>{props.languages[0] === undefined ? "No language found." : props.languages[0].name}</p>
        </div>
    )
}

export default CountriesItem;