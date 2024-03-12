import axios from 'axios'
import env from 'dotenv'
env.config()

const alphaVantage = axios.create({
  baseURL: 'https://www.alphavantage.co/query',
  params: {
    apikey: process.env.ALPHA_VANTAGE_API_KEY,
  },
})

export default alphaVantage
