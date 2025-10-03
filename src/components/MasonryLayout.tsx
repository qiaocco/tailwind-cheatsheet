import { Masonry } from 'react-plock';
import MasonryCard from "./MasonryCard";
import { TwJson } from "@/utils/types";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useMemo } from 'react';

interface Props {
	currTw: string;
	setCurrTw: (currTw: string) => void;
	twJson: TwJson[];
	showHeaderOnly?: boolean;
}

const MasonryConfig = {
	columns: [1, 2, 3],
	gap: [20, 20, 20],
	media: [640, 768, 1024],
	useBalancedLayout: true,
}

export default function MasonryLayout({ currTw, setCurrTw, twJson, showHeaderOnly = false }: Props) {

	const skeletonItems = useMemo(() => {
		return Array.from({ length: 10 }, () => ({
		  height: Math.random() * 100 + 200,
		}));
	  }, []);

	// 仅显示 Header（用于左侧栏）
	if (showHeaderOnly) {
		return <MasonryCard idx={0} item={{ title: 'header', children: [] }} setCurrTw={setCurrTw} currTw={currTw} />;
	}

	if (!twJson || twJson.length === 0) {
		return (
			<Masonry
				items={skeletonItems}
				render={(item, idx) =>
					<Skeleton
						key={idx}
						height={item.height}
						baseColor="#101828"
						highlightColor="#374151"
					/>
				}
				config={MasonryConfig}
			/>
		)
	}

	return (
		<Masonry
			items={twJson}
			config={MasonryConfig}
			render={(item, idx) => <MasonryCard idx={idx} item={item} setCurrTw={setCurrTw} currTw={currTw} /> }
		/>
	)
}