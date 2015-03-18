/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var quality = ["small","medium","large","hd720","hd1080","highres","default"];
var userPrefQual = 3;

var playQueue = ["G4VAdWJXyFk","2pu9vZGLqcA","iFAFA3B3CWU","SYM-RJwSGQ8"];


ytApp.controller('ytList', ['$scope','ytPlayQueueService', function ($scope,ytPlayQueueService) {
    
    $scope.playQueIds = playQueue;
    
    $scope.playQueInfos = [{}];
    
    if (playQueue && playQueue.length !==0) {
        ytPlayQueueService.setQueue(playQueue);
    }
    $scope.playQueInfos = ytPlayQueueService.getQueue();
    
    $scope.submit = function(add) {
        ytPlayQueueService.addToQueue(add.idstring);
        add.idstring = "";
    };
    
    $scope.deleteFromQueue = function (index) {
        //console.log(index);
        ytPlayQueueService.deleteFromQueue(index);
    };
    
}]);

/*
 * TODO:
 * Read/push item queue from server
 * drag-drop-list: https://github.com/codef0rmer/angular-dragdrop
 * creator-cookies, qualitypref-cookeis
 * Youtube-control-factory
 */