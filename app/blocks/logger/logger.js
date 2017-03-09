(function () {
    'use strict';

    angular
        .module('blocks.logger')
        .factory('logger', logger);

    logger.$inject = ['$log', 'toastr'];
    /* @ngInject */
    function logger($log, toastr) {
        var service = {
            showToasts: true,
            error: error,
            info: info,
            success: success,
            warning: warning,
            // straight to console; bypass toastr
            log: $log.log
        };

        return service;

        /////////////////////

        function error(message, data, title) {
            if (service.showToasts) {
                toastr.error(message, title);
            } else {
                $log.error('Error:\n' + title + '\n' + message + '\n', data);
            }
        }

        function info(message, data, title) {
            if (service.showToasts) {
                toastr.info(message, title);
            } else {
                $log.info('Info:\n' + title + '\n' + message + '\n', data);
            }
        }

        function success(message, data, title) {
            if (service.showToasts) {
                toastr.success(message, title);
            } else {
                $log.info('Success:\n' + title + '\n' + message + '\n', data);
            }
        }

        function warning(message, data, title) {
            if (service.showToasts) {
                toastr.warning(message, title);
            } else {
                $log.warn('Warning:\n' + title + '\n' + message + '\n', data);
            }
        }
    }
}());
