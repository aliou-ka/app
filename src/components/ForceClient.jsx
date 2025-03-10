// src/components/ForceClient.jsx
import { useEffect } from "react";

export default function ForceClient() {
  useEffect(() => {
    console.log("Astro client-side bundle lancé !");
  }, []);

  return <div style={{ display: "none" }}>Client ready</div>;
}