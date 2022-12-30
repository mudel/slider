
// Создание массива путей картинок из файлов их свойств
let arrImages = [{
    src: './images/image 2.1.png',
    ind: 'slide1',
    place: 'Rostov-on-Don \nLCD admiral',
    area: '81 m2',
    time: '3.5 months',
    cost: 'Upon request',
    placeid: 'city-nav-0',
    circleid: 'circle-0'
  }, {
    src: './images/image 2.2.png',
    ind: 'slide2',
    place: 'Sochi \nThieves',
    area: '105 m2',
    time: '4 months',
    cost: 'Upon request',
    placeid: 'city-nav-1',
    circleid: 'circle-1'
  }, {  
    src: './images/image 2.3.png',
    ind: 'slide3',
    place: 'Rostov-on-Don \nPatriotic',
    area: '93 m2',
    time: '3 months',
    cost: 'Upon request',
    placeid: 'city-nav-2',
    circleid: 'circle-2'
}];

numImage = 0;


function changeImage(forward) {
  // Функция смены картинки и текстовых полей
  // Закольцованный перебор индексов массива и замена картинки
  document.getElementById(arrImages[numImage].ind).classList.remove("active");
  document.getElementById(arrImages[numImage].placeid).classList.remove("city-nav-link-selected");
  document.getElementById(arrImages[numImage].circleid).classList.remove("active");

  if (forward) {
    if (numImage<arrImages.length-1) {numImage++;} else {numImage=0;}
  } else {
    if (numImage>0) {numImage--;} else {numImage=arrImages.length-1;}
  }
  
  document.getElementById(arrImages[numImage].ind).classList.add("active");
  document.getElementById(arrImages[numImage].placeid).classList.add("city-nav-link-selected");
  document.getElementById(arrImages[numImage].circleid).classList.add("active");
  // Замена текстовой информации
  document.getElementById('place').textContent = arrImages[numImage].place;
  document.getElementById('area').textContent = arrImages[numImage].area;
  document.getElementById('time').textContent = arrImages[numImage].time;
  document.getElementById('cost').textContent = arrImages[numImage].cost;
}


function selectImage(newNumImage) {
  // Функция прямого выбора картинки и текстовых полей
  // Замена картинки
  document.getElementById(arrImages[numImage].ind).classList.remove("active");
  document.getElementById(arrImages[numImage].placeid).classList.remove("city-nav-link-selected");
  document.getElementById(arrImages[numImage].circleid).classList.remove("active");
  numImage = newNumImage;
  document.getElementById(arrImages[numImage].ind).classList.add("active");
  document.getElementById(arrImages[numImage].placeid).classList.add("city-nav-link-selected");
  document.getElementById(arrImages[numImage].circleid).classList.add("active");
  // Замена текстовой информации
  document.getElementById('place').textContent = arrImages[numImage].place;
  document.getElementById('area').textContent = arrImages[numImage].area;
  document.getElementById('time').textContent = arrImages[numImage].time;
  document.getElementById('cost').textContent = arrImages[numImage].cost;

}

