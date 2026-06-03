import { useEffect,useState } from "react";
import logo from "../assets/logo.png"
import ProductCard from "../componets/ProductCard";
function Sepetim(){
 const[cartItems,setCartItems] =
 useState([]);
 useEffect(() => {
  fetch("http://localhost:3000/cart")
  .then((res)=> res.json())
  .then((data)=>{
    setCartItems(data);
  });
},[]);
  return(
    <div className="max-w-7xl mx-auto px-10">
      <p className=" text-xl py-5">Sepetteki toplam ürün sayısı:
         <span className="font-bold text-blue-900 "> {cartItems.length }</span></p>
         {cartItems.length === 0 ? (
          <div className="py-70 flex flex-col justify-center items-center text-blue-900">
            <img src={logo} alt="" className="bg-blue-900 w-14 h-12"/>
            <p className="text-2xl font-bold mt-3">Sepetiniz boş!!</p>
          </div>
         ):(
      <div className="grid grid-cols-4 gap-4">{cartItems.map((item,index)=>
      (<ProductCard
      key={index}
      product={item}
      showButton={false}/>))}</div> 
         )}
    </div>
  );
}
export default Sepetim;