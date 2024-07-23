import { AddSticker } from '../AddSticker/AddSticker'
import { DeleteSticker } from '../DeleteSticker/DeleteSticker'
import { SetSticker } from '../SetSticker/SetSticker'
import { ViewWindow } from '../ViewWindow/ViewWindow'

export const SideMenu = () => {
    return (
        <div className="side-menu">
            <ViewWindow />
            <DeleteSticker />
            <SetSticker />
            <AddSticker />
        </div>
        
    )
}
