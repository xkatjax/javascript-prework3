function Stopwatch (uchwytStopera)
{
    this.uchwytStopera = uchwytStopera;  //zapisujemy tutaj jako property czyli wartość która zostanie tutaj przesłana
    this.poczatkowaWartosc;             //zmienna która będzie przechowywała początkowąWartość.
    this.timeOutRef = undefined;        //globalna referencja / identyfikator dla tego Timeouta          

    this.odpal = function (poczatkowaWartosc)        //funkcja która będzie odpalała ten stoper. Nie wpisujemy tu poczatkowej wartosci bo napoczatku jej tutaj jeszcze nie ma
    {
        this.poczatkowaWartosc = poczatkowaWartosc;     //po odpaleniu odwołujemy się do początkowej wartości tejże klasy czy też obiektu który zostanie stworzony przez tą klasę. Przypisujemy wartość która zostanie przesłana do tej właśnie funkcji.
        if (this.timeOutRef)
            this.zatrzymaj ();                          //wykorzystujemy funkcje napisaną troche niżej

        this.startStoper ();   //this.startStoper odpalamy i przesyłamy tam poczatkowaWartosc
    }

    this.startStoper = function ()          //chcemy odpalić stoper. Będzie tutaj metoda która będzie się cały czas wykonywała wewnątrz siebie 
    {   
        if (this.poczatkowaWartosc < 0)     //jeśli wartość jest mniejsza od 0 to wyjdź.
        return;


        this.uchwytStopera.innerHTML = this.poczatkowaWartosc--;    //minusy dodajemy aby za każdym razem zmniejszała nam się wartość. Jak minusy dodamy przed to najpierw odejmie potem wypisza, a jak minusy mamy po to njpierw wypisze wartość a dopiero kolejną odejmie 
        var self = this;                    //piszemy tak aby się móc odwołać do "function Stopwatch (uchwytStopera)"
                                           //funkcja która co 1 sekundę będzie wywoływać startStoper
        this.timeOutRef = setTimeout(function() //robimy setTimeout czyli "wywołaj mi za 1 sekunde funkcję anonimową która będzie wywoływała uchwytStopera". Przed zapisujemy "this.timeOutRef" który wyżej zdefiniowany jest jako "globalna referencja" - dzięki temu po rozpoczęciu nowego odliczania zakańcza się poprzednie. Nie będzie sytuacji że równoczśnie jest odliczane kilka zadań /że się mieszają 
        {
            self.startStoper();             //dzięki zapisowi ze zmienną "self" mamy ponownie dostęp do np startStoper. Gdyby tego "self" nie był a zwykłe "this" to odwoływało by się ono do rodzica czyli do fukcji w której jest to zapisane
        }, 1000);
    }

    this.zatrzymaj = function ()                    //funkcaj która będzie zatrzymywała ten stoper
    {
        clearTimeout (this.timeOutRef);
    }

    this.kontynuuj = function ()                    //funkcaj która będzie kontynuuwała ten stoper
    {
            this.startStoper ();
    }
}


window.onload = function ()
{
    var przyciskOdpalStoper = document.getElementById("przyciskOdpalStoper");
    var przyciskZatrzymajStoper = document.getElementById("przyciskZatrzymajStoper");  
    var przyciskKontynuujStoper = document.getElementById("przyciskKontynuujStoper");
    
    var uchwytStopera = document.getElementById("uchwytStopera");


    var stoper = new Stopwatch (uchwytStopera);     //tutaj mamy stworzony stoper

    przyciskOdpalStoper.onclick = function ()       //w momencie gdy klikniemy na przycisOdpalStoper to uruchamia się funkcja odpal
    {
        var poczatkowaWartosc = document.getElementById("poczatkowaWartosc").value;
        stoper.odpal(poczatkowaWartosc);                             // potrzebujemy w nawiasie wartość odkąd ma to się odpalać i za każdym razem ta wartość powinna być pobrana po kliknięciu bo może się ona zmieniać. w tym celu musimy pobrać wartość Początkową wpisaną w pole  
    }   
                                                                 // wartość w nawiasie zostaje stąd przesłana do funkcji (gdzie trzeba ją odebrać poprzez wpisanie w nawiasie "this.odpal = function (poczatkowaWartosc)")

    przyciskZatrzymajStoper.onclick = function ()
    {
        stoper.zatrzymaj ();
    }

    przyciskKontynuujStoper.onclick = function ()
    {
        stoper.kontynuuj ();
    }
}






/* TOPBUTTON
window.onload = function(){
    var toTopButton = document.getElementById("toTopButton");

    window.onscroll = function (){
        var yScrollAxis = window.pageYOffset;
        var toTopButton = document.getElementById("toTopButton");

        if (yScrollAxis > 300)
            toTopButton.style.display = "block";
        else
            toTopButton.style.display = "none";

    }

    toTopButton.onclick = function(){
        window.scrollBy(0, -1 * window.pageYOffset);
    }
}
*/




/* TABLICZKA MNOŻENIA
\var rezultat = document.getElementById("resultat");

var tabliczkaMnozenia = '<table>';

for (var i=1 ; i <= 10; i++)
{
    tabliczkaMnozenia += "<tr>";

    for (var j = 1; j <= 10; j++)
    
        tabliczkaMnozenia += "<td>" + i * j + "</td>";
        
    tabliczkaMnozenia += '</tr>';
};

tabliczkaMnozenia += "</table>";


rezultat.innerHTML = tabliczkaMnozenia;



var kwiaty = document.getElementById("maki");

function wypiszTekst()
{
    alert ("nasz nowy tekst po kliknięciu!");
};

var maki = document.getElementById("maki");
maki.onclick = wypiszTekst;
 
*/

/*
const kamien = document.querySelector("#rock");
const nozyczki = document.querySelector("#scissors");
const papier = document.querySelector("#paper");

rock.addEventListener("click", function(){
   const randomMove = createRandomMove();
   displayMoves(this.id, randomMove);
   displayResult(this.id, randomMove);
})

scissors.addEventListener("click", function(){
    const randomMove = createRandomMove();
    displayMoves(this.id, randomMove);
    displayResult(this.id, randomMove);
})

paper.addEventListener("click", function(){
    const randomMove = createRandomMove();
    displayMoves(this.id, randomMove);
    displayResult(this.id, randomMove);
})
*/

/* function startGame (playersMove){
    const randomMove = createRandomMove();
    displayMoves(playersMove, randomMove);
    displayResult(playersMove, randomMove);
} */





