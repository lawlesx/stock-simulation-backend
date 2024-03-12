import { Request, Response } from 'express'
import alphaVantage from '../utils/alphaVantage'
import { ALPHA_VANTAGE_FUNCTIONS } from '../utils/contants'

const getWeekly = async (req: Request, res: Response) => {
  const symbol = req.query.symbol

  try {
    if (!symbol) return res.status(400).send('Symbol is required')

    const response = await alphaVantage.get('', {
      params: {
        function: ALPHA_VANTAGE_FUNCTIONS.TIME_SERIES_WEEKLY,
        symbol,
      },
    })
    return res.json(response.data)
  } catch (error) {
    res.status(500).send('Error getting Weekly')
  }
}

export default getWeekly
