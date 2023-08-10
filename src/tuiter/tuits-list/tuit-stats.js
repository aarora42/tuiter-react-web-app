import React, { useState, useEffect } from 'react';
import { updateTuitThunk } from "../services/tuit-thunks"
import { useDispatch } from "react-redux";
import { FaRegComments, FaRetweet, FaHeart, FaRegHeart, FaDownload } from 'react-icons/fa';
import { BiSolidDislike, BiDislike } from 'react-icons/bi';

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();
    const [isLiked, setIsLiked] = useState(tuit.liked); 
    const [likesCount, setLikesCount] = useState(tuit.likes);
    const [isDisliked, setIsDisliked] = useState(tuit.liked); 
    const [dislikesCount, setDislikesCount] = useState(tuit.likes);

    useEffect(() => {
        setIsLiked(tuit.liked);
        setLikesCount(tuit.likes);
        setIsDisliked(tuit.disliked);
        setDislikesCount(tuit.dislikes);
    }, [tuit]);

    // const handleButtonClick = () => {
    //     if (isLiked) {
    //         setLikesCount((likesCount) => likesCount - 1);
    //     } else {
    //         setLikesCount((likesCount) => likesCount + 1);
    //     }
    //     setIsLiked((isLiked) => !isLiked); 
    // };
    const handleButtonClick = () => {
        // Optimistic UI update
        const newLikesCount = isLiked ? likesCount - 1 : likesCount + 1;
        setLikesCount(newLikesCount);
        setIsLiked(!isLiked);
        
        // Update tuit data on the server
        dispatch(updateTuitThunk({ ...tuit, liked: !isLiked, likes: newLikesCount }));
    };
    const handleDislike = () => {
        // Optimistic UI update
        const newDislikesCount = isDisliked ? dislikesCount - 1 : dislikesCount + 1;
        setDislikesCount(newDislikesCount);
        setIsDisliked(!isDisliked);
        
        // Update tuit data on the server
        dispatch(updateTuitThunk({ ...tuit, disliked: !isDisliked, dislikes: newDislikesCount}));
    };
    return (
        <div className="row">
            <div className="col">
                <FaRegComments />
                {" " + tuit.replies}
            </div>
            <div className="col">
                <FaRetweet />
                {" " + tuit.retuits}
            </div>
            <div className="col">
                <button style={{ background: "white", border: "none" }} onClick={handleButtonClick}>
                    {isLiked ? <FaHeart color="red" /> : <FaRegHeart />}
                </button>
                {likesCount}
            </div>
            <div className="col">
                <button style={{ background: "white", border: "none" }} onClick={handleDislike}>
                    {isDisliked ? <BiSolidDislike color="blue" /> : <BiDislike />}
                </button>
                {dislikesCount}
            </div>
            <div className="col">
                <FaDownload />
            </div>
        </div>
    );
};

export default TuitStats;
