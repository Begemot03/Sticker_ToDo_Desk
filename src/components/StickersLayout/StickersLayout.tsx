import { observer } from 'mobx-react-lite';
import React from 'react'
import { Group } from 'react-konva';
import StickerStore from '../../store/StickerStore';
import { Sticker } from '../Sticker/Sticker';

export const StickersLayout = observer(() => {

    return (
        <Group>
        {
            StickerStore.getStickers.map(sticker => <Sticker 
                key={sticker.id}
                sticker={sticker} 
                select={() => StickerStore.select(sticker.id)}
                setZIndex={() => StickerStore.setZIndex(sticker.id)}
                />)
        }
        </Group>
    )
})
