import React from "react";

// Статусы задачи как объект и тип
export const Status = {
  Todo: "Ожидает",
  InProgress: "В процессе",
  Done: "Выполнено"
} as const;

export type Status = typeof Status[keyof typeof Status];

interface TaskStatusProps {
  status: Status;
}

const statusColors: Record<Status, string> = {
  [Status.Todo]: "gray",
  [Status.InProgress]: "orange",
  [Status.Done]: "green"
};

const TaskStatus: React.FC<TaskStatusProps> = ({ status }) => {
  return (
    <div>
      <strong>Статус: </strong>
      <span style={{ color: statusColors[status] }}>{status}</span>
    </div>
  );
};

export default TaskStatus;