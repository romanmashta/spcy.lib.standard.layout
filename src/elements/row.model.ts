import { Element } from './element.model';
import { Container } from './container.model';
import { Image } from './image.model';
import {
  Text,
  AltText,
  ButtonText,
  Caption,
  H1,
  H2,
  H3,
  HH1,
  HH2,
  HH3,
  Overline,
  Subtitle,
  AltSubtitle
} from './typography.model';

export type ColumnType =
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
  | Image
  | Container;

export interface Row extends Element {
  columns: ColumnType[];
}

export const isRow = (row: Row): row is Row => (row as Row).columns !== undefined;
