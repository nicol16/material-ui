
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./components/Home";
import Tour from "./components/Tour";
import SearchAppBar from "./components/AppBar";
import Table from './components/table/Table';



function App() {
  return (

        // <BrowserRouter>
        //      <SearchAppBar/>
        //     <Routes>
        //         <Route path="/" element={<Home/>}/>
        //         <Route path="/:id" element={<Tour/>}/>
        //     </Routes>
        // </BrowserRouter>

      <Table/>
  );
}

export default App;
