// ==UserScript==
// @name �����ς疢�g�p�i�̂݌���
// @namespace none
// @version 1.0
// @description �����ς�Ŗ��g�p�i�̂ݕ\�����܂�
// @author ds.man
// @match *://*.janpara.co.jp/*
// @exclude *://*.janpara.co.jp/*&CONKBN[]=6
// @grant none
// ==/UserScript==

var current_url = document.location;
var new_url = current_url + "&CONKBN[]=6";
location.replace(new_url);