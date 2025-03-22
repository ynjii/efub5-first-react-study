import React from "react"; 
import Comment from "./Comment"; 

const comments = [
    {
        name: "김윤지",
        comment: "안녕하세요!",
    },
    {
        name: "ㅇㅇㅇ",
        comment: "안녕하세요!",
    },
    {
        name: "ㅁㅁㅁ",
        comment: "안녕하세요!",
    }
];

function CommentList(props) {
    return (
        <div>
                {comments.map((comment) => {
                    return (
                        <Comment name={comment.name} comment={comment.comment} />
                    );
                })}
        </div>
    )
}

export default CommentList;