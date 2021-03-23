let dcfFactors = [];

let i = 10;
for (let n = 0; n < 10; n++) {
    z = (1 / (1 + (i / 100)) ** n);
    dcfFactors.push(z.toFixed(4));
};

let table = document.createElement('table');
table.id = 'dcfNumbers';

let tableHtml = `
<thead>

    <tr>
        <td>Period</td>
        <td>Discount Factor</td>
    </tr>
</thead>
<tbody>
</tbody>

`;

table.innerHTML = tableHtml;

let tbody = table.getElementsByTagName('tbody')[0];

let tbodyHtml = '';
for (let factor in dcfFactors) {
    tbodyHtml += `
        <tr>
            <td>${factor}</td>
            <td>${dcfFactors[factor]}</td>
        </tr>`
}

tbody.innerHTML = tbodyHtml;
let position = document.getElementsByTagName('h2')[0];

// body.appendChild(table);
document.body.appendChild(table);

// let check = document.getElementsByTagName('body');
// console.log(check);
console.log(document.getElementsByTagName('body.innerHTML'));




console.log(position);
console.log(dcfFactors);
console.log(document.body);