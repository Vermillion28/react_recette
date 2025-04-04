
import styles from '../styles/card.module.css';

export default function Card({ img, nom, temps_preparation }) {
    return (
        <div className={styles.card} style={{backgroundImage : `url(${img})`,backgroundSize: 'cover',
        backgroundPosition: 'center'}}>
            
            <h2>{nom}</h2>
            <p>Temps de préparation : {temps_preparation} minutes</p>
            <button>Voir la recette</button>
        </div>
    );
}