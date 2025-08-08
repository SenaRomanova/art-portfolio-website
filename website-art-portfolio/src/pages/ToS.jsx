
import { useState } from "react";
import PageHeader from "../assets/PageHeading";

export default function TermsOfService() {
  const [vw, setVw] = useState(window.innerWidth);
  return (
    <>
      <PageHeader name={'ToS Policy'}/>
    </>
  );
} 