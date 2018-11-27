import { MixcloudModule } from './mixcloud.module';

describe('MixcloudModule', () => {
  let mixcloudModule: MixcloudModule;

  beforeEach(() => {
    mixcloudModule = new MixcloudModule();
  });

  it('should create an instance', () => {
    expect(mixcloudModule).toBeTruthy();
  });
});
