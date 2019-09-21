import { DateTime } from 'luxon';
import { getHolidays } from 'public-holidays';
// public holidays for US in English
const options = { country: 'us', lang: 'en' };
const isHoliday = (holidays, day) => {
  const holidayDay = new Date(day.getFullYear(), day.getMonth(), day.getDate());
  return holidays.find((holiday) => {
    const time1 = holiday.date.getTime();
    const time2 = holidayDay.getTime();
    return time1 === time2;
  });
};
const getBusinessDaysWithDelay = async (startDate, delay) => {
  const holidays = await getHolidays(options);
  let totalDays = delay;
  let holidaysDays = 0;
  let weekendDays = 0;
  let businessDate = startDate;
  for (let day = 1; day <= totalDays; day += 1) {
    const dayofWeek = businessDate.getDay();
    const holiday = isHoliday(holidays, businessDate);
    if (holiday && dayofWeek !== 6 && dayofWeek !== 0) {
      holidaysDays += 1;
      totalDays += 1;
    }
    if (dayofWeek === 6 || dayofWeek === 0) { // if the day is weekend
      weekendDays += 1;
      totalDays += 1;
    }

    businessDate = DateTime.fromJSDate(businessDate).plus({ days: 1 }).toJSDate();
  }

  return {
    totalDays,
    holidaysDays,
    weekendDays,
    businessDate: DateTime.fromJSDate(businessDate).minus({ days: 1 }).toJSDate()
  };
};

export default getBusinessDaysWithDelay;
