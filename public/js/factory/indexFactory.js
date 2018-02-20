app.factory("indexFactory",function($http,$q){
   // console.log("loading factory");
    
    const object={
        callToserver(url){
          var defer=$q.defer();
           $http.get(url).then(function(response){  
               defer.resolve(response);
            //    console.log("success",response);
           },function(err){
               defer.reject(err);
           });
           return defer.promise;
        }
      }
      return object;
    });