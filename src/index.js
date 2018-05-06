import React from 'react'
import { render } from 'react-dom'
import Table from './container/Table'
import './assets/style.css'

const App = () => (
  <Table />
)

render(<App />, document.getElementById("root"));
