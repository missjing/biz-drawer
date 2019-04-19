import React from 'react';
import '../assets/index.less';
import PropTypes from 'prop-types';

class BizDrawer extends React.Component {
  state = {
    taskCls: 'drawer-bottom',
  }
  static propTypes = {
    isVisible: PropTypes.bool,
    onChangeVisible: PropTypes.func,
    sidebar: PropTypes.object,
    sidebarStyle: PropTypes.object,
  };

  static defaultProps = {
    isVisible: false,
    onChangeVisible: () => {},
    sidebar: {},
    sidebarStyle: {},
  };

  componentDidUpdate(prevProps) {
    if (this.props.isVisible != prevProps.isVisible) {
      this.changeAddPointTaskArea(this.props.isVisible);
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
        }, () => {
          // 曝光自动检测需要在抽屉弹窗动效0.3s执行完后
          setTimeout(() => {
            window.Tracert && Tracert.startAutoExpo();
          }, 300);
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
        }, 300);
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
