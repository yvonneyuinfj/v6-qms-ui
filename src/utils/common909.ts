import dayjs from 'dayjs';

/**
 * 获取最近的整点或半点
 * @author 于小耘
 * @date 2024/03/13
 */
export const getNearestHalfOrHour = () => {
  const now = dayjs();
  // 如果是半点或整点，直接返回
  if(now.minute()===0||now.minute()===30){
    return now;
  }
  return now.add(1,'hour').startOf('hour');
};

/**
 * 日期不可选范围：当前日期之前的日期不可选
 * @param {当前时间} current
 * @return boolean
 * @author 于小耘
 * @date 2024/03/13
 */
export const disabledBeforeToday = (current: dayjs.Dayjs) => {
  return current && current < dayjs().startOf('day');
};