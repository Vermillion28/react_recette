
import styles from '../styles/card.module.css';
import Link from 'next/link';

export default function Card({ img, nom, temps_preparation }) {
    return (
        <div className={styles.card} style={{backgroundImage : `url(${img})`,backgroundSize: 'cover',
        backgroundPosition: 'center'}}>
            
           <div className={styles.cardContent}>
                <h2>{nom}</h2>
                <p>Temps de préparation : {temps_preparation} minutes</p>
                <button><Link href='/detailsRecette'>Voir la recette</Link></button>
            </div>
        </div>
    );
}