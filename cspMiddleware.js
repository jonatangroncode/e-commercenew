const express = require('express')
const helmet = require('helmet')
const app = express()

// Use helmet to set various security-related headers
app.use(helmet())

// Set Content Security Policy (CSP) headers
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      frameSrc: [
        "'self'",
        'https://www.youtube.com/',
        'https://w.soundcloud.com/',
        'https://giphy.com/',
      ], // Tillåt inbäddade resurser från Giphy
      imgSrc: [
        "'self'",
        'https://*.stripe.com',
        'https://raw.githubusercontent.com',
        'https://media.giphy.com',
      ], // Tillåt bilder från Stripe och Giphy
      // Add other directives as needed
    },
  }),
)

module.exports = app
