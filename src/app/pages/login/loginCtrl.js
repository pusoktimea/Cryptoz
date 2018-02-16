angular.module('BlurAdmin.pages.login')
.controller('LoginCtrl', LoginCtrl);

function LoginCtrl($window) {
    var vm = this;

    vm.submit = function() {
        vm.isAPIRequestInProgress = true;
        vm.errMsg = "";
        var email = vm.email;
        var password = vm.password;
        if(vm.email == 'admin' && vm.password == 'admin') {
            vm.isAPIRequestInProgress = false;
            $window.location.href = '/overview';
        } else {
            vm.isAPIRequestInProgress = false;
            vm.errMsg = "Whooops! Incorrect username or password!";
        }


    };

    // vm.submit = function() {
    //   vm.isAPIRequestInProgress = true;
    //   vm.errMsg = "";
    //   var email = vm.email;
    //   var password = vm.password;
    //   if(email && password) {
    //     var req = {
    //       url: 'overview',
    //       // data: {
    //       //   email: email,
    //       //   password: password
    //       // }
    //     };
    //     // AJAXService.doPost(req).then(
    //     AJAXService.doGet(req).then(
    //       function(res) {
    //         if (res.data.success) {
    //           vm.isAPIRequestInProgress = false;
    //           // $window.location.href = '/overview';
    //         } else {
    //           vm.isAPIRequestInProgress = false;
    //           vm.errMsg = "Whooops! Incorrect email or password!";
    //         }
    //       },
    //       function(res) {
    //         console.log('res', res);
    //       }
    //     );
    //   } else {
    //     vm.isAPIRequestInProgress = false;
    //     vm.errMsg = "Whooops! Both fields are required!";
    //   }
    // };


};
