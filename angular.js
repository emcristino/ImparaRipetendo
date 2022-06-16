//pagina corsi
var module = angular.module('myApp', []);
module.controller('myCtrl', function($scope) {
    //mostarre e nascondere i corsi di ciascun anno
    $scope.showOne=false;
    $scope.showTwo=false;
    $scope.showThree=false;
    $scope.openOne=function(){
        $scope.showOne=!$scope.showOne;
    }
    $scope.openTwo=function(){
        $scope.showTwo=!$scope.showTwo;
    }
    $scope.openThree=function(){
        $scope.showThree=!$scope.showThree;
    }

    $scope.corsi = ['Sviluppo software di applicazioni Informatiche','Introduzione all\'Informatica e alle Reti', 'Società della rete: Teorie e Metodi','Diritto Privato', 'Economia dei modelli di business', 'Gestione e Condivisione di Basi di Dati e Conoscenza', 'Sociologia dei New Media', 'Diritto Commerciale', 'Introduzione al Future Internet','Fondamenti di Informatica','Design di Applicazioni Web', 'Introduzione a Interaction Design'];
    
    //filtrare ricerca corsi
    
    $scope.showme=false;
    $scope.openme=function(){
         $scope.showme=!$scope.showme;
    }
    $scope.closeme=function(){
        $scope.showme=false;
        $scope.test="";
    }
});
//Homepage
var modulo=angular.module('myApp2',[]);
modulo.controller('myCtrl2', function($scope, $interval, $timeout){
    //creazione formato data 
    var giorni= new Array("Domenica", "Lunedi", "Martedi", "Mercoledi","Giovedi","Venerdi","Sabato");
    var mesi= new Array("Gennaio", "Febbraio", "Marzo", "Aprile","Maggio","Giugno","Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre");
    var data =new Date();
    var giorno=data.getDay();
    var giornoNumero= data.getDate();
    var mese= data.getMonth();
    var anno= data.getFullYear();
    $scope.day=giorni[giorno];
    $scope.daynum=giornoNumero;
    $scope.month=mesi[mese];
    $scope.year=anno;

    //ora tempo reale
    $scope.ora = new Date().toLocaleTimeString();

    $interval(function () {
        $scope.ora = new Date().toLocaleTimeString();
    }, 1000);

    
   


});







//pagina Login

var modulo3=angular.module('myApp3',[]);
modulo3.controller('myCtrl3', function($scope){
    
    $scope.showname=false;
    $scope.showmail=false;
    $scope.showmatricola=false;
    $scope.showpass=false;

    $scope.pwdpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;          // ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$   --  /^[A-Za-z0-9]{8,20}$/;

    $scope.openname=function(){
        
        $scope.showname=!$scope.showname;
    }
    $scope.openmail=function(){
        $scope.showmail=!$scope.showmail;
    }
    $scope.openmatricola=function(){
        $scope.showmatricola=!$scope.showmatricola;
    }
    $scope.openpass=function(){
        $scope.showpass=!$scope.showpass;
    }
    
    
            

});

//pagina Entra con noi

var modulo4=angular.module('myApp4',[]);
modulo4.controller('myCtrl4', function($scope,$interval,$timeout){
    //mostra iscritti
   $scope.showIscritti=false;
   $scope.mostraIscritti=function(){
   $scope.showIscritti=!$scope.showIscritti;
    }

    //conta iscritti
    

    $scope.counter=17;              //un contatore fittizio, dopo 2 secondi dal caricamento della pagina inizierà a
                                    //contare i nuovi iscritti che faranno parte dei membri di impara ripetendo
    $timeout(function(){
        $interval(function(){
           
            $scope.counter++;
        },1000);
    },2000);
    
    
    
            

});