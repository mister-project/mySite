'use strict'
// CКРИПТ ДЛЯ ЗАБОРА ДАННЫХ ИЗ LOCALESTORAGE
//Чтение содержимого из LS и укладка в переменную

const getDataCv = (object) => {
    console.log('функция getDataCv  в работе' )

const dataCv = JSON.parse(localStorage.getItem(object.nameObjects));
dataCv.forEach(el => {

    const projectsContainer = document.querySelector('.projects_container');
    console.log(el["nameProject"])
    const projectUnit = document.createElement('div')

    projectsContainer.appendChild(projectUnit);
    projectUnit.innerText = el["nameProject"];



})
}
try {
    const objectProjects = {
        nameObjects: "projects"
    }
    getDataCv(objectProjects);
} catch (error) {
    alert('объект ==projects== не подгрузился из LS')

}