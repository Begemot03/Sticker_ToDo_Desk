import { makeAutoObservable } from "mobx";
import { Task } from "./Task";
import { TaskListStore } from "./TaskListStore";

export interface ISticker {
    id: number;
    headerText: string;
    x: number;
    y: number;
    width: number;
    height: number;
    rotation: number;
    taskList: TaskListStore;
    selected: boolean;
}

class StickerStore {
    stickers: ISticker[] = [
        {headerText: "hello world", x: 100, y: 100, width: 400, height: 400, rotation: 1, id: 0, selected: false, taskList: new TaskListStore(
            [
                new Task({id: 1, description: "lorem i", done: false}),
                new Task({id: 2, description: "lorem i", done: false}),
                new Task({id: 3, description: "lorem i", done: false}),
            ])
        },
        {headerText: "Goodbay", x: 600, y: 600, width: 400, height: 400, rotation: -1, id: 1, selected: false , taskList: new TaskListStore(
            [
                new Task({id: 4, description: "lorem i", done: false}),
                new Task({id: 5, description: "lorem i", done: false}),
                new Task({id: 6, description: "lorem i", done: false}),
            ])
        }
    ]

    selectedSticker: ISticker = { headerText: "", x: 0, y: 0, width: 0, height: 0, rotation: 0, id: -1, selected: false , taskList: new TaskListStore([]) }

    constructor() {
        makeAutoObservable(this);
    }

    get getStickers() {
        return this.stickers;
    }

    set setStickers(stickers: ISticker[]) {
        this.stickers = stickers;
    }

    get getSelectedSticker() {
        return this.selectedSticker;
    }

    setSticker(sticker: ISticker, id: number) {
        this.stickers = this.stickers.map(v => {
            if(v.id === id) {
                return sticker;
            }

            return v;
        })
    }

    addSticker(sticker: ISticker) {
        this.stickers.push(sticker);
    }

    deleteSticker(id: number) {
        this.stickers = this.stickers.filter((sticker) => sticker.id !== id)
    }

    setStickerX(id: number, x: number) {
        this.stickers = this.stickers.map(v => {
            if(v.id === id) {
                v.x = x;
            }

            return v;
        })
    }

    setStickerY(id: number, y: number) {
        this.stickers = this.stickers.map(v => {
            if(v.id === id) {
                v.y = y;
            }

            return v;
        })
    }

    setZIndex(id: number) {
        const temp = [...this.stickers];
        const removedEl = temp.splice(temp.findIndex(v => v.id === id), 1)[0];
        temp.push(removedEl);
        this.stickers = [...temp];
    }

    select(id: number) {
        this.stickers.forEach(v => {
            if(v.id === id) {
                if(!v.selected) {
                    this.selectedSticker = v;
                    v.selected = true;
                } else {
                    this.selectedSticker = { headerText: "", x: 0, y: 0, width: 0, height: 0, rotation: 0, id: -1, selected: false , taskList: new TaskListStore([]) };
                    v.selected = false;
                }
            } else {
                v.selected = false;
            }
        })
    }
}

export default new StickerStore();