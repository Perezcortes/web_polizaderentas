export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Eliminamos NavbarBlack de aquí - se maneja en NavbarWrapper */}
      <main style={{ paddingTop: "35px" }}>{children}</main>
    </>
  );
}