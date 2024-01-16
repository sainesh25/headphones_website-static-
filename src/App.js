import logo from './logo.svg';
import './App.css';
import Banner from './Banner/Banner';
import About from './About/About';
import Info from './Info/Info';
import Product from './Product/Product';
import ProductList from './ProductList/ProductList';

function App() {
  return (
    <div className="App">
          <Banner/>
          <About heading='Find a quality and right headphones not easy' info='Experience the exact same raised experience as well as incredible audio UHP has actually been delivering to opera house, workshops, and also living rooms for 50 years with Business HTML Templates. The headphones ar all made by HTML Business Templates from thoroughly chosen products such as soft lambskin, cowhide natural leather and also plated aluminium to make certain excellent quality as well as convenience so you could enjoy exceptional flexibility and also craftsmanship'/>
        <Info heading='Business HTML Templates Free Download'/>
        <ProductList>

        </ProductList>
        {/* <Product/> */}

    </div>
  );
}

export default App;
