/* jshint -W117, -W030 */
describe('Immersive service', function () {
    var controller;
    var layout = mockData.getMockLayout();
    
    describe('check if service works', function () {
        beforeEach(function () {
            bard.appModule('app.home');
            bard.inject('$controller', '$log', '$q', '$rootScope', 'dataservice');
        });
        
        beforeEach(function() {
            sinon.stub(dataservice, 'getLayout').returns($q.when(layout));
            controller = $controller('HomeController');
            $rootScope.$apply();
        });
        
        bard.verifyNoOutstandingHttpRequests();

        it('should return layout data', function () {
            expect(controller.layout).to.equal(layout);
        });
    });
});