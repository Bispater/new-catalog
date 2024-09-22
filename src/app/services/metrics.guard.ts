import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Listeners } from './../utils/listeners'

export const metricsGuard: CanActivateFn = (route, state) => {
  const listenerService = inject(Listeners);

  // Aquí llamas a la función events
  listenerService.events({ router: { url: state.url }, route });

  // Permite la navegación
  return true;
};
