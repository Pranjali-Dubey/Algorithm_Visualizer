import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import { Home } from './Components/Home'; // Adjust if the file path is different


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // For the icons

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route, which points to the homepage */}
        <Route path="/" element={<Home />} /> 

        {/* Additional routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
