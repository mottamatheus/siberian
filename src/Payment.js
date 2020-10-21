import React, {
    useState,
    useEffect,
} from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import {
    Link,
    useHistory,
} from "react-router-dom";
import {
    CardElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { db } from "./firebase";

function Payment() {
    const [
        { basket, user },
        dispatch,
    ] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();
    const [succeeded, setSucceeded] = useState(
        false
    );
    const [processing, setProcessing] = useState(
        ""
    );
    // two pieces of state
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(
        true
    );

    const [
        clientSecret,
        setClientSecret,
    ] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                //stripe expects the total in subinits (cents)
                url: `/payments/create?total=${
                    getBasketTotal(basket) * 100
                }`,
            });

            getClientSecret(
                response.data.clientSecret
            );
        };
    }, [basket]);
    console.log(
        `Sitting on a secret: ${clientSecret}`
    );
    const handleSubmit = async (event) => {
        // stripe
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe
            .confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElements(
                        CardElement
                    ),
                },
            })
            .then(({ paymentIntent }) => {
                setSucceeded(true);
                setError(null);
                setProcessing(false);
                history.replaceState("/orders");
            });
    };

    const handleChange = (event) => {
        // listen to changes in the cardelement and display any errors by the customer (if any)
        setDisabled(event.empty);
        setError(
            event.error ? event.error.message : ""
        );
    };
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (
                    <Link
                        className="payment__container_link"
                        to="/checkout"
                    >
                        {basket?.length} items
                    </Link>
                    )
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Adress</h3>
                    </div>
                    <div className="payment__adress">
                        <p>{user?.email}</p>
                        <p>1917 Lenin St</p>
                        <p>Moscow, RU</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>
                            Review items and
                            delivery
                        </h3>
                    </div>
                    <div className="payment__items">
                        {basket.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={
                                    item.rating
                                }
                            />
                        ))}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form
                            onSubmit={
                                handleSubmit
                            }
                        >
                            <CardElement
                                onChange={
                                    handleChange
                                }
                            />
                            <div className="payment__price">
                                <CurrencyFormat
                                    renderText={(
                                        value
                                    ) => (
                                        <>
                                            <h3>
                                                Order
                                                Total:{" "}
                                                {
                                                    value
                                                }
                                            </h3>
                                        </>
                                    )}
                                    decimalScale={
                                        2
                                    }
                                    value={getBasketTotal(
                                        basket
                                    )}
                                    displayType={
                                        "text"
                                    }
                                    thousandSeparator={
                                        true
                                    }
                                    prefix={"$"}
                                />
                                <button
                                    disabled={
                                        processing ||
                                        disabled ||
                                        succeeded
                                    }
                                >
                                    <span>
                                        {processing ? (
                                            <p>
                                                Processing
                                            </p>
                                        ) : (
                                            "Buy Now"
                                        )}
                                    </span>
                                </button>
                            </div>
                            {error && (
                                <div>{error}</div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
