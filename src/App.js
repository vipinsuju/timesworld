import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";
import Homepage from './components/Homepage';
import SignupPage from './components/Signuppage';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/Home" element={<Homepage/>}>
          </Route>
          <Route path="/" exact element={<SignupPage/>}>
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
