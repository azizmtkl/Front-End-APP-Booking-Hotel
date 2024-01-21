import './App.css';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Hotel from './Pages/hotel/Hotel';
import List from './Pages/list/list';


function App() {
  return (
    <BrowserRouter>
    


    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<List />} />
      <Route path='/hotel/:id' element = {<Hotel />} />


    </Routes>
    </BrowserRouter>
  );
}

export default App;
