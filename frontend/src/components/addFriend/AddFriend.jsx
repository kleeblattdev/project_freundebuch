const AddFriend = () => {
	return (
		<form action="">
			<label htmlFor="vorname">Vorname:</label>
			<input type="text" name="vorname" placeholder="Vorname" />
			<label htmlFor="nachname">Nachname:</label>
			<input type="text" name="nachname" placeholder="Nachname" />
			<label htmlFor="geburtstag">Geburtstag:</label>
			<input type="date" name="geburtstag" />
			<label htmlFor="phone">Handynummer:</label>
			<input type="number" name="phone" placeholder="+49 123456" />
			<label htmlFor="email">Email:</label>
			<input type="email" name="email" placeholder="deinemail@provider.com" />
			<label htmlFor="beruf">Beruf:</label>
			<input type="text" name="beruf" placeholder="Beruf" />
			<label htmlFor="verdienst">Gehalt pro Jahr</label>
			<input type="text" name="verdienst" placeholder="Mein Gehalt pro Jahr" />
			<label htmlFor="selbststaendig">Selbstständig</label>
			<label htmlFor="selbststaendig">
				ja
				<input type="radio" name="selbststaendig" value="true" />
			</label>
			<label htmlFor="selbststaendig">
				nein
				<input type="radio" name="selbststaendig" value="false" />
			</label>

			<label htmlFor="kunde">Kennen wir uns?</label>
			<label htmlFor="kunde">
				ja
				<input type="radio" name="kunde" value="true" />
			</label>
			<label htmlFor="kunde">
				nein
				<input type="radio" name="kunde" value="false" />
			</label>
		</form>
	);
};

export default AddFriend;
