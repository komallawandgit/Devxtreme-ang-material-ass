import { LazyAppRoutingModule } from './lazy-app-routing.module';

describe('LazyAppRoutingModule', () => {
  let lazyAppRoutingModule: LazyAppRoutingModule;

  beforeEach(() => {
    lazyAppRoutingModule = new LazyAppRoutingModule();
  });

  it('should create an instance', () => {
    expect(lazyAppRoutingModule).toBeTruthy();
  });
});
