import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './Components/Main/Main';
import Note from './Components/Notes/Note';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}>
          <Route path='/note' element={<Note/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
