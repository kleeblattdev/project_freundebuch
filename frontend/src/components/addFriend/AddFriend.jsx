import "./addFriend.scss";

const AddFriend = () => {
	const url = import.meta.env.VITE_BACKEND + import.meta.env.VITE_API_VERSION;

	const submit = async (e) => {
		e.preventDefault();

		const form = new FormData(e.target);
		const response = await fetch(url + "/friends", {
			method: "POST",
			body: form,
		});
		console.log(response);
		e.target.reset();
	};

	return (
		<form className="addFriend" onSubmit={submit}>
			<div>
				<label htmlFor="vorname">Vorname:</label>
				<input type="text" name="vorname" placeholder="Vorname" />
			</div>
			<div>
				<label htmlFor="nachname">Nachname:</label>
				<input type="text" name="nachname" placeholder="Nachname" />
			</div>
			<div>
				<label htmlFor="geburtstag">Geburtstag:</label>
				<input type="date" name="geburtstag" />
			</div>
			<div>
				<label htmlFor="phone">Handynummer:</label>
				<input type="number" name="phone" placeholder="+49 123456" />
			</div>
			<div>
				<label htmlFor="email">Email:</label>
				<input type="email" name="email" placeholder="deinemail@provider.com" />
			</div>
			<div>
				<label htmlFor="beruf">Beruf:</label>
				<input type="text" name="beruf" placeholder="Beruf" />
			</div>
			<div>
				<label htmlFor="verdienst">Gehalt pro Jahr</label>
				<input
					type="number"
					name="verdienst"
					placeholder="Mein Gehalt pro Jahr"
				/>
			</div>
			<div>
				<label htmlFor="selbststaendig">Selbstständig</label>
				<label htmlFor="selbststaendig">
					ja
					<input type="radio" name="selbststaendig" value="true" />
				</label>
				<label htmlFor="selbststaendig">
					nein
					<input type="radio" name="selbststaendig" value="false" />
				</label>
			</div>
			<div>
				<label htmlFor="kunde">Kennen wir uns?</label>
				<label htmlFor="kunde">
					ja
					<input type="radio" name="kunde" value="true" />
				</label>
				<label htmlFor="kunde">
					nein
					<input type="radio" name="kunde" value="false" />
				</label>
			</div>
			<button type="submit">Neuen Freund hinzufügen</button>
		</form>
	);
};

export default AddFriend;
