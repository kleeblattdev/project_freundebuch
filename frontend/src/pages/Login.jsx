import { useRef, useState } from "react";

const Login = () => {
	const [error, setError] = useState(false);
	const userRef = useRef();
	const passwordRef = useRef();
	const url = import.meta.env.VITE_BACKEND;

	const signIn = async () => {
		try {
			const res = await fetch(url + "/register", {
				method: "POST",
				credentials: "include",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({
					user: userRef.current.value,
					password: passwordRef.current.value,
				}),
			});
			if (!res.ok) {
				setError(true);
			} else {
				const client = await res.json();
				window.alert("Erfolgreich registriert");
				userRef.current.value = "";
				passwordRef.current.value = "";
			}
		} catch (err) {
			console.log(err);
		}
	};

	const login = async () => {
		try {
			const res = await fetch(url + "/login", {
				method: "POST",
				credentials: "include",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({
					user: userRef.current.value,
					password: passwordRef.current.value,
				}),
			});
			if (!res.ok) {
				setError(true);
			} else {
				const client = await res.json();
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<main>
			<section>
				<input type="text" name="user" id="user" ref={userRef} />
				<input
					type="password"
					name="password"
					id="password"
					ref={passwordRef}
				/>
				<button type="submit" onClick={signIn}>
					Sign In
				</button>
				<button type="submit" onClick={login}>
					Log In
				</button>
				{error && <div> Irgendwas ist schief gelaufen. :(</div>}
			</section>
		</main>
	);
};

export default Login;
