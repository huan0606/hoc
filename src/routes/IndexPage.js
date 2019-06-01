import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import NewCom from '../components/NewCom'
import TwoSon from '../components/TwoSon'
function IndexPage() {
  return (
    <div className={styles.normal}>
        <NewCom/>
        {/* 这里传递数据 如果不在高阶组件里传一下 子组件this.props.name获取的为undefined 此时的父组件为高阶组件 */}
        <TwoSon name={'刘焕杰'}/>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
