/*global page */
describe('Key UI elements', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:9000/');
  });

  it('should be titled "To-Do"', async () => {
    await expect(page.title()).resolves.toMatch('To-Do');
  });

  it('should have a key button to add a task', async () => {
    const buttonClass = await page.$eval('button#task-add-button-a', button => button.className);
    expect(buttonClass).toMatch(/task-add-button/);
  }, 10000);

  it('should have a key button to add a project', async () => {
    const buttonClass = await page.$eval('button[data-target="#modal-projects"]', button => button.className);
    expect(buttonClass).toMatch(/task-add-button/);
  }, 10000);

  it('should have a key button to display all tasks', async () => {
    const linkText = await page.$eval('a#allTasksButton', link => link.textContent);
    expect(linkText).toMatch(/Tasks/);
  }, 10000);
});
