"use client"

import { useState, useEffect } from "react";
import MasonryLayout from "@/components/MasonryLayout";
import { loadTwJson, twVersions } from "@/utils";
import Toast from "@/components/Toast";
import { TwJson } from "@/utils/types";
import AdPopup from "@/components/AdPopup";
import Footer from "@/components/Footer";

export default function Home() {
  const [currTw, setCurrTw] = useState(twVersions[0]);
  const [jsonData, setJsonData] = useState<TwJson[]>([]);

  useEffect(() => {
    (async () => {
        const data = await loadTwJson(currTw);
        setJsonData(data);
      })();
  }, [currTw]);

  return (
    <>
    <div className="min-h-dvh flex max-w-screen-2xl mx-auto">
      {/* 左侧搜索栏 */}
      <div className="w-32 lg:w-48 py-3 flex-shrink-0 border-r border-slate-300">
        <MasonryLayout currTw={currTw} setCurrTw={setCurrTw} twJson={jsonData} showHeaderOnly />
      </div>

      {/* 右侧卡片区域 */}
      <div className="flex-1 flex flex-col p-4 overflow-y-auto">
        <div className="flex-1">
          <MasonryLayout currTw={currTw} setCurrTw={setCurrTw} twJson={jsonData} />
        </div>
        <Footer />
      </div>
    </div>
    <Toast copied={""} toastVisible={false} />
    <AdPopup />
    </>
  );
}
