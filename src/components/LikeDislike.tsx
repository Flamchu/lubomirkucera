import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import axios from "axios";
import "../scss/components/LikeDislike.scss";

const API_URL = "/api/like-dislike.php";

const LikeDislike: React.FC = () => {
	const [likes, setLikes] = useState(0);
	const [dislikes, setDislikes] = useState(0);
	const [userVote, setUserVote] = useState<"like" | "dislike" | null>(null);

	useEffect(() => {
		axios.get(API_URL).then(({ data }) => {
			setLikes(data.likes);
			setDislikes(data.dislikes);
			setUserVote(data.userVote);
		});
	}, []);

	const handleVote = async (vote: "like" | "dislike") => {
		if (vote === userVote) return;

		const response = await axios.post(API_URL, { vote });

		setLikes(response.data.likes);
		setDislikes(response.data.dislikes);
		setUserVote(vote);
	};

	const total = likes + dislikes || 1;
	const likeWidth = (likes / total) * 100;
	const dislikeWidth = (dislikes / total) * 100;
	const lineColor = likes === dislikes ? "gray" : likeWidth > dislikeWidth ? "blue" : "red";

	return (
		<div className="like-dislike">
			<div className="like-dislike__buttons">
				<button onClick={() => handleVote("like")} className={`like-dislike__button ${userVote === "like" ? "liked" : ""}`}>
					<ThumbsUp />
				</button>
				<div className="like-dislike__graph">
					<span className="like-dislike__value-like">{likes}</span>
					<div className="like-dislike__graph-values">
						<motion.div className="like-dislike__graph-like" initial={{ width: "50%", height: "20px" }} animate={{ width: `${likeWidth}%` }} style={{ background: "rgb(175, 175, 175)" }} />
						<motion.div className="like-dislike__graph-dislike" initial={{ width: "50%", height: "20px" }} animate={{ width: `${dislikeWidth}%` }} style={{ background: "rgb(75, 75, 75)" }} />
						<motion.div className="like-dislike__graph-line" initial={{ left: "50%", height: "20px" }} animate={{ left: `${likeWidth}%` }} style={{ background: lineColor }} />
					</div>
					<span className="like-dislike__value-dislike">{dislikes}</span>
				</div>
				<button onClick={() => handleVote("dislike")} className={`like-dislike__button ${userVote === "dislike" ? "disliked" : ""}`}>
					<ThumbsDown />
				</button>
			</div>
		</div>
	);
};

export default LikeDislike;
