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
    <>
     <ins className="adsbygoogle"
      style={{ display: "block", textAlign: "center" }}
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-2510660773997180"
     data-ad-slot="6048504182"></ins>
    </>
  );
}
