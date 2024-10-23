import { useEffect, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Layout from './layout/Layout/Layout';

import Todo from './pages/Todo/Todo';
import Calculator from './pages/Calculator/Calculator';
import Animation from './pages/Animation/Animation';
import Components from './pages/Components/Components';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Carts from './pages/Carts/Carts';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

import { fetchProducts } from './data/products';

import './App.css'
import Login from './pages/Login/Login'

// App -> Layout -> Navbar (button)
// tab -> Layout -> (props)

const intTab = 'Home'

function App() {
  const [token, setToken] = useState('')
  const [role, setRole] = useState('')

  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  // Fetch products once when the component mounts
  useEffect(() => {
    setProducts(fetchProducts());
  }, []);

  // Log the products whenever they change
  useEffect(() => {
    console.log(products);
  }, [products]);

  if (token === '') {
    return <Login setToken={setToken} setRole={setRole} />
  } else {
    return (
      <div className='app-container'>
        <HashRouter>
          <Routes>
            <Route path='/' element={<Layout products={products} carts={carts} setToken={setToken} />}>
              <Route index element={<Home />} />
              <Route path='home' element={<Home />} />
              <Route path='calculator' element={<Calculator />} />
              <Route path='animation' element={<Animation />} />
              <Route path='todo' element={<Todo />} />
              <Route path='components' element={<Components />} />
              <Route path='products' element={<Product
                products={products}
                carts={carts}
                setCarts={setCarts}
              />} />
              <Route path='carts'
                element={<Carts carts={carts} setCarts={setCarts} />} />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    )
  }
}

export default App;
