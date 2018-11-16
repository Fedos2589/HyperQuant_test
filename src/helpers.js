import moment from 'moment'

export const formatPeriodValue = (value) => value.toLowerCase().replace(' ', '_')

export const getMenuItemImg = (item, active) =>
  active
    ? `url(${require(`./img/menu/${item.toLowerCase().replace(' ', '')}-white.svg`)})`
    : `url(${require(`./img/menu/${item.toLowerCase().replace(' ', '')}.svg`)})`

export const dates = (days) => {
  let dates = []

  for (let i = days - 1; i >= 0; i--) {
    dates.push(moment().subtract(i, 'days').format('DD.MM'))
  }

  return dates
}
