import angular from 'angular';
import { ifEnv } from 'directives/if-env';

export default angular.module('App.directives', [])
  .directive('ifEnv', ifEnv);
