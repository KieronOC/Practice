// let test = document.createElement('p');
// test.innerHTML = 'I am a test';

// console.log(test);

let newTest1 = `<div>
<p>I am going inside the div</p>
<ul>
<li> A </li>
<li> B </li>
</ul>

</div>`;
let newTest2 = `<p>I am going BEFORE the div</p>`;
let newTest3 = `<p>I am going AFTER the div</p>`;
let newTest4 = `<p>I am going to be a CHILD of bookstable</p>`;

let bookstable = document.getElementById('book-stable');

let newChild0 = document.createElement('p');
newChild0.id = 'appendedchild';
newChild0.textContent = 'I am the appended child';

let z = 1000;



// let a = [];
// let b = 0;
// for (let i = 0; i < 5; i++) {
//     a[i] = i;
//     console.log(i)
//     console.log(a)
// }
// let newChild = document.createElement('p');


// let newChildren = [];
// for (let i = 0; i < 5; i++) {
//     newChildren[i] = newChild;
//     newChildren[i].innerText = i
//     console.log(i);
//     console.log(newChildren[i].innerText)
//     bookstable.appendChild(newChildren[i]);
// }
// bookstable.appendChild(newChildren[0]);
// bookstable.appendChild(newChildren[1]);

let newChild = document.createElement('p');


let newChildren = [];
for (let i = 0; i < 5; i++) {
    let w = newChild;
    w.innerText = i
    console.log(w)
    newChildren.push(w)
    console.log(i)
    console.log(newChildren[i])
    console.log(newChildren)
    bookstable.appendChild(newChildren[i])
}
bookstable.appendChild(newChildren[0]);
bookstable.appendChild(newChildren[1]);

// console.log(i);
// console.log(newChildren)
// console.log(newChildren[i].textContent);

// console.log(newChildren[i].textContent);
// console.log(i);
// console.log(newChildren)

// console.log(newChildren[0].textContent);
// console.log(newChildren[1].textContent);
// console.log(newChildren[2].textContent);
// console.log(newChildren[3].textContent);
// console.log(newChildren[4].textContent);



// for (let i = 0; i < 5; i++) {
//     bookstable.appendChild(newChildren[i])
// }

// console.log(newChildren);


// newChild.textContent = `I am new child1 with a variable inserted of ${z}`;
// let newChild1 = document.createElement('p');
// newChild1.id = 'afterend';
// let newChild2 = document.createElement('p');
// newChild2.id = 'afterbegin';
// let newChild3 = document.createElement('p');
// newChild3.id = 'beforend';

// node.innerHTML = newTest2;
// console.log(node);

// bookstable.innerHTML = newTest1 + newTest4;
// bookstable.appendChild(newChild0);
// bookstable.appendChild(newChild);
// bookstable.appendChild(newChild3);

// console.log(bookstable);


// bookstable.insertAdjacentElement("afterend", newChild);
// bookstable.insertAdjacentElement("afterbegin", newChild);
// bookstable.insertAdjacentElement("beforeend", newChild);
// bookstable.insertAdjacentElement("beforebegin", newChild);




// console.log(bookstable.childNodes);





// console.log(document.body);








// // console.log(menu);
// console.log(test.nodeValue);
// console.log(test.nodeType);
// console.log(test.nodeName);




// console.log(document.body);