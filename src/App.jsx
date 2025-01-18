import Product from './components/Product'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
// import NavBar from './components/NavBarPanel';



function App() {

  return (
    // <NavBar>
    <Router>
      <Routes>
        <Route path="/" Component={Product} />
        {/* <Route path="/Dashboard" Component={Dashboard} /> */}
        <Route path="/Cart" Component={Cart} />
      </Routes>
    </Router>
    // </NavBar>

  )
}

export default App;
