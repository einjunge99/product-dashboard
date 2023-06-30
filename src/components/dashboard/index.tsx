import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../actions/products";
import { AppDispatch } from "../../store";
import { getProducts } from "../../selectors/products";

export const Dashboard = () => {
    const products = useSelector(getProducts)
    const dispatch = useDispatch<AppDispatch>();

    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])

    if(products.loading){
        return <h1>Loading...</h1>
    }

    if(products.error) {
        return <h1>Error</h1>
    }

    const {products: productsList} = products;
    return <div>
        <h1>Dashboard page</h1>
        {productsList?.map(product=>{
            return <h2>{product.name}</h2>
        })}
    </div>
};