import { NavBarContainer } from 'ui/navs/nav-bar-container';
import Wheat from './ui/wheat/wheat';
import { MoneyPanel } from 'ui/money-panel/money-panel';
import { store } from 'store/store';
import { Provider } from 'react-redux';
import { Modal } from 'ui/modal/modal';

function App() {
  return (
    <Provider store={store}>
      <MoneyPanel />
      <NavBarContainer />
      <Wheat />
      <Modal />
    </Provider>
  );
}

export default App;
