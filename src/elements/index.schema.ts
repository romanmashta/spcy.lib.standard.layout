/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as r from '@spcy/lib.core.reflection';
import { ContainerModule, Types as ContainerTypes } from './container.schema';
import { ImageModule, Types as ImageTypes } from './image.schema';
import { TypographyModule, Types as TypographyTypes } from './typography.schema';
import { ElementModule, Types as ElementTypes } from './element.schema';
import { RowModule, Types as RowTypes } from './row.schema';

export const IndexModule: r.Module = {
  $id: 'lib.standard.layout',
  $defs: {
    ...ContainerModule.$defs,
    ...ImageModule.$defs,
    ...TypographyModule.$defs,
    ...ElementModule.$defs,
    ...RowModule.$defs
  }
};

export const Types = {
  ...ContainerTypes,
  ...ImageTypes,
  ...TypographyTypes,
  ...ElementTypes,
  ...RowTypes
};
