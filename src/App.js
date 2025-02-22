import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserDetailsPage from "./pages/UserDetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allUsers" element={<HomePage />} />
        <Route path="/user-details/:id" element={<UserDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
