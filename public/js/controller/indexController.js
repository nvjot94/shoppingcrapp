app.controller("indexController", function ($scope, indexFactory, DATAURL, MENUURL) {
    var promiseData = indexFactory.callToserver(DATAURL);
    // var promiseMenuData = indexFactory.callToserver(MENUURL);
    promiseData.then(function (res) {
        $scope.productdata = res.data;
    }, function (err) {
        $scope.productdata = err;
    });
    // promiseMenuData.then(function (res) {
    //     $scope.menudata = res.data;
    //     console.log("data is", $scope.menudata);
    // }, function (err) {
    //     $scope.menudata = err;
    // });
});