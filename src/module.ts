import React from 'react';

import { PanelPlugin } from '@grafana/data';
import { CodeEditor, CodeEditorSuggestionItem, CodeEditorSuggestionItemKind } from '@grafana/ui';
import { Funcomp, FuncompOptions } from './funcomp';

const suggestions: CodeEditorSuggestionItem[] = [
  /*
  { kind: CodeEditorSuggestionItemKind.Field, label: 'value' },
  { kind: CodeEditorSuggestionItemKind.Property, label: 'value.text' },
  { kind: CodeEditorSuggestionItemKind.Property, label: 'value.style' },
  { kind: CodeEditorSuggestionItemKind.Property, label: 'value.html' },
  { kind: CodeEditorSuggestionItemKind.Constant, label: 'value.raw' },
  { kind: CodeEditorSuggestionItemKind.Constant, label: 'value.name' },
  { kind: CodeEditorSuggestionItemKind.Constant, label: 'value.i' },
  { kind: CodeEditorSuggestionItemKind.Field, label: 'field' },
  { kind: CodeEditorSuggestionItemKind.Constant, label: 'field.name' },
  { kind: CodeEditorSuggestionItemKind.Field, label: 'lib' },
  { kind: CodeEditorSuggestionItemKind.Property, label: 'lib.moment' },
  { kind: CodeEditorSuggestionItemKind.Field, label: 'context' },
  { kind: CodeEditorSuggestionItemKind.Constant, label: 'context.df' },
  */
];

const DEF_CODE = `/* */`;

function JsEditor({ value, onChange }: { value: string; onChange: (s: string) => void }) {
  return React.createElement(CodeEditor, {
    value,
    onBlur: onChange,
    onSave: onChange,
    language: 'javascript',
    showMiniMap: false,
    showLineNumbers: true,
    getSuggestions: () => suggestions,
    height: 400,
    // width:'100%',
  });
}

export const plugin = new PanelPlugin<FuncompOptions>(Funcomp);

plugin.setPanelOptions((builder) => {
  builder
    .addCustomEditor({
      id: 'render',
      path: 'render',
      name: 'Render JS',
      editor: JsEditor,
      defaultValue: DEF_CODE,
    });
});
