import React from 'react';
import '../assets/index.less';
import PropTypes from 'prop-types';

// 过渡动画时长300ms
const ANIMATION_TIME = 300;
class BizDrawer extends React.Component {
  state = {
    taskCls: 'drawer-bottom',
  }
  static propTypes = {
    isVisible: PropTypes.bool,
    onChangeVisible: PropTypes.func,
    rootEl: PropTypes.node,
    sidebar: PropTypes.object,
    sidebarStyle: PropTypes.object,
    expoCheckFunc: PropTypes.func,
  };

  static defaultProps = {
    isVisible: false,
    onChangeVisible: () => {},
    rootEl: null,
    sidebar: {},
    sidebarStyle: {},
    expoCheckFunc: () => {},
  };

  componentDidMount() {
    // 延迟过渡动画执行完再进行手动曝光
    setTimeout(() => {
      this.props.expoCheckFunc();
    }, ANIMATION_TIME);
  }

  componentDidUpdate(prevProps) {
    const { isVisible, rootEl } = this.props;
    if (isVisible != prevProps.isVisible) {
      this.changeAddPointTaskArea(isVisible);
      // 锁住根节点，在抽屉打开后抽屉外的主页面不允许上下滑动
      rootEl && (rootEl.style.height = this.props.isVisible ? document.documentElement.clientHeight + 'px' : null);
      rootEl && (rootEl.style.overflow = this.props.isVisible ? 'hidden' : null);
    }
  }

  changeAddPointTaskArea = toShow => {
    const { taskCls } = this.state;
    if (toShow) {
      // 若已是显示状态，直接返回
      if (taskCls.indexOf('drawer-open') >= 0) return;
      // 隐藏状态下先移除 display:none 显示元素
      this.taskNode.classList.remove('display-none');
      // 隐藏状态下先显示元素
      setTimeout(() => {
        this.setState({
          taskCls: 'drawer-bottom drawer-open',
        });
      }, 0);
    } else {
      // 若已是隐藏状态，直接返回
      if (taskCls.indexOf('drawer-open') < 0) return;
      // 显示状态下先执行过渡动效，再设置 display:none
      this.setState({
        taskCls: 'drawer-bottom',
      }, () => {
        // 显示到隐藏的过渡动效执行时间是0.3s
        setTimeout(() => {
          this.taskNode.classList.add('display-none');
        }, ANIMATION_TIME);
      });
    }
  }

  onChange = flag => {
    this.props.onChangeVisible(flag);
  }

  render() {
    const { sidebar, sidebarStyle } = this.props;
    const { taskCls } = this.state;

    return (
      <div className="display-none" ref={node => { this.taskNode = node; }}>
        <div className={taskCls}>
          <div className="drawer-sidebar" style={sidebarStyle}>
            <div
              className="close"
              onClick={this.onChange.bind(this, false)}
              />
            {sidebar}
          </div>
          <div className="drawer-overlay"></div>
        </div>
      </div>
    );
  }
}

export default BizDrawer;
