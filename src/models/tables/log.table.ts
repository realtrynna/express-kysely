export class LogTable {
    idx: number;
    type: string;
    status: boolean;

    constructor(idx: number, type: string, status: boolean) {
        this.idx = idx;
        this.type = type;
        this.status = status;
    }
}