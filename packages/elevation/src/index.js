/* @flow */
import React from 'react';
import classNames from 'classnames';

import type {Config} from '@react-mdc/base/lib/types';
import type {Props as WrapperProps} from '@react-mdc/base/lib/wrapper';
import {PropWrapper} from '@react-mdc/base';
import {Themed} from '../../theme';

import type {ZSpace} from './types';
import {classNameForZSpace} from './helpers';
import {BASE_CLASS_NAME} from './constants';

export const propertyClassNames = {
  TRANSITION: `${BASE_CLASS_NAME}-transition`
};

export type Props<P> = WrapperProps<P> & {
  zSpace: ZSpace,
  transition?: boolean,
  className?: string
};

/**
 * Elevation component
 */
export class Elevation<P: Config> extends PropWrapper<P, *, Props<P>, *> {
  props: Props<P>

  static defaultProps = {
    transition: false,
    wrap: <p />
  }

  renderProps (): P {
    let {
      wrap: _wrap,
      zSpace,
      transition,
      className,
      ...props
    } = this.props;
    className = classNames(
      classNameForZSpace(zSpace),
      {
        [propertyClassNames.TRANSITION]: transition
      },
      className
    );
    return {
      ...props,
      className
    };
  }
}

export default Elevation;
