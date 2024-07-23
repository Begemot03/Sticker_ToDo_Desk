import { makeAutoObservable } from "mobx";
import { ITask } from "./Task";

export class TaskListStore {
    tasks: ITask[];

    constructor(tasks: ITask[]) {
        makeAutoObservable(this);
        this.tasks = tasks;
    }

    get getTasks() {
        return this.tasks;
    }
}