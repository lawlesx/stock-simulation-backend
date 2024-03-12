// Express router to handle API routes
import env from 'dotenv'
import express from 'express'
import getQuote from '../controllers/getQuote'
import getTimeSeriesIntraday from '../controllers/getTimeSeriesIntraday'

env.config()

const router = express.Router()

router.get('/time-series-intraday', getTimeSeriesIntraday)
router.get('/quote', getQuote)

export default router
