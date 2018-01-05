var result;
var str;

function showData(num){
	str = document.getElementById("result");
	str.value += num;
}

function clickClear(){
	str = document.getElementById("result");
	str.value = '';
}

function calculate(){
	document.getElementById("result").innerHTML = '';
	result = eval(str.value);
	str.value = result;
}