import { RoutesApp } from './Routes/RoutesApp.jsx';
import Navbar from './Components/Navbar.jsx';
import { OnionHater } from './Components/Exercises/OnionHater.jsx';

import { Cardss } from './Components/Cardss.jsx';
function App() {
  return (
    <>
      <Cardss />
      <Navbar />
      <RoutesApp />
      <OnionHater />
    </>
  );
}

export default App;
