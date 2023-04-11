import type { CustomColumn } from "./CustomColumn"

export class CustomRow {
    Columns: Array<CustomColumn>;

    /**
     *
     */
    constructor(columns: Array<CustomColumn>) {
        this.Columns = columns
    }
}