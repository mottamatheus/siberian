const functions = require("firebase-functions");

const express = require("express");

const cors = require("cors");

const stripe = require("stripe")(
    "sk_test_51HQKyhAlzuFe5RbCcpdyjFVWy1CD7oTJEPEUQU9aFfHh6pn8g7aeKo5ceAvIwZaRQ0lUafIRjnIjClGcBJepT5yD00yFaqCNnG"
);
// API

//APP CONFIG

const app = express();
// Middlewears
app.use(cors({ origin: true }));
app.use(express.json());
// API Root
app.get("/", (request, response) =>
    response.status(200).send("hello, world!")
);

app.post(
    "/payments/create",
    async (request, response) => {
        const total = request.query.total;
        console.log(
            "Payment request Receivet!! for this amount",
            total
        );

        const paymentIntent = await stripe.paymentIntent.create(
            {
                amount: total, //sub units
                currency: "usd",
            }
        );

        response.status(201).send({
            clientSecret:
                paymentIntent.client_secret,
        });
    }
);
// Listen Command
exports.api = functions.https.onRequest(app);
