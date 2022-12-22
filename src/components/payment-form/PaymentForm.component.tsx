import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
} from "./payment-form.styles";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { BUTTON_TYPES_CLASSES } from "../button/Button.component";
import { useState, FormEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../store/cart/cart.action";
import { selectCartTotal, selectCartItems } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useNavigate } from "react-router-dom"

const PaymentForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const cartItems = useSelector(selectCartItems)
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const cardDetails = elements.getElement(CardElement)

    if(cardDetails === null) return;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("payment successful");
        navigate('/')
        dispatch(clearCart(cartItems));
      }
    }
  };
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <PaymentButton
          buttonType={BUTTON_TYPES_CLASSES.inverted}
          isLoading={isProcessingPayment}
        >
          Pay now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
