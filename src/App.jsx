import Routes from "./routes/index.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import AuthProvider from "./contexts/auth/AuthProvider.jsx";

function App() {
  return (
      <AuthProvider>
        <Navbar />
        <Routes />
      </AuthProvider>
  );
}

export default App;
