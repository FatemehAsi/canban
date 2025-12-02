import { DndContext, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import type { PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren;

export default function DndProvider({children}: Props): ReactNode{
    const sensors = useSensors(useSensor(PointerSensor));
    return(
        <DndContext sensors={sensors}>
            {children}
        </DndContext>

    )
}