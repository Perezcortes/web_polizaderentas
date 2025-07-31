export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* NavbarBlack se maneja externamente */}
      <div className="navbar-black-spacer"></div>
      <main>{children}</main>
    </>
  );
}
