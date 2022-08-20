import React, {useState} from 'react';
import data from './data.json'
import './App.css';

function App() { 
    const [products,setProducts] = useState(data)
    const [prod, setProd]=useState()
    let colorStock="black"  

  const handleChange=(e)=>{
   if(e.target.value === ""){
    setProducts(data)
   }else{
    const pro =products.filter(products => products.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setProducts(pro)
   }  
  }
  const handleCheck=(e)=>{
    if(e.target.checked){
      const pro =products.filter(e =>e.inStock===true)
        setProducts(pro)
    }else{
      setProducts(data)
    }  
  }
  return (   
     <table className='table' >
       <tbody>        
        <tr>
            <td>List of products</td>
            <td><input placeholder='Search' onChange={(e)=>{handleChange(e)}}></input></td>
        </tr>     
        <tr>      
            <td><h4>Only show products in stock </h4></td>
            <td><input type="checkbox" onChange={(e)=>{handleCheck(e)}}></input> </td>
        </tr>    
            <tr>
            <td><h3>Category</h3></td> 
            <td><h3>Name</h3></td> 
            <td><h3>Price</h3></td> 
            <td><h3>In stock</h3></td> 

          </tr>
        {products.map((e)=>{          
          e.inStock? colorStock="black": colorStock="red"      
          return(         
            <tr key={e.id}  style={{color:colorStock}}> 
                <td>{e.category}</td>
                <th>{e.name}</th>
                <th>{e.price}</th>  
                <th>{e.inStock}</th>   

            </tr>    
          )                
        })}
      </tbody>      
     </table>  
  );
}
export default App;
