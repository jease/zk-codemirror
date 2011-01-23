/*
    Copyright (C) 2010 maik.jablonski@gmail.com

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
codemirror.Syntax = {

 "txt" : {
	"js" :		["parsedummy.js"], 
	"css" : 	["css/xmlcolors.css"]	 
 },
 
 "html" : {
	"js" :	 	["parsexml.js", "parsecss.js", "tokenizejavascript.js", "parsejavascript.js", "parsehtmlmixed.js"], 
	"css" :	["css/jscolors.css", "css/csscolors.css", "css/xmlcolors.css"]
 },

 "js" : {
	"js" :	 	["tokenizejavascript.js", "parsejavascript.js"], 
	"css" :	["css/jscolors.css"]
 },

 "css" : {
	"js" :	 	["parsecss.js"], 
	"css" : 	["css/csscolors.css"]
 },

 "xml" : {
	"js" :	 	["parsexml.js"], 
	"css" :	["css/xmlcolors.css"]
 },

 "java" : {
	"js" :	 	["../contrib/java/js/tokenizejava.js", "../contrib/java/js/parsejava.js"], 
	"css" :	["contrib/java/css/javacolors.css"]
 },
 
 "groovy" : {
	"js" :	 	["../contrib/groovy/js/tokenizegroovy.js", "../contrib/groovy/js/parsegroovy.js"], 
	"css" : 	["contrib/groovy/css/groovycolors.css"]
 },

 "py" : {
	"js" : 		["../contrib/python/js/parsepython.js"], 
	"css" : 	["contrib/python/css/pythoncolors.css"]
 },

 "sql" : {
	"js" :	 	["../contrib/sql/js/parsesql.js"], 
	"css" : 	["contrib/sql/css/sqlcolors.css"]
 },
 
 "cs" : {
	"js" :	 	["../contrib/csharp/js/tokenizecsharp.js", "../contrib/csharp/js/parsecsharp.js"],
	"css" : 	["contrib/csharp/css/csharpcolors.css"]
 },

 "php" : {
	"js" :		["parsexml.js", "parsecss.js", "tokenizejavascript.js", "parsejavascript.js", "../contrib/php/js/tokenizephp.js", "../contrib/php/js/parsephp.js", "../contrib/php/js/parsephphtmlmixed.js"],
    "css" :	["css/xmlcolors.css", "css/jscolors.css", "css/csscolors.css", "contrib/php/css/phpcolors.css"]  
 },

 "wiki" : {
	"js" :	 	["../contrib/mediawiki/js/parsemw.js"],
	"css" : 	["contrib/mediawiki/css/mwcolors.css"]
 },

 "ftl" : {
		"js" :	 	["../contrib/freemarker/js/parsefreemarker.js"],
		"css" : 	["contrib/freemarker/css/freemarkercolors.css"]
 },
	 
 "regex" : {
		"js" :	 	["../contrib/regex/js/parseregex.js"],
		"css" : 	["contrib/regex/css/regexcolors.css"]	 
 }

};
