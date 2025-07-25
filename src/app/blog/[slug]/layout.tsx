"use client";

import NavbarBlack from "../../../components/NavbarBlack";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarBlack />
      <main style={{ paddingTop: "90px" }}>{children}</main>
    </>
  );
}
