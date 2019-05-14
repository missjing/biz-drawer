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
    const sidebarStyle = {
      height: '7.77rem',
    };
    const sidebar = <div>test</div>;
    return (<div>
      <button type="button" onClick={this.changeDrawer}>Click Me!</button>
      <BizDrawer
        isVisible={this.state.isVisible}
        sidebar={sidebar}
        sidebarStyle={sidebarStyle}
        onChangeVisible={this.changeDrawer}
      />
    </div>)
  }
}

export default Simple;