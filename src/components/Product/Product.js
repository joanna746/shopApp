import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';


const Product = ({id,name,title,basePrice,colors,sizes}) => {
  const [currentColor,setCurrentColor]=useState(colors[0]);
  console.log(currentColor)
  const [currentSize, setCurrentSize]=useState(sizes[0].name);
  console.log(currentSize)

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }
  const getPrice =()=>{
    const getSize = sizes.find(({name})=> name ===currentSize);
    console.log(getSize)
    return getSize.additionalPrice + basePrice ;
  }
  
  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price:{getPrice()}$ </span>
        </header>
        <form>
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
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map(item =>
              <li key={item}>
                <button type="button" className={clsx(prepareColorClassName(item), item === currentColor && styles.active)}onClick={()=>setCurrentColor(item)} /></li>
              
                )}
              
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  colors: PropTypes.array,
  sizes: PropTypes.array,
  basePrice: PropTypes.number,
  title: PropTypes.string
  }
export default Product;