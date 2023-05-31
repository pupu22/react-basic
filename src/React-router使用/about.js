import { useParams } from "react-router-dom"

function About(){
    // let [params] = useSearchParams()
    // let id = params.get('id')
    // let name = params.get('name')
    // console.log(params) //是一个对象，包含了许多方法
    let params = useParams()
    return (
        <div>about id: {params.id}</div>
    )
}
export default About