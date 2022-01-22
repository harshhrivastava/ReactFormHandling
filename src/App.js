import React from 'react';
import Form from './components/form.jsx';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Display from './components/display.jsx';

function App() {
  return (

    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route exact path='/display' element={<Display />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
