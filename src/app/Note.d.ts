import { Type } from "@angular/core";

interface Note {
    id: string,
    noteHtml: string
}

interface AddResult {
    id: string
}

interface EditResult {
    Result: boolean
}