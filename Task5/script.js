function getWeather() {
    const locationInput = document.getElementById('locationInput');
    const weatherInfo = document.getElementById('weatherInfo');
    const img = document.getElementsByClassName("weather-img");

    const apiKey = '6e2fc3a86bfa43596c36230df005b1f2';
    const location = locationInput.value;

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const { name, main, weather } = data;
            const temperature = main.temp;
            const description = weather[0].description;
            
            // if(temperature >= 30){
            //     img.onload = function() {
            //         img.src =  "https://images.unsplash.com/photo-1646316295393-e759ac8088a4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHN1biUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
            //     }
            //     console.log("30");
            //     img.src = "https://images.unsplash.com/photo-1646316295393-e759ac8088a4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHN1biUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
            // }
            // else if(temperature < 30 && temperature >= 15){
            //     img.onload = function() {
            //         img.src =  "https://images.unsplash.com/photo-1516951179008-71f19d61c133?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHN1biUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
            //     }
            //     console.log("20");
            //     img.src = "https://images.unsplash.com/photo-1516951179008-71f19d61c133?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHN1biUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
            // }
            // else if(temperature < 15){                
            //     img.onload = function() {
            //         img.src =  "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
            //     }
            //     console.log("10");
            //     img.src = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
            // }
            
            const weatherHTML = `
                <h2>${name}</h2>
                <p>Temperature: ${temperature} °C</p>
                <p>Condition: ${description}</p>
            `;

            
            weatherInfo.innerHTML = weatherHTML;

        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = '<p>Failed to fetch weather data. Please try again.</p>';
        });

}
