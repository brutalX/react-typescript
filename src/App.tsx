import * as React from 'react';
import './App.css';
// import Counter from './components/Counter';
import {
  Header,
  MenuAndy,
  Overlay,
} from 'common/components';

class App extends React.Component {
  public render() {
    return (
      <>
        <Header/>
        <MenuAndy>
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
        </MenuAndy>
        <Overlay/>
    
        {/* <Counter countBy={2}/> */}
      </>
    );
  }
}

export default App;
