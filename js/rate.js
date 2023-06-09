window.onload=function()
{
	document.querySelector("#init_invest").value = "1.0";
	document.querySelector("#profit_rate").value = "0.14207";
	document.querySelector("#iteration").value = "52"; // 52 weeks in a year.

}

function CalcProfitRate()
{
	let invest 		= parseFloat(document.querySelector("#init_invest").value);
	let rate   		= parseFloat(document.querySelector("#profit_rate").value);
	let iteration	= parseInt(document.querySelector("#iteration").value,10);
	let result = "";
	let ftemp = 1.0;
	
	for (let i=0; i <iteration; i++)
	{
		invest += invest*rate;
		ftemp = Math.round(invest*10000)/10000;
		result += `${i+1}th iter: ${ftemp}\n`;
	}
	document.querySelector("#result").innerHTML = result;
}
