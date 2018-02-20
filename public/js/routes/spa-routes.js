app.config(function($routeProvider,$locationProvider,HOME,PRODUCTS,CHOOSEPRODUCT,CATEGORIES){
    
    $locationProvider.hashPrefix(''),    // to configure how the application deep linking paths are stored.
    $routeProvider.when(HOME,{
        templateUrl:'views/indexview.html',
        controller:'indexController'
    }).when(PRODUCTS,{
        templateUrl:'views/products.html',
        controller:'productController'
    }).when(CHOOSEPRODUCT,{
        templateUrl:'views/chooseproduct.html',
        controller:''
    }).when(CATEGORIES,{
        templateUrl:'views/categories.html',
        controller:'categoriescontroller'
    }).otherwise({template:'Something went wrong !!'})
});