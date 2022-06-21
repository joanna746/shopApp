import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import ProductImage from '../Product/ProductImage/ProductImage.js';
import ProductForm from './ProductForm/ProductForm';


const Product = ({id,name,title,basePrice,colors,sizes}) => {
  const [currentColor,setCurrentColor]=useState(colors[0]);
  console.log(currentColor)
  const [currentSize, setCurrentSize]=useState(sizes[0].name);
  console.log(currentSize)

  
  const getPrice =useMemo(()=>{
    const getSize = sizes.find(({name})=> name ===currentSize);
    console.log(getSize)
    return getSize.additionalPrice + basePrice ;
  }, [basePrice, currentSize, sizes]);

  
  
  return (
    <article className={styles.product}>
     <ProductImage title={title} name={name} currentColor={currentColor}></ProductImage> 
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price:{getPrice}$ </span>
        </header>
        <ProductForm sizes={sizes} colors={colors} title={title} getPrice={getPrice} currentColor={currentColor} currentSize={currentSize} setCurrentColor={setCurrentColor} setCurrentSize={setCurrentSize}></ProductForm>
          
          
          
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