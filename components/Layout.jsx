import TopBar from "./TopBar";

const Layout = ({ children, backIcon }) => {
  return (
    <div className="h-screen w-screen px-8 pt-4">
      <TopBar backIcon={backIcon} />
      {children}
    </div>
  );
};

export default Layout;
