/* jshint -W117, -W030 */
describe('blocks.router', function () {
    var routerHelperProvider;

    beforeEach(function () {
        bard.appModule('blocks.router', 'app.core', function (_routerHelperProvider_) {
            routerHelperProvider = _routerHelperProvider_;
        }, function ($provide) {
        });
        bard.inject('$rootScope');
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('routerHelperProvider', function () {
        it('should have a dummy test', inject(function () {
            expect(true).to.equal(true);
        }));

        it('should have routerHelperProvider defined', inject(function () {
            expect(routerHelperProvider).to.be.defined;
        }));

        it('should have routerHelperProvider defined', inject(function () {
            $rootScope.$emit('$stateChangeSuccess', {});
            expect(routerHelperProvider).to.be.defined;
        }));
    });
});
