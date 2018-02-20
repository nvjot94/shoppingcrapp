app.controller("productController", function ($scope, productfactory, $routeParams, PRODUCTURL) {
    
    //console.log($routeParams.subcategory);
    productfactory.callToserver(PRODUCTURL).then(function (response) {
       $scope.productData=response.data.mobiles;
    }),function (err) {
       
    };
    
   

}


);