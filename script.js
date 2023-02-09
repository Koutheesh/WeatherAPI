var cityname=document.querySelector("#city");
var btn=document.querySelector("#btn");
var output=document.querySelector("#output");

btn.addEventListener('click',displayresult);


function displayresult(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+
cityname.value+'&appid=535b433bb4e48f6347b0bfae40562ecb')
  .then(response=>response.json())
  .then(data=>{
   const temp= data['main']['temp']
   output.innerHTML=temp;
  })
}
