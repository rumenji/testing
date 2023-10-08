

function countDown(limit) {
    var i = limit;
    var ref = setInterval(() => {
    if (i === 1) {
        clearInterval(ref); 
        console.log("DONE");
    }
    else {console.log(--i);}
    }, 1000);
    }



function randomGame() {
    var i = 0;
    var ref = setInterval(() => {
    random = Math.random();
    if (random > 0.75) {
        clearInterval(ref); 
        console.log(i);
    }
    else {i++;}
    }, 1000);
    }


