/* eslint no-console: 0 */
import BizDrawer from 'biz-drawer';
import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/index.less';

class Simple extends React.Component {
  state = {
    isVisible: false,
  };

  changeDrawer = flag => {
    this.setState({
      isVisible: !!flag,
    })
  }


  render() {
    const containerStyle = {
      width: '15rem',
      height: '30rem',
      background: '#04AFD2',
      position: 'relative',
    };
    const sidebar = <div>test</div>;
    return (<div>
      <button type="button" onClick={this.changeDrawer}>Click Me!</button>
      <div style={containerStyle}>
        <BizDrawer
          isVisible={this.state.isVisible}
          sidebar={sidebar}
          onChangeVisible={this.changeDrawer}
        />
      </div>
    </div>)
  }
}

ReactDOM.render(<Simple />, document.getElementById('__react-content'));
