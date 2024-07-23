import { FC, useCallback, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/esm/Modal'
import StickerStore from '../../store/StickerStore';
import { IData } from '../AddSticker/AddSticker';

interface IModalProps {
    show: boolean;
    close: () => void;
    action: (data: IData) => void;
}


export const SetStickerModal: FC<IModalProps> = ({ show, close, action }) => {
    const [title, setTitle] = useState<string>(() => StickerStore.getSelectedSticker.headerText);
    const [tasks, setTasks] = useState<string[]>(() => StickerStore.getSelectedSticker.taskList.getTasks.map(task => task.description));
    

    useEffect(() => {
        setTitle(StickerStore.getSelectedSticker.headerText);
        console.log(title)
    }, [StickerStore.getSelectedSticker])
   

    const titleHandler = useCallback((e: any) => {
        e.preventDefault();
        setTitle(e.target.value);
    }, []);

    const addInputHandler = useCallback((e: any) => {
        setTasks(tasks.concat([""]));
    }, [tasks]);

    const tasksHandler = useCallback((e: any, id: number) => {
        const newArr = tasks.slice();
        newArr[id] = e.target.value;
        setTasks(newArr);
    }, [tasks]);

    const setClickHandler = () => {
        close();
        action({title, tasks});
    }

    if(!show) return null;

    return (
        <Modal
            show={show}
            onHide={close}
            centered
        >
            <Modal.Header>
                <Modal.Title>
                    Изменение стикера
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control 
                    className='mb-3'
                    placeholder='Надпись стикера'
                    value={title}
                    onChange={titleHandler}
                />
                {
                    tasks?.map((v, _) => 
                        <Form.Control
                            key={_}
                            className='mb-3'
                            placeholder={`Задача ${_}`}
                            value={tasks[_]}
                            onChange={(e) => tasksHandler(e, _)}
                        />
                    )
                }                
                <Button
                    className='align-items-end'
                    variant="primary"
                    onClick={addInputHandler}
                >+</Button>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="primary"
                    onClick={setClickHandler}
                >Изменить стикер</Button>
                <Button
                    variant="secondary"
                    onClick={close}
                >Закрыть</Button>
            </Modal.Footer>
        </Modal>
    )
}