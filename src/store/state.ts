import { ApiPromise } from '@polkadot/api';
import { State as StateContract } from './modules/contracts/state';
import type { InjectedExtension } from '@polkadot/extension-inject/types';

export type AlertBox = {
  showAlertMsg: boolean;
  alertMsg: string;
  alertType: string;
};

export type ConnectionType = 'connected' | 'connecting' | 'offline';

export type Theme = 'LIGHT' | 'DARK';

export interface GeneralState extends StateContract {
  initialized: boolean;
  isLoading: boolean;
  alertBox: AlertBox;
  api: ApiPromise | undefined;
  extensions: InjectedExtension[];
  currentNetworkStatus: ConnectionType;
  currentNetworkIdx: Number;
  currentAccountIdx: Number;
  currentCustomEndpoint: string;
  currentTheme: Theme;
}

export const state: GeneralState = {
  initialized: false,
  isLoading: false,
  alertBox: {
    showAlertMsg: false,
    alertMsg: '',
    alertType: 'success',
  },
  api: undefined,
  extensions: [],
  currentNetworkStatus: 'connecting',
  currentNetworkIdx: 0,
  currentAccountIdx: 0,
  currentCustomEndpoint: '',

  currentTheme:
    //this queries the media setting
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'DARK'
      : 'LIGHT',
  allCode: {},
};
