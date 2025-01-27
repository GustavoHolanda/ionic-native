import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
@Plugin({
  pluginName: 'CordovaToast',
  plugin: 'cordova-plugin-toast-ios',
  pluginRef: 'CordovaToast',
  repo:
    'https://github.com/GustavoHolanda/cordova-plugin-toast-ios',
  platforms: ['iOS']
})
@Injectable()
export class CordovaToast extends IonicNativePlugin {
 /**
  * Your plugin plugin functions go here.
  * Function names should match the ones in your .swift & .js files.
  * Otherwise you won't be able to execute them.
  */
@Cordova({
  successIndex: 0,
  errorIndex: 1
})
yourFunctionName(): Promise<any> {
  return;
  }
}
