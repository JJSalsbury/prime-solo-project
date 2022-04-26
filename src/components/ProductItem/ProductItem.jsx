import { useDispatch, useSelector } from 'react-redux';
import editProductForm from '../EditProductForm/EditProductForm';
import { useHistory } from 'react-router-dom';

function ProductItem({product}) { //item coming from .map on ProductList 

    const dispatch = useDispatch();
    const history = useHistory();
    // const user = useSelector(store => store.user);
    console.log('ProductItem component:', product);

    const handleDelete = () => {
        dispatch({ type: 'DELETE_ITEM', payload: product.id }) //sends item id to saga with delete request

    // const handleClick = () => {
    //     dispatch({ type: 'ADD_PRODUCT', payload: product.id }) //sends item id to saga with delete request
    // }

    const editProduct = () => {
        dispatch({ type: 'EDIT_ITEM', payload: product})
        console.log('editProduct func');
        history.push(`/editproduct/${product.id}`);
    }

    const orderReceived = () => {
        dispatch({ type: 'ORDER_RECEIVED', payload: product})
        console.log('addCount clicked');
        history.push(`/addorder/${product.id}`);
        // history.push(`/addcount/${product.id}`);
    }

    return (
    
        <main key={product.id} >
            <h1>Product Details</h1>
                <div>
                <p>Product Id: {product.id}</p>
                <h3>PRODUCT NAME: {product.name}</h3>
                <p>UNIT/SIZE: {product.amount}{product.amount_type}</p> 
                <p>TYPE: {product.type}</p>
                <p>PAR: {product.par}</p>
                <p>EXPECTED AMOUNT: {product.expected_amount}</p>
                <button onClick={handleDelete}>Delete Product</button>
                <button onClick={editProduct}>Edit Product</button>
                <button onClick={orderReceived}>Order Received</button>
                </div>
        </main>
    );
}
};

export default ProductItem;