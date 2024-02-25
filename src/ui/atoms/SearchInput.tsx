"use client";

import { type ChangeEvent, useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "@/hooks/useDebounce";

const SEARCH_DELAY = 1000;

const createQueryString = (name: string, value: string) => {
	const params = new URLSearchParams();
	params.set(name, value);

	return params.toString();
};

export const SearchInput = () => {
	const query = useSearchParams().get("query");
	const router = useRouter();
	const [searchText, setSearchText] = useState(query || "");
	const debouncedSearchText = useDebounce(searchText, SEARCH_DELAY);

	const changeSearch = useCallback(() => {
		const newPathName = "/search?" + createQueryString("query", debouncedSearchText);
		router.push(newPathName);
	}, [debouncedSearchText, router]);

	useEffect(() => {
		if (debouncedSearchText.length < 2) {
			return;
		}
		changeSearch();
	}, [debouncedSearchText, changeSearch]);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchText(e.target.value);
	};

	return (
		<div className="flex items-center pl-3">
			<input
				className="w-full rounded-md border-0 bg-slate-50 py-2 pl-11 pr-4 text-sm text-slate-800 ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-400"
				type="text"
				value={searchText}
				onChange={handleInputChange}
			/>
		</div>
	);
};
