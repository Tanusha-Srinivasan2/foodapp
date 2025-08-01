import styles from "./item.module.css";
export default function Item({ item }) {
  return (
    <div>
      <div className={styles.itemContainer}>
        <div className={styles.imageContainer}>
          <img
            clasName={styles.image}
            src={
              `https://spoonacular.com/cdn/ingredients_100x100/` + item.image
            }
            alt=""
          ></img>
        </div>
        <div className={styles.nameContainer}>
          <div className={styles.name} key={item.id}>
            {item.name}
          </div>

          <div className={styles.amount}>
            {item.amount}
            {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
