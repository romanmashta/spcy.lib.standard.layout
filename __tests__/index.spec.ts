import '@spcy/lib.dev.tasty';
import { SchemaRepository } from '@spcy/lib.core.reflection';
import { createInstance, getData } from '@spcy/lib.core.mst-model';
import * as Layout from '../src';
import { Container, Row } from '../src';

SchemaRepository.registerTypes(Layout.Types);

test('It creates simple layout with rows', () => {
  const data: Container = {
    elements: [{ h1: 'Sample form' }, { text: 'hello user' }, { columns: [{ text: 'login' }, { text: 'password' }] }]
  };

  const todo = createInstance(Layout.Types.Container, data);
  const snap = getData(todo);
  expect(snap).toEqual(data);
  expect(snap).toMatchTastyShot('layout');
});

test('It creates advanced layout', () => {
  const advanced: Row = {
    columns: [
      { text: 'image' },
      {
        elements: [
          { subtitle: 'Standard license' },
          { altText: 'Full resolution 1920x1080 • JPEG' },
          { altText: 'ID: 1030114' },
          { buttonText: 'remove' }
        ]
      },
      { subtitle: '$19.00' }
    ]
  };

  const todo = createInstance(Layout.Types.Row, advanced);
  const snap = getData(todo);
  expect(snap).toEqual(advanced);
  expect(snap).toMatchTastyShot('layout');
});

test('It creates all typography', () => {
  const advanced: Row = {
    columns: [
      { hh1: 'hh1. Heading' },
      { hh2: 'hh2. Heading' },
      { hh3: 'hh3. Heading' },
      { h1: 'h1. Heading' },
      { h2: 'h2. Heading' },
      { h3: 'h3. Heading' },
      { subtitle: 'subtitle. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur' },
      { altSubtitle: 'altSubtitle. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur' },
      {
        text:
          'text. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.'
      },
      {
        altText:
          'altText. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.'
      },
      { buttonText: 'button text' },
      { caption: 'caption text' },
      { overline: 'overline text' }
    ]
  };

  const todo = createInstance(Layout.Types.Row, advanced);
  const snap = getData(todo);
  expect(snap).toEqual(advanced);
  expect(snap).toMatchTastyShot('layout');
});
