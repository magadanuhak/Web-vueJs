class Select{
    initSelect(){
        M.AutoInit();
    }
    createOption(value, label, dataId ){

        return `<option value="${value}" data-id="${dataId}" >${label}</option>`;
    }
    createOptions(element){
        let options = [];
        let sel = this;
        element.forEach(function (el, index) {
            if(el.hasOwnProperty("disabled")){
            } else {
                options.push(sel.createOption(el.price, el.name, index));
            }
        });
        let optionsHTML = options.join('');
        return options;
    }
    createSelect(id, label, options){
        let parent = document.querySelector(`.${id}Slot`);
        parent.insertAdjacentHTML('afterBegin',
            `
        <div class="processor">        
            <select id="${id}">
                <option value="" disabled selected>Alege ${label}</option>
                ${options}
            </select>
            <label>${label}</label>
        </div>`
        ) ;
        console.log("Creare Select"+ label);
        this.initSelect();
    }
    changeSelect(id,value,dataId,myArr) {
        let object;
        let sel = this;
        switch (id) {
            case "cpu" :
                object = myArr.cpu.cpus[dataId];
                card.create( object.img, object.name, ["Cores : " + object.cores, "Threads : " + object.threads, "Frequence : " + object.frequency + "GHZ", object.socket], object.price, id);
                computer.config.cpu.push(object);
                break;
            case "motherboard"  :
                object = myArr.motherboard.motherboards[dataId];
                card.create( object.img, object.name, [`Socket :   ${object.socket}` , `Ram : ${object.ddr}`, `Format :  ${object.format}` ], object.price, id);
                let cpus = [];
                let rams = [];
                myArr.cpu.cpus.forEach(function(cpu){
                    if(cpu.socket !== object.socket){
                        cpu.disabled = true;
                    }
                    cpus.push(cpu);
                });
                console.log(cpus);
                myArr.ram.rams.forEach(function(ram){
                    if(ram.ddr !== object.ddr){
                        ram.disabled = true;
                    }
                    rams.push(ram);
                });
                for(let i = 0; i < object.cpus; i ++ ){
                    sel.createSelect("cpu", "Processor", sel.createOptions(cpus));
                }
                for(let i = 0; i < object.rams; i ++ ){
                    sel.createSelect("ram", "Ram", sel.createOptions(rams));
                }
                sel.createSelect("mem", "Memory", sel.createOptions(myArr.mem.mems));
                sel.createSelect("case", "Case", sel.createOptions(myArr.case.cases));
                computer.config.motherboard = object;
                (object.cpus > 1) ? document.querySelector(".cpu_card").classList.add("collaps") : "";
                break;
            case "ram"  :
                object = myArr.ram.rams[dataId];
                card.create( object.img, object.name, ["Memory : " + object.capacity, "DDR : " + object.ddr], object.price, id);
                computer.config.ram.push(object);
                break;
            case "mem" :
                object = myArr.mem.mems[dataId];
                card.create( object.img, object.name, ["Capacity : " + object.capacity, "Type : " + object.type], object.price, id);
                computer.config.mem = object;
                break;
            case "case":
                object = myArr.case.cases[dataId];
                card.create( object.img, object.name, ["Format : " + object.type ], object.price, id);
                computer.config.case = object;
                break;

        }
        M.AutoInit();



    }
}