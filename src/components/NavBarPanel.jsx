import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon



const NavBar = () => {
    const cartProducts = useSelector(state => state.cart)
    return (
        <Navbar expand="lg" bg="light">
            <Container fluid>
                <Navbar.Brand href="#">New Collections</Navbar.Brand>
                <Nav>
                    <Nav.Link to="/" as={Link}><strong>Products</strong></Nav.Link>

                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Nav.Link to="/Cart" as={Link}>
                            <strong>
                                <FaShoppingCart /> My Cart
                            </strong>
                            {cartProducts.length > 0 && <span> ({cartProducts.length})</span>}
                        </Nav.Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default NavBar;