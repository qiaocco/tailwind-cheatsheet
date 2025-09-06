import { TwJson } from "@/utils/types";
import Header from "./Header";
// import Footer from "./Footer";
import TwCard from "./TwCard";

interface Props {
  idx: number;
  item: TwJson;
  currTw: string;
  setCurrTw: (currTw: string) => void;
}

export default function MasonryCard({ idx, item, currTw, setCurrTw }: Props) {
  if (item.title === "header") {
    return <Header currTw={currTw} setCurrTw={setCurrTw} />;
  }

  if (item.title === "ad") {
    return (
      <div className="-mt-4 px-2 text-xs italic opacity-70">
        <a href="https://taillens.io/?aff=zmn621" target="_blank">
          Tailwind CSS in your browser?
        </a>
      </div>
    );
  }

  return (
    <>
      <TwCard idx={idx} title={item.title} children={item.children} />
    </>
  );
}
