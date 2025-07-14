# React-typescript

Пример проекта на React + TypeScript

## Структура

- `src/App.tsx` — основной компонент приложения
- `src/components/TypedFunctionComponent.tsx` — пример компонента с типизированной функцией
- `src/components/Greeting.tsx` — компонент с интерфейсом для пропсов
- `src/components/GenericList.tsx` — компонент с дженериками (generics)
- `src/components/TaskStatus.tsx` — компонент с использованием enum-like объекта для статусов

## Быстрый старт

1. Установите зависимости:
   ```bash
   npm install
   ```
2. Запустите проект:
   ```bash
   npm run dev
   ```

## Примеры использования компонентов

### TypedFunctionComponent
```tsx
import TypedFunctionComponent from "./components/TypedFunctionComponent";

<TypedFunctionComponent />
```

### Greeting
```tsx
import Greeting from "./components/Greeting";

<Greeting name="Саша" age={33} />
```

### GenericList (с дженериками)
```tsx
import GenericList from "./components/GenericList";

<GenericList
  title="Список фруктов"
  items={["Яблоко", "Банан", "Груша"]}
  renderItem={(fruit, idx) => <span>{idx + 1}. {fruit}</span>}
/>
```

### TaskStatus (с enum-like статусами)
```tsx
import TaskStatus, { Status } from "./components/TaskStatus";

<TaskStatus status={Status.Todo} />
<TaskStatus status={Status.InProgress} />
<TaskStatus status={Status.Done} />
```

## Описание TaskStatus

- Статусы определены как объект `Status`:
  - `Status.Todo` — "Ожидает"
  - `Status.InProgress` — "В процессе"
  - `Status.Done` — "Выполнено"
- Цвет статуса меняется в зависимости от значения.

---

Проект предназначен для демонстрации типизации и современных подходов в React + TypeScript.
