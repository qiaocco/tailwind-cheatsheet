import { TwJson } from "@/utils/types";
import Header from "./Header";
import Footer from "./Footer";
import TwCard from "./TwCard";

interface Props {
	idx: number;
	item: TwJson;
	currTw: string;
	setCurrTw: (currTw: string) => void;
}

export default function MasonryCard({ idx, item, currTw, setCurrTw }: Props) {

	if (item.title === "header") {
		return (
			<Header currTw={currTw} setCurrTw={setCurrTw} />
		)
	}

	if (item.title === "footer") {
		return (
			<Footer />
		)
	}

	return (
		<>
			<TwCard idx={idx} title={item.title} children={item.children} />
		</>
	)
}
