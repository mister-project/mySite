'use strict';
// СКРИПТ ДЛЯ ПОЛУЧЕНИЯ ДАННЫХ ИЗ dataCv.json и укладки в LocalStorage по объектам
const setDataCv = (object) => {
    console.log('dataCvFromJsonToLs.js  в работе');

    fetch('/db/dataCv.json')
        .then((res) => res.json())
        .then((data) => {

            localStorage.setItem(`${object.nameObjects}`, JSON.stringify(data[object.nameObjects]))

        })


//  Удаление содержимого из LS
//     localStorage.removeItem('dataCv');

}

// Отработка объекта 'projects'
try {
    const objectProjects = {
        nameObjects: "projects"
    }
    setDataCv(objectProjects);
} catch (error) {
    alert('объект ==projects== не подгрузился из JSON - файла и/или не попал в LS')

}

// Отработка объекта 'experience'
// try {
//     const objectProjects = {
//         nameObjects: "experience"
//     }
//     getDataCv(objectProjects);
// } catch (error) {
//     console.log('объект ==experience== не подгрузился из JSON - файла и/или не попал в LS')
//
// }

