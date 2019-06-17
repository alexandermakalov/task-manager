export class Task {
    constructor(
        public title: string,
        public author: string,
        id?: string,
    ) { }
}

export interface Tasks {
    tasks: Task[]
}
