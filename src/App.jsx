import { Router, Route, Routes } from 'react-router-dom';
import { ProductList } from './pages/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from './components/Navbar'
function App() {


  return (
    <>

      <NavigationBar />
      <Routes>
        <Route path='/' element={<ProductList />}></Route>
      </Routes>
    </>
  )
}

export default App
