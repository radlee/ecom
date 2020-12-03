import React from 'react';

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HtKhrIQosyHQKsjp9u956dZidz0kaThHDRR1MUgJeIar3vJ7mxLyZuyD7ktHkOKFL1AaocQVq7O2Qf5PwPvMe5S00yoTv6VPc';

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name="The Native Shop"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/RwY.svg'
            description={`Your total is R${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripekey={publishableKey}

        />
    )
}

export default StripeCheckoutButton;