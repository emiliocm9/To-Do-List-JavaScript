import { expect, test } from '@jest/globals';
import Project from '../projectconstructor';

test('Create new project', () => {
  const newProject = new Project('Closure of Plant', 'New base structure planning');

  expect(newProject).toBeDefined();
  expect(newProject).toBeTruthy();
  expect(newProject).toEqual({ name: 'Closure of Plant', description: 'New base structure planning', tasks: [] });
});

test('Wrong project creation without decscription', () => {
  const newProject = new Project('Closure of Plant');

  expect(newProject.description).toBeUndefined();
});