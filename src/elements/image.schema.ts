/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as r from '@spcy/lib.core.reflection';
import * as m from './image.model';

const ImageType: r.TypeInfo = {
  $id: 'Image',
  $package: 'lib.standard.layout',
  allOf: [
    {
      $ref: 'Element',
      $refPackage: 'lib.standard.layout'
    },
    {
      type: 'object',
      required: ['image'],
      properties: {
        image: {
          type: 'string'
        }
      }
    }
  ]
};

const Image: r.Prototype<m.Image> = {
  ref: { $ref: ImageType.$id!, $refPackage: ImageType.$package! },
  typeInfo: ImageType
};

export const ImageModule: r.Module = {
  $id: 'lib.standard.layout',
  $defs: {
    Image: ImageType
  }
};

export const Types = {
  Image
};
