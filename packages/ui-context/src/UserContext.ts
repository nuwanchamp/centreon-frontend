import * as React from 'react';

import { CloudServices, UserContext } from './types';

const defaultUser = {
  alias: '',
  locale: navigator.language,
  name: '',
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
};

const defaultAcl = {
  actions: {
    host: {
      acknowledgement: false,
      check: false,
      comment: false,
      disacknowledgement: false,
      downtime: false,
      submit_status: false,
    },
    service: {
      acknowledgement: false,
      check: false,
      comment: false,
      disacknowledgement: false,
      downtime: false,
      submit_status: false,
    },
  },
};

const defaultDowntime = {
  default_duration: 7200,
};

const defaultRefreshInterval = 15;

const defaultCloudServices: CloudServices = {
  areCloudServicesEnabled: false,
};

const defaultContext: UserContext = {
  ...defaultUser,
  acl: defaultAcl,
  cloudServices: defaultCloudServices,
  downtime: defaultDowntime,
  refreshInterval: defaultRefreshInterval,
};

const Context = React.createContext<UserContext>(defaultContext);

const useUserContext = (): UserContext => React.useContext(Context);

export default Context;

export {
  useUserContext,
  defaultUser,
  defaultAcl,
  defaultDowntime,
  defaultRefreshInterval,
  defaultCloudServices,
};
