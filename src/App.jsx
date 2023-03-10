import Menu from './components/encabezado/menu/menu'
import Footer from './components/footer/footer';
import Blinds from './components/home/blinds/Blinds';
import Description from './components/home/description/description';
import FrontPage from './components/home/front page/front_page';

function App() {
  return (
    <>
      <Menu />
      <FrontPage />
      <Description />
      <Blinds />
      <Footer />
    </>
  );
}

export default App;
