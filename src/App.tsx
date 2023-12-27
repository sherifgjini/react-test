import "./App.css";
import { MuiMode } from "./components/mui/MuiMode";
import { AppProviders } from "./providers/AppProviders";

function App() {
  return (
    <div className="App">
      <AppProviders>
        {/* <Counter /> */}
        <MuiMode />
      </AppProviders>
    </div>
  );
}

export default App;
