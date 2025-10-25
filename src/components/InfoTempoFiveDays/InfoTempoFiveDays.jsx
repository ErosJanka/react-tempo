import "./InfoTempoFiveDays.css";

function InfoTempoFiveDays({ weatherFiveDays }) {
  console.log(weatherFiveDays);

  const dailyForecast = {};

  for (let forecast of weatherFiveDays.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();

    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast;
    } //faz com que não tenha 40 previsoes do mesmo dia em horarios diferentes. Separa por dia
  }

  const nextFiveDaysForecast = Object.values(dailyForecast).slice(1, 6); //caso pule um dia tirar o slice

  function convertDate(date) {
    return new Date(date.dt * 1000).toLocaleDateString("pt-br", {
      weekday: "long",
      day: "2-digit",
    });
  }

  return (
    <div className="weather-container">
      <h3>Previsão Próximos 5 Dias</h3>

      <div className="weather-list">
        {nextFiveDaysForecast.map((forecast) => (
          <div key={forecast.dt} className="weather-iten">
            <p className="forecast-day">{convertDate(forecast)}</p>
            <img
              src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
            />
            <p className="forecast-description">
              {forecast.weather[0].description}
            </p>
            <p>
              {Math.round(forecast.main.temp_min)}°C min /{" "}
              {Math.round(forecast.main.temp_max)}°C max
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoTempoFiveDays;
