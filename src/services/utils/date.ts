import { format, subHours } from 'date-fns';
import { ptBR } from 'date-fns/locale'

const transformDate = (date: string): Date => new Date(date);

const formatWithLocale = (date: Date, pattern: string): string => {
  return format(date, pattern, {locale: ptBR,});
};

const formatWithBRTimeZone = (date: Date, pattern: string): string => {
  const localDateTime = subHours(date,3);
  return format(localDateTime, pattern);
}

export const getDayOfWeek = (date: string): string => {
  const dateFormatted = transformDate(date);
  return formatWithLocale(dateFormatted, 'EEEE');
};

export const getDayOfMonth = (date: string): string => {
  const dateFormatted = transformDate(date);
  return formatWithLocale(dateFormatted, 'd');
};

export const getDayOfYear = (date: string): string => {
  const dateFormatted = transformDate(date);
  return formatWithLocale(dateFormatted, 'LLL');
};

export const getFormattedDate = (date: Date): string => {
  return format(date, 'yyyy-MM-dd');
};

export const getFormattedDateForUsers = (date: Date): string => {
  return format(date, 'dd/MM/yyyy');
};

export const getFormattedDateWithTime = (date: string): string => {
  const stringAsDate = transformDate(date.substring(0,19));
  return formatWithBRTimeZone(stringAsDate, 'dd/MM/yy HH:mm');
};



