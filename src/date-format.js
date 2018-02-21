/* 날짜, 시간 포맷 */

// 00 형식으로 변환
const $fillZero = (value) => {
  return 2 - value.toString().length === 0 ? value : '0' + value;
}

// HH:mm
const $getTime = (date) => {
  const $date = date?date:new Date();
  var hour = $fillZero($date.getHours());
  var min = $fillZero($date.getMinutes());
  var sec = $fillZero($date.getSeconds());
  return `${hour}:${min}:${sec}`;
}

// ddd, dd MMM
const $getDate = (date) => {
  const $month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const $week = ['Sun', 'Mon', 'Thu', 'Wed', 'Thu', 'Fri', 'Sat'];
  const $date = date?date:new Date();

  var dow = $week[$date.getDay()];
  var month = $month[$date.getMonth()];
  var day = $date.getDate();
  return `${dow}, ${day} ${month}`;
}

// AM, PM
const $getAp = (date) => {
  const $date = date?date:new Date();
  return $date.getHours() < 12 ? 'AM' : 'PM';
}

// HH:mm a/p
const $getSimple = (date) => {
  const $date = date?date:new Date();
  var hour = $fillZero($date.getHours());
  var min = $fillZero($date.getMinutes());
  var ap = $date.getHours() < 12 ? 'AM' : 'PM';
  return `${hour}:${min} ${ap}`;
}

export default {
  'getTime': $getTime,
  'getDate': $getDate,
  'getAp': $getAp,
  'getSimple': $getSimple
}