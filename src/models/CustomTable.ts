import type { CustomRow } from "./CustomRow";

export class CustomTable {
    Rows: Array<CustomRow>;

    /**
     *
     */
    constructor(rows: Array<CustomRow>) {
        this.Rows = rows;
    }
}