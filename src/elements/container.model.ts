import { Element } from './element.model';
import { Row } from './row.model';
import { H1, H2, H3, Typography } from './typography.model';
import { Image } from './image.model';

export type ElementType = Row | H1 | H2 | H3 | Typography | Image;

export interface Container extends Element {
  elements: ElementType[];
}

export const isContainer = (container: Container): container is Container =>
  (container as Container).elements !== undefined;
