
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/common/header/Header';
import OpenForm from './components/hooks/useForm';
import Home from './pages/Home/Home';


function App() {



  return (
    <HashRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form-filling' element={<OpenForm />} />
        <Route path='*' element={<p>Not found</p>} />
      </Routes>
    </HashRouter>

  );
}

export default App;
