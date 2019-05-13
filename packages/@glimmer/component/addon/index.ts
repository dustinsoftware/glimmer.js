import ApplicationInstance from '@ember/application/instance';
import { setComponentManager } from '@ember/component';
import { get, set } from '@ember/object';

import GlimmerComponentManager from './-private/component-manager';
import _GlimmerComponent from './-private/component';

class GlimmerComponent<T> extends _GlimmerComponent<T> {
  get args(): Readonly<T> {
    return get(this as any, '__args__');
  }

  set args(args) {
    set(this as any, '__args__', args);
  }
}

setComponentManager((owner: ApplicationInstance) => {
  return new GlimmerComponentManager(owner);
}, GlimmerComponent);

export default GlimmerComponent;
