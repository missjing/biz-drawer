import BizDrawer from '../../../dist';
import React from 'react';

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
    const sidebarStyle = {
      height: '7.77rem',
    };
    const sidebar = <div>test</div>;
    return (<div>
      <button type="button" onClick={this.changeDrawer}>Click Me!</button>
      <div style={containerStyle}>
        <BizDrawer
          isVisible={this.state.isVisible}
          sidebar={sidebar}
          sidebarStyle={sidebarStyle}
          onChangeVisible={this.changeDrawer}
        />
      </div>
    </div>)
  }
}

export default Simple;