import { menuButtonList } from 'components/ui/Navs/NavButton/NavButtonList';
import { NavBarContainer } from 'components/ui/Navs/NavBarContainer';
import Wheat from './components/ui/Wheat/Wheat';
import { MoneyPanel } from 'components/ui/MoneyPanel/MoneyPanel';
import { store } from 'store/store';
import { Provider } from 'react-redux';
import { Modal } from 'components/ui/window/Modal';

function App() {
  return (
    <Provider store={store}>
      <MoneyPanel />
      <NavBarContainer buttonList={menuButtonList} />
      <Wheat width="320px" height="320px" />
      <Modal />
    </Provider>
  );
}

export default App;
