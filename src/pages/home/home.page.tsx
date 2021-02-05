import React from 'react';
import { Post } from '../../common/interface/post.interface';
import PostsGrid from '../../components/posts-grid/posts-grid.component';



const Home: React.FC = () => {
    const posts:Post[] =[
        {
            id:'123',
            title:'dummy',
            body:'body'
        }
    ];
    return (
        <div className="home">
            <PostsGrid posts={posts}/>
        </div>
    );
}

export default Home;