/* jshint -W117, -W030 */
describe('blocks.logger', function () {
    beforeEach(function () {
        bard.appModule('app.core', function ($provide) {
        });
        bard.inject('logger', 'toastr');
    });

    describe('logger', function () {
        it('should have a dummy test', inject(function () {
            expect(true).to.equal(true);
        }));

        it('should have error defined', inject(function () {
            expect(logger.error).to.be.defined;
        }));

        it('should have info defined', inject(function () {
            expect(logger.info).to.be.defined;
        }));

        it('should have success defined', inject(function () {
            expect(logger.success).to.be.defined;
        }));

        it('should have warning defined', inject(function () {
            expect(logger.warning).to.be.defined;
        }));

        describe('should call toastr', function () {
            var mockMessage = {
                message: 'message',
                data: {data: 'data'},
                title: 'title'
            };

            it('should call toastr.error after error', inject(function () {
                logger.error(mockMessage.message, mockMessage.data, mockMessage.title);
                expect(toastr.error).to.have.been.calledOnce;
            }));

            it('should call toastr.info after info', inject(function () {
                logger.info(mockMessage.message, mockMessage.data, mockMessage.title);
                expect(toastr.info).to.have.been.calledOnce;
            }));

            it('should call toastr.success after success', inject(function () {
                logger.success(mockMessage.message, mockMessage.data, mockMessage.title);
                expect(toastr.success).to.have.been.calledOnce;
            }));

            it('should call toastr.warning after warning', inject(function () {
                logger.warning(mockMessage.message, mockMessage.data, mockMessage.title);
                expect(toastr.warning).to.have.been.calledOnce;
            }));
        });

        describe('should NOT call toastr', function () {
            var mockMessage = {
                message: 'message',
                data: {data: 'data'},
                title: 'title'
            };

            beforeEach(function () {
                logger.showToasts = false;
            });

            it('should not call toastr.error after error', inject(function () {
                logger.error(mockMessage.message, mockMessage.data, mockMessage.title);
                expect(toastr.error).to.not.have.been.calledOnce;
            }));

            it('should not call toastr.info after info', inject(function () {
                logger.info(mockMessage.message, mockMessage.data, mockMessage.title);
                expect(toastr.info).to.not.have.been.calledOnce;
            }));

            it('should not call toastr.success after success', inject(function () {
                logger.success(mockMessage.message, mockMessage.data, mockMessage.title);
                expect(toastr.success).to.not.have.been.calledOnce;
            }));

            it('should not call toastr.warning after warning', inject(function () {
                logger.warning(mockMessage.message, mockMessage.data, mockMessage.title);
                expect(toastr.warning).to.not.have.been.calledOnce;
            }));
        });
    });
});
