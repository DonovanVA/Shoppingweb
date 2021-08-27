import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_3TUzc7ehXRvX0Peb8LJSkAUe000vEP7AU3"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer({Price,setPrice}) {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm Price={Price} setPrice={setPrice}/>
		</Elements>
	)
}