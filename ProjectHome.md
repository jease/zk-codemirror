This project provides an integration of the original CodeMirror-Library (developed by Marijn Haverbeke on http://codemirror.net) for the ZK5-Webframework (http://zkoss.org).

The ZK5-Integration for CodeMirror is developed and maintained by Maik Jablonski (maik.jablonski@gmail.com). It was inspired by the need for a cool script editor for a ZK-driven Content-Management-System/Framework called [Jease](http://www.jease.org).

What is CodeMirror?

> "CodeMirror is a JavaScript library that can be used to create a relatively pleasant editor interface for code-like content - computer programs, HTML markup, and similar. If a parser has been written for the language you are editing (see below for a list of supported languages), the code will be coloured, and the editor will help you with indentation." (Quote from http://codemirror.net)

[Demo of ZK5-CodeMirror](http://www.jease.org/codemirror)

[Download codemirror.jar](http://zk-codemirror.googlecode.com/svn/zk-codemirror/WEB-INF/lib/codemirror.jar) ([Show Version](http://code.google.com/p/zk-codemirror/source/browse/zk-codemirror/WEB-INF/src/metainfo/zk/lang-addon.xml))

Currently the following languages are supported by ZK5-CodeMirror:

  * Text (txt)
  * XML (xml)
  * HTML (html)
  * CSS (css)
  * Javascript (js)
  * Java (java)
  * Groovy (groovy)
  * Python (py)
  * SQL (sql)
  * PHP (php)
  * C# (cs)
  * Mediawiki (wiki)
  * Freemarker (ftl)
  * Regular Expressions (regex)

You can use ZK5-CodeMirror in ZUL simply by writing `<codemirror syntax="js" />`. Have a look at the [ZUL-source of the online demo](http://code.google.com/p/zk-codemirror/source/browse/zk-codemirror/index.zul) to see a more detailed usage.