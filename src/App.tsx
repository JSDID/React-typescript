import TypedFunctionComponent from "./components/TypedFunctionComponent";
import Greeting from "./components/Greeting";
import GenericList from "./components/GenericList";
import List from "./components/ListProps";
import TaskStatus, { Status } from "./components/TaskStatus";

export default function App() {

  return (
    <>
      <TypedFunctionComponent />
      <Greeting name="Саша" age={33} />
      <GenericList
        title="Список фруктов"
        items={["Яблоко", "Банан", "Груша"]}
        renderItem={(fruit, idx) => <span>{idx + 1}. {fruit}</span>}
      />
      <List title="Маршрутки" items={[123, 456, 789]} />
      <TaskStatus status={Status.Todo} />
      <TaskStatus status={Status.InProgress} />
      <TaskStatus status={Status.Done} />
    </>
  )
}


