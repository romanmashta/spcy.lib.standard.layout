import { Element } from './element.model';
import { Container } from './container.model';
import { Image } from './image.model';
import { H1, H2, H3, Typography } from './typography.model';

export type ColumnType = H1 | H2 | H3 | Typography | Image | Container;

export interface Row extends Element {
  columns: ColumnType[];
}
