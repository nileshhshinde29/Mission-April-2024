import { Suspense, createContext, useContext, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import { authenticationService } from "./services/auth.service"
import { Card } from '@mui/material';
import Sidebar from './components/Sidebar';
import AddMoment from './components/AddMoment';
import GlimpseOfPast from './components/GlimpseOfPast';

// Create a context to manage authentication
export const AuthContext = createContext();

// Create a provider to manage the authentication state
const AuthProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('AuthenticationToken'));
  const navigate = useNavigate()

  const login = (token) => {
    // In a real scenario, you would perform actual authentication here
    setIsLoggedIn(token);
    localStorage.setItem('AuthenticationToken', token);
    navigate('/home')
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('AuthenticationToken', 'false');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook to use the authentication context
const useAuth = () => {
  return useContext(AuthContext);
};

function App() {
  return (
    <Suspense >
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<AuthRoute><Login /></AuthRoute>} />
            <Route path="/register" element={<AuthRoute><Register /></AuthRoute>} />
            <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/add-moment" element={<PrivateRoute><AddMoment /></PrivateRoute>} />
            <Route path="/edit-moment/:id" element={<PrivateRoute><AddMoment /></PrivateRoute>} />
            <Route path="/glimpse-of-past" element={<PrivateRoute><GlimpseOfPast /></PrivateRoute>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </Suspense>
  );
}

// A custom wrapper for private routes
const PrivateRoute = ({ children }) => {

  const { isLoggedIn } = useAuth();

  if (!authenticationService.currentUserValue) {
    return <Navigate to="/" />;
  }

  return <Sidebar children={children}>{children}</Sidebar>;
};
const AuthRoute = ({ children }) => {

  const { isLoggedIn } = useAuth();

  if (authenticationService.currentUserValue) {
    return <Navigate to="/home" />;
  }

  return children;
};

export default App;
