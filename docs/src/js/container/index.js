/* @flow */
import React from 'react';

import {FixedToolbarAdjusted} from '@react-mdc/toolbar';

import Drawer from './drawer';
import Toolbar from './toolbar';

import styles from './styles.css';

export default class Container extends React.Component {
  props: {
    children?: React.Element<*>
  }
  state = {
    drawerOpen: false
  }
  handleMenuButtonPress = () => {
    this.setState({
      drawerOpen: true
    });
  }

  handleOpenDrawer = () => {
    this.setState({
      drawerOpen: true
    });
  }

  handleCloseDrawer = () => {
    this.setState({
      drawerOpen: false
    });
  }

  handleMenuButtonClick = () => {
    this.setState({
      drawerOpen: true
    });
  }

  render (): React.Element<*> {
    return (
      <div className={styles.layout}>
        <Drawer
          onOpenDrawer={this.handleOpenDrawer}
          onCloseDrawer={this.handleCloseDrawer}
          open={this.state.drawerOpen} />
        <Toolbar onMenuButtonClick={this.handleMenuButtonClick} />
        <FixedToolbarAdjusted>
          {this.props.children}
        </FixedToolbarAdjusted>
      </div>
    );
  }
}
