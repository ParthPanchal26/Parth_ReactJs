import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import CreateName from './Components/CreateName';
import ReadName from './Components/ReadName';
import UpdateName from './Components/UpdateName';
import DeleteName from './Components/DeleteName';


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/create" element={<CreateName />} />
          <Route path="/read" element={<ReadName />} />
          <Route path="/update" element={<UpdateName />} />
          <Route path="/delete" element={<DeleteName />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
