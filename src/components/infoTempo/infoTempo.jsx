import "./infoTempo.css";

function InfoTempo({ weather }) {
  // Se não houver dados no 'weather' ou na propriedade 'weather.weather',
  // não renderiza nada para evitar o erro.
  if (!weather || !weather.weather) {
    return null;
  }

  return (
    <div className="weather-container">
      <h2>{weather.name}</h2>

      <div className="weather-info">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        />
        {/* weather.weather[0].icon - na variavel weather esta buscando no objeto weather na posição 0 o o bjeto icon. Para saber basta fazer console log(variavel) e ver no F12*/}

        <p className="temperature">{Math.round(weather.main.temp)}°C</p>
        {/* weather.main.temp - basicamente esta buscando dentro da main o objeto temp */}
      </div>

      <p className="description">{weather.weather[0].description}</p>

      <div className="details">
        <p>Sensação térmica: {Math.round(weather.main.feels_like)}°C</p>
        <p>Umidade:{Math.round(weather.main.humidity)}%</p>
        <p>Vento: {Math.round(weather.wind.speed * 3.6)} km/h</p>
      </div>
    </div>
  );
}

export default InfoTempo;
