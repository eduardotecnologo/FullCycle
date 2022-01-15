export default function convertHourToMinutes(time: string){
  // 08:00
  const [hour,minutes] = time.split(':').map(Number);
  const timeMinutes = (hour * 60) + minutes;

  return timeMinutes;
}