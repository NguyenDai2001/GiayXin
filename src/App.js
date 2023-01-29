
import './styles/App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header/header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            {/* <Route path='/' exact element={<Home />} /> */}
        </Routes>
        <header className="App-header">
            <Header />

        </header>
        <body className='App-body'>

        </body>

        <footer>

        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
