import { DataContextWrapper } from "./hooks/useData";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <DataContextWrapper>
      <Dashboard />
    </DataContextWrapper>
  );
}

export default App;
