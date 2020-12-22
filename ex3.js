let data = new Date();
var hr = data.getHours();
var min = data.getMinutes();
var sec = data.getSeconds();
var day = data.getDate();
var month = data.getMonth() + 1;
var year = data.getFullYear();

console.log(hr+":"+min+":"+sec+ " | " + day +"/" + month +"/"+ year);