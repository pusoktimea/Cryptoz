angular.module('BlurAdmin.pages.login')
.controller('LoginCtrl', LoginCtrl);

function LoginCtrl($window) {
    var vm = this;

    vm.submit = function() {
        vm.isAPIRequestInProgress = true;
        vm.errMsg = "";
        var uname = vm.username;
        var password = vm.password;
        if(vm.username == 'admin' && vm.password == 'admin') {
            vm.isAPIRequestInProgress = false;
            $window.location.href = '/overview';
        } else {
            vm.isAPIRequestInProgress = false;
            vm.errMsg = "Whooops! Incorrect username or password!";
        }


    };
};
