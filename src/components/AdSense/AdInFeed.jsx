import { useEffect } from "react";

export default function AdInFeed() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-format="fluid"
      data-ad-layout-key="-fg+5n+6t-e7+az"
      data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
      data-ad-slot="4567890123">
    </ins>
  );
}
