/* jshint -W117, -W030 */
describe('Dataservice', function () {
    var deferred;
    var failData = {fail: 'fail', description: undefined};
    var successData = {status: 'success'};

    beforeEach(function () {
        bard.appModule('app.core');
        bard.inject('$log', '$q', '$rootScope', 'dataservice', '$httpBackend');
    });

    beforeEach(function () {
        deferred = $q.defer();
        $rootScope.$apply();
    });

    it('should have a dummy test', inject(function () {
        expect(true).to.equal(true);
    }));

    describe('getLayout', function () {
        it('should be defined', inject(function () {
            expect(dataservice.getLayout).to.be.defined;
        }));

        it('should have data response defined', inject(function () {
            $httpBackend.expectGET('/')
                .respond(200, successData);
            dataservice.getLayout()
                .then(function (response) {
                    expect(response).to.deep.equal(successData);
                });

            $httpBackend.flush();
        }));

        it('should have error response defined', inject(function () {
            $httpBackend.expectGET('/badurl')
                .respond(500, failData);
            dataservice.getLayout()
                .catch(function (response) {
                    expect(response.data).to.deep.equal(failData);
                });

            $httpBackend.flush();
        }));
    });
});
