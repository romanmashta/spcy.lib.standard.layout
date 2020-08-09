/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as r from '@spcy/lib.core.reflection';
import * as m from './element.model';

const ElementType: r.TypeInfo = {
  $id: 'Element',
  $package: 'lib.standard.layout',
  type: 'object',
  properties: {
    xs: {
      type: 'string'
    },
    sm: {
      type: 'string'
    },
    md: {
      type: 'string'
    },
    lg: {
      type: 'string'
    },
    xl: {
      type: 'string'
    }
  }
};

const Element: r.Prototype<m.Element> = {
  ref: { $ref: ElementType.$id!, $refPackage: ElementType.$package! },
  typeInfo: ElementType
};

export const ElementModule: r.Module = {
  $id: 'lib.standard.layout',
  $defs: {
    Element: ElementType
  }
};

export const Types = {
  Element
};
