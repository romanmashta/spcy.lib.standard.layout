import { Element } from './element.model';

export interface Typography extends Element {
  text: string;
}

export interface H1 extends Element {
  h1: string;
}

export interface H2 extends Element {
  h2: string;
}

export interface H3 extends Element {
  h3: string;
}
