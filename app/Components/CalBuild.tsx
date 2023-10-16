export default function CalBuild() {
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



    for (let i = dayOfWeek; i < x; i++) {
      a++;
      const x1 = i.toString();
      const parent = document.getElementById(x1);
      const child = parent?.querySelector(".node-0");
      child.textContent = a.toString();
    };
};