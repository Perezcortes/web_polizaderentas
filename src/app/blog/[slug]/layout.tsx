// app/blog/layout.tsx
import NavbarBlack from "../../../components/NavbarBlack";
import Footer from "../../../components/Footer";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarBlack />
      <main>{children}</main>
    </>
  );
}
