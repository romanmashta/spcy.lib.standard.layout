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
          { text: 'Standard license' },
          { text: 'Full resolution 1920x1080 • JPEG' },
          { text: 'ID: 1030114' },
          { text: 'remove' }
        ]
      },
      { text: '$19.00' }
    ]
  };

  const todo = createInstance(Layout.Types.Row, advanced);
  const snap = getData(todo);
  expect(snap).toEqual(advanced);
  expect(snap).toMatchTastyShot('layout');
});
