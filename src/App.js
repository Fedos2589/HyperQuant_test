import React, { Component } from 'react'
import './scss/index.scss'
import { Header } from './components/Header'
import { MainInfo } from './components/MainInfo'
import { Graph } from './components/Graph'
import { Bots } from './components/Bots'
import { TimeRange } from './components/TimeRange'
import { Menu } from './components/Menu'
import { data, botsDescriptions, periods, menuItems } from './data.js'

const DAYS_ON_GRAPH = 5

const INITIAL_STATE =
  {
    name: 'yellow_bot',
    period: '24h',
    menu: menuItems[0]
  }

class App extends Component {
  constructor(props){
    super(props)

    this.state = JSON.parse(localStorage.getItem('botsState')) || INITIAL_STATE
  }

  componentDidMount() {
    this.refreshStateInLocalStorage()
    this.refreshDataInLocalStorage()
  }

  componentDidUpdate() {
    this.refreshStateInLocalStorage()
  }

  refreshStateInLocalStorage = () => localStorage.setItem('botsState', JSON.stringify(this.state))

  refreshDataInLocalStorage = () => localStorage.setItem('botsData', JSON.stringify(data))

  findBot = (name) => data.bots.find(bot => bot.name === name)

  setActiveBot = (name) => this.setState({ name: name })

  setPeriod = (period) => this.setState({ period: period })

  setActiveMenuItem = (value) => this.setState({ menu: value })

  render() {
    const {
      trading_capital,
      trading_capital_currency,
      balance,
      on_hold,
      bots
    } = JSON.parse(localStorage.getItem('botsData')) || data
    const { name, period, menu } = this.state

    return (
      <div className="App">
        <Header />
        <MainInfo
          tradingCapital={trading_capital}
          tradingCapitalCurrency={trading_capital_currency}
          balance={balance}
          onHold={on_hold}
        />
        <Graph
          value={this.findBot(name)[period]}
          days={DAYS_ON_GRAPH}
        />
        <Bots
          data={bots}
          descriptions={botsDescriptions}
          active={name}
          period={period}
          setActiveBot={this.setActiveBot}
        />
        <TimeRange
          periods={periods}
          active={period}
          setPeriod={this.setPeriod}
        />
        <Menu
          items={menuItems}
          active={menu}
          setActiveMenuItem={this.setActiveMenuItem}
        />
      </div>
    )
  }
}

export default App
