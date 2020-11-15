import Task from '../taskmodule';

test('Create new Task with correct information', () => {
  const newTask = new Task('Biology Homework', 'Complete the test using your book', '10-29-2024', 'Low', false);

  expect(newTask).toBeTruthy();
  expect(newTask).toBeDefined();
  expect(newTask).toEqual({
    title: 'Biology Homework', description: 'Complete the test using your book', date: '10-29-2024', priority: 'Low', completion: false,
  });
});

test('Wrong task creation without title', () => {
  const newTask = new Task(undefined, 'Complete the test using your book', '10-29-2024', 'Low', false);

  expect(newTask.title).toBeUndefined();
  expect(newTask).toEqual({
    title: undefined, description: 'Complete the test using your book', date: '10-29-2024', priority: 'Low', completion: false,
  });
});