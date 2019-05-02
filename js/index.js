/*
 * CREATED BY
 *
 * Jesus 'Pokoi' Villar
 * © pokoidev 2019 (pokoidev.com)
 *
 * Creative Commons License:
 * Attribution 4.0 International (CC BY 4.0)
 *
 */

const index_remote = require('electron').remote       ;
const main         = index_remote.require('./main.js');

let githubButton   = document.getElementById('github');
let esneButton     = document.getElementById('esne')  ;

githubButton.addEventListener('click', () => {main.openWindow("https://github.com/")});
esneButton.  addEventListener('click', () =>{main.openWindow("https://esnet.esne.es/ESNE_A01/usr_login.aspx")});
