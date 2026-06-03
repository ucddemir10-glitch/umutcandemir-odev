
import {useEffect,useState} from "react"
import ProductCard from "../componets/ProductCard";

function Anasayfa(){
   
    const[products,setProducts]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/products")
        .then((res)=> res.json())
        .then((data)=> { 
            console.log(data);
            setProducts(data);
        }); 
    }, []);
    return (
        <div className="max-w-7xl mx-auto px-10">
        <p className="text-start text-xl py-6">Toplam ürün sayısı:
            <span className="text-blue-900 font-bold"> {products.length}</span>
        </p>
        <div className="grid grid-cols-4 gap-4">
            {products.map((item)=>(
                <ProductCard key={item.id} product={item} showButton={true}/>
            ))}
     
        </div>
        </div>
    )
}
export default Anasayfa;