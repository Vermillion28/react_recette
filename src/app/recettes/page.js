import Card from "../Components/card"
import liste_recettes from "../recetteData"
import styles from '../styles/recettes.module.css'
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
export default function Recettes(){
    return(

        <div className={styles.body}>
            <div className={styles.nav}>
                <p>Recette Page</p>
                <input type="search" placeholder="Recherche"></input>
                <button>Ajouter une recette</button>
            </div><br></br>
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