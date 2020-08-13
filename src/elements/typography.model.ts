import { Element } from './element.model';

export interface Text extends Element {
  text: string;
}

export interface AltText extends Element {
  altText: string;
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

export interface HH1 extends Element {
  hh1: string;
}

export interface HH2 extends Element {
  hh2: string;
}

export interface HH3 extends Element {
  hh3: string;
}

export interface Subtitle extends Element {
  subtitle: string;
}

export interface AltSubtitle extends Element {
  altSubtitle: string;
}

export interface ButtonText extends Element {
  buttonText: string;
}

export interface Caption extends Element {
  caption: string;
}

export interface Overline extends Element {
  overline: string;
}
