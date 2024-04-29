import { Routes, Route } from 'react-router-dom';
import Layout from './assets/pages/Layout'
import Home from './assets/pages/Home'
import Shop from './assets/pages/Shop'
import Contact from './assets/pages/Contact'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="/shop" element={ <Shop />} />
          <Route path="/contact" element={ <Contact />} />
        </Route>
      </Routes>
    </>
  );
}
