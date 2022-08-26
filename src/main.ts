import { platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';
import '@nativescript/local-notifications';

import { AppModule } from './app/app.module';

runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});

