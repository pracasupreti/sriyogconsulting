"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

export default function FooterWrapper() {
  const pathname = usePathname();
  const noFooterPaths = ["/techfriday"]; 

  if (noFooterPaths.includes(pathname)) {
    return null;
  }

  return <Footer />;
}
