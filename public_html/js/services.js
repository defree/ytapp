/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



ytApp.factory('ytInfoFactory', function($http) {
    return {
       
        get: function(id,index) {
            var promise = 
                $http.get('http://gdata.youtube.com/feeds/api/videos/'+id+'?v=2&alt=jsonc')
                .then(function(response) {

                //console.log("service" + response);
                var returnObj = {
                    index: index,
                    data: response.data.data
                };
                return returnObj;
            });
            return promise;
        }
      
    };
});

ytApp.factory('ytInfoList', function(ytInfoFactory) {
    return {
        get: function(list) {
            
            var listArray = [];
            for (i=0;i<list.length;i++) {
                ytInfoFactory.get(list[i],i).then(function(d) {
                    listArray[d.index] = d.data;
                });
            }
            return listArray;
            
        }
    };
});   

ytApp.service('ytPlayQueueService', function(ytInfoList,ytInfoFactory) {
    
    var _playQueue = [{}];
    
    this.setQueue = function (queue) {
        _playQueue = ytInfoList.get(queue);
    };
    
    this.getQueue = function () {
        return _playQueue;
    };
    
    this.addToQueue = function (id) {
        ytInfoFactory.get(id,0).then(function(d) {       
            _playQueue.push(d.data);
        });
    };
    
    this.deleteFromQueue = function (idx) {
        _playQueue.splice(idx,1);
    };

});

ytApp.factory('idCheck', function() {
    return {
        check: function(id) {
            return true;
        }
    };
});   
    