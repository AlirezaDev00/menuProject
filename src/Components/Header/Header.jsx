import Menu from "./Menu/Menu";
import Title from "./Title/Title";

function Header({categories}) {
  return (
    <header className="flex items-center flex-col min-h-70 justify-center gap-10">
          <Title></Title>
          <Menu categories={categories}></Menu>
    </header>
  );
}

export default Header;
