export function calculateTimeIndicatorPosition(contentWidth: number): number {
  const now = new Date();
  const totalWidth = contentWidth - 80;
  const minutesSinceMidnight = now.getHours() * 60 + now.getMinutes();
  const unitWidth = totalWidth / (24 * 60);
  return minutesSinceMidnight * unitWidth;
}

export const convertToLocalHourMinute = (isoDateStr: string): string => {
  const date = new Date(isoDateStr);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

export function isCurrentTimeInRange(start: string, end: string): string {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const now = new Date();

  if (now < startDate) {
    return 'future';
  }
  if (now > endDate) {
    return 'ended';
  }
  return 'live';
}

type DayInfo = {
  day: string;
  date: string;
};

export function getWeekDaysAroundToday(): DayInfo[] {
  const dates: DayInfo[] = [];
  const today = new Date();

  for (let i = -3; i <= 3; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() + i);
    const dayInfo: DayInfo = {
      day: date.toLocaleDateString('en-GB', {weekday: 'short'}).slice(0, 3),
      date: date
        .toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit'})
        .replace('/', '.'),
    };
    dates.push(dayInfo);
  }
  return dates;
}

export function isCurrentDay(day: number, month: number): boolean {
  const today = new Date();
  return today.getDate() === day && today.getMonth() + 1 === month;
}

export const calculateWidth = (
  start: string,
  end: string,
  timeUnitWidth: number = 100,
): number => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const duration = (endDate.getTime() - startDate.getTime()) / 3600000;
  return duration * timeUnitWidth;
};
