/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//var ytApp = angular.module('ytApp', []);
/* Disabled koska autoplay ei toimi tällä (ainakaan kaikissa selaimissa)
ytApp.directive('youtube', function($sce) {
  return {
    restrict: 'EA',
    scope: { video:'@video', width:'@width', height:'@height'},
    template: '<div style="width:{{width}}px;height:{{height}}px;"><iframe style="overflow:hidden;height:100%;width:100%" width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
    link: function (scope) {
        scope.$watch('video', function (newVal) {
           if (newVal) {
               scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + newVal);
           }
        });
    }
  };
});
*/