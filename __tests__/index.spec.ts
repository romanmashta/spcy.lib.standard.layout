import '@spcy/lib.dev.tasty';
import { SchemaRepository } from '@spcy/lib.core.reflection';
import { createInstance, getData } from '@spcy/lib.core.mst-model';
import * as Layout from '../src';
import { Container } from '../src';

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
