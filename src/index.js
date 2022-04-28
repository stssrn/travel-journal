import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import entryData from './data'
import './styles/style.css'

// Requirements
//
// - Data array in a seperate .js file
//   - Title
//   - Location
//   - Google Maps link
//   - Start date
//   - End date,
// - Use .map() and props
// - Styled & polished
// TODO: integrate Cheltenham font

ReactDOM.render(
    <App entryData={entryData}/>,
    document.getElementById('root')
);