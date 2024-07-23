import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import StickerStore, { ISticker } from '../../store/StickerStore'
import { Task } from '../../store/Task'
import { TaskListStore } from '../../store/TaskListStore'
import { IData } from '../AddSticker/AddSticker'
import { SetStickerModal } from '../Modals/SetStickerModal copy'

export const SetSticker = observer(() => {
    const [show, setShow] = useState<boolean>(false)

    const clickHandler = (data: IData) => {
        const selectedSticker: ISticker = StickerStore.getSelectedSticker;
        const tempSticker: ISticker = {
            id: selectedSticker.id,
            width: selectedSticker.width,
            height: selectedSticker.height,
            rotation: selectedSticker.rotation,
            headerText: data.title,
            x: selectedSticker.x,
            y: selectedSticker.y,
            selected: true,
            taskList: new TaskListStore(
                data.tasks.map(
                    (task, i) => new Task({ id: i,  description: task, done: false })
                )
            )
        };

        StickerStore.setSticker(tempSticker, selectedSticker.id)
    }

    return (
        <>
        {
            StickerStore.getSelectedSticker.id !== -1 ?
            (<><Button 
                    variant='primary'
                    className="w-100 rounded-0"
                    onClick={() => setShow(true)}
            >Изменить стикер</Button>
            <SetStickerModal 
                show={show}
                close={() => setShow(false)}
                action={clickHandler}
            /></>)
            : null
        }
        </>
    )
})
