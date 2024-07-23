import React, { FC } from 'react'
import { Group, Line, Text } from 'react-konva'

interface IStickerHeaderProps {
    headerText: string;
    x: number;
    y: number;
}

export const StickerHeader: FC<IStickerHeaderProps> = ({headerText, x, y}) => {
    return (
        <Group>
            <Text
                align='center'
                text={headerText}
                fontSize={28}
                width={400}
                x={x}
                y={y + 28}
                fontFamily="Ubuntu"
            />
            <Line 
                points={[x + 60, y + 65, x + 200, y + 60, x + 340, y + 65]}
                strokeWidth={4}
                tension={0.5}
                stroke="#000"
                lineCap='round'
                lineJoin='round'
            />
        </Group>
    )
}
