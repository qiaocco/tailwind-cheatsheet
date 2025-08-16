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
    <div className="max-w-screen-2xl mx-auto p-4">
      <MasonryLayout currTw={currTw} setCurrTw={setCurrTw} twJson={jsonData} />
      <Footer />
      <Toast copied={""} toastVisible={false} />
      <AdPopup />
    </div>
  );
}
