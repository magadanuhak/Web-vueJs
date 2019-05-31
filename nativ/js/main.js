document.addEventListener('DOMContentLoaded',function () {
    let jsonDB = 0;
    const request = async () => {
        const response = await fetch('componente.json');
        const json = await response.json();
        jsonDB = json;
        let x = await computer.init(json);
        console.log(jsonDB);
        console.log("allExist");
    };
    request();
    computer.pageLoaded();
   //initializare selecturi design
    select.initSelect();
    document.querySelector('#title').addEventListener('keyup', function (el) {
        computer.changeTitle(el.target.value, '#configName' );
    });

    document.querySelector("#saveBtn").addEventListener('click', function(el){
        el.preventDefault();
        computer.saveStorage();
    });
    document.querySelector("#resetBtn").addEventListener('click', function(el){
        el.preventDefault();
        computer.clearStorage();
    });
    document.querySelector('.optionsGroup').addEventListener('change', function (el) {
        if(el.target.id !== "title" && el.target.id !== "saveBtn") {
            el.target.disabled = true;
            select.initSelect();
            select.changeSelect(el.target.id, el.target.options[el.target.selectedIndex].value, el.target.options[el.target.selectedIndex].dataset.id, jsonDB);

        }
    });
    document.querySelector('.cards').addEventListener('click', function (el) {

       if(el.target.classList.contains('collaps')){
            el.target.querySelector('.card').forEach(function (el) {
                el.classList.add('unCollaps');
                console.log('collaps');
            });
       }
    })

});
