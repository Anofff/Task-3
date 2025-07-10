import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import AuthLayout from '../layouts/AuthLayout.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes; 