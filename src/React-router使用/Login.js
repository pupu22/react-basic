import { useNavigate } from "react-router-dom"

function Login (){
    // useNavigate() 返回的是一个跳转函数
    // 跳转到关于页
    function goAbout() {
        navigate('/about/1001')
    }
    const navigate = useNavigate()
    return (
        <div>
            login
            <button onClick={goAbout}>点击跳转到About页</button>
        </div>
    )
}
export default Login