import angular            from 'angular';
import { HomeController } from 'states/home/home';

export default angular.module('App.controllers', [])
  .controller('HomeController', HomeController);
