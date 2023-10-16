export default function CalAssign() {
  const nD = new Date();
  nD.setDate(1);
  const dayOfWeek = nD.getDay();
  const lastDay = new Date();
  let y = lastDay.getMonth();
  y++;
  lastDay.setMonth(y);
  lastDay.setDate(0);
  let z = lastDay.getDate();
  let x = dayOfWeek + z;
  let a = 0;

  const dateAssign = [];

  for (let i = dayOfWeek; i < x; i++) {
    a++;
    nD.setDate(a);
    const x1 = i.toString();
    const x2 = nD.toDateString();
    const datAss = {
      id: x1,
      date: x2
    }; 
  dateAssign.push(datAss);
  };
  return dateAssign;
};