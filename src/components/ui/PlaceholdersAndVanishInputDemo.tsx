"use client";
import { useState, useRef, useEffect } from "react";
import { PlaceholdersAndVanishInput } from "./placeholders-and-vanish-input";
import SearchCont from "../dialogs/searchCont";
import SearchContainer from "../dialogs/searchContainer";

const PlaceholdersAndVanishInputDemo = () => {

	const [flgSearch, setFlgSearch] = useState<boolean>(false);
	const [searchValue, setSearchValue] = useState<string>("");

	const containerRef = useRef<HTMLDivElement | null>(null);

	const placeholders = [
		"What's the first rule of Fight Club?",
		"Who is Tyler Durden?",
		"Where is Andrew Laeddis Hiding?",
		"Write a Javascript method to reverse a string",
		"How to assemble your own PC?",
	];
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		setFlgSearch(true)
	};
	const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		if (!containerRef?.current?.contains(e.relatedTarget)) {
			setFlgSearch(false)
		}
	};
	return (
		<div className="items-center px-4 relative">
			<PlaceholdersAndVanishInput
				placeholders={placeholders}
				onChange={handleChange}
				onSubmit={onSubmit}
				onFocus={handleFocus}
				onBlur={handleBlur}
			/>

			<div className="absolute w-full mt-[10px]" ref={containerRef}>
				{
					(flgSearch && searchValue.length === 0) && <SearchCont />
				}
				{
					searchValue.length > 0 && <SearchContainer searchValue={searchValue} />
				}
			</div>
		</div>
	);
};

export default PlaceholdersAndVanishInputDemo;