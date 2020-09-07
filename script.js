const api_key = '38a7c1e1436224ae50b6dcea7bf2249a';

getWeatherData = () => {
    var userInput = document.querySelector('#input').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${api_key}`).then(response => {
        if(response.ok) {
            return response.json();
        }
        throw new Error('Request failed!');
    }, networkError => console.log(networkError.message)
    ).then(jsonResponse => {
        displayData(jsonResponse);
    });
};

displayData = (response) => {
    document.getElementById('location').innerText = response.name;
    document.getElementById('main').innerText = response.weather[0].main;
    document.getElementById('temp').innerText = response.main.temp;
    document.getElementById('max_temp').innerText = response.main.temp_max;
    document.getElementById('min_temp').innerText = response.main.temp_min;
    
};

handleSearchByKey = (e) => {
    if(e.key === 'Enter') {
        getWeatherData();
    }
}

setInterval(() => {
    let date = new Date;
    document.getElementById('date').innerText = date;
}, 1000);

document.getElementById('search').addEventListener('click', getWeatherData);
document.getElementById('input').addEventListener('keyup', handleSearchByKey);



