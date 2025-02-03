const hrElem = document.getElementById("hour");
const minElem = document.getElementById("minute");
const secElem = document.getElementById("second");
const ampmElem = document.getElementById("ampm");

function updateclock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if (h > 12) {
        h = h - 12
        ampm="PM"
    }

    h= h<10 ? "0" + h : h;
    m= m<10 ? "0" + m : m;
    s= s<10 ? "0" + s : s;

    hrElem.innerText = h;
    minElem.innerText = m;
    secElem.innerHTML = s;
    ampmElem.innerText = ampm;

    setTimeout(()=>{
        updateclock()
    },1000)
}


updateclock()