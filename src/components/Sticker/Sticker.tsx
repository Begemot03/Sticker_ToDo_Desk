import { observer } from 'mobx-react-lite';
import {FC} from 'react'
import { Group, Rect } from 'react-konva'
import { ISticker } from '../../store/StickerStore';
import { StickerHeader } from '../StickerHeader/StickerHeader'
import { TaskList } from '../TaskList/TaskList'

interface IStickerProps {
    sticker: ISticker;
    select: () => void;
    setZIndex: () => void;
}

export const Sticker: FC<IStickerProps> = observer(({ sticker, select, setZIndex }) => {

    return (
        <Group 
            draggable
            onDragStart={setZIndex}
            rotation={sticker.rotation}
        >
            <Rect 
                width={sticker.width}
                height={sticker.height}
                x={sticker.x}
                y={sticker.y}
                fill={ sticker.selected ? "#f2ece4" : "#e3d8c8"}
                shadowOffsetX={5}
                shadowOffsetY={5}
                shadowBlur={7}
                shadowColor={sticker.selected ? "#5e54c4" : "#333333"}
                onClick={select}
            />
            <StickerHeader x={sticker.x} y={sticker.y} headerText={sticker.headerText} />
            <TaskList x={sticker.x + 40} y={sticker.y + 80} taskList={sticker.taskList.getTasks} />
        </Group>
    )
})
