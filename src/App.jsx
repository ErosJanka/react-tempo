import { useState, useRef } from "react";
import axios from "axios";
import "./App.css";
import InfoTempo from "./components/infoTempo/infoTempo";
import InfoTempoFiveDays from "./components/InfoTempoFiveDays/InfoTempoFiveDays";

function App() {
  const [weather, setWeather] = useState();
  const [weatherFiveDays, setWeatherFiveDays] = useState();
  const inputRef = useRef();

  async function searchCity() {
    console.log(inputRef.current.value);
    const city = inputRef.current.value;
    const key = "88ff8fe2dd3fca0f2889b234c3e4b0ec";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const urlFiveDays = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const dados = await axios.get(url);
    const dadosFiveDays = await axios.get(urlFiveDays);

    setWeatherFiveDays(dadosFiveDays.data)
    setWeather(dados.data); //busca os dados apenas em "data"
  }

  return (
    <div className="container">
      <h1>Previsão do tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
      <button onClick={searchCity}>Buscar</button>

      <InfoTempo weather={weather} />
      {/* weather && <InfoTempo weather={weather} />  é basicamente um if-else. assim não precisa colocar como fiz no componente */}

      {weatherFiveDays && <InfoTempoFiveDays weatherFiveDays={weatherFiveDays} />}
    </div>
  );
}

export default App;
