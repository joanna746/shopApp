import styles from './ProductSize.module.scss';
import clsx from "clsx";

const ProductSize = ({sizes , currentSize , setCurrentSize})=>{

    return (
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
            {sizes.map(size => 
                <li key={size}>
                  <button type="button" className={clsx(size.name === currentSize && styles.active)}onClick={() =>setCurrentSize(size.name)}>{size.name}</button>
                </li>
                )}
            </ul>
          </div>
    )
};
export default ProductSize;