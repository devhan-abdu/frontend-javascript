interface Student {
    firstName:string;
    lastName:string;
    age:number;
    location:string;
}



const student1: Student = {firstName:"hanan" , lastName:"abdulshikur" , age:12 , location:"addis ababa"}
const student2: Student = {firstName:"halima" , lastName:"mahi" , age:24 , location:"burayo"}

const studentsList:Student[] = [student1 , student2];

// table formula 

const table: HTMLTableElement = document.createElement('table');
table.border = '1';
table.style.borderCollapse = 'collapse';
table.style.width = '100%'

const thead: HTMLTableSectionElement = document.createElement('thead');
const headerRow: HTMLTableRowElement =  document.createElement('tr')

const displayKeys: (keyof Student)[] = ["firstName" , "location"];

displayKeys.forEach(key => {
    const th: HTMLTableCellElement = document.createElement('th');
    th.textContent = key.charAt(0).toUpperCase()+ key.slice(1);
    th.style.padding = '8px';
    headerRow.appendChild(th);
});

thead.appendChild(headerRow);
table.appendChild(thead);

const tbody: HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach((student) => {
    const row: HTMLTableRowElement = document.createElement('tr');

    displayKeys.forEach((key)=> {
        const td: HTMLTableCellElement = document.createElement('td');
         td.textContent = String(student[key as keyof Student])
         td.style.padding= '8px';
         row.appendChild(td)
    });
    tbody.appendChild(row);  
})

table.appendChild(tbody);

document.body.appendChild(table)

