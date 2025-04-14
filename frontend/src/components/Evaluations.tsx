import { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult, DraggableProvided, DroppableProvided } from 'react-beautiful-dnd';
import '../styles/Evaluations.css';

type TasksState = {
  toDo: string[];
  inProgress: string[];
  done: string[];
};

const Evaluations = () => {
  const [tasks, setTasks] = useState<TasksState>({
    toDo: [],
    inProgress: [],
    done: [],
  });

  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks((prev) => ({
        ...prev,
        toDo: [...prev.toDo, newTask],
      }));
      setNewTask('');
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // If dropped outside a valid destination
    if (!destination) return;

    // If dropped in the same location
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // Move the task between columns
    const sourceColumn = tasks[source.droppableId as keyof TasksState];
    const destinationColumn = tasks[destination.droppableId as keyof TasksState];
    const [movedTask] = sourceColumn.splice(source.index, 1);
    destinationColumn.splice(destination.index, 0, movedTask);

    setTasks({
      ...tasks,
      [source.droppableId]: sourceColumn,
      [destination.droppableId]: destinationColumn,
    });
  };

  return (
    <div className="evaluations">
      <h1>Evaluations</h1>
      <div className="evaluations-controls">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="task-input"
        />
        <button className="add-task-button" onClick={addTask}>
          Add Task
        </button>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="evaluations-columns">
          {Object.entries(tasks).map(([columnId, columnTasks]) => (
            <Droppable key={columnId} droppableId={columnId}>
              {(provided: DroppableProvided) => (
                <div
                  className={`column ${columnId}`}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <h2>{columnId.replace(/([A-Z])/g, ' $1')}</h2>
                  {columnTasks.map((task, index) => (
                    <Draggable key={task} draggableId={task} index={index}>
                      {(provided: DraggableProvided) => (
                        <div
                          className="task-card"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {task}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Evaluations;
