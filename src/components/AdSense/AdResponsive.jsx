import { useEffect } from "react";

export default function AdResponsive() {
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
      data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
      data-ad-slot="2345678901"
      data-ad-format="auto"
      data-full-width-responsive="true">
    </ins>
  );
}
