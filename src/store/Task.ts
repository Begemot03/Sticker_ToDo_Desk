import { makeAutoObservable } from "mobx";

export interface ITask extends ITaskProps {
    toogleDone: () => void;
}

interface ITaskProps {
    description: string;
    done: boolean;
    id: number;
}

export class Task {
    description: string;
    done: boolean;
    id: number;

    constructor(task: ITaskProps) {
        makeAutoObservable(this);

        this.description = task.description;
        this.done = task.done;
        this.id = task.id;
    }

    get getDescription() {
        return this.description;
    }

    get getDone() {
        return this.done;
    }

    get getTask() {
        return {
            description: this.description,
            done: this.done,
        };
    }

    set setDescription(description: string) {
        this.description = description;
    }

    toogleDone() {
        this.done = !this.done;
    }
}