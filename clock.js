const clock = document.querySelector("h2#clock")


function getClock(){
  const date = new Date()
 
  //const d = date.getDate();
  const h = String(date.getHours()).padStart(2,"0");
  const m = String(date.getMinutes()).padStart(2,"0");
  const s = String(date.getSeconds()).padStart(2,"0");


  clock.innerText = `${h}: ${m}: ${s}`
}

function Cl() {
getClock()
setInterval(getClock,1000)
}

Cl();




const count = document.querySelector("h2#count");

function getcount() {
  const date1 = new Date();
  const christ = new Date(date1.getFullYear(), 11, 25);
  const gap = christ - date1;

  const da = String(Math.floor(gap / (1000 * 60 * 60 * 24))).padStart(2, "0");
  const ho = String(Math.floor((gap / (1000 * 60 * 60)) % 24)).padStart(2, "0");
  const mi = String(Math.floor((gap / (1000 * 60)) % 60)).padStart(2, "0");
  const se = String(Math.floor((gap / 1000) % 60)).padStart(2, "0");

  count.innerText = `${da}d ${ho}h ${mi}m ${se}s`;
}

function Co() {
  getcount();
  setInterval(getcount, 1000);
}

Co();