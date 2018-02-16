// (function () {
//   'use strict';

//   angular.module('BlurAdmin.services', []).service(
//     'AJAXService', AJAXService);

//   /** @ngInject */
//   function AJAXService( $http, $q, $cookies, $location, Keepalive ) {

//     // Return public API.
//     return({
//       doPost: doPost,
//       doGet: doGet,
//       doPatch: doPatch,
//       doDelete: doDelete,
//       apiHost: apiHost,
//       headerKeys: headerKeys
//     });

//     function headerKeys(skipContentType) {
//       var headers = {
//         'Access-Control-Allow-Origin': true,
//         'Content-Type': 'application/json; charset=utf-8',
//       };

//       if (!skipContentType) {
//         headers['Content-Type'] = 'application/x-www-form-urlencoded';
//       }
//       return headers;
//     }

//     function apiHost() {
//       var devHosts = ['localhost'];
//       if (devHosts.includes(window.location.hostname))
//         return 'https://cryptoz-accounting.herokuapp.com/api/';
//       else
//         alert('Unrecognized host');
//     }

//     function doPost( req ) {
//       var request = $http({
//         method: 'POST',
//         url: apiHost()+req.url,
//         headers: headerKeys(),
//         transformRequest: function(obj) {
//           var str = [];
//           for(var p in obj)
//             str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
//           return str.join("&");
//         },
//         data: req.data
//       });
//       console.log(request);
//       return(request.then(handleSuccess, handleError));
//     }

//     function doGet( req ) {
//       var request = $http({
//         method: 'GET',
//         url: apiHost()+req.url,
//         headers: headerKeys()
//       });
//       return(request.then(handleSuccess, handleError));
//     }

//     function doPatch( req ) {
//       var request = $http({
//         method: 'PATCH',
//         url: apiHost()+req.url,
//         headers: headerKeys(),
//         transformRequest: function(obj) {
//             var str = [];
//             for(var p in obj)
//             str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
//             return str.join("&");
//         },
//         data: req.data
//       });
//       return(request.then(handleSuccess, handleError));
//     }

//     function doDelete( req ) {
//       var request = $http({
//         method: 'DELETE',
//         url: apiHost()+req.url,
//         headers: headerKeys(),
//         transformRequest: function(obj) {
//             var str = [];
//             for(var p in obj)
//             str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
//             return str.join("&");
//         },
//         data: req.data
//       });
//       return(request.then(handleSuccess, handleError));
//     }

//     function resetKeepAliveCounterAndCookie(thisSession) {
//       // reset application keep alive time
//       Keepalive.stop();
//       Keepalive.setInterval(thisSession.ttl);
//       Keepalive.start();

//       // reset cookie expiration
//       var expireDate = new Date();
//       expireDate.setTime(expireDate.getTime() + thisSession.ttl * 1000);
//       $cookies.put('x_session_id', thisSession.session_id, {expires: expireDate});
//       $cookies.put('user_role', thisSession.role, {expires: expireDate});
//     }

//     function handleSuccess(response) {
//       resetKeepAliveCounterAndCookie(response.data.session);
//       return(response.data);
//     }

//     function handleError(response) {
//       // The API response from the server should be returned in a
//       // nomralized format. However, if the request was not handled by the
//       // server (or what not handles properly - ex. server error), then we
//       // may have to normalize it on our end, as best we can.
//       if (response.status === 401) {
//         window.location.href = '/login';
//       }
//       if (
//           ! angular.isObject( response.data ) ||
//           ! response.data.message
//           ) {
//           return($q.reject( "An unknown error occurred."));
//       }
//       // Otherwise, use expected error message.
//       return($q.reject(response.data.message));
//     }
//   }
// })();