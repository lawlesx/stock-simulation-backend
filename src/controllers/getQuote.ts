import { Request, Response } from 'express'
import alphaVantage from '../utils/alphaVantage'
import { ALPHA_VANTAGE_FUNCTIONS, ALPHA_VANTAGE_INTERVALS } from '../utils/contants'

const getQuote = async (req: Request, res: Response) => {
  const symbol = req.query.symbol

  try {
    if (!symbol) return res.status(400).send('Symbol is required')

    const response = await alphaVantage.get('', {
      params: {
        function: ALPHA_VANTAGE_FUNCTIONS.GLOBAL_QUOTE,
        symbol: symbol,
        interval: ALPHA_VANTAGE_INTERVALS.ONE_MIN,
      },
    })
    return res.json(response.data)
  } catch (error) {
    res.status(500).send('Error fetching Quote')
  }
}

export default getQuote
