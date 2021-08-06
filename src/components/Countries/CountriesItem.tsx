import styles from './CountriesItem.module.css';

const CountriesItem: React.FC<{name: string; emoji: string; languages: any;}> = (props) => {
    

    return(
        <div className={styles.card}>
            <h4>{props.name}</h4>
            <p>{props.emoji}</p>
            
            <p>{props.languages[0] === undefined ? "No language found." : props.languages[0].name}</p>
        </div>
    )
}

export default CountriesItem;