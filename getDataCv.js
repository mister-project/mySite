'use strict';

const getDataCv = () => {
    console.log('getDataCv в работе');
    fetch('/db/dataCv.json')
        .then(function (response) {
        return response.json()
        })
    .then(function (data) {
        console.log(data);
    })
}
getDataCv();