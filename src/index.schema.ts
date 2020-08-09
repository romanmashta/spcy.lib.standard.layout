/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as r from '@spcy/lib.core.reflection';
import { IndexModule as ElementsIndexSchemaModule, Types as ElementsIndexSchemaTypes } from './elements/index.schema';

export const IndexModule: r.Module = {
  $id: 'lib.standard.layout',
  $defs: {
    ...ElementsIndexSchemaModule.$defs
  }
};

export const Types = {
  ...ElementsIndexSchemaTypes
};
