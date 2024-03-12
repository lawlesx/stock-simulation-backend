import { Request, Response } from 'express'
import alphaVantage from '../utils/alphaVantage'
import { ALPHA_VANTAGE_FUNCTIONS } from '../utils/contants'

const getGlobalMarketStatus = async (req: Request, res: Response) => {
  try {
    const response = await alphaVantage.get('', {
      params: {
        function: ALPHA_VANTAGE_FUNCTIONS.MARKET_STATUS,
      },
    })
    return res.json(response.data)
  } catch (error) {
    res.status(500).send('Error getting Global Market Status')
  }
}

export default getGlobalMarketStatus
