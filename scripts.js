//your code here
setInterval(() =>{
    h = new Date ();
    hTime = h.getHours();
    minTime = h.getMinutes();
    sTime = h.getSeconds();
    hRotetaion = 30*hTime + minTime/2;
    mRotetaion = 6*minTime;
    sRotetaion = 6*sTime;

    handI.style.transform =  `rotate(${hRotetaion}deg)`;
    handII.style.transform = `rotate(${mRotetaion}deg)` ;
    handIII.style.transform = `rotate(${sRotetaion}deg)` ;
}, 1000);