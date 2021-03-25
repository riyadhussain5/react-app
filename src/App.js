import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/country/country'
import Cart from './components/Cart/cart'

function App() {
  
  const [countries,setCountries] = useState([]);
  const [cart,setcart] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data =>{
      setCountries(data);
      console.log(data);
      const names = data.map(country =>country.name)
      console.log(names);
}    )
    
    .catch(error => console.log(error))
    
  },[])


  const newcart=(country) => {
    const updatedCart =[...cart,country];
    setcart(updatedCart);
  }
  return (
    <div className="App">
      <h1>country loaded: {countries.length}</h1>
      <h2>country added : {cart.length}</h2>
      <Cart cart={cart} ></Cart>
 
      {
countries.map(country => <Country country={country} newcart={newcart}key={country.alpha3Code}></Country>)
}
    
      
      <header className="App-header">
        <img  src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
