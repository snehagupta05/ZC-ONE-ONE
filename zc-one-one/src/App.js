// import logo from './logo.svg';
import {Routes, Route} from 'react-router-dom';
// import './App.css';
import HomePage from './pages/Home'
import RoomPage from './pages/Room';

function App() {
  return (
     <Routes>
        <Route path='/' element={<HomePage /> } />
        <Route path='/room/:roomId' element={<RoomPage /> } />


     </Routes>
  );
}

export default App;









// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
   
//   );
// }

// export default App;
