/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as r from '@spcy/lib.core.reflection';
import * as m from './typography.model';

const TextType: r.TypeInfo = {
  $id: 'Text',
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

const Text: r.Prototype<m.Text> = {
  ref: { $ref: TextType.$id!, $refPackage: TextType.$package! },
  typeInfo: TextType
};

const AltTextType: r.TypeInfo = {
  $id: 'AltText',
  $package: 'lib.standard.layout',
  allOf: [
    {
      $ref: 'Element',
      $refPackage: 'lib.standard.layout'
    },
    {
      type: 'object',
      required: ['altText'],
      properties: {
        altText: {
          type: 'string'
        }
      }
    }
  ]
};

const AltText: r.Prototype<m.AltText> = {
  ref: { $ref: AltTextType.$id!, $refPackage: AltTextType.$package! },
  typeInfo: AltTextType
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

const HH1Type: r.TypeInfo = {
  $id: 'HH1',
  $package: 'lib.standard.layout',
  allOf: [
    {
      $ref: 'Element',
      $refPackage: 'lib.standard.layout'
    },
    {
      type: 'object',
      required: ['hh1'],
      properties: {
        hh1: {
          type: 'string'
        }
      }
    }
  ]
};

const HH1: r.Prototype<m.HH1> = {
  ref: { $ref: HH1Type.$id!, $refPackage: HH1Type.$package! },
  typeInfo: HH1Type
};

const HH2Type: r.TypeInfo = {
  $id: 'HH2',
  $package: 'lib.standard.layout',
  allOf: [
    {
      $ref: 'Element',
      $refPackage: 'lib.standard.layout'
    },
    {
      type: 'object',
      required: ['hh2'],
      properties: {
        hh2: {
          type: 'string'
        }
      }
    }
  ]
};

const HH2: r.Prototype<m.HH2> = {
  ref: { $ref: HH2Type.$id!, $refPackage: HH2Type.$package! },
  typeInfo: HH2Type
};

const HH3Type: r.TypeInfo = {
  $id: 'HH3',
  $package: 'lib.standard.layout',
  allOf: [
    {
      $ref: 'Element',
      $refPackage: 'lib.standard.layout'
    },
    {
      type: 'object',
      required: ['hh3'],
      properties: {
        hh3: {
          type: 'string'
        }
      }
    }
  ]
};

const HH3: r.Prototype<m.HH3> = {
  ref: { $ref: HH3Type.$id!, $refPackage: HH3Type.$package! },
  typeInfo: HH3Type
};

const SubtitleType: r.TypeInfo = {
  $id: 'Subtitle',
  $package: 'lib.standard.layout',
  allOf: [
    {
      $ref: 'Element',
      $refPackage: 'lib.standard.layout'
    },
    {
      type: 'object',
      required: ['subtitle'],
      properties: {
        subtitle: {
          type: 'string'
        }
      }
    }
  ]
};

const Subtitle: r.Prototype<m.Subtitle> = {
  ref: { $ref: SubtitleType.$id!, $refPackage: SubtitleType.$package! },
  typeInfo: SubtitleType
};

const AltSubtitleType: r.TypeInfo = {
  $id: 'AltSubtitle',
  $package: 'lib.standard.layout',
  allOf: [
    {
      $ref: 'Element',
      $refPackage: 'lib.standard.layout'
    },
    {
      type: 'object',
      required: ['altSubtitle'],
      properties: {
        altSubtitle: {
          type: 'string'
        }
      }
    }
  ]
};

const AltSubtitle: r.Prototype<m.AltSubtitle> = {
  ref: { $ref: AltSubtitleType.$id!, $refPackage: AltSubtitleType.$package! },
  typeInfo: AltSubtitleType
};

const ButtonTextType: r.TypeInfo = {
  $id: 'ButtonText',
  $package: 'lib.standard.layout',
  allOf: [
    {
      $ref: 'Element',
      $refPackage: 'lib.standard.layout'
    },
    {
      type: 'object',
      required: ['buttonText'],
      properties: {
        buttonText: {
          type: 'string'
        }
      }
    }
  ]
};

const ButtonText: r.Prototype<m.ButtonText> = {
  ref: { $ref: ButtonTextType.$id!, $refPackage: ButtonTextType.$package! },
  typeInfo: ButtonTextType
};

const CaptionType: r.TypeInfo = {
  $id: 'Caption',
  $package: 'lib.standard.layout',
  allOf: [
    {
      $ref: 'Element',
      $refPackage: 'lib.standard.layout'
    },
    {
      type: 'object',
      required: ['caption'],
      properties: {
        caption: {
          type: 'string'
        }
      }
    }
  ]
};

const Caption: r.Prototype<m.Caption> = {
  ref: { $ref: CaptionType.$id!, $refPackage: CaptionType.$package! },
  typeInfo: CaptionType
};

const OverlineType: r.TypeInfo = {
  $id: 'Overline',
  $package: 'lib.standard.layout',
  allOf: [
    {
      $ref: 'Element',
      $refPackage: 'lib.standard.layout'
    },
    {
      type: 'object',
      required: ['overline'],
      properties: {
        overline: {
          type: 'string'
        }
      }
    }
  ]
};

const Overline: r.Prototype<m.Overline> = {
  ref: { $ref: OverlineType.$id!, $refPackage: OverlineType.$package! },
  typeInfo: OverlineType
};

export const TypographyModule: r.Module = {
  $id: 'lib.standard.layout',
  $defs: {
    Text: TextType,
    AltText: AltTextType,
    H1: H1Type,
    H2: H2Type,
    H3: H3Type,
    HH1: HH1Type,
    HH2: HH2Type,
    HH3: HH3Type,
    Subtitle: SubtitleType,
    AltSubtitle: AltSubtitleType,
    ButtonText: ButtonTextType,
    Caption: CaptionType,
    Overline: OverlineType
  }
};

export const Types = {
  Text,
  AltText,
  H1,
  H2,
  H3,
  HH1,
  HH2,
  HH3,
  Subtitle,
  AltSubtitle,
  ButtonText,
  Caption,
  Overline
};
