import React from 'react';
import moment from 'moment';
import { css } from 'emotion';

import { PanelProps } from '@grafana/data';

import { Button } from '@grafana/ui';
import { api as core_api } from './coreapi';

export interface FuncompOptions {
  render?: string;
}

function create(type: string, props: any, ...children: any[]) {
  const map = {
    Button: Button,
  };

  return React.createElement(map[type] ?? type, props, children);
}

export function Funcomp(props: PanelProps<FuncompOptions>) {
  console.log('render fun');

  if (!props.options.render) return null;

  const render = React.useMemo(() => {
    console.log('compiling renderer');
    try {
      return Function('props', 'data', 'React', 'create', 'css', 'api', 'core', props.options.render);
    } catch (e) {
      console.warn('failed to compile render', e);
      return e.toString();
    }
  }, [props.options.render]);

  if (typeof render === 'string') return render;

  try {
    return render(props, props.data, React, create, css, {}, core_api) ?? null;
  } catch (e) {
    console.warn('failed to render', e);
    return e.toString();
  }
}
