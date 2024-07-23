import { observer } from 'mobx-react-lite';
import { FC } from 'react'
import { Text } from 'react-konva';
import { ITask } from '../../store/Task';

interface ITaskProps {
    task: ITask;
    id: number;
}


export const Task: FC<ITaskProps> = observer(({ task, id }) => {
    const text = `${task.description}`;

    return (
        <Text
            y={id * 30}
            fontSize={24}
            fontFamily="Ubuntu"
            wrap='char'
            text={text}
            textDecoration={task.done ? "line-through" : "none"}
            onClick={() => task.toogleDone()}
        />
    );
})
