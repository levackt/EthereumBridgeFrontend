import cn from 'classnames';
import * as styles from './styles.styl';
import ClaimButton from './ClaimButton';
import React, { useEffect, useState } from 'react';
import ScrtTokenBalance from '../ScrtTokenBalance';
import { UserStoreEx } from '../../../stores/UserStore';

const ClaimBox = (props: {
  rewardsContract: string;
  decimals?: string | number;
  userStore: UserStoreEx;
  available: string;
  pulse: boolean;
  pulseInterval: number;
  symbol: string;
}) => {
  const [available, setAvailable] = useState<string>(props.available);
  useEffect(() => {
    setAvailable(props.available);
  }, [props.available]);
  return (
    <div className={cn(styles.claimBox)}>
      <div>
        <div className={cn(styles.items)}>
          <ScrtTokenBalance
            subtitle={'Available Rewards'}
            tokenAddress={props.rewardsContract}
            decimals={props.decimals || 0}
            userStore={props.userStore}
            currency={'sSCRT'}
            selected={false}
            value={available}
            pulse={props.pulse}
            pulseInterval={props.pulseInterval}
            unlockTitle="View Balance"
            unlockSubtitle="Available Rewards"
          />
          {/*<SoftTitleValue title={`${} sSCRT`} subTitle={} />*/}
        </div>
        {
          <ClaimButton
            secretjs={props.userStore.secretjs}
            contract={props.rewardsContract}
            available={props.available}
            symbol={props.symbol}
          />
        }
      </div>
    </div>
  );
};

export default ClaimBox;
