import { Outlet, Link } from "react-router-dom"
function Layout(){
    return (
        <div>
            layout
            <Link to="/">board</Link>
            <Link to="/article">article</Link>
            <Outlet></Outlet>
        </div>
    )
}
export default Layout