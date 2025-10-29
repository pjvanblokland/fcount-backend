
const alg_annuleer = ["Cancel", "Abbruch", "İptal et", "Annuleren", "Anuluj", "Cancelar", "Avbryt", "Annuler", "отменить", "Cancella", "取消", "キャンセル", "Cancelar"];
const alg_hoevaak = ["Count the number of times the letter F appears in the following passage", "Zählen Sie, wie oft der Buchstabe F in der folgenden Passage vorkommt", "Aşağıdaki pasajda F harfinin kaç kez göründüğünü sayın", "Tel het aantal keren dat de letter F in de volgende passage voorkomt", "Policzyć, ile razy litera F pojawi się w poniższym fragmencie", "Cuente el número de veces que la letra F aparece en el siguiente pasaje", "Räkna antalet gånger som bokstaven F visas i följande avsnitt", "Comptez le nombre de fois que la lettre F apparaît dans le passage suivant", "Посчитайте количество раз, когда буква F появляется в следующем отрывке", "Contate il numero di volte che la lettera F appare nel seguente passaggio", "数一数字母F在以下段落中出现的次数。", "次の文中に「F」の文字が出てくる回数を数えてください。", "Conte o número de vezes que a letra F aparece na seguinte passagem"];
const alg_ok = ["OK", "OK", "Tamam", "OK", "Ok", "DE ACUERDO", "Ok", "D'accord", "Хорошо", "Ok", "好", "OK", "Está bem"];
const alg_OK = ["Sent", "Gesendet", "Gönderildi", "Verzonden", "Wysłano", "Enviado a", "Skickat", "Envoyé à", "Отправлено", "Inviato a", "已发送", "送信された", "Enviado para"];
const alg_sluit = ["Close", "Schließen", "Kapat", "Sluiten", "Zamknij", "Cerrar", "Stäng", "Fermer", "близко", "Vicino", "关闭", "近いです", "Perto"];
const alg_time = ["Take plenty of time to count!", "Nehmen Sie sich viel Zeit zum Zählen!", "Saymak için bolca zaman ayırın!", "Neem ruim de tijd om te tellen!", "Dużo czasu potrzeba na liczenie!", "¡Toma mucho tiempo para contar!", "Ta dig god tid att räkna!", "Prenez tout votre temps pour compter !", "Потребуется много времени, чтобы посчитать!", "Prendetevi tutto il tempo necessario per contare!", "要有充足的时间来计算!", "たっぷり時間をかけてカウントしましょう", "Leve muito tempo a contar!"];
const alg_wachtwoord = ["Password", "Passwort", "parola", "Wachtwoord", "Hasło", "Contraseña", "Lösenord", "Mot de passe", "Пароль", "Password", "密码", "パスワード", "Senha"];
const alg_wachtwoord_vereist = ["Password is required for this action.", "Für diese Aktion ist ein Passwort erforderlich.", "Bu işlem için şifre gerekli.", "Wachtwoord is vereist voor deze actie.", "Do wykonania tej czynności wymagane jest podanie hasła.", "La contraseña es necesaria para esta acción.", "Lösenord krävs för denna åtgärd.", "Un mot de passe est nécessaire pour cette action.", "Для этого действия необходим пароль.", "La password è necessaria per questa azione.", "此操作需要密码。", "このアクションにはパスワードが必要です。", "A senha é necessária para esta ação."];
const ben_zeker = ["Are you sure you want to empty the dataset %s?", "Sind Sie sicher, dass Sie das Dataset %s leeren wollen?", "%s veri kümesini boşaltmak istediğinizden emin misiniz?", "Weet u zeker dat u de dataset %s wilt legen?", "Czy na pewno chcesz opróżnić zbiór danych %s?", "¿Estás seguro de que quieres vaciar el conjunto de datos %s?", "Är du säker på att du vill tömma datasetet %s?", "Êtes-vous sûr de vouloir vider les %s de l'ensemble des données ?", "Вы уверены, что хотите опустошить набор данных %s?", "Sei sicuro di voler svuotare il set di dati %s?", "你确定你要清空数据集%s？", "データセット %s を空にしてもよろしいですか?", "Tem a certeza que quer esvaziar o conjunto de dados %s?"];
const clear_dataset = ["Clear dataset", "Datensatz löschen", "Veri kümesini temizle", "Dataset wissen", "Wyczyść zestaw danych", "Borrar conjunto de datos", "Rensa datasätt", "Effacer le jeu de données", "Очистить набор данных", "Cancella set di dati", "清除数据集", "データセットをクリア", "Limpar conjunto de dados"];
const code = ["Enter code", "Code eingeben", "Kodu girin", "Geef code", "Wprowadź kod", "Introduce el código", "Ange kod", "Entrez le code", "Введите код", "Inserire il codice", "输入代码", "コードを入力してください", "Digite o código"];
const collect_data = ["Player data comes in one data set", "Spielerdaten kommen in einem Datensatz", "Oyuncu verileri bir veri setinde geliyor", "Data van spelers komen in één dataset ", "Dane odtwarzacza są w jednym zestawie danych", "Los datos del jugador vienen en un conjunto de datos", "Spelardata finns i en datauppsättning", "Les données du joueur viennent dans un ensemble de données", "Данные игрока поступают в один набор данных", "I dati del giocatore vengono forniti in un set di dati", "播放器数据归入一个数据集中", "プレーヤーデータは1つのデータセットで提供されます", "Os dados do jogador vêm em um conjunto de dados"];
const controleren = ["How would you verify that your proposals are really having an effect?", "Wie würden Sie überprüfen, ob Ihre Vorschläge wirklich eine Wirkung haben?", "Önerilerinizin gerçekten etkili olup olmadığını nasıl kontrol edersiniz?", "Hoe zou je controleren of je voorstellen echt effect hebben?", "Jak sprawdziłbyś, czy Twoje propozycje rzeczywiście przynoszą efekty?", "¿Cómo comprobaría que sus propuestas tienen realmente efecto?", "Hur skulle du kontrollera om dina förslag verkligen är effektiva?", "Comment vérifieriez-vous que vos propositions ont réellement un effet ?", "Как бы вы удостоверились, что ваши предложения действительно дают эффект?", "Come verificherebbe che le sue proposte stiano davvero avendo un effetto?", "你如何验证你的建议是否真的有效果？", "自分の提案が本当に効果を発揮しているかどうか、どのように検証しますか？", "Como você verificaria se suas propostas estão realmente surtindo efeito?"];
const dataset_bestaat_al = ["Dataset already exists", "Datensatz existiert bereits", "Veri kümesi zaten var", "Dataset bestaat al", "Zestaw danych już istnieje", "El conjunto de datos ya existe", "Dataset finns redan", "Le jeu de données existe déjà", "Набор данных уже существует", "Il set di dati esiste già", "数据集已存在", "データセットは既に存在します", "O conjunto de dados já existe"];
const dataset_bestaat_niet = ["Dataset %s does not exist`", "Datensatz %s existiert nicht`", "%s veri kümesi mevcut değil`", "Dataset %s bestaat niet`", "Zbiór danych %s nie istnieje`.", "El conjunto de datos %s no existe`.", "Dataset% s existerar inte", "L'ensemble de données %s n'existe pas``.", "Dataset %s не существует", "Il set di dati %s non esiste", "数据集%s不存在`", "データセット %s が存在しません。", "Dataset %s não existe`"];
const dataset_cleared = ["Dataset %s has been cleared.`", "Der Datensatz %s wurde gelöscht.", "Veri kümesi% s temizlendi.`", "Dataset %s is gewist.`", "Zbiór danych %s został wyczyszczony.`", "El conjunto de datos %s ha sido borrado.`", "Dataset% s har rensats. &#39;", "L'ensemble de données %s a été supprimé.", "Датасет %s был очищен.`", "Il dataset %s è stato cancellato.`", "数据集%s已被清除。", "データセット %s はクリアされました。", "O conjunto de dados %s foi apagado.`"];
const dataset_created = ["Dataset %s is created", "Dataset %s ist erstellt", "% S veri kümesi oluşturuldu", "Dataset %s is aangemaakt", "Zbiór danych %s został utworzony", "Se ha creado el conjunto de datos %s", "Dataset% s skapas", "Création de l'ensemble de données %s", "Создан набор данных %s", "Il set di dati %s è stato creato", "数据集%s被创建", "データセット %s が作成されました。", "Dataset %s é criado"];
const dataset_niet_verwijderen = ["Dataset 123446 cannot be deleted", "Dataset 123446 kann nicht gelöscht werden", "123446 veri kümesi silinemez", "Dataset 123446 kan niet worden verwijderd", "Zbiór danych 123446 nie może zostać usunięty", "El conjunto de datos 123446 no puede ser eliminado", "Dataset 123446 kan inte raderas", "L'ensemble de données 123446 ne peut pas être supprimé", "Датасет 123446 не может быть удален.", "Il dataset 123446 non può essere cancellato", "数据集123446不能删除", "データセット123446は削除できません。", "Dataset 123446 não pode ser apagado"];
const dataset_verwijderd = ["Dataset %s has been deleted.", "Der Datensatz %s wurde gelöscht.", "Veri kümesi %s silindi.", "Dataset %s is verwijderd.", "Zbiór danych %s został usunięty.", "El conjunto de datos %s ha sido eliminado.", "Dataset %s har tagits bort.", "L'ensemble de données %s a été supprimé.", "Удален набор данных %s.", "Il dataset %s è stato cancellato.", "数据集%s已被删除。", "データセット %s は削除されました。", "Dataset %s foi apagado."];
const delete_dataset = ["Delete dataset", "Datensatz löschen", "Veri kümesini sil", "Dataset verwijderen", "Usuń zestaw danych", "Eliminar conjunto de datos", "Radera datasätt", "Supprimer le jeu de données", "Удалить набор данных", "Elimina set di dati", "删除资料集", "データセットを削除", "Excluir conjunto de dados"];
const digits6 = ["Enter internet code (6 digits)", "Internet-Code eingeben (6 Ziffern)", "İnternet kodunu girin (6 basamaklı)", "Geef code internet (6 cijfers)", "Wprowadź kod internetowy (6 cyfr)", "Introduzca el código de Internet (6 dígitos)", "Ange kod internet (6 siffror)", "Entrez le code internet (6 chiffres)", "Введите интернет-код (6 цифр)", "Inserire il codice internet (6 cifre)", "输入互联网代码（6位数", "インターネットコード（6桁）を入力してください。", "Digite o código da internet (6 dígitos)"];
const doel_delete = ["Remove Dataset", "Datensatz entfernen", "Veri kümesini silin", "Dataset verwijderen", "Usuń zbiór danych", "Eliminar el conjunto de datos", "Ta bort dataset", "Supprimer l'ensemble de données", "Удалить набор данных", "Rimuovere il dataset", "移除数据集", "データセットの削除", "Remover Dataset"];
const doel_new = ["Creating a dataset", "Erstellen eines Datensatzes", "Veri kümesi oluşturun", "Dataset aanmaken", "Tworzenie zbioru danych", "Creación de un conjunto de datos", "Skapa dataset", "Création d'un ensemble de données", "Создание набора данных", "Creare un set di dati", "创建数据集", "データセットの作成", "Criação de um conjunto de dados"];
const doel_schoon = ["Removing data from dataset", "Daten aus dem Datensatz entfernen", "Veri kümesinden verileri sil", "Verwijderen data van dataset", "Usuwanie danych ze zbioru danych", "Eliminación de datos del conjunto de datos", "Ta bort data från dataset", "Suppression des données d'un ensemble de données", "Удаление данных из набора данных", "Rimozione dei dati dal set di dati", "从数据集中删除数据", "データセットからデータを削除する", "Remoção de dados do conjunto de dados"];
const geef_code = ["Enter code", "Code eingeben", "Kodu girin", "Geef code", "Wpisz kod", "Ingrese el código", "Ange kod", "Entrez le code", "Введите код", "Inserisci il codice", "输入验证码", "コードを入力してください", "Digite o código"];
const geef_wachtwoord = ["Provide password for dataset", "Passwort für Datensatz bereitstellen", "Veri kümesi için şifre girin", "Geef wachtwoord voor dataset", "Podaj hasło do zbioru danych", "Proporcionar la contraseña para el conjunto de datos", "Ange lösenord för dataset", "Fournir un mot de passe pour l'ensemble des données", "Предоставить пароль для набора данных", "Fornire la password per il set di dati", "提供数据集的密码", "データセットのパスワードを提供する", "Forneça a senha para o conjunto de dados"];
const geen_correcte_code = ["No correct code", "Kein korrekter Code", "Doğru kod değil", "Geen correcte code", "Brak prawidłowego kodu", "No hay código correcto", "Inte korrekt kod", "Pas de code correct", "Нет корректного кода", "Nessun codice corretto", "没有正确的代码", "正しいコードはありません。", "Sem código correcto"];
const howOften = ["How many F's", "Wie viele F's", "Kaç tane F", "Hoeveel F's", "Ile F's", '¿Cuántas "F"?', "Hur många F", "Combien de F", "Сколько F", "Quante F", "多少个F", "Fの数は？", "Quantos F's"];
const inspectie100 = ["100% inspection", "100%-Kontrolle", "% 100 muayene", "100% inspectie", "Kontrola 100%", "Inspección al 100%.", "100% inspektion", "Contrôle à 100", "100% осмотр", "Ispezione al 100%", "100%检查", "100％検査", "100% de inspecção"];
const invalid_password = ["Invalid password", "Ungültiges Passwort", "Geçersiz şifre", "Ongeldig wachtwoord", "Nieprawidłowe hasło", "Contraseña inválida", "Felaktigt lösenord", "Mot de passe non valide", "Неверный пароль", "Password non valida", "密码无效", "無効なパスワード", "Senha inválida"];
const join_dataset = ["Start sending", "Beginnen Sie mit dem Senden", "Göndermeye başla", "Start versturen", "Zacznij wysyłać", "Comienza a enviar", "Börja skicka", "Commencer à envoyer", "Начать отправку", "Inizia a inviare", "开始发送", "送信を開始", "Comece a enviar"];
const kies_groter = ["Choose larger number", "Größere Zahl wählen", "Daha büyük sayı seçin", "Kies groter getal", "Wybierz większą liczbę", "Elija un número mayor", "Välj större nummer", "Choisissez un nombre plus important", "Выберите большее число", "Scegliere un numero maggiore", "选择较大的数量", "より大きな数を選択してください", "Escolha um número maior"];
const kies_kleiner = ["Choose smaller number", "Kleinere Zahl wählen", "Daha küçük sayı seçin", "Kies kleiner getal", "Wybierz mniejszą liczbę", "Elija un número menor", "Välj mindre antal", "Choisissez un nombre plus petit", "Выберите меньшее число", "Scegliere un numero più piccolo", "选择较小的数量", "少ない数を選択してください", "Escolha um número menor"];
const kies_taal = ["Select language", "Sprache auswählen", "Dil Seçin", "Kies taal", "Wybierz język", "Seleccione el idioma", "Välj språk", "Choisir la langue", "Выберите язык", "Seleziona la lingua", "选择语言", "言語を選択する", "Selecione o idioma"];
const made_empty = ["Dataset %s is made empty", "Dataset %s wird leer gemacht", "%s veri kümesi boş bırakıldı", "Dataset %s is leeg gemaakt", "Zbiór danych %s jest pusty", "El conjunto de datos %s está vacío", "Dataset% s är tomt", "L'ensemble de données %s est rendu vide", "Датасет %s сделан пустым", "Il dataset %s è diventato vuoto", "数据集%s为空", "データセット %s が空になります。", "Dataset %s é feito vazio"];
const new_dataset = ["New data set", "Neuer Datensatz", "Yeni veri seti", "Nieuwe dataset ", "Nowy zestaw danych", "Nuevo conjunto de datos", "Ny datauppsättning", "Nouvel ensemble de données", "Новый набор данных", "Nuovo set di dati", "新数据集", "新しいデータセット", "Novo conjunto de dados"];
const numeric_code = ["A data set has a 6-digit numeric code", "Ein Datensatz hat einen 6-stelligen numerischen Code", "Bir veri setinde 6 haneli bir sayısal kod vardır.", "Een dataset heeft een numerieke code van 6 cijfers", "Zestaw danych ma 6-cyfrowy kod numeryczny", "Un conjunto de datos tiene un código numérico de 6 dígitos.", "En datamängd har en 6-siffrig numerisk kod", "Un ensemble de données a un code numérique à 6 chiffres", "Набор данных имеет 6-значный цифровой код", "Un set di dati ha un codice numerico di 6 cifre", "数据集具有6位数字代码", "データセットには6桁の数値コードがあります", "Um conjunto de dados possui um código numérico de 6 dígitos"];
const onderdeel_test = ["Part of a job application test", "Teil eines Bewerbungstests", "Bir uygulama testinin parçası", "Onderdeel van een sollicitatietest", "Część testu z podania o pracę", "Parte de una prueba de solicitud de empleo", "En del av ett ansökningstest", "Partie d'un test de demande d'emploi", "Часть теста на подачу заявления о приеме на работу", "Parte di un test di domanda di lavoro", "工作申请测试的一部分", "採用試験の一部", "Parte de um teste de candidatura a um emprego"];
const start_test = ["Start test", "Test starten", "Testi başlat", "Start test", "Test początkowy", "Prueba de inicio", "Starta testet", "Démarrer le test", "Начальное испытание", "Iniziare il test", "开始测试", "テスト開始", "Iniciar o teste"];
const stopzenden = ["Stop sending", "Hör auf zu senden", "Göndermeyi durdur", "Stop versturen", "Przestań wysyłać", "Dejar de enviar", "Sluta skicka", "Arrêter l'envoi", "Прекратить отправку", "Smetti di inviare", "停止发送", "送信を停止", "Parar de enviar"];
const tel_nauwkeurig = ["Can you count? Are you sure?", "Können Sie zählen? Sind Sie sicher?", "Sayabilir misin? Emin misin?", "Kun je tellen? Weet je het zeker?", "Czy potrafisz liczyć? Jesteś pewien?", "¿Sabes contar? ¿Estás seguro?", "Kan du räkna? Är du säker?", "Savez-vous compter ? En êtes-vous sûr ?", "Вы умеете считать? Вы уверены?", "你会数数吗？你确定吗？", "数えられますか？確かですか？", "Consegues contar? Tens a certeza?", ];
const verbetering = ["Do you have any suggestions to improve the performance?", "Haben Sie Vorschläge zur Verbesserung der Leistung?", "Performansı iyileştirmek için herhangi bir öneriniz var mı?", "He je suggesties om de prestaties te verberen?", "Czy masz jakieś sugestie, aby poprawić wydajność?", "¿Tiene alguna sugerencia para mejorar el rendimiento?", "Har du några förslag för att förbättra prestanda?", "Avez-vous des suggestions pour améliorer les performances ?", "Есть ли у вас предложения по улучшению производительности?", "Avete qualche suggerimento per migliorare le prestazioni?", "你有什么建议来改善性能吗？", "改善するための提案はありますか？", "Você tem alguma sugestão para melhorar o desempenho?"];
const verbinden_internet = ["Connect to the internet", "Verbindung zum Internet", "İnternete bağlanın", "Verbinden met internet", "Połącz się z Internetem", "Conectarse a internet", "Anslut till internet", "Se connecter à internet", "Подключиться к интернету", "Connettiti a Internet", "连接到互联网", "インターネットに接続する", "Conecte-se à Internet"];
const view_dataset = ["Graph of all players", "Grafik aller Spieler", "Tüm oyuncuların grafiği", "Grafiek van alle spelers", "Wykres wszystkich graczy", "Gráfico de todos los jugadores.", "Graf över alla spelare", "Graphique de tous les joueurs", "График всех игроков", "Grafico di tutti i giocatori", "所有玩家的图表", "全選手のグラフ", "Gráfico de todos os jogadores"];
/*|***|*/
var taal = 0; // Default Engels - geïnitialiseerd met geldige waarde

