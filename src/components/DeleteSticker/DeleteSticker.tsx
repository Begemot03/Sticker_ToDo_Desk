import { observer } from 'mobx-react-lite';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import StickerStore from '../../store/StickerStore';
import { DeleteStickerModal } from '../Modals/DeleteStickerModal';
import { StickerHeader } from '../StickerHeader/StickerHeader';

export const DeleteSticker = observer(() => {
    const [show, setShow] = useState<boolean>(false);

    return (
        <>
        {
            StickerStore.getSelectedSticker.id !== -1 ? 
            (<><Button
                variant='danger'
                className="w-100 rounded-0"
                onClick={() => setShow(true)}
            >
                Удалить стикер
            </Button>
            <DeleteStickerModal 
                show={show}
                action={() => {
                    setShow(false);
                    StickerStore.deleteSticker(StickerStore.getSelectedSticker.id)
                }}
                stickerHeader={StickerStore.getSelectedSticker.headerText}
                close={() => setShow(false)}
            /></>)
            : null
        }
        </>
    )
})