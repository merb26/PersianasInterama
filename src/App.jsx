import Menu from './components/encabezado/menu/menu.jsx'
import Footer from './components/footer/footer.jsx';
import { Blinds } from './components/home/blinds/Blinds.jsx';
import Description from './components/home/description/description.jsx';
import FrontPage from './components/home/front page/front_page.jsx';

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
