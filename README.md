## Examples

```
import BizDrawer from 'biz-drawer';

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
    const sidebar = <div>test</div>;
    return (<div className="app">
      <BizDrawer
        isVisible={this.state.isVisible}
        sidebar={sidebar}
        onChangeVisible={this.changeDrawer}
      />
    </div>)
  }
}
```


## Details
```
static propTypes = {
    isVisible: PropTypes.bool, // drawer的显示状态
    onChangeVisible: PropTypes.func, // 改变drawer的显示状态函数
    closable: PropTypes.bool, // 是否显示右上角的关闭按钮
    maskClosable: PropTypes.bool, // 点击蒙层是否允许关闭
    rootEl: PropTypes.node, // 需要锁住上下滑动的根节点
    sidebar: PropTypes.object,
    sidebarStyle: PropTypes.object,
    expoCheckFunc: PropTypes.func, // 曝光检测
  };

  static defaultProps = {
    isVisible: false,
    onChangeVisible: () => {},
    closable: true,
    maskClosable: true,
    rootEl: null,
    sidebar: {},
    sidebarStyle: {},
    expoCheckFunc: () => {},
  };
```