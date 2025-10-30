function bestaat_nummer_code(nummer, code) {//de actie is ondernomen en wordt gemeld aan de opdrachtgever

    var naamurl = heroku + 'exists/?number=' + nummer + '"&code=' + code;
    console.log(naamurl);

    sluitdialogs();
    if (nummer == "123446") {
        switch (code) {
            case nieuw:
                alert(dataset_bestaat_al[taal]);
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
        $.getJSON(naamurl, function (data) {
            console.log('antwoord naamurl ', naamurl, 'data ', data);
            switch (code) {
                case nieuw: //wachtwoord vereist
                    if (data.exists) { //nieuw
                        alert(vulin(dataset_created, nummer));
                    } else {
                        alert(vulin(dataset_betaat_al[taal], nummer));
                    }
                    break;
                case schoon: //clear  wachtwword vereist
                    if (!data.exists) {
                        alert(vulin(Dataset_bestaat_niet[taal], nummer));
                    }
                    break;
                case verwijder:
                    if (data.exists) {

                        alert(dataset_verwijderd[taal]);
                    } else {
                        alert(vulin(data_set_bestaat_niet[taal], nummer));
                    }
                    break;
            }
        })
    };
}
