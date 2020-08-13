import { Element } from './element.model';
import { Row } from './row.model';
import { Image } from './image.model';
import {
  Text,
  AltText,
  H1,
  H2,
  H3,
  HH1,
  HH2,
  Subtitle,
  AltSubtitle,
  HH3,
  ButtonText,
  Caption,
  Overline
} from './typography.model';

export type ElementType =
  | Text
  | AltText
  | H1
  | H2
  | H3
  | HH1
  | HH2
  | HH3
  | Subtitle
  | AltSubtitle
  | Caption
  | ButtonText
  | Overline
  | Row
  | Image;

export interface Container extends Element {
  elements: ElementType[];
}

export const isContainer = (container: Container): container is Container =>
  (container as Container).elements !== undefined;
