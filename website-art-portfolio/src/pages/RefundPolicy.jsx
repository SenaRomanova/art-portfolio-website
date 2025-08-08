
import { useState } from "react";
import PageHeader from "../assets/PageHeading";

export default function RefundPolicy() {
  const [vw, setVw] = useState(window.innerWidth);
  return (
    <>
      <PageHeader name={'Refund Policy'}/>
    </>
  );
} 