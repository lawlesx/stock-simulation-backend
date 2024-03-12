import { Request, Response } from 'express'
import alphaVantage from '../utils/alphaVantage'
import { ALPHA_VANTAGE_FUNCTIONS, ALPHA_VANTAGE_INTERVALS } from '../utils/contants'

interface TimeSeriesEntry {
  [key: string]: string
}

interface TimeSeriesData {
  [key: string]: TimeSeriesEntry
}

interface MetaData {
  '1. Information': string
  '2. Symbol': string
  '3. Last Refreshed': string
  '4. Interval': string
  '5. Output Size': string
  '6. Time Zone': string
}

interface TimeSeriesIntradayData {
  'Meta Data': MetaData
  'Time Series (1min)': TimeSeriesData
}

const getTimeSeriesIntraday = async (req: Request, res: Response) => {
  const symbol = req.query.symbol

  try {
    if (!symbol) return res.status(400).send('Symbol is required')

    const response = await alphaVantage.get<TimeSeriesIntradayData>('', {
      params: {
        function: ALPHA_VANTAGE_FUNCTIONS.TIME_SERIES_INTRADAY,
        symbol: symbol,
        interval: ALPHA_VANTAGE_INTERVALS.ONE_MIN,
      },
    })
    return res.json(response.data)
  } catch (error) {
    res.status(500).send('Error fetching Time Series Intraday data')
  }
}

export default getTimeSeriesIntraday

// const simulateFluctuations = (data: StockData) => {
//   setInterval(() => {
//     const timeSeries = data['Time Series (5min)']
//     for (const key in timeSeries) {
//       if (Object.prototype.hasOwnProperty.call(timeSeries, key)) {
//         const entry = timeSeries[key]
//         for (const field in entry) {
//           if (Object.prototype.hasOwnProperty.call(entry, field) && field !== '5. volume') {
//             const value = parseFloat(entry[field])
//             const fluctuation = Math.random() * 0.1 - 0.05 // Random fluctuation amount between -0.05 and 0.05
//             const newValue = value * (1 + fluctuation)
//             entry[field] = newValue.toFixed(4) // Format to 4 decimal places
//           }
//         }
//       }
//     }
//     console.log(JSON.stringify(data, null, 2)) // Print modified data
//   }, 1000) // Update every 1 second
// }
