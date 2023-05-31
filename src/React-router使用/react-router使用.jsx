import Home from "./Home";
import About from "./about";
import Login from "./Login";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App(){
  return (
    <BrowserRouter>
      <Link to="/">首页</Link>
      <Link to="/about">关于</Link>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about/:id" element={<About />}></Route>
        <Route path="/login" element = {<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App