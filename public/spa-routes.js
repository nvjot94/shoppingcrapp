app.config(function ($routeProvider, $locationProvider, HOME, PRODUCTS, CHOOSEPRODUCT, CATEGORIES, WISHLIST, CART, CHECKOUT, MYORDERS) {

    $locationProvider.hashPrefix(''), // to configure how the application deep linking paths are stored.
        $routeProvider.when(HOME, {
            templateUrl: 'views/indexview.html',
            controller: 'indexController'
        }).when(PRODUCTS, {
            templateUrl: 'views/products.html',
            controller: 'productcontroller'
        }).when(CHOOSEPRODUCT, {
            templateUrl: 'views/chooseproduct.html',
            controller: ''
        }).when(CATEGORIES, {
            templateUrl: 'views/categories.html',
            controller: 'categoriescontroller'
        }).when(WISHLIST, {
            templateUrl: 'views/wishlist.html',
            controller: ''
        }).when(CART, {
            templateUrl: 'views/cart.html',
            controller: ''
        }).when(CHECKOUT, {
            templateUrl: 'views/checkout.html',
            controller: ''
        }).when(MYORDERS, {
            templateUrl: 'views/myorders.html',
            controller: ''
        }).otherwise({
            template: 'Something went wrong !!'
        })
});