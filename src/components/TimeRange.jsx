import React from 'react'
import classNames from 'classnames'
import { formatPeriodValue } from './../helpers'

export const TimeRange = ({ periods, active, setPeriod }) =>
  <section className="timerange">
    <span className="title">Time Range:</span>
    <ul>
      {periods.map(period =>
        <li key={period}>
          <a
            href="#"
            className={
              classNames({
                "period": true,
                "active": formatPeriodValue(period) === active
              })
            }
            onClick={() => setPeriod(formatPeriodValue(period))}
          >
            {period}
          </a>
        </li>
      )}
    </ul>
  </section>
 