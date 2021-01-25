import '../scss/app.scss';  
import 'bootstrap';

/** import of export */
import {testArrowFunction, testFunctionDeclaration} from "./modules/example.js"

/** import of default export */
import testDefaultFunction from "./modules/example.js"

import "./modules/header";

const projectPath = '/dist'; //after integration will be typo3conf/ext/theme/Resporces/Public
const cssBreakpoints = {sm: '992', md:'1200'}; //should be same breakpoint bootstrap/variable

/*
 * ### services ####
 */
import svginject from './services/svginject.js';
import AOSInitFunction from './services/aos.js';  
import './services/lazysizes.js'; 

svginject(projectPath+'/img/icons.svg'); 
AOSInitFunction(cssBreakpoints);

/*
 * ### tests ####
 */
$(document).ready(function () {
    console.log('Webpack loaded!');
});

const a = 10;

async function mysupertest() {
  return Promise.resolve()
}

mysupertest().then(() => console.log("test"))


testArrowFunction();
testFunctionDeclaration();
testDefaultFunction();

