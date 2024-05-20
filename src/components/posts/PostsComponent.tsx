import React, {FC, useEffect, useState} from 'react';
import {IPostModel} from "../../models/IPostModel";
import PostComponent from "../post/PostComponent";
import {getAllPosts} from "../../services/jpg.api.service";

// interface IProps {
//     posts: IPostModel[]
// }
//
// type IPropTypes = IProps & { children?: React.ReactNode }


type IPropsType = { lift?: (postId: number) => void }

const PostsComponent: FC<IPropsType> = ({lift}) => {

    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
        getAllPosts().then(({data}) => setPosts(data));
    }, []);

    return (
        <div>
            {posts.map((post: IPostModel) => (<PostComponent key = {post.id} post={post} lift={lift}/>))}
        </div>
    );
};

export default PostsComponent;