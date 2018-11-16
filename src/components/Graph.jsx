import React from 'react'
import classNames from 'classnames'
import { dates } from './../helpers'

export const Graph = ({ value, days }) =>
  <section className="graph">
    <span
      className={
        classNames({
          "average-value": true,
          "hide": !value
        })
      }
    >
      {value}%
    </span>
    <div className="timeline">
      <div className="container">
        {dates(days).map(date => <span className="date" key={date}>{date}</span>)}
      </div>
    </div>
  </section>
