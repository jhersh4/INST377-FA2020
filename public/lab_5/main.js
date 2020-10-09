const fruitlabel = document.querySelector('#checkbox-list-label');

const btn = document.querySelector('button2');

const fruits = ['banana', 'apple', 'kiwi', 'lime'];

const checkboxes = array(document.querySelectorAll('#flex-inner li'));

function checkiteration(FruitList, i) {
  document.checkboxes[i].textContent = FruitList[i];
  return checkboxes;
}

btn.onclick = function buttonfunction() {
  fruits.forEach(checkiteration(fruits, i));
  fruitlabel.textContent = 'Fruits';
};