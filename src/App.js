import { Route, Routes } from 'react-router-dom';
import './App.css';

import Blogs from './components/Blogs/Blogs';
import Deshboard from './components/Deshboard/Deshboard';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}/>
        <Route path='/deshboard' element={<Deshboard></Deshboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
