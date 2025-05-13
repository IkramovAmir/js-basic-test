// 1. Quyidagi kod natijasi nima bo‘ladi?

// let a = 10;

// (function () {
//   console.log(a);
//   let a = 20;
// })();

// A) 10
// B) 20
// C) undefined
// D) ReferenceError

// 2. map() va forEach() o‘rtasidagi asosiy farq nima?

// A) map() original massivni o‘zgartiradi
// B) forEach() yangi massiv qaytaradi
// C) map() yangi massiv yaratadi, forEach() esa faqat iteratsiya qiladi
// D) Ikkalasi ham bir xil

// 3. Quyidagi kod natijasi nima bo‘ladi?

// console.log(typeof (() => {}));
// A) function
// B) object
// C) arrow
// D) undefined

// 4. Quyidagi funksiya qanday funksiyaga misol?

// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     return count;
//   }
// }
// A) Callback
// B) Closure
// C) IIFE
// D) Hoisting

// 5. const bilan e'lon qilingan obyektni o‘zgartirish mumkinmi?

// A) Yo‘q, hech narsani o‘zgartirib bo‘lmaydi
// B) Ha, faqat primitive qiymat bo‘lsa
// C) Ha, faqat propertylarini o‘zgartirish mumkin
// D) Faqat qiymatini null qilish mumkin

// 6. Quyidagi kodda qanday xatolik mavjud?

// console.log(foo);
// var foo = 'hello';

// A) ReferenceError
// B) undefined chiqadi, chunki hoisting ishlaydi
// C) null chiqadi
// D) TypeError

// 7. Quyidagi kod natijasi nima?

// console.log([] + []);

// A) ""
// B) []
// C) undefined
// D) object

// 8. Quyidagi kod nima qiladi?

// [1, 2, 3].reduce((acc, curr) => acc + curr, 0);
// A) Massivni filtrlaydi
// B) Har bir elementni konsolga chiqaradi
// C) Massiv elementlarini qo‘shadi
// D) Massivni stringga aylantiradi

// 9. Quyidagilardan qaysi biri deep copy hisoblanadi?

// A) Object.assign({}, obj)
// B) JSON.parse(JSON.stringify(obj))
// C) const newObj = obj
// D) obj.clone()

// 10. Quyidagi kodda this nimani anglatadi?

// const person = {
//   name: "Ali",
//   greet: function () {
//     console.log(this.name);
//   }
// };

// person.greet();
// A) window
// B) undefined
// C) person obyektining o‘zi
// D) null
// To‘g‘ri javob: C

// 11. JavaScript'da == va === farqi nimada?
// A) Ikkalasi ham aynan bir xil solishtiradi
// B) == qiymatni, === qiymat va turini tekshiradi
// C) === faqat obyektlar uchun ishlaydi
// D) == faqat raqamlar uchun ishlaydi

// 12. Quyidagi kod natijasi nima bo‘ladi?

// let x = 1;
// if (true) {
//   let x = 2;
//   console.log(x);
// }
// console.log(x);

// A) 2 va 2
// B) 2 va undefined
// C) 2 va 1
// D) 1 va 2

// 13. Quyidagi kodda qanday xatolik yuz beradi?

// const x;
// x = 5;
// A) TypeError
// B) SyntaxError
// C) ReferenceError
// D) undefined

// 14. Quyidagi setTimeout funksiyasi qanday natija beradi?

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }
// A) 0, 1, 2
// B) 3, 3, 3
// C) 1, 2, 3
// D) 0, 0, 0

// 15. Quyidagi this nimani anglatadi?

// const obj = {
//   name: "Ali",
//   arrow: () => console.log(this.name)
// };

// obj.arrow();
// A) Ali
// B) undefined
// C) obj
// D) null
