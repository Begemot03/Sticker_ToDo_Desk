import { observer } from 'mobx-react-lite';
import React, { FC } from 'react'
import { Group } from 'react-konva';
import { ITask } from '../../store/Task';
import { Task } from '../Task/Task';

interface ITaskListProps {
    x: number;
    y: number;
    taskList: ITask[];
}

export const TaskList: FC<ITaskListProps> = observer(({ x, y, taskList }) => {

    return (
        <Group x={x} y={y}>
            {
                taskList.map((task, id ) => <Task key={task.id} task={task} id={id} />)
            }
        </Group>
    )
})
