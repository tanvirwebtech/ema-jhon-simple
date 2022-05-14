import React from "react";

export default function Cart() {
    const cartStyle = {
        width: "300px",
        position: "absolute",
        right: 0,
        top: "10px",
    };
    return (
        <div style={cartStyle}>
            <h3 className="text-center">Cart</h3>
            <hr />
            <div className="item">
                <h5>Name: Lorem</h5>
                <h5>Quantity: 0</h5>
                <h5>Total: 0</h5>
            </div>
            <hr />
            <h6>Gran Total: 0</h6>
        </div>
    );
}
