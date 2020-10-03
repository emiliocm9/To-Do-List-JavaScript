class Project {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.tasks = []
  }

  addTasks(task) {
    this.tasks.push(task);
  }
}

export {Project};
