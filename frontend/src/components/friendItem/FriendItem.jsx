import { Link } from "react-router-dom";
import "./friendItem.scss";

const FriendItem = ({ friend, setRefresh, refresh }) => {
	const url = import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION;

	const deleteFriend = async () => {
		const del = await fetch(url + "/friends", {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ id: friend._id }),
		});

		setRefresh((prev) => !prev);
	};

	return (
		<section className="friendItem">
			<h3>Vorname: {friend.vorname}</h3>
			<h3>Nachname: {friend.nachname}</h3>
			<Link to={friend._id}>
				<button>Show Details</button>
			</Link>
			{/* 			<p>Geburtstag: {friend.geburtstag}</p>
			<p>
				<a href={`tel:+${friend.phone}`}>Tel: {friend.phone}</a>
			</p>
			<p>
				<a href={`mailto:${friend.mail}`}>{friend.email}</a>
			</p>
			<p>Beruf: {friend.beruf}</p> */}
			<button onClick={deleteFriend}>Delete Friend :(</button>
		</section>
	);
};

export default FriendItem;
