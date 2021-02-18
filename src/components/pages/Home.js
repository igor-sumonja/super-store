import {useDispatch, useSelector} from "react-redux";
import {useEffect} from 'react';
import {setCurrentProducts} from "../../store/features/productsSlice";
import axios from "axios";
import ProductGrid from "../ProductGrid";

export default function Home() {

  const dispatch = useDispatch()
  const products = useSelector(state => state.products)

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios(
        'https://gp-super-store-api.herokuapp.com/item/list'
      )
      dispatch(setCurrentProducts(data.data.items))
    }
    fetchData();
  }, [])

  return (
    <div>
      { products.length > 0
        ? <ProductGrid products={products}/>
        : 'Loading...'
      }
    </div>
  )
}
