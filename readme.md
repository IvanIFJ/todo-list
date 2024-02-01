# Atomic Design To-Do List App Challenge

##### Read the [project requirements, here](requirements.md).
To-Do List App using Atomic Design, Typescript and React. 

### Atomic Design elements
- **Theme Tokens**: Base for creation of components
  - Colors, Mode
- **Atoms**: The smaller and reusable piece of design, usually base html elements.
  - `Typography`, `Input`, `Button`, `Checkbox`, `Icon`
- **Molecules**: A reusable code that combines some Atoms to create ui components.
  - `IconButton`, `NewTaskForm`, `Task`, `Tab`, `Card`
- **Organism**: A combination of Molecules and Atoms to create a piece of UI that might be interactable
  - `Header`, `TaskList`, `EmptyList`, `FilterTabs` 
- **Templates**: A combination of Organisms, Molecules and Atoms to create a page layout
  - `FullWindowLayout`, `BaseAppLayout`
- **Pages**: A Templates in action, giving pages live.
  - `Welcome`, `Home`

### Entities

```ts
type Task = {
  id: string
  name: string
  completed: boolean
  createdAt: Date
}

type SessionUser = {
  name: string
}
```

### Features
- **Create Task**: Add a new task
- **Complete Task**: Mark a task as completed
- **Filter**: All, Active, Completed
- **Clear Completed**: Remove all completed tasks
- **Session User**: Display the user name
- **Theme**: Light and Dark mode
- **Local Persistense**: Save tasks in local storage
- **Responsive**: Mobile and Desktop
- **Deployment**: GithubPages at [https://ivanifj.github.io/todo-list/](https://ivanifj.github.io/todo-list/)

### Decision log
- [Vite](https://vitejs.dev/): Fast and easy to use. No SEO requirements for "private task list".
- Manual styling: No need for a CSS/UI framework, to keep the project simple and small.
