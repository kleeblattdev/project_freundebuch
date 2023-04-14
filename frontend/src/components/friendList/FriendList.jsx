//library import
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

//component import
import FriendItem from "../friendItem/FriendItem";

import "./friendList.scss";

const FriendList = () => {
	const [friends, setFriend] = useState();
	const [refresh, setRefresh] = useState(false);
	const url = import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION;

	useEffect(() => {
		fetch(url + "/friends")
			.then((res) => res.json())
			.then((data) => setFriend(data));
	}, [refresh]);

	return (
		<>
			<h2>Meine Freunde</h2>
			<section className="friendList">
				{friends &&
					friends.map((friend) => {
						return (
							<FriendItem
								friend={friend}
								key={uuidv4()}
								setRefresh={setRefresh}
								refresh={refresh}
							/>
						);
					})}
			</section>
		</>
	);
};

export default FriendList;
