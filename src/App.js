import './App.css';
import Navbar from './components/navbar';
import Products from './components/products';

function App() {
  // const name = "Petar";
  // const surname = "Petrovic";

  // function getUser(){
  //   return name + ' ' + surname;
  // }
  return (
    <div className="App">
      {/* <h1>Ja sam {getUser()}</h1> */}
      <Navbar />
      <Products/>
    </div>
  );
}

export default App;
