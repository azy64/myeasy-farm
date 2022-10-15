import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Start from './components/Start';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="detail" element={<Start />} />
      </Routes>
    </div>
  );
}

export default App;
