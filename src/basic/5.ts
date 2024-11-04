enum daysOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
const isWeekend = (day: daysOfWeek): boolean => {
  return day === daysOfWeek.Saturday || day === daysOfWeek.Sunday;
};
