import React from 'react';
import { SignIn } from './features/auth/SignIn';
import { SignUp } from './features/auth/SignUp';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Admin from "./features/admin";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          {/*<Route path="/sign-up" element={<SignUp />} />*/}
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
