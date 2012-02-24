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
codemirror.Codemirror = zk.$extends(zul.Widget, {

	_readonly: false,
	_syntax: "",
	_config: "",
	_value: "",
	_editor : null,
	
	$define: {
		readonly: function(v) {	
			this._readonly = v;
			this.rerender();	
		},
		
		syntax: function(v) {
			this._syntax = v;
			this.rerender();
		},

		config: function(v) {
			this._config = v;
			this.rerender();
		},

		value: function(v) {
			this._value = v;			
			this.rerender();
		}
	},
	
	getZclass: function () {
		if(this._zclass != null) {
			return this._zclass;
		}
		return "z-codemirror" + (this._readonly ? " z-codemirror-readonly" : "");
	},

    getEditor: function() {
    	return this._editor;
    },

	bind_: function() {
		this.$supers("bind_", arguments);
		zWatch.listen({onRestore : this});
		var wgt = this;
		setTimeout(function() { wgt._init(); }, 50);
	},
			
	unbind_ : function() {
       zWatch.unlisten({onRestore : this});
       this.$supers('unbind_', arguments);
    },
   
    onRestore: function () {
    	this.rerender();
    },
    
	_init: function() {
		var syntax = codemirror.Syntax[this._syntax];
		if(!syntax) {
			syntax = codemirror.Syntax["html"];
		}
		var css = [];
		for(var i=0; i < syntax["css"].length; i++) {
			css[i] = zk.ajaxURI("/web/js/codemirror/codemirror/" + syntax["css"][i], {au : true, ignoreSession : true});
		}
		var wgt = this;
		var defaultConfig = {
				path: zk.ajaxURI("/web/js/codemirror/codemirror/js/", {au : true, ignoreSession : true}),
				stylesheet: css,
	            parserfile: syntax["js"],
				readOnly: this._readonly,
				content: this._value,
				onChange: function() { wgt._processChange(); },
				onCursorActivity: function() { wgt._processChange(); }
		};
		if(this._config) {
			var customConfig;
			eval("customConfig = {" + this._config + "}");
			for (var key in customConfig) {
				defaultConfig[key] = customConfig[key];
			}
		}
		this._editor = new CodeMirror(CodeMirror.replace(this.uuid + "-codemirror"), defaultConfig);
	},
		
	_processChange: function() {
		this._value = this._editor.getCode();	
		this.fire("onChange", {value: this._value}, {sendAhead : false});
	}

});
