import { Request, Response } from 'express'
import alphaVantage from '../utils/alphaVantage'
import { ALPHA_VANTAGE_FUNCTIONS } from '../utils/contants'

const searchTicker = async (req: Request, res: Response) => {
  const keywords = req.query.keywords

  try {
    const response = await alphaVantage.get('', {
      params: {
        function: ALPHA_VANTAGE_FUNCTIONS.SYMBOL_SEARCH,
        keywords,
      },
    })
    return res.json(response.data)
  } catch (error) {
    res.status(500).send('Error searching Ticker')
  }
}

export default searchTicker
