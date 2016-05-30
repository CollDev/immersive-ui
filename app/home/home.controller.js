(function () {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function HomeController($q, dataservice, logger) {
        var vm = this;

        vm.layout = [];
        vm.title = 'Home';

        activate();
        
        ////////

        function activate() {
            var promises = [getLayout()];
            
            return $q.all(promises).then(function () {
                logger.info('Activated home view');
            });
        }

        function getLayout() {
            return dataservice.getLayout().then(function (data) {
                vm.layout = data;
                
                return vm.layout;
            });
        }
    }
})();