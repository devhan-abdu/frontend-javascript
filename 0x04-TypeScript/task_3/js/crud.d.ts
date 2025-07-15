import { RowID , RowwElement } from "./interface";
declare module './crud.js' {
   export function insertRow(row:RowwElement): RowID;
   export function deleteRow(rowId: RowID): void;
   export function updateRow(rowId: RowID , row: RowwElement): RowID;
}
