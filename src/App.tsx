
import { useState } from 'react';
import './App.css';
import OpenForm from './components/hooks/useForm';



function App() {

  const [isComponentRendered, setComponentRendered] = useState<boolean>(false);

  const renderComponent = () => {
    setComponentRendered(true);
  };

  return (
    <div className="App w-full min-h-screen h-full flex items-center justify-center"> 
    {isComponentRendered ? 
    <OpenForm /> :  <button className='p-4 bg-gray-700 text-white' onClick={renderComponent}>Create Note</button>}
    {/* <Card /> */}
    </div>
  );
}

export default App;
