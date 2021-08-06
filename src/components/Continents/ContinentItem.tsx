import { Link } from "react-router-dom";
import { ContElement } from '../../ModelTS/ModelTS';
import styles from './ContinentItem.module.css'

const ContinentItem: React.FC<ContElement> = (props) => {

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