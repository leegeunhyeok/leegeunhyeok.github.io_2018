/* 날짜, 시간 포맷 */

// 00 형식으로 변환
const $fillZero = (value) => {
  return 2 - value.toString().length === 0 ? value : '0' + value;
}

// HH:mm:ss
const $getTime = (date, lang) => {
  const $date = date?date:new Date();

  if(lang === 'en') {
    return `${$fillZero($date.getHours())}:${$fillZero($date.getMinutes())}:${$fillZero($date.getSeconds())}`;
  } else {
    let hour = $date.getHours();
    return `${hour < 12 ? hour:hour-12}:${$fillZero($date.getMinutes())}:${$fillZero($date.getSeconds())}`;
  }
}

// ddd, dd MMM
const $getDate = (date, lang) => {
  const $month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const $week_en = ['Sun', 'Mon', 'Thu', 'Wed', 'Thu', 'Fri', 'Sat'];
  const $week_kr = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const $date = date?date:new Date();

  if(lang === 'en') {
    return `${$week_en[$date.getDay()]}, ${$date.getDate()} ${$month[$date.getMonth()]}`;
  } else {
    return `${$date.getMonth()+1 + '월'} ${$date.getDate() + '일'} ${$week_kr[$date.getDay()]}`;
  }
}

// AM, PM
const $getAp = (date, lang) => {
  const $date = date?date:new Date();
  if(lang === 'en') {
    return $date.getHours() < 12 ? 'AM' : 'PM';
  } else {
    return $date.getHours() < 12 ? '오전' : '오후';
  }
}

// HH:mm a/p
const $getSimple = (date, lang) => {
  const $date = date?date:new Date();
  var hour = $date.getHours();
  var min = $fillZero($date.getMinutes());
  if(lang === 'en') {
    return `${$fillZero(hour)}:${min} ${hour < 12 ? 'AM':'PM'}`;
  } else {
    return `${hour < 12 ? '오전':'오후'} ${hour < 12 ? hour:hour-12}:${min}`;
  }
}

export default {
  'getTime': $getTime,
  'getDate': $getDate,
  'getAp': $getAp,
  'getSimple': $getSimple
}