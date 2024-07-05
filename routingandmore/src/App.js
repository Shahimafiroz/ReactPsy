
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import PageNotFound from './components/PageNotFound';
import Filter from './components/Filter';
import Contact from './components/NestedRoutingContact';
import Github from './components/contact/Github';
import Insta from './components/contact/Instagram';
import Twit from './components/contact/Twitter';
import Login from './components/Login';
import Protected from './components/Protected';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Protected Comp={Home} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/user/' element={<Users />} />
          <Route path='/user/:nm' element={<Users />} />
          <Route path='/filter' element={<Filter />} />
          <Route path='/*' element={<PageNotFound />} />
          <Route path='/contact/' element={<Contact />}>
            <Route path='git' element={<Github />} />
            <Route path='insta' element={<Insta />} />
            <Route path='twt' element={<Twit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
