import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import NavBar from "./NavBarPanel";
const Cart = () => {
  const products = useSelector(state => state.cart)

  const dispatch = useDispatch();
  const removeToCart = (id) => {
    dispatch(remove(id))
  }


  const cards = products.map(product => (
    <>
      <div className="col-md-3" style={{ marginBottom: '10px', alignItems: "center" }}>
        <Card key={product.id} className="h-100">
          <div className="text-center">
            <Card.Img variant="top" src={product.image} style={{ width: "100px", height: "130px" }} />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              INR : {product.price}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-center" style={{ background: 'white' }}>
            <Button variant="danger" onClick={() => removeToCart(product.id)}>Remove Item</Button>
          </Card.Footer>
        </Card>
      </div>
    </>
  ))



  return (
    <>
      <NavBar />
      <h2>Cart</h2>
      {cards}
    </>
  );
};

export default Cart;
