import React from 'react';
import moment from 'moment';
import { css } from 'emotion';

import { PanelProps } from '@grafana/data';

import { Button } from '@grafana/ui';
import { api, api as core_api } from './coreapi';

export interface FuncompOptions {
  render?: string;
}

function create(type: string, props: any, ...children: any[]) {
  const map = {
    Button: Button,
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
        'create',
        'css',
        'handy',
        'core',
        'context',
        'dashboard',
        'self_panel',
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
  const handy_funcs = {
    ...handy,
  };

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
      render(props, props.data, React, create, css, handy_funcs, core_api, context.current, dashboard, self_panel) ??
        null
    );
  } catch (e) {
    console.warn('failed to render', e);
    return e.toString();
  }
}
