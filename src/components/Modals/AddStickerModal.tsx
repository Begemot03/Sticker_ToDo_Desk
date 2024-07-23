import { FC, useCallback, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/esm/Modal'
import { IData } from '../AddSticker/AddSticker';

interface IModalProps {
    show: boolean;
    close: () => void;
    action: (data: IData) => void;
}


export const AddStickerModal: FC<IModalProps> = ({ show, close, action }) => {
    const [title, setTitle] = useState<string>("");
    const [tasks, setTasks] = useState<string[]>([""]);
    
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

    const addClickHandler = () => {
        hideMenu();
        action({title, tasks});
    }

    const hideMenu = () => {
        close();
        setTitle("");
        setTasks([""]);
    }

    return (
        <Modal
            show={show}
            onHide={hideMenu}
            centered
        >
            <Modal.Header>
                <Modal.Title>
                    Добавление стикера
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
                    onClick={addClickHandler}
                >Добавить стикер</Button>
                <Button
                    variant="secondary"
                    onClick={hideMenu}
                >Закрыть</Button>
            </Modal.Footer>
        </Modal>
    )
}
