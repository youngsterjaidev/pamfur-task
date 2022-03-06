import { Router } from "@reach/router";
import { Home, Land } from "./pages";

export default function App() {
  return (
    <Router>
      <Home path="/home" />
      <Land path="/" />
    </Router>
  );
}
