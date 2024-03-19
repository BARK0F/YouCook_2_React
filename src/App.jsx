import Routes from "./routes/index.jsx";
import Navbar from "./components/layout/Navbar.jsx";

function App() {
  return (
    <main className="container">
      <Navbar />
      <Routes />
    </main>
  );
}

export default App;
