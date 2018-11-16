import React from 'react'
import classNames from 'classnames'
import { getMenuItemImg } from './../helpers'

export const Menu = ({ items, active, setActiveMenuItem }) =>
  <section className="menu">
    <ul className="container">
      {items.map(item =>
        <li key={item}>
          <a
            href="#"
            className={
              classNames({
                "menu__item": true,
                "active": item === active
              })
            }
            id={item}
            onClick={() => setActiveMenuItem(item)}
          >
            <span
              className="menu__item__image"
              style={{
                'backgroundImage': getMenuItemImg(item, item === active)
              }}
            />
            <span className="menu__item__text">{item}</span>
          </a>
        </li>
      )}
    </ul>
  </section>
