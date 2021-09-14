import { getBackendSrv, getDataSourceSrv, getLocationSrv } from '@grafana/runtime';

const backendSrv = getBackendSrv();
const locationSrv = getLocationSrv();
const dataSourceSrv = getDataSourceSrv();
// HACK: steal registered services from the angular root element
const injector = (window as any)?.angular.element('body').injector();
const dashboardSrv = injector.get('dashboardSrv');
const timeSrv = injector.get('timeSrv');
const contextSrv = injector.get('contextSrv');
// HACK: steal appEvents bus from the backendSrc private stuff
const appEvents = (backendSrv as any)?.dependencies.appEvents;

export const api = {
  backendSrv,
  dashboardSrv,
  locationSrv,
  timeSrv,
  contextSrv,
  appEvents,
  dataSourceSrv,
};

export function toast(strings: string[], severity: 'error' | 'success' | 'warning' = 'error') {
  api.appEvents.emit(`alert-${severity}`, strings);
}