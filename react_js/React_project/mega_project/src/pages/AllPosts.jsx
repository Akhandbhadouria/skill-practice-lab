import React, {useState, useEffect} from 'react'
import { Container,PostCard } from '../components/index';
import service from '../appwrite/configration';
import { useSelector } from 'react-redux';
import { Query } from 'appwrite';

function AllPosts() {
    const [posts, setPosts] = useState([])
    const userData = useSelector((state) => state.auth.userData);
    
    useEffect(() => {
        if (userData) {
            // Filter posts by current user
            service.get_posts([Query.equal("userid", userData.$id)]).then((posts) => {
                if (posts) {
                    setPosts(posts.documents)
                }
            })
        }
    }, [userData])
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts