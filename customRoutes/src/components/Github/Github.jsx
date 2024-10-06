
import {  useLoaderData } from 'react-router-dom';


function Github() {

    const data=useLoaderData()
    // const [data,setData]=useState("");
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/Shivrajsoni")
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
      GITHUB FOLLOWERS :{data.followers}
      <img src={data.avatar_url} alt ="Git Picture" height={300} width={300}/>
      <h1> No of Repository :{data.repos}</h1>
    </div>
  )
}

export default Github

export  const GithubInfo=async()=>{
    const response =await fetch("https://api.github.com/users/Shivrajsoni");
    return response.json();

}