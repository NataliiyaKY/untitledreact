import React, {FC} from 'react';
import {ICommentModel} from "../../models/ICommentModel";


interface IProps {
    comments: ICommentModel[]
}

const CommentsComponent: FC<IProps> = ({comments}) => {
    return (
        <div>
            {comments.map((comment) => (<div>
                <li key={comment.id}>{comment.body}</li>
            </div>))}
        </div>
    );
};

export default CommentsComponent;