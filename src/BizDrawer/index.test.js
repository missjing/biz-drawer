import { shallow } from 'enzyme';
import BizDrawer from './index.js';
require('should');

describe('<BizDrawer />', () => {
  const sidebarStyle = {
    height: '7.77rem',
  };
  const sidebar = <div className="testCls">test</div>;
  it('render BizDrawer', () => {
    const wrapper = shallow(
      <BizDrawer
        isVisible={true}
        sidebar={sidebar}
        sidebarStyle={sidebarStyle}
        onChangeVisible={() => {}}
      />
    );
    wrapper.find('.testCls').text().should.equal('test');
  });
});