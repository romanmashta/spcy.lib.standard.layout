/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as r from '@spcy/lib.core.reflection';
import * as m from './typography.model';

const TypographyType: r.TypeInfo = {
  $id: 'Typography',
  $package: 'lib.standard.layout',
  allOf: [
    {
      $ref: 'Element',
      $refPackage: 'lib.standard.layout'
    },
    {
      type: 'object',
      required: ['text'],
      properties: {
        text: {
          type: 'string'
        }
      }
    }
  ]
};

const Typography: r.Prototype<m.Typography> = {
  ref: { $ref: TypographyType.$id!, $refPackage: TypographyType.$package! },
  typeInfo: TypographyType
};

const H1Type: r.TypeInfo = {
  $id: 'H1',
  $package: 'lib.standard.layout',
  allOf: [
    {
      $ref: 'Element',
      $refPackage: 'lib.standard.layout'
    },
    {
      type: 'object',
      required: ['h1'],
      properties: {
        h1: {
          type: 'string'
        }
      }
    }
  ]
};

const H1: r.Prototype<m.H1> = {
  ref: { $ref: H1Type.$id!, $refPackage: H1Type.$package! },
  typeInfo: H1Type
};

const H2Type: r.TypeInfo = {
  $id: 'H2',
  $package: 'lib.standard.layout',
  allOf: [
    {
      $ref: 'Element',
      $refPackage: 'lib.standard.layout'
    },
    {
      type: 'object',
      required: ['h2'],
      properties: {
        h2: {
          type: 'string'
        }
      }
    }
  ]
};

const H2: r.Prototype<m.H2> = {
  ref: { $ref: H2Type.$id!, $refPackage: H2Type.$package! },
  typeInfo: H2Type
};

const H3Type: r.TypeInfo = {
  $id: 'H3',
  $package: 'lib.standard.layout',
  allOf: [
    {
      $ref: 'Element',
      $refPackage: 'lib.standard.layout'
    },
    {
      type: 'object',
      required: ['h3'],
      properties: {
        h3: {
          type: 'string'
        }
      }
    }
  ]
};

const H3: r.Prototype<m.H3> = {
  ref: { $ref: H3Type.$id!, $refPackage: H3Type.$package! },
  typeInfo: H3Type
};

export const TypographyModule: r.Module = {
  $id: 'lib.standard.layout',
  $defs: {
    Typography: TypographyType,
    H1: H1Type,
    H2: H2Type,
    H3: H3Type
  }
};

export const Types = {
  Typography,
  H1,
  H2,
  H3
};
