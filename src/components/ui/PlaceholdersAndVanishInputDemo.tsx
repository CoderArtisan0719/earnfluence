"use client";

import { PlaceholdersAndVanishInput } from "./placeholders-and-vanish-input";

const PlaceholdersAndVanishInputDemo = () => {
	const placeholders = [
			"What's the first rule of Fight Club?",
			"Who is Tyler Durden?",
			"Where is Andrew Laeddis Hiding?",
			"Write a Javascript method to reverse a string",
			"How to assemble your own PC?",
	];

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	};
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
	};
	return (
		<div className="items-center px-4">
			<PlaceholdersAndVanishInput
				placeholders={placeholders}
				onChange={handleChange}
				onSubmit={onSubmit}
			/>
		</div>
	);
};

export default PlaceholdersAndVanishInputDemo;

