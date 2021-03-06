'use strict';

// В рамках домашнего задания к лекции «Способы поиска нужного HTML-элемента»

// Описание

// Необходимо реализовать поведение выпадащего списка. При клике на кнопку «Мой профиль» (<div class="wrapper-dropdown">) ниже должно появляться выпадающее меню. При повторном клике на кнопку или на один из пунктов выпадающего меню (<li>) оно должно закрыться.

// Интерфейс

// Видимость выпадающего меню следует регулировать классом active на теге <div class="wrapper-dropdown">.

const menuList = document.getElementsByClassName('wrapper-dropdown');

menuList[0].onclick = function() {
  menuList[0].classList.toggle('active');
}