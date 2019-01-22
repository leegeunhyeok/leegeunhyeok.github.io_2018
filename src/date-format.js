/* 날짜, 시간 포맷 */

// 00 형식으로 변환
const appendZero = (value) => {
  return 2 - value.toString().length === 0 ? value : '0' + value
}

// HH:mm:ss
const getTime = (date, lang) => {
  const DATE = date || new Date()

  if (lang === 'en') {
    return `${appendZero(DATE.getHours())}:${appendZero(DATE.getMinutes())}:${appendZero(DATE.getSeconds())}`
  } else {
    const hour = DATE.getHours()
    return `${hour < 12 ? hour : hour - 12}:${appendZero(DATE.getMinutes())}:${appendZero(DATE.getSeconds())}`
  }
}

// ddd, dd MMM
const getDate = (date, lang) => {
  const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const WEEK_EN = ['Sun', 'Mon', 'Thu', 'Wed', 'Thu', 'Fri', 'Sat']
  const WEEK_KR = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
  const DATE = date || new Date()

  if (lang === 'en') {
    return `${WEEK_EN[DATE.getDay()]}, ${DATE.getDate()} ${MONTH[DATE.getMonth()]}`
  } else {
    return `${DATE.getMonth() + 1 + '월'} ${DATE.getDate() + '일'} ${WEEK_KR[DATE.getDay()]}`
  }
}

// AM, PM
const getAp = (date, lang) => {
  const DATE = date || new Date()
  if (lang === 'en') {
    return DATE.getHours() < 12 ? 'AM' : 'PM'
  } else {
    return DATE.getHours() < 12 ? '오전' : '오후'
  }
}

// HH:mm a/p
const getSimple = (date, lang) => {
  const DATE = date || new Date()
  var hour = DATE.getHours()
  var min = appendZero(DATE.getMinutes())
  if (lang === 'en') {
    return `${appendZero(hour)}:${min} ${hour < 12 ? 'AM' : 'PM'}`
  } else {
    return `${hour < 12 ? '오전' : '오후'} ${hour < 12 ? hour : hour - 12}:${min}`
  }
}

export default {
  getTime,
  getDate,
  getAp,
  getSimple
}
