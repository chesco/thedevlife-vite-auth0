import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import Home from "./pages/HomePage";
import { CallbackPage } from "./components/CallbackPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth0 } from "@auth0/auth0-react";
import { setToken } from "./store/appSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {

  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();

  async function getToken() {
    if (isAuthenticated) {
      const token = await getAccessTokenSilently();
      dispatch(setToken(token));
    } else {
      dispatch(setToken(""));
    }
  }

  useEffect(() => {
    getToken();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} auth={isAuthenticated} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route path="/home" element={<Home />} auth={isAuthenticated} />
          <Route path="/callback" element={<CallbackPage />} />
        </Routes>
      </Router>
  );
}

export default App;
