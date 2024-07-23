import React, { FC } from 'react'
import { Button, Modal } from 'react-bootstrap'

interface IDeleteStickerModalProps {
    show: boolean;
    stickerHeader: string; 
    close: () => void;
    action: () => void;
}

export const DeleteStickerModal: FC<IDeleteStickerModalProps> = ({ show, stickerHeader, close, action }) => {

    return (
        <Modal
            show={show}
            onHide={close}
            centered
        >
            <Modal.Header>
                Удаление стикера
            </Modal.Header>
            <Modal.Body>
                {`Вы точно желаете удалить стикер ${stickerHeader}. Действие невозможно будет отменить.`}
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="danger"
                    onClick={action}
                >Удалить стикер</Button>
                <Button
                    variant="secondary"
                    onClick={close}
                >Закрыть</Button>
            </Modal.Footer>
        </Modal>
    )
}
