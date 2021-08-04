import Stripe from 'stripe'
import { version } from '../../package.json'
const envStripe = process.env.STRIPE_API_KEY

export const stripe = new Stripe(envStripe, {
    apiVersion: '2020-08-27',
    appInfo: {
        name: 'Ignews',
        version,
    },
})
