app.controller("indexController", function ($scope, indexFactory,$localStorage, DATAURL, MENUURL) {
    var promiseData = indexFactory.callToserver(DATAURL);
    promiseData.then(function (res) {
        $scope.productdata = res.data;
    }, function (err) {
        $scope.productdata = err;
    });
    
    $scope.uservalid=$localStorage.uservalid;
    
    $scope.userLogin = function () {
        let pro = indexFactory.postAjaxCall("/login", {
            mobilenumber: $scope.mobilenumber,
            password: $scope.password
        });

        pro.then(function (res)
        {   
             if(res.data.uservalid)
            {
            $localStorage.uservalid=res.data.uservalid;
            $scope.uservalid=$localStorage.uservalid;
           
            setTimeout(reload,1000);
            }
        },function (err) {
           console.log(err);
        })  
    };

function reload()
{
    location.reload();
}

    $scope.getCart=function()
    {
        
        var promiseData = indexFactory.callToserver("/cartdata");
    };




    $scope.userLogout=function()
    {
        let logoutPromise=indexFactory.callToserver("/logout");
        logoutPromise.then(function (res)
        {       
           
            $localStorage.$reset();
            $localStorage.uservalid=res.data.uservalid;
            $scope.uservalid=$localStorage.uservalid;
            location.reload();
       
       },function (err) {
          console.log(err);
       })
    };



});