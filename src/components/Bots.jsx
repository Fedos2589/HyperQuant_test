import React from 'react'
import classNames from 'classnames'

export const Bots = ({ data, descriptions, active, period, setActiveBot }) =>
  <section className="bots">
    <ul className="container">
      {data.map((bot, i) =>
        <li key={bot.name}>
          <a
            className={
              classNames({
                "bot": true,
                "active": bot.name === active 
              })
            }
            id={bot.name}
            href="#"
            onClick={() => setActiveBot(bot.name)}
          >
            <span
              className="bot__image"
              style={{ 'backgroundImage': `url(${require(`./../img/bots/${bot.name}.svg`)})` }}
            />
            <span className="bot__description">{descriptions[i]}</span>
            <span
              className={
                classNames({
                  "bot__value": true,
                  "negative": Math.sign(bot[period]) === -1
                })
              }
            >
              {bot[period]}
            </span>
          </a>
        </li>
      )}
    </ul>
  </section>
  