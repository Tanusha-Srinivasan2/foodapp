import styles from './fooditem.module.css';
import React from 'react';
export default function FoodItem({food, setFoodId}){
    return (
        <div className={styles.itemContainer}>
            <img className={styles.itemImage} src={food.image} alt={food.title} />
            <div className={styles.itemContent}>
                <p className={styles.itemName}>{food.title}</p>
                
            </div>
            <div className = {styles.buttonContainer}>
                <button
                 onClick={()=>{
                    console.log(food.id);
                    setFoodId(food.id);
                }} className={styles.itemButton}> View Recipe </button>

            </div>
            
        </div>
    )

}
