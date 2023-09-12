// Преобразуем строку с первой буквой в верхний регистр
export function capitalizeFirstLetter(str: string) {
  if (str.length === 0) {
    return str;
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}

//Форматирование отображения времени
export function formatMinutesToTime(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const hoursString = String(hours);
  const minutesString = String(remainingMinutes).padStart(2, "0");

  return `${hoursString}:${minutesString}`;
}
