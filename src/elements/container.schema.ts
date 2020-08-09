/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as r from '@spcy/lib.core.reflection';
import * as m from './container.model';

const ElementTypeType: r.TypeInfo = {
  $id: 'ElementType',
  $package: 'lib.standard.layout',
  oneOf: [
    {
      $ref: 'Row',
      $refPackage: 'lib.standard.layout'
    },
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
    }
  ]
};

const ElementType: r.Prototype<m.ElementType> = {
  ref: { $ref: ElementTypeType.$id!, $refPackage: ElementTypeType.$package! },
  typeInfo: ElementTypeType
};

const ContainerType: r.TypeInfo = {
  $id: 'Container',
  $package: 'lib.standard.layout',
  allOf: [
    {
      $ref: 'Element',
      $refPackage: 'lib.standard.layout'
    },
    {
      type: 'object',
      required: ['elements'],
      properties: {
        elements: {
          type: 'array',
          items: {
            $ref: 'ElementType',
            $refPackage: 'lib.standard.layout'
          }
        }
      }
    }
  ]
};

const Container: r.Prototype<m.Container> = {
  ref: { $ref: ContainerType.$id!, $refPackage: ContainerType.$package! },
  typeInfo: ContainerType
};

export const ContainerModule: r.Module = {
  $id: 'lib.standard.layout',
  $defs: {
    ElementType: ElementTypeType,
    Container: ContainerType
  }
};

export const Types = {
  ElementType,
  Container
};
