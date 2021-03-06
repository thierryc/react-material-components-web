/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Props as WrapperProps} from '@react-mdc/base/lib/wrapper';
import {PropWrapper} from '@react-mdc/base';

import {
  BASE_CLASS_NAME
} from './constants';

export const CLASS_NAME = `${BASE_CLASS_NAME}-label`;

export type Props<P: {}> = WrapperProps<P> & {};

/**
 * Label component
 */
export default class Label<P: any> extends PropWrapper<P, *, Props<P>, *> {
  props: Props<P>

  static defaultProps = {
    wrap: <label />
  }

  renderProps (): P {
    let {
      className,
      wrap: _wrap,
      ...props
    } = this.props;

    className = classNames(
      CLASS_NAME,
      className
    );
    return {
      ...props,
      className
    };
  }
}
