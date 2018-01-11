'use strict';

angular.module('BlurAdmin', [
  'ngAnimate',
  'ngCookies',
  'ui.bootstrap',
  'ui.sortable',
  'ui.router',
  'ngTouch',
  'toastr',
  'smart-table',
  "xeditable",
  'ui.slimscroll',
  'ngJsTree',
  'ngIdle',
  'ngFileUpload',
  'angular-progress-button-styles',
  'ngTableResize',
  'wingify.timePicker',

  // 'BlurAdmin.services',

  'BlurAdmin.theme',
  'BlurAdmin.pages'
])
.config(function(IdleProvider, KeepaliveProvider) {
  KeepaliveProvider.interval(10 * 60); // set inital time till logout 10 minutes
})
.controller('mainCtrl', mainCtrl);

function mainCtrl() {
  
}
