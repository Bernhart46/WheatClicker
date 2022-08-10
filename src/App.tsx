import { menuButtonList } from 'components/ui/Navs/NavButton/NavButtonList';
import { NavBarContainer } from 'components/ui/Navs/NavBarContainer';
import Wheat from './components/ui/Wheat/Wheat';

function App() {
  return (
    <>
      <NavBarContainer buttonList={menuButtonList} />
      <Wheat width="320px" height="320px" />
    </>
  );
}

export default App;
