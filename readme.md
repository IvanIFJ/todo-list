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
- [Vite](https://vitejs.dev/): Fast and easy to use. No SEO requirements since it is a "private task list app"
- Manual styling: Few components, no need for a UI framework like Material, Tailwind, Ant or similar
- CSS-in-JS ( [styled-components](https://styled-components.com/) ) to style components and manage theme tokens
- [Lucid Icons](https://lucide.dev/) for the svg icons ( tree-shakable )
- [Zustand](https://github.com/pmndrs/zustand) for state management.
- Used [unDraw](https://undraw.co/illustrations) for custom svg illustrations

### Work in progress
- [x] Add logger middleware track state
- [x] Persist state on localstorage
- [x] Add unit tests ensure state evolution
- [x] Add integration tests to ensure user interactions
- [x] Add Edit Task feature
- [x] Add resnposive layout
- [x] Fix todo x task -> "To-Do List" is an app that allows users to manage tasks
- [x] Add SideMenu to change theme and clear all tasks
- [x] Create other theme variant
- [ ] Enhance assecibility support
- [ ] Add custom linter rules
- [ ] Add task filters
- [ ] Add to docs: run, test, deploy, build, tooling
