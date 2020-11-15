const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')

const connectDB = require('./config/db')

// Load env vars
dotenv.config()

// Connect to database
connectDB()

// Route files
const posts = require('./routes/postRoutes')

const app = express()

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build')) // serve the static react app
  app.get(/^\/(?!api).*/, (req, res) => {
    // don't serve api routes to react app
    res.sendFile(path.join(__dirname, './frontend/build/index.html'))
  })
  console.log('Serving React App...')
}

// Body parser
app.use(express.json())

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

// Mount routers
app.use('/api/v1/posts', posts)

const PORT = process.env.PORT || 5000

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red)
  // Close server & exit process
  server.close(() => process.exit(1))
})
