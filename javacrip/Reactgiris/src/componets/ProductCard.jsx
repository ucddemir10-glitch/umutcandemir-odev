
import { useNavigate } from "react-router-dom";
function ProductCard({product,showButton}){
   const navigate = useNavigate();
   const sepeteEkle =()=> {
        fetch ("http://localhost:3000/cart",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        })
        .then((res)=> res.json())
        .then(()=> {
          navigate("/sepetim");
           window.location.reload();
        });
      };
      const sepettenSil =()=>{
        fetch(`http://localhost:3000/cart/${product.id}`,
          {method: "DELETE",}
        ).then(() => {
          window.location.reload();
        });
      };
  
  return (
   
    <div className='w-72 rounded-2xl overflow-hidden shadow-md bg-white'>
        <img src={product.image} alt={product.title} loading='lazy'className='object-cover w-auto h-72 rounded-xl' />
        <div className='p-3'>
            <h1 className=' truncate text-lg font-bold'>{product.title}</h1>  
            <div className='flex justify-between items-center mt-2 text-xl text-blue-900'>
                <p>{product.category}</p>   
            <p>{product.price} TL</p> 
            </div>
            { showButton &&
             (<button  className='bg-blue-900 text-white w-full py-2 mt-3 rounded-xl cursor-pointer
             ' onClick={sepeteEkle}>Sepete Ekle</button>) ||
             (<button className='bg-blue-900 text-white w-full py-2 mt-3 rounded-xl  cursor-pointer
             ' onClick={sepettenSil}>Sil</button>)}
           
        </div>
    </div>
  )
}
export default ProductCard;