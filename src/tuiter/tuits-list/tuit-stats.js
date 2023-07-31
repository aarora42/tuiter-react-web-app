import React, { useState, useEffect } from 'react';
import { FaRegComments, FaRetweet, FaHeart, FaRegHeart, FaDownload } from 'react-icons/fa';

const TuitStats = ({ tuit }) => {
    const [isLiked, setIsLiked] = useState(tuit.liked); 
    const [likesCount, setLikesCount] = useState(tuit.likes);

    useEffect(() => {
        setIsLiked(tuit.liked);
        setLikesCount(tuit.likes);
    }, [tuit]);

    const handleButtonClick = () => {
        if (isLiked) {
            setLikesCount((likesCount) => likesCount - 1);
        } else {
            setLikesCount((likesCount) => likesCount + 1);
        }
        setIsLiked((isLiked) => !isLiked); 
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
                <FaDownload />
            </div>
        </div>
    );
};

export default TuitStats;
