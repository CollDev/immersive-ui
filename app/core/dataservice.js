(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
    /* @ngInject */
    function dataservice($http, $q, exception, logger) {
        var apiUrl = 'http://local.api.immersive.com/';
        var service = {
            getLayout: getLayout
        };

        return service;
        
        ////////

        function getLayout() {
            return $http.get(apiUrl)
                    .then(success)
                    .catch(fail);
            
            ////////

            function success(response) {
                return response.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getLayout')(e);
            }
        }
    }
})();