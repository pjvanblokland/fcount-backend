var model = null;
//"https://whispering-escarpment-17935.herokuapp.com/";
var numcode = null;

const TALEN = [
    { id: 0, naam: "English", code: "eng" },
    { id: 1, naam: "Deutsch", code: "eng" },
    { id: 2, naam: "Türkçe", code: "eng" },
    { id: 3, naam: "Nederlands", code: "ned" },
    { id: 4, naam: "Polski", code: "eng" },
    { id: 5, naam: "Español", code: "eng" },
    { id: 6, naam: "Svenska", code: "eng" },
    { id: 7, naam: "Français", code: "eng" },
    { id: 8, naam: "Пусский", code: "eng" },
    { id: 9, naam: "Italiano", code: "eng" },
    { id: 10, naam: "中文", code: "eng" },
    { id: 11, naam: "日本語", code: "eng" },
    { id: 12, naam: "Português", code: "eng" }
];

function sluitdialogs() {
    if ($("#dialog-code").dialog("isOpen")) {
        $("#dialog-code").dialog("close");
    }

    if ($("#dialog-internet").dialog("isOpen")) {
        $("#dialog-internet").dialog("close");
    }
}

function start_tweedepagina() {
    model.firstPage(false);
    actieve_code = 0;
    $("#tweede_pagina").css("display", "block");
}

function testcode() {
    var valid;
    var numcode = +model.numcode();
    numcode = parseInt(numcode, 10);
    valid = true;
    if (isNaN(numcode)) {
        valid = false;
    }
    if (valid) {
        valid = ((numcode >= 100000) && numcode < 1000000);
    }
    if (!valid) {
        alert(geen_correcte_code[taal]);
    }
    return valid;
}

function startheroku() {
    // Direct naar de graph.html in hoofdfolder
    url = "graph.html?dataset=" + model.numcode();
    window.open(url, "_blank");
}

function starten(toonheroku) {//toonheroku=true betekend ga naar grafiek en anders naar de F-test
//  console.log('starten   ', model.numcode(), toonheroku);
    if (model.numcode() == "123446") {//je weet zeker dat deze pagina bestat
        if (toonheroku) {
            startheroku();
        } else {
            start_tweedepagina();
        }
    } else {
        if (testcode()) { //is model.numcode() een valide nummer 6 cijfers
            //naamurl = heroku + 'exists?nummer=' + model.numcode()+'&code=0';
            naamurl = heroku + 'bestaat?nummer=' + model.numcode();
            $.getJSON(naamurl, function (data) {
                if (data.exists) {
                    if (toonheroku) {//toon de grafiek
                        startheroku();
                    } else start_tweedepagina();// ga naar de tekst 
                } else
                    alert(vulin(dataset_bestaat_niet[taal], model.numcode())); //geef waarschuwing want de dataset bestaat niet
            });
        }

    }
}


function sluitdialogs() {
    if ($("#dialog-code").dialog("isOpen")) {
        $("#dialog-code").dialog("close");
    }

    if ($("#dialog-internet").dialog("isOpen")) {
        $("#dialog-internet").dialog("close");
    }
}



function bestaat_nummer_code(nummer, code, dialogs) {
    var url;
    var naamurl = heroku + 'exists/?number=' + nummer + '&code=' + code;
    console.log(naamurl);

    sluitdialogs();
    if (nummer == "123446") {
        switch (code) {
            case nieuw:
                alert(dataset_betaat_al[taal]);
                break;
            case schoon:
                if (confirm(vulin(ben_zeker[taal], 123446))) {
                    naamurl = heroku + "clear?number=123446";
                    $.getJSON(naamurl, function (data) {
                        alert(vulin(made_empty[taal], 123446));
                    });
                }
                break;
            case verwijder:
                alert(dataset_niet_verwijderen[taal]);
                break;
        }

    } else {
        //  if ((code == schoon) || (code == nieuw) || (code == verwijder)) {


        //"testen op 123446"
        $.getJSON(naamurl, function (data) {
            console.log('antwoord naamurl ', naamurl, 'data ', data);
            switch (code) {
                case nieuw:
                    if (data.exists) { //nieuw
                        alert(vulin(dataset_created, nummer));
                    } else {
                        alert(vulin(dataset_betaat_al[taal], nummer));
                    }
                    break;
                case schoon:
                    if (data.exists) {

                        alert(vulin(made_empty[taal], 123446));

                    } else {
                        alert(vulin(Dataset_bestaat_niet[taal], nummer));
                    }
                    break;
                case verwijder:
                    if (data.exists) {
                        if (confirm(vulin(ben_zeker_verwijderen[taal], nummer))) {
                        } else {
                            alert(vulin(data_set_bestaat_niet[taal], nummer));
                        }
                        break;
                    }
            };
        })
    }
}

function Model() {

    var self = this, i;
    this.url = ko.observable('help');
    this.M_TALEN = TALEN;
    this.selectedTaal = ko.observable(-1);
    this.selectedTaal.subscribe(function () {
        taal = self.selectedTaal();
        if (taal >= 0) {
            localStorage.setItem('language', taal);
            self.url("../help/" + self.M_TALEN[taal].code + "/index.html?fcount.htm");
            zettaal(taal);

        }

    });

    this.aantalkeer = ko.observable(0);
    this.firstPage = ko.observable(true);
    this.numcode = ko.observable(123446);

    this.nieuwcode = ko.observable("");

    this.nog_insturen = ko.observable(true);
    this.nog_insturen.subscribe(function () {
        if (!(self.nog_insturen())) {
            self.text_OK(view_dataset[taal]);
        }
    });

    this.text_OK = ko.observable(alg_OK[0]); // Start met Engels, wordt later bijgewerkt
    this.contact_internet = ko.observable(-1);
    //-1 vraag om te beginnen //kan alleen bij bestaande code
    //0 new Is deze dataset echt nieuw  en geef niet leeg wachtwoord
    //1  //clear bestaat dataset en vraag om wachtwoord en bevestiging
    //2  //delete dataset dataset en vraag om wachtwoord en bevestiging




}
