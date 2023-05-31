import { BrowserRouter , useRoutes} from "react-router-dom"
import Layout from "../嵌套路由/Layout"
import Login from "../嵌套路由/Login"
import Article from "../嵌套路由/article"
import Board from "../嵌套路由/Board"
import NotFound from "../嵌套路由/NotFound"

const routeList = [
  {
    path:'/',
    element: <Layout />,
    children: [
      {
        element: <Board/>,
        index: true
      },
      {
        path: 'article',
        element: <Article/>
      },
    ]
  },
  {
    path:'/login',
    element: <Login />,    
  },
  {
    path:'*',
    element: <NotFound />,    
  }  
]
function WrapperRoutes(){
  let element = useRoutes(routeList)
  return element
}
function App(){
  return (
    //一级路由
    <BrowserRouter>
      {/* <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='article' element= {<Article/>}/>
          <Route path='board' element= {<Board/>}/>
        </Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes> */}
      <WrapperRoutes></WrapperRoutes>
    </BrowserRouter>
  )
}
export default App