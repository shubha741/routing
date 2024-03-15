import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "About",
    description: "About",
  };
  
  export default function AboutLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     <>
          {children}
    </>
    );
  }