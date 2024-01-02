import "./App.css";
import { CounterTwo } from "./components/counter-two/CounterTwo";
import { MuiMode } from "./components/mui/MuiMode";
import { useCounter } from "./hooks/use-counter/useCounter";
import { AppProviders } from "./providers/AppProviders";

function App() {
  const {increment} = useCounter();
  return (
    <div className="App">
      <AppProviders>
        {/* <Counter /> */}
        <CounterTwo count={1} handleIncrement={() => increment} />
        <MuiMode />
      </AppProviders>
    </div>
  );
}

export default App;
