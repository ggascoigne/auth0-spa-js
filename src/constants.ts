import { PopupConfigOptions } from './global';

/**
 * @ignore
 */
export const DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS = 60;

/**
 * @ignore
 */
export const DEFAULT_POPUP_CONFIG_OPTIONS: PopupConfigOptions = {
  timeoutInSeconds: DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS
};

export const CACHE_LOCATION_MEMORY = 'memory';
export const CACHE_LOCATION_LOCAL_STORAGE = 'localstorage';
