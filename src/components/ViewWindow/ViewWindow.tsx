import { observer } from 'mobx-react-lite';
import StickerStore from '../../store/StickerStore';

export const ViewWindow = observer(() => {

    return (
        <div className="view-window">
            {
                StickerStore.getStickers.map(sticker => 
                    <span 
                        key={sticker.id} 
                        onClick={() => StickerStore.select(sticker.id)}
                        className={sticker.selected ? "view-window__select" : ""}
                    >{sticker.headerText}</span>
                )
            }
        </div>
    )
})
