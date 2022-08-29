
import './App.css';
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import SideBar from './common/sideNav-Configuration/sidebar';
import RouterConfig from './routes/routes';
import React from 'react';
function App() {
  return (
    <div className="App">
      <SideBar />
      <section className="home">
        <RouterConfig />
      </section>
    </div>
  );
}

export default App;
