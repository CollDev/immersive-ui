/* jshint -W117, -W030 */
describe('HomeController', function () {
    var controller;
    var layout = mockData.getMockLayout();

    beforeEach(function () {
        bard.appModule('app.home');
        bard.inject('$controller', '$log', '$q', '$rootScope', 'dataservice');
    });

    beforeEach(function () {
        sinon.stub(dataservice, 'getLayout').returns($q.when(layout));
        controller = $controller('HomeController');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    it('should be created successfully', function () {
        expect(controller).to.be.defined;
    });

    describe('after activate', function () {
        it('should have title of Home', function () {
            expect(controller.title).to.equal('Home');
        });
    });
});
