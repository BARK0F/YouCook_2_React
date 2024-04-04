import Routes from "./routes/index";
import Navbar from "./components/layout/Navbar";
import AuthProvider from "./contexts/auth/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes />
    </AuthProvider>
  );
}

export default App;
