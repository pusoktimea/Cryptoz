// (function () {
//   'use strict';

//   angular.module('BlurAdmin.pages.home')
//     .directive('searchWidget', function(AJAXService, $location) {

//     function searchWidgetCtrl() {
//       var vm = this;
//       vm.searchQuery = '';
//       vm.isSearchInProgress = false;
//       vm.isSearchComplete = false;
//       vm.searchError = '';
//       vm.searchResult = [];
//       vm.noResults = false;

//       vm.doSearch = function() {
//         vm.searchError = '';
//         if (vm.searchQuery.trim().length === 0) {
//           vm.searchError = 'Please provide a search query';
//           return;
//         }
//         vm.isSearchComplete = false;
//         vm.isSearchInProgress = true;
//         vm.searchResult = [];
//         vm.noResults = false;
//         AJAXService.doPost({url: 'tables/searchdata', data: {query: vm.searchQuery}})
//           .then(function(result) {
//             vm.isSearchInProgress = false;
//             vm.isSearchComplete = true;
//             vm.searchResult = result.data;
//             vm.noResults = result.data.every(function(entry) { return entry.count === 0;});
//           }, function(error) {
//             vm.isSearchInProgress = false;
//             console.log('universal search error', error);
//           });
//       };

//       vm.goToResults = function(tableName, idList) {
//         window.sessionStorage.tableName = tableName;
//         window.sessionStorage.idList = idList;
//         $location.url( '/table' );
//       };
//     };

//     return {
//       restrict: 'E',
//       templateUrl: 'app/directives/searchWidget/search.html',
//       controller: searchWidgetCtrl,
//       controllerAs: 'searchVm'
//     }
//   });
// })();
