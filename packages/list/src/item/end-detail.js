/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Props as WrapperProps} from '@react-mdc/base/lib/wrapper';
import {PropWrapper} from '@react-mdc/base';

import {
  BASE_CLASS_NAME
} from './constants';

export const CLASS_NAME = `${BASE_CLASS_NAME}__end-detail`;

export const propertyClassNames = {
};

export type Props<P: {}> = WrapperProps<P> & {
};

/**
 * List item end detail component
 */
export default class EndDetail<P: any> extends PropWrapper<P, *, Props<P>, *> {
  props: Props<P>

  static defaultProps = {
    wrap: <span />
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      className,
      ...props
    } = this.props;

    className = classNames(
      CLASS_NAME,
      {
      },
      className
    );

    return {
      ...props,
      className
    };
  }
}