function zettaal(taalIndex) {
    var hulp;
    
    // Update de globale taal variabele
    taal = taalIndex;

    $(document).prop('title', tel_nauwkeurig[taalIndex]);
    /*|*rest*|*/
    $(".alg_hoevaak").text(alg_hoevaak[taalIndex]);
    $(".alg_time").text(alg_time[taalIndex]);

    $(".numeric_code").text(numeric_code[taalIndex]);
    $(".alg_OK").text(alg_OK[taalIndex]);
    $(".howOften").text(howOften[taalIndex]);
    $(".new_dataset").text(new_dataset[taalIndex]);
    $(".join_dataset").text(join_dataset[taalIndex]);
    $(".view_dataset").text(view_dataset[taalIndex]);
    $(".alg_sluit").text(alg_sluit[taalIndex]);
    $(".geef_code").text(geef_code[taalIndex]);
    $(".geef_wachtwoord").text(geef_wachtwoord[taalIndex]);
    $(".collect_data").text(collect_data[taalIndex]);
    $(".clear_dataset").text(clear_dataset[taalIndex]);
    $(".delete_dataset").text(delete_dataset[taalIndex]);
    $(".alg_wachtwoord").text(alg_wachtwoord[taalIndex]);
    $(".digits6").text(digits6[taalIndex]);
    $(".onderdeel_test").text(onderdeel_test[taalIndex]);
    $(".start_test").text(start_test[taalIndex]);
    $(".tel_nauwkeurig").text(tel_nauwkeurig[taalIndex]);
    $(".kies_taal").text(kies_taal[taalIndex]);
    $(".alg_ok").text(alg_ok[taalIndex]);
    $(".alg_annuleer").text(alg_annuleer[taalIndex]);
    /*|*rest*|*/
    $("#dialog-internet").dialog({
        "title": verbinden_internet[taalIndex]
    });
    $("#dialog-code").dialog({
        "title": verbinden_internet[taalIndex]
    });


    //$("#verbetering").text(verbetering[taal]);
    //$("#controleren").text(controleren[taal])


}
/*

//["What suggestions do you have for achieving better results?","Welche Vorschläge haben Sie, um bessere Ergebnisse zu erzielen?","Daha iyi sonuçlar elde etmek için ne gibi önerileriniz var?","Welke suggesties heb je om betere resultaten te bereiken?","Jakie masz sugestie dotyczące osiągania lepszych wyników?","¿Qué sugerencias tiene para lograr mejores resultados?","Vilka förslag har du för att uppnå bättre resultat?","Quelles sont vos suggestions pour obtenir de meilleurs résultats ?","Какие у вас есть предложения по достижению лучших результатов?","Quali suggerimenti avete per ottenere risultati migliori?","为了达到更好的效果，你有什么建议？","より良い結果を出すために、どのような提案がありますか？","Que sugestões você tem para alcançar melhores resultados?"];

Human measurement error is inherent in data.
Census numbers invariability contain errors.
Sampling may often lead to a closer estimate of the “true parameter.”
The Pursuit of Excellence
A Manager's Guide to Quality
*/
