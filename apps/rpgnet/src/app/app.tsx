// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { Game } from '@rpgnet/game'
import { Provider } from 'react-redux';
import { store } from '@rpgnet/store';
export function App() {
  return (
    <Provider store={store}>
      <Game></Game>
      <div />
    </Provider>
  );
}

export default App;
