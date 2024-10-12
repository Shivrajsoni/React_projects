import React,{useState,useEffect} from 'react'
import service from '../appwrite/config'
import  {container,PostCard} from '../components'


function Home() {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        service.getPosts().then((posts) =>{
            if(posts){
                setPosts(posts.documents)
            }
        })

    },[])
    if(posts.length===0){
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <container>
                    <div className='flex flex-wrap'>
                        <h1 className='text-3xl font-bold text-gray-800'>LOGIN TO READ POSTS</h1>
                    </div>
                </container>
            </div>

        )
    }

  return (
    <div className='w-full py-8 '>
    <container>
        <div className='flex flex-wrap'>
            {posts.map((post)=>(
                <div key= {post.$id} className='p-2 w-1/4'>
                    <PostCard {...post} />
                </div>
            ))}
        </div>
    </container>
      
    </div>
  )
}

export default Home
