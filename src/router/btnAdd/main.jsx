import React, {Component} from 'react';

import {inject, observer} from 'mobx-react';
import CSSModules from 'react-css-modules';
import btnaddStore from './store';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from './style.css';

const BtnaddComponent = class BtnaddComponent extends Component {
  static add() {
    btnaddStore.add();
  }

  static less() {
    btnaddStore.less();
  }

  static syncAdd() {
    btnaddStore.syncAdd();
  }

  static syncLess() {
    btnaddStore.syncLess();
  }

  static ajax() {
    // btnaddStore.ajax();
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="transitionWrapper"
        component="div"
        className={styles.transitionWrapper}
        transitionEnterTimeout={30000}
        transitionLeaveTimeout={30000}>

        <div key="btnadd" style={{position:"absolute", width: "100%"}}>

                <h1>demo1：加减</h1>
                <div styleName="con">
                  <span>{btnaddStore.count}</span>
                </div>
                <div styleName="btnCon">
                  <button className="fz14" styleName="button" onClick={BtnaddComponent.add}>+</button>
                  <button className="ml10 fz14" styleName="button" onClick={BtnaddComponent.less}>-</button>
                </div>
                <h1>demo1：延时加减</h1>
                <div styleName="con">
                  <span>{btnaddStore.syncCount}</span>
                </div>
                <div styleName="btnCon">
                  <button className="fz14" styleName="button" onClick={BtnaddComponent.syncAdd}>+</button>
                  <button className="ml10 fz14" styleName="button" onClick={BtnaddComponent.syncLess}>-</button>
                </div>
                <h1>demo1：fetch(请移步webapp观看)</h1>
                <div styleName="con">
                  <span>{btnaddStore.data && btnaddStore.data.errmsg}</span>
                </div>
                <div styleName="btnCon">
                  <button styleName="button" className="fz14" onClick={BtnaddComponent.ajax}>+</button>
                </div>

        </div>


      </ReactCSSTransitionGroup>
    );
  }
};
observer(BtnaddComponent);
inject('publicStore')(BtnaddComponent);
inject('routing')(BtnaddComponent);
export default CSSModules(BtnaddComponent, styles);
