import { TokenDisplay } from '../index';
import * as styles from './styles.styl';
import cn from 'classnames';
import React from 'react';
import { Image } from 'semantic-ui-react';
import { ExpandIcon } from '../../../ui/Icons/ExpandIcon';

export const TokenButton = (props: { token: TokenDisplay; onClick?: any }) => {
  return (
    <div className={cn(styles.tokenButton)} onClick={props.onClick}>
      <Image src={props.token.logo} avatar style={{ boxShadow: 'rgba(0, 0, 0, 0.075) 0px 6px 10px' }} />
      <span>{props.token.symbol}</span>
      <ExpandIcon />
    </div>
  );
};
