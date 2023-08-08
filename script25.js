"use strict";

// У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData.
// Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения;
// стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.

// Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку.
// Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'. И все 🙂

// Но эта задача содержит несколько подзадач внутри:

// - вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;
// - вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;
// - определение того, хватает ли бюджета на оплату такого объема;
// - все числа идут без единиц измерения для упрощения, просто цифры и все;
// - функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект.

const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 110,
    },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 1000,
};

function isBubgetEnough(mall) {
  let totalArea = 0;
  let overallVolume = 0;

  mall.shops.forEach((shop) => {
    totalArea += shop.width * shop.length;
  });

  overallVolume = totalArea * mall.height;
  let totalBudjet = overallVolume * mall.moneyPer1m3;

  if (totalBudjet <= mall.budget) {
    return "Бюджета достаточно";
  } else {
    return "Бюджета недостаточно";
  }
}

console.log(isBubgetEnough(shoppingMallData));
