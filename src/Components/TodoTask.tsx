import React from "react";
import { ITask } from "../interfaces";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName} | Before {task.deadline} Days</span>
       
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        Delete Task
      </button>
    </div>
  );
};

export default TodoTask;
