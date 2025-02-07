document.addEventListener("DOMContentLoaded", function () {

    // const split = (txt = "", separator = "") => {
    //     if (txt !== undefined && separator !== undefined) {
    //         let array = [];
    //         let word = "";
    //         for (let index = 0; index < txt.length; index++) {
    //             const letter = txt[index];
    //             if (letter !== separator) {
    //                 word += letter;
    //                 if (index === txt.length - 1) {
    //                     array.push(word);
    //                     word = "";
    //                 }
    //                 continue;
    //             }
    //             array.push(word);
    //             word = "";
    //         }
    //         return array;
    //     }
    // }

    // const reverse = (txt = "") => {
    //     let reversedTxt = "";
    //     for (let index = txt.length - 1; index >= 0; index--) {
    //         const letter = txt[index];
    //         reversedTxt += letter;
    //     }
    //     return reversedTxt;
    // }

    // const replace = (text = "", searchValue, replaceValue) => {
    //     let newText = "";
    //     for (let index = 0; index < text.length; index++) {
    //         const letter = text[index];
    //         if (letter === searchValue) {
    //             newText += replaceValue;
    //             continue;
    //         }
    //         newText += letter;
    //     }
    //     return newText;
    // }

    // const Func = (text, callBack1, callBack2, callBack3, separator, searchValue, replaceValue) => {
    //     let array = callBack1(text, separator);
    //     for (let index = 0; index < array.length; index++) {
    //         let element = array[index];
    //         element = callBack2(element);
    //         element = callBack3(element, searchValue, replaceValue);
    //         array[index] = element;
    //     }
    //     return array;
    // }
    // const newArr = Func("Jabb#arli Afi##g Ta#yy#ar o#gh#l#u", split, reverse, replace, " ", "#", "");
    // console.log(newArr);

    // function GetData() {
    //     console.log(Object.entries(arguments));
    // }

    // GetData(1, 2, 3, 4, 5);

    // (function () { console.log("Print data") })();
    // (function () { console.log("object1") })();
    // (function () { console.log("object2") })();

    // Pattern();
    // function Pattern(number = 41) {
    //     let spaces = Math.floor(number / 2);
    //     let stars = 1;
    //     let row = "";
        
    //     for (let floorIndex = 0; floorIndex < number; floorIndex++) {
    //         // İlk kısmı (üst yarıyı) ve alt kısmı kontrol et
    //         if (floorIndex <= number / 2) {
    //             // Yıldızları artır, boşlukları azalt
    //             stars += 2;
    //             spaces -= 1;
    //         } else {
    //             // Alt kısım (dönüş) - yıldızları azalt, boşlukları artır
    //             stars -= 2;
    //             spaces += 1;
    //         }
    
    //         // Boşlukları ekle
    //         for (let k = 0; k < spaces; k++) {
    //             row += " ";
    //         }
    
    //         // Yıldızları ekle
    //         for (let z = 0; z < stars; z++) {
    //             row += "*";
    //         }
    
    //         // Boşlukları tekrar ekle
    //         for (let j = 0; j < spaces; j++) {
    //             row += " ";
    //         }
    
    //         // Satırı yazdır
    //         console.log(row);
    //         row = ""; // Row'u sıfırla
    //     }
    // }
    
    // Pattern();
    // const propCount = Number(prompt("Please enter count of properties: "));
    // let obj = {};
    // for(let index = 0; index < propCount; index++)
    // {
    //     const propNameAndValue = prompt("Please enter property name and value: ");
    //     obj["property=" + propNameAndValue.split(" ")[0]] = propNameAndValue.split(" ")[1]
    // }
    // function createUser(name, surname)
    // {
    //     return{
    //         name,
    //         surname
    //     }
    // }
    // const newUser = createUser();
    // console.log("named" in newUser);
});










//             *
//            ***
//           *****
//          *******
//         *********
//        ***********
//       *************
//      ***************
//     *****************
//    *******************
//   *********************
//  ***********************
// *************************

