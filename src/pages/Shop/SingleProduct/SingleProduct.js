import React from "react";
import { Card, Col } from "react-bootstrap";
// import useCart from "./../../../hooks/useCart";

export default function SingleProduct(props) {
    const { name, img, price } = props.product;
    // const { handleAddToCart } = useCart();
    const handleAddToCart = props.clickHandler;
    // console.log(props, handleAddToCart);
    return (
        <Col md={4} sm={6} xs={12}>
            <Card>
                <Card.Img variant="top" src={img} style={{ width: "300px" }} />
                <Card.Body>
                    <Card.Title>{name.slice(0, 50) + "..."}</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <h5>Price: ${price}</h5>
                    <button
                        className="btn btn-primary"
                        onClick={() => handleAddToCart(props.product)}
                    >
                        Add to cart
                    </button>
                </Card.Footer>
            </Card>
        </Col>
    );
}
