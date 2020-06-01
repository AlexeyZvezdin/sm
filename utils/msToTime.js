import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

export function secondsToHours(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor((seconds % 3600) % 60);

  const hDisplay = h > 0 ? h + ':' : '';
  const mDisplay = (m > 0 ? (m < 10 ? '0' : '') + m : '00') + ':';
  const sDisplay = s > 0 ? (s < 10 ? '0' : '') + s : '00';
  return hDisplay + mDisplay + sDisplay;
}

export const toLocalFormatString = (date) => {
  if (date === 0 || date == null) return '—';
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  return format(date, 'dd MMMM yyyy', {
    locale: ru,
  });
};

export const toLocalBaseFormatString = (date) => {
  if (date === 0 || date == null) return '—';
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  return format(date, 'dd MMMM yyyy', {
    locale: ru,
  });
};

export const msToTime = (duration) => {
  let hours = Math.floor(duration / 3600000);
  let minutes = (duration % 3600000) / 60000;
  if (hours > 24) {
    hours -= 24;
  }
  if (hours === 24) hours = '0';
  if (minutes < 10) minutes = `0${minutes}`;
  if (hours < 10) hours = `0${hours}`;
  if (minutes === 0) minutes = '00';
  return `${hours}:${minutes}`;
};
