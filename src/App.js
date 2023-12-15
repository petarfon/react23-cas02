import './App.css';
import Navbar from './components/navbar';
import Products from './components/products';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [cartNum, setCartNum] = useState(0);
  const [products, setProducts] = useState(null);

  useEffect(()=>{
    const fetchData = async () => {
      const response = await axios.get('/productsData.json');
      console.log(response.data.products);
      setProducts(response.data.products);
    }

    fetchData();
  }, [])


  
  // const name = "Petar";
  // const surname = "Petrovic";

  // function getUser(){
  //   return name + ' ' + surname;
  // }

  //poslati id iz komponente OneProduct
  const addToCart = (id) => {
    //products.map((p)=>{
    products.forEach((p)=>{
      if(p.id === id){
        p.amount = p.amount + 1;
        setCartNum(cartNum + 1);
        console.log("Id: ", p.id, " amount: ", p.amount);
      }
    })
    
}

  return (
    <div className="App">
      {/* <h1>Ja sam {getUser()}</h1> */}
      <Navbar cartNum={cartNum}/>
      <Products allproducts={products} something="neki tekst" onAdd={addToCart}/>
    </div>
  );
}

export default App;
