import React from 'react';
import moment from 'moment';
import { css } from 'emotion';

import { PanelProps, getDisplayProcessor } from '@grafana/data';

import { Alert, Button, Icon, IconButton } from '@grafana/ui';
import { api as core_api } from './coreapi';

export interface FuncompOptions {
  render?: string;
}

function create(type: string, props: any, ...children: any[]) {
  const map = {
    Button: Button,
    Alert: Alert,
    Icon: Icon,
    IconButton: IconButton,
  };

  return React.createElement(map[type] ?? type, props, children);
}

const handy = {
  show_message: (severity: 'error' | 'warning' | 'success', strings: string[]) => {
    core_api.appEvents.emit(`alert-${severity}`, strings);
  },
};

export function Funcomp(props: PanelProps<FuncompOptions>) {
  const context = React.useRef({});

  if (!props.options.render) return null;

  const render = React.useMemo(() => {
    console.log('compiling renderer');
    try {
      return Function(
        'props',
        'data',
        'React',
        'css',
        'fc',
        'context',
        props.options.render
      );
    } catch (e) {
      console.warn('failed to compile render', e);
      return e.toString();
    }
  }, [props.options.render]);

  if (typeof render === 'string') return render;

  const dashboard = core_api.dashboardSrv.getCurrent();
  const self_panel = [...dashboard.panels, dashboard.panelInEdit].find((p) => p?.id == props.id);

  const fc = {
    ...core_api,
    ...handy,
    create: create,
    dashboard: core_api.dashboardSrv.getCurrent(),
    panel: self_panel,
    format_value: (field, value) => getDisplayProcessor({field})(value),
  }

  try {
    return React.createElement(
      'div',
      {
        key: props.options.render, // force react to redraw component if render func changed
        className: css`
          overflow: hidden;
          position: relative;
          width: 100%;
          height: 100%;
        `,
      },
      render(props, props.data, React, css, fc, context.current) ??
        null
    );
  } catch (e) {
    console.warn('failed to render', e);
    return e.toString();
  }
}
