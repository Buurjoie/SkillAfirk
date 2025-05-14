import { useEffect } from "react";

export default function AdInArticle() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
      style={{ display: "block", textAlign: "center" }}
      data-ad-format="fluid"
      data-ad-layout="in-article"
      data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
      data-ad-slot="3456789012">
    </ins>
  );
}
