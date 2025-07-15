/// <reference path="crud.d.ts"/>
import { RowID, RowwElement } from "./interface";
import * as Crud from './crud.js'

const row: RowwElement = {
    firstName: "Guillaume",
    lastName: "Salive"
}

const newRowID: RowID = Crud.insertRow(row);
const updateRow: RowwElement = {...row , age:23};
const updateId:RowID = Crud.updateRow(newRowID,updateRow);
Crud.deleteRow(updateId);