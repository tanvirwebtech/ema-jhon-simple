import React, { useEffect, useState } from "react";
import { CardGroup, Container, Row } from "react-bootstrap";
import SingleProduct from "./SingleProduct/SingleProduct";
import useCart from "./../../hooks/useCart";
import { addToDb } from "../../utilities/fakedb";
import useProducts from "./../../hooks/useProducts";

export default function Shop() {
    const [products] = useProducts();
    // const [cart, setCart] = useState([]);
    const [cart, setCart] = useCart(products);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key);
    };

    return (
        <>
            <Container>
                <h2 className="text-center">Shop</h2>
            </Container>
            <h3>Cart: {cart.length}</h3>
            <Container>
                <CardGroup>
                    <Row>
                        {products.map((product) => (
                            <SingleProduct
                                key={product.key}
                                product={product}
                                clickHandler={handleAddToCart}
                            ></SingleProduct>
                        ))}
                    </Row>
                </CardGroup>
            </Container>
        </>
    );
}
