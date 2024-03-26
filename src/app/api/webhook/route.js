import { Order } from "../../../models/Order";

const stripe = require('stripe')("sk_test_51OusjySF6FEMr6yE5LsPbVf3nCjaL6yPKlzCfKAJVPUxusZv4jbdVdHYqE1SXD8TqvroG2txMXgMy2ZoH2oeHnKz00AE1eJqw4");

export async function POST(req) {
    const sig = req.headers.get('stripe-signature');
    let event;

    try {
        const reqBuffer = await req.text();
        const signSecret = "whsec_a5616b5b99b4d454bd6df5456a0a6efb209812f660c8f83a41cdda35a043a68e";
        event = stripe.webhooks.constructEvent(reqBuffer, sig, signSecret);
    } catch (e) {
        console.error('stripe error');
        console.log(e);
        return Response.json(e, { status: 400 });
    }

    if (event.type === 'checkout.session.completed') {
        console.log(event);
        const orderId = event?.data?.object?.metadata?.orderId;
        const isPaid = event?.data?.object?.payment_status === 'paid';
        if (isPaid) {
            await Order.updateOne({ _id: orderId }, { paid: true });
        }
    }

    return Response.json('ok', { status: 200 });
}