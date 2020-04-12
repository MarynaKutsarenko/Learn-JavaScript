'use string'

const advertising = document.querySelector('.adv');
advertising.remove();

const listOfBooks = document.querySelector('.books');
const collectionsBooks = document.querySelectorAll('.book ');
const collectionsHeads = document.querySelectorAll('h2');
const collectionsUl = document.querySelectorAll('ul');
collectionsUl[0].classList.add('visibility');
const newCollectionUl = document.querySelector('.visibility');
const collectionsLi = document.querySelectorAll('li');
collectionsLi[0].classList.add('visibil');
collectionsLi[1].classList.add('visibil');
collectionsLi[2].classList.add('visibil');
collectionsLi[3].classList.add('visibil');
collectionsLi[4].classList.add('visibil');
collectionsLi[5].classList.add('visibil');
collectionsLi[6].classList.add('visibil');
collectionsLi[7].classList.add('visibil');
collectionsLi[8].classList.add('visibil');
collectionsLi[9].classList.add('visibil');
collectionsLi[10].classList.add('visibil');

const newCollectionLi = document.querySelectorAll('.visibil');

newCollectionLi[0].after(newCollectionLi[1]);
newCollectionLi[1].after(newCollectionLi[3]);
newCollectionLi[3].after(newCollectionLi[6]);
newCollectionLi[6].after(newCollectionLi[8]);
newCollectionLi[8].after(newCollectionLi[4]);
newCollectionLi[4].after(newCollectionLi[5]);
newCollectionLi[5].after(newCollectionLi[7]);
newCollectionLi[7].after(newCollectionLi[9]);

collectionsUl[5].classList.add('asynchrony');

const newCollectionUlChapter5 = document.querySelector('.asynchrony');


collectionsLi[46].classList.add('asynchron');
collectionsLi[47].classList.add('asynchron');
collectionsLi[3].classList.add('asynchron');
collectionsLi[48].classList.add('asynchron');
collectionsLi[49].classList.add('asynchron');
collectionsLi[50].classList.add('asynchron');
collectionsLi[51].classList.add('asynchron');
collectionsLi[52].classList.add('asynchron');
collectionsLi[53].classList.add('asynchron');
collectionsLi[54].classList.add('asynchron');
collectionsLi[55].classList.add('asynchron');
collectionsLi[56].classList.add('asynchron');

const newCollectionLiChapret5 = document.querySelectorAll('.asynchron');

newCollectionLiChapret5[1].after(newCollectionLiChapret5[2]);
newCollectionLiChapret5[2].after(newCollectionLiChapret5[10]);
newCollectionLiChapret5[10].after(newCollectionLiChapret5[4]);
newCollectionLiChapret5[4].after(newCollectionLiChapret5[5]);
newCollectionLiChapret5[8].after(newCollectionLiChapret5[6]);

document.body.style.backgroundImage = ('url(../image/you-dont-know-js.jpg)');

listOfBooks.prepend(collectionsBooks[1]);
listOfBooks.append(collectionsBooks[2]);
collectionsBooks[3].before(collectionsBooks[4]);
collectionsHeads[4].textContent = 'Книга 3. this и Прототипы Объектов';
collectionsHeads[4].setAttribute('style', 'color: darkkhaki');

const newLi = document.createElement('li');
newLi.textContent = 'Глава 8: За пределами ES6';
collectionsBooks[2].append(newLi);
newLi.after(collectionsLi[26]);


