import { Link } from "react-router-dom";
import styles from './ContinentItem.module.css'

const ContinentItem: React.FC<{name: string; code: string;}> = (props) => {
    

    return (
        <li className={styles.element}>
            <Link to={`/continents/${props.code}`}>
                <h3>{props.name}</h3>
                <p>{props.code}</p>
                
            </Link>
        </li>
    )
}


export default ContinentItem;