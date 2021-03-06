//  root import jQuery and Popper, Bootstrap 
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import 'bootstrap';


/** import of export */
import {testArrowFunction, testFunctionDeclaration} from "./modules/example.js"

/** import of default export */
//import testDefaultFunction from "./modules/example.js"
const projectPath = '/dist'; //after integration will be typo3conf/ext/theme/Resporces/Public
const cssBreakpoints = {sm: '992', md:'1280'}; //should be same breakpoint bootstrap/variable
global.cssBreakpoints = cssBreakpoints;


/*
 * ### services ####
 */
import AOSInitFunction from './services/aos.js';  
import './services/lazysizes.js'; 
import './services/videojs.js'; 

AOSInitFunction(cssBreakpoints);


/*
 * ### modules ####
 */
import websiteNavigation from "./modules/navigation"; 
websiteNavigation(cssBreakpoints);
