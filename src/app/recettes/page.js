import Card from "../Components/card"
import liste_recettes from "../recetteData"
import styles from '../styles/recettes.module.css'
export default function Recettes(){
    return(
        <div className={styles.body}>
            <div className={styles.card}>
            {liste_recettes.map((recette, index) => (
                <Card
                    key={index}
                    img={recette.image}
                    nom={recette.nom}
                    temps_preparation={recette.temps_preparation}
                />
            ))}
        </div>
        </div>
    )
}