export const filteredEntityByViewIntervals = (entity) => {
  const currentDate = new Date();
  const entityByDay = entity.filter((entity) => {
    const filterByDays = entity.viewIntervals.filter((interval) => {
      const dayOfWeekEntity = interval.dayOfWeek;
      const currentDay = currentDate.getDay();
      if (dayOfWeekEntity === 'ANY') return true;
      if (dayOfWeekEntity === 'MONDAY' && currentDay === 1) return true;
      if (dayOfWeekEntity === 'TUESDAY' && currentDay === 2) return true;
      if (dayOfWeekEntity === 'WEDNESDAY' && currentDay === 3) return true;
      if (dayOfWeekEntity === 'THURSDAY' && currentDay === 4) return true;
      if (dayOfWeekEntity === 'FRIDAY' && currentDay === 5) return true;
      if (dayOfWeekEntity === 'SATURDAY' && currentDay === 6) return true;
      if (dayOfWeekEntity === 'SUNDAY' && currentDay === 0) return true;
      else return false;
    });
    if (filterByDays.length > 0) return true;
    else return false;
  });
  return entityByDay.filter((entity) => {
    const entityByInterval = entity.viewIntervals.filter((interval) => {
      const begin = interval.begin;
      const end = interval.end;

      const msToHours = (ms) => {
        return Math.floor(ms / 3600000);
      };

      const msToMinutes = (ms) => {
        return (ms / 60000) % 60;
      };

      const hoursAndMinutesToDate = (hours, minutes) => {
        const currentDate = new Date();
        return new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate(),
          hours,
          minutes
        );
      };

      const currentDate = new Date();
      const beginDate = hoursAndMinutesToDate(
        msToHours(begin),
        msToMinutes(begin)
      );
      const endDate = hoursAndMinutesToDate(msToHours(end), msToMinutes(end));
      return currentDate >= beginDate && currentDate <= endDate;
    });
    if (entityByInterval.length > 0) return true;
  });
};
