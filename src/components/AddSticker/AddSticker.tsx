import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import StickerStore from '../../store/StickerStore'
import { Task } from '../../store/Task'
import { TaskListStore } from '../../store/TaskListStore'
import { AddStickerModal } from '../Modals/AddStickerModal'

export interface IData {
    title: string;
    tasks: string[];
}

export const AddSticker = observer(() => {
    const [counter, setCounter] = useState(2);
    const [show, setShow] = useState(false);

    const clickHandler = (data: IData) => {
        const taskList = data.tasks.filter(v => v !== "");

        StickerStore.addSticker({headerText: data.title, x: 100, y: 100, width: 400, height: 400, rotation: Math.random(), selected: false, id: counter, taskList: new TaskListStore(
            taskList.map(
                (task, _) => new Task({ id: _, description: task, done: false })
            )
        )});
        setCounter(counter + 1);
    }

    return (
        <>
            <Button 
                variant='primary'
                className="w-100 rounded-0"
                onClick={() => setShow(true)}
            >
                Добавить стикер
            </Button>
            <AddStickerModal
                show={show}
                close={() => setShow(false)}
                action={clickHandler}
            />
        </>   
    )   
})