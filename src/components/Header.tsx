import { twVersions } from "@/utils";
import ThemeSwitch from "./ThemeSwitch";
import { useState } from "react";
import SearchInput from "./SearchInput";
import { Coffee, Compress, Expand, Github } from "./Icons";

interface Props {
	currTw: string;
	setCurrTw: (currTw: string) => void;
}

export default function Header({ currTw, setCurrTw }: Props) {
	const [expanded, setExpanded] = useState(false);

	return (
		<header>
			<div className="px-4">
				<div className="flex flex-wrap justify-between flex-col gap-4">
					<div className="font-bold">
						<span className="text-sky-500 text-sm ">
							Tailwind CSS &nbsp;
							<select
								className="bg-transparent border border-sky-500/40 rounded-full text-xs outline-none"
								value={currTw} onChange={e => setCurrTw(e.target.value)}
							>
								{twVersions.map(v =>
									<option value={v} key={v}>{v}</option>
								)}
							</select>
						</span>
						<br />
						<span className="text-xl lg:text-3xl">Cheatsheet</span>
					</div>
					<div className="flex flex-wrap gap-2 items-start">
						<a href="https://ko-fi.com/pk504b" target="_blank" aria-label="Ko-fi" className="sm:hidden md:inline-block">
							<Coffee />
						</a>
						<a
							className=""
							href="https://github.com/pk504b/tailwind-cheatsheet"
							target="_blank"
							aria-label="GitHub"
						>
							<Github />
						</a>
						<ThemeSwitch />
					</div>
				</div>
				<div className="flex flex-col gap-2 my-8">
					<SearchInput />
					<button
						aria-label="Expand/Collapse"
						className="bg-sky-500 px-2 py-2 flex justify-center items-center rounded-md cursor-pointer w-full self-center"
						onClick={() => {
							const allDetails = document.querySelectorAll('details');

							allDetails.forEach((el) => {
								el.open = !expanded;
							});

							setExpanded(!expanded);
						}}
					>
						{expanded ?
							"Compress All" :
							"Expand ALL"
						}
					</button>
				</div>
			</div>
		</header>
	)
}