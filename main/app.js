
// Creating real-time date and time 
let time = document.getElementById("current-time"); 

setInterval(() => { 
    let d = new Date(); 
    time.innerHTML = d.toLocaleTimeString();    
},1000);


// function toggleStatus() {
//     var statusElement = document.getElementById('status');

//     if (statusElement.textContent === 'OFF') {
//       statusElement.textContent = 'ON';
//     } else {
//       statusElement.textContent = 'OFF';
//     }
//   }

function toggleStatus1() {
    var statusElement = document.getElementById('status-1');
    var toggleSwitch = document.getElementById("checkbox-switch-1");

    if (toggleSwitch.checked) {
        statusElement.textContent = 'ON';
    } else {
        statusElement.textContent = 'OFF';
    }
}
function toggleStatus2() {
    var statusElement = document.getElementById('status-2');
    var toggleSwitch = document.getElementById("checkbox-switch-2");

    if (toggleSwitch.checked) {
        statusElement.textContent = 'ON';
    } else {
        statusElement.textContent = 'OFF';
    }
}
function toggleStatus3() {
    var statusElement = document.getElementById('status-3');
    var toggleSwitch = document.getElementById("checkbox-switch-3");

    if (toggleSwitch.checked) {
        statusElement.textContent = 'ON';
    } else {
        statusElement.textContent = 'OFF';
    }
}


// thermostat js 
var cold = document.getElementById("cold");
var hot = document.getElementById("hot");
var btnCold = document.getElementById("btn-cold");
var btnHot = document.getElementById("btn-hot");
var result = document.getElementById("result");
var score = 32;

function up(){if(score < 95 ){score ++;}
  result.innerHTML = score;}

function down(){if(score > 32 ){score --;}
  result.innerHTML = score;}


cold.addEventListener('mouseover',function(){
	btnCold.classList.add('cold-active');
});

cold.addEventListener('mouseout',function(){
	btnCold.classList.remove('cold-active');
});
hot.addEventListener('mouseover',function(){
	btnHot.classList.add('hot-active');
});
hot.addEventListener('mouseout',function(){
	btnHot.classList.remove('hot-active');
});


