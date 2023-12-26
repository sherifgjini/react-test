import "./App.css";
import { Application } from "./components/application/Application";
import { Skills } from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <p>learn react</p>
      <Application />
      <Skills skills={["1", "2", "3"]} />
    </div>
  );
}

export default App;
