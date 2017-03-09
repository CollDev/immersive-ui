(function () {
    'use strict';

    angular
        .module('blocks.exception')
        .factory('exception', exception);

    exception.$inject = ['$q', 'logger'];
    /* @ngInject */
    function exception($q, logger) {
        var service = {
            catcher: catcher
        };

        return service;

        ////////

        function catcher(title) {
            return function (e) {
                var message = '\n' + e.data;
                if (e.data && e.data.description) {
                    message = '\n' + e.data.description;
                }
                logger.error(message, e, title);

                return $q.reject(e);
            };
        }
    }
})();
