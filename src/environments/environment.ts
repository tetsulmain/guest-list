// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyA1d5zt-KXnuOV7FLFtc6jicCjHt_cWWpQ",
    authDomain: "ng-recipe-practice.firebaseapp.com",
    databaseURL: "https://ng-recipe-practice.firebaseio.com",
    projectId: "ng-recipe-practice",
    storageBucket: "ng-recipe-practice.appspot.com",
    messagingSenderId: "786786941097"
  }
};
