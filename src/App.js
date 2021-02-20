import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Footer from "./Footer";
import Form from "./Form";
import CurrentWeather from "./CurrentWeather";

function App() {
  return (
    <div>
      <div className="containerWrapper">
        <div className="bigContainer">
          <Form />
          <CurrentWeather />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
