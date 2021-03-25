let bookstable = document.getElementById('book-stable');

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
    bookstable.insertAdjacentElement('beforeend', newChildren[i])
}

console.log(bookstable);
console.log(document.body);