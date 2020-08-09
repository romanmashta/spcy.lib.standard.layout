/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as r from '@spcy/lib.core.reflection';
import * as m from './row.model';

const ColumnTypeType: r.TypeInfo = {
  $id: 'ColumnType',
  $package: 'lib.standard.layout',
  oneOf: [
    {
      $ref: 'H1',
      $refPackage: 'lib.standard.layout'
    },
    {
      $ref: 'H2',
      $refPackage: 'lib.standard.layout'
    },
    {
      $ref: 'H3',
      $refPackage: 'lib.standard.layout'
    },
    {
      $ref: 'Typography',
      $refPackage: 'lib.standard.layout'
    },
    {
      $ref: 'Image',
      $refPackage: 'lib.standard.layout'
    },
    {
      $ref: 'Container',
      $refPackage: 'lib.standard.layout'
    }
  ]
};

const ColumnType: r.Prototype<m.ColumnType> = {
  ref: { $ref: ColumnTypeType.$id!, $refPackage: ColumnTypeType.$package! },
  typeInfo: ColumnTypeType
};

const RowType: r.TypeInfo = {
  $id: 'Row',
  $package: 'lib.standard.layout',
  allOf: [
    {
      $ref: 'Element',
      $refPackage: 'lib.standard.layout'
    },
    {
      type: 'object',
      required: ['columns'],
      properties: {
        columns: {
          type: 'array',
          items: {
            $ref: 'ColumnType',
            $refPackage: 'lib.standard.layout'
          }
        }
      }
    }
  ]
};

const Row: r.Prototype<m.Row> = {
  ref: { $ref: RowType.$id!, $refPackage: RowType.$package! },
  typeInfo: RowType
};

export const RowModule: r.Module = {
  $id: 'lib.standard.layout',
  $defs: {
    ColumnType: ColumnTypeType,
    Row: RowType
  }
};

export const Types = {
  ColumnType,
  Row
};
