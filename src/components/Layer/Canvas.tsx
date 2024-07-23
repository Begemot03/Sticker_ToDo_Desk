import { useCallback, useEffect, useState } from 'react';
import { Layer, Stage} from 'react-konva';
import { StickersLayout } from '../StickersLayout/StickersLayout';

export const Canvas = () => {
    const [scale, setScale] = useState<number>(1);

    const wheelHandler = useCallback((e: WheelEvent) => {
        e.preventDefault();
        if(e.clientX > Math.max(150, 0.15 * window.innerWidth)) {
            setScale(scale + e.deltaY / Math.abs(e.deltaY) / 50);
        }
        
    }, [scale]);

    useEffect(() => {
        window.addEventListener("wheel", wheelHandler, false);

        return () => window.removeEventListener("wheel", wheelHandler, false);
    }, [scale, wheelHandler])

    return (
        <Stage draggable scale={{ x: scale, y: scale }} width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <StickersLayout />
            </Layer>
        </Stage>
    )
}
