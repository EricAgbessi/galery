import { ChakraProvider } from '@chakra-ui/react';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Home from './Pages/home/Home';
import Connexion from './Pages/connexion/Connexion';

function App() {
  return (
      <ChakraProvider >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Connexion />} />
              <Route path='home' element={<Home/>} />
            </Routes>
          </BrowserRouter>
      </ChakraProvider>
  );
}

export default App;
