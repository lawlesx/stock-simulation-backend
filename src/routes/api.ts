// Express router to handle API routes
import env from 'dotenv'
import express from 'express'
import getDaily from '../controllers/getDaily'
import getGlobalMarketStatus from '../controllers/getGlobalMarketStatus'
import getQuote from '../controllers/getQuote'
import getTimeSeriesIntraday from '../controllers/getTimeSeriesIntraday'
import getWeekly from '../controllers/getWeekly'
import searchTicker from '../controllers/searchTicker'

env.config()

const router = express.Router()

router.get('/time-series-intraday', getTimeSeriesIntraday)
router.get('/daily', getDaily)
router.get('/weekly', getWeekly)
router.get('/market-status', getGlobalMarketStatus)
router.get('/quote', getQuote)
router.get('/search', searchTicker)

export default router
