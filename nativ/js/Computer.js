class Computer{
    config  = {
       "ram" : [],
        "cpu" : []
    };
    changeTitle(text, element){
        document.querySelector(element).innerText = text;
        this.config.name = text;
    }
    init(json) {
        if(this.getStorage() == undefined || this.getStorage().length == 0) {
            select.createSelect("motherboard", "Motherboard", select.createOptions(json.motherboard.motherboards));
        } else {
            let config = JSON.parse(this.getStorage());
            document.querySelector(".optionsGroup").innerHTML = "";
            this.changeTitle(config.name, "#configName");

            Object.keys(config).forEach(function(key) {
                if( key +"" !== "name" ){
                    if(Array.isArray(config[key])){
                        config[key].forEach(
                            function (el) {
                                card.create(el.img, el.name, [], el.price, key);
                            }
                        );
                    }
                    else{
                        card.create(config[key].img, config[key].name, [], config[key].price, key);
                    }
                }

            });

        }
    }
    pageLoaded(){
        localStorage.setItem("price" , 0);
    }
    updatePrice(price){
        let currentPrice =  parseInt(localStorage.getItem("price")) + parseInt( price );
        localStorage.setItem("price" , currentPrice);
        document.querySelector('#totalPrice').innerText = currentPrice;
    }
    saveStorage(){
        let protoConfig = {
            "motherboard" : "",
            "cpu": [],
            "ram": [],
            "mem" : "",
            "case" : "",
            "name" : ""
        };
        let error_text = "";
        let error = false;
        let comp = this;
        Object.keys(protoConfig).forEach(function(key) {
            if(!comp.config.hasOwnProperty(""+ key + "" )){
                error = true;
                error_text += " " +key;
            } else {
                if(comp.config[key].length == 0){
                    error = true;
                    error_text += " | " + key;
                }
            }
        });
        if( error ){
            M.toast({html: `Pentru a salva va rugam sa completati cimpurile :  ${error_text}`});

        } else {
            M.toast({html: `Salvat cu succes!`});
            document.querySelector(".optionsGroup").innerHTML = "";
        }
        localStorage.setItem("config", JSON.stringify(this.config));
        console.log('storage saved');
    }
    getStorage(){
        let config = localStorage.getItem("config");
        return config;
    }
    clearStorage(){
        localStorage.clear();
        location.reload();
    }
}