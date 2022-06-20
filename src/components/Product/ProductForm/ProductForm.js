
import ProductColor from './ProductColor/ProductColor';
import ProductSize from './ProductSize/ProductSize';
import styles from './ProductForm.module.scss';
import Button from '../../Button/Button';




const ProductForm = ({colors, sizes, getPrice, title, currentColor, currentSize, setCurrentColor, setCurrentSize})=> {

    const handleSubmit = (e) => {
        e.preventDefault();
        const summary = [
            'Name: ' + title,
            'Price: ' + getPrice(),
            'Size: ' + currentSize,
            'Color: ' + currentColor,
        ]
        console.log('Summary');
        console.log('===============');
        summary.map(i => console.log(i)); 
      }

      return (
        <form on onSubmit={handleSubmit}>
        <ProductSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize}></ProductSize>;
        <ProductColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor}></ProductColor>
        <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
      </form>
      )
}
export default ProductForm;
