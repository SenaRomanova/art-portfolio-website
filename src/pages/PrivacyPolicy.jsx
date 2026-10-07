
import { useState } from "react";
import PageHeader from "../assets/PageHeading";

export default function PrivacyPolicy() {
  const [vw, setVw] = useState(window.innerWidth);
  return (
    <>
      <PageHeader name={'Privacy Policy'}/>
    </>
  );
} 