import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
	const [friend, setFriend] = useState();

	const params = useParams();
	console.log(params.friendId);
	const url = import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION;

	useEffect(() => {
		fetch(url + `/friends/${params.friendId}`)
			.then((res) => res.json())
			.then((data) => setFriend(data));
	}, []);
	return (
		<main>
			<h1>Details</h1>
			{friend &&
				friend.map((friend, index) => {
					return (
						<section key={index}>
							<h1>
								{friend.vorname} {friend.nachname}
							</h1>
							<p>Geburtstag: {friend.geburtstag}</p>
							<p>
								<a href={`tel:+${friend.phone}`}>Tel: {friend.phone}</a>
							</p>
							<p>
								<a href={`mailto:${friend.mail}`}>{friend.email}</a>
							</p>
							<p>Beruf: {friend.beruf}</p>
						</section>
					);
				})}
		</main>
	);
};

export default Details;
