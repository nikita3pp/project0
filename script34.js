"use strict";

console.log(Math.pow(2, 2));

function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
}

function pow(x, n) {
  if (n === 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
    // pow(2, 3);
    // 2 * pow (2, 3-1) = 2 * (2 в 2 степени = 4) = 2 * 4 = 8

    // pow(4, 4);
    // 4 * pow (4, 4-1) = 4 * (4 в 3 степени = 64) = 4 * 64 = 256
  }
}

pow(2, 1); // 2
pow(2, 2); // 4
pow(2, 3); // 8
pow(2, 4); // 16

// *******************

let students = {
  js: [
    {
      name: "John",
      progress: 100,
    },
    {
      name: "Ivan",
      progress: 60,
    },
  ],

  html: {
    basic: [
      {
        name: "Peter",
        progress: 20,
      },
      {
        name: "Anna",
        progress: 18,
      },
    ],

    pro: [
      {
        name: "Sam",
        progress: 10,
      },
    ],

    semi: {
      students: [
        {
          name: "Test",
          progress: 100,
        },
      ],
    },
  },
};

// function getTotalProgressByIterarion(data) {
//   let total = 0;
//   let students = 0;

//   for (course of Object.values(data)) {
//     if (Array.isArray(course)) {
//       //   console.log(course.length);
//       students += course.length;

//       for (let i = 0; i < course.length; i++) {
//         total += course[i].progress;
//       }
//     } else {
//       for (subCourse of Object.values(course)) {
//         // console.log(Object.values(course));
//         students += subCourse.length;

//         for (let i = 0; i < subCourse.length; i++) {
//           total += subCourse[i].progress;
//         }
//       }
//     }
//   }

//   return total / students;
// }

// console.log(getTotalProgressByIterarion(students));

// вариант с рекурсией

function getTotalProgressByRecursion(data) {
  if (Array.isArray(data)) {
    let total = 0;

    for (let i = 0; i < data.length; i++) {
      total += data[i].progress;
    }
    return [total, data.length];
  } else {
    let total = [0, 0];

    for (let subData of Object.values(data)) {
      const subDataArr = getTotalProgressByRecursion(subData);
      // распространяем действие этой функции на внутренние структуры объекта
      total[0] += subDataArr[0];
      // console.log(subDataArr[0]);
      total[1] += subDataArr[1];
      // console.log(subDataArr[1]);
    }
    return total;
  }
}

const result = getTotalProgressByRecursion(students);
console.log(Math.round(result[0] / result[1]));

// мы во вложенной функции проекручиваем subData  в конструкции невложенной функции потому что subdata это массив
// будем крутить пока не переберем все объекты со студентами на всех уровнях
