import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { userRequest } from "../requestMethod";
import { removeProduct } from "../redux/cartRedux"

const Success = () => {
    const location = useLocation();
    const dispatch = useDispatch()

    //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
    const data = location.state.stripeData;
    const cart = location.state.products;
    // const currentUser = useSelector((state) => state.user.currentUser);


    const [orderId, setOrderId] = useState(null);




    // useEffect(() => {
    //     const createOrder = async () => {
    //         try {
    //             const res = await userRequest.post("/orders",

    //                 {
    //                     userId: currentUser._id,
    //                     products: cart.products.map((item) => ({
    //                         productId: item._id,
    //                         quantity: item.quantity,
    //                         color: item.color,
    //                         size: item.size

    //                     })),
    //                     amount: cart.total,
    //                     address: data.billing_details.address,
    //                 });
    //             setOrderId(res.data._id);
    //         } catch { }
    //     };
    //     data && createOrder();
    // }, [cart, data, currentUser]);
    const handleClick = () => {

        // update cart
        dispatch(
            removeProduct()
        )



    }
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {orderId
                ? `Order has been created successfully. Your order number is ${orderId}`
                : `Successfull. Your order is being prepared...`}
            <Link to="/">
                <button style={{ padding: 10, marginTop: 20, backgroundColor: "teal", color: "white", border: "none" }} onClick={handleClick}>Go to Homepage</button>
            </Link>
        </div>
    );
};

export default Success;