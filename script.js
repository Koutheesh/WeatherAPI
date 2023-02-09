function displayresult() {
    var city = document.getElementById("city").value;
    var apikey='535b433bb4e48f6347b0bfae40562ecb';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='
     + city + '&appid='+apikey+'&units=metric')
        .then(response => response.json())
        .then(data => {
            var t = data['main']['temp']
            document.getElementById("output").innerHTML = t;
        })
}
