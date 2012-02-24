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
package org.zkoss.codemirror;

import org.zkoss.zk.ui.HtmlBasedComponent;
import org.zkoss.zk.ui.event.Events;
import org.zkoss.zk.ui.event.InputEvent;

public class Codemirror extends HtmlBasedComponent {

	private String syntax = "";
	private String value = "";
	private String config = "";
	private boolean readonly = false;

	static {
		addClientEvent(Codemirror.class, Events.ON_CHANGE, CE_IMPORTANT);
	}

	public Codemirror() {
	}

	public String getSyntax() {
		return syntax;
	}

	public void setSyntax(String syntax) {
		this.syntax = syntax != null ? syntax : "";
		invalidate();
	}

	public String getConfig() {
		return config;
	}

	public void setConfig(String config) {
		this.config = config != null ? config : "";
		invalidate();
	}

	public boolean isReadonly() {
		return readonly;
	}

	public void setReadonly(boolean readonly) {
		this.readonly = readonly;
		invalidate();
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value != null ? value : "";
		invalidate();
	}

	public void service(org.zkoss.zk.au.AuRequest request, boolean everError) {
		final String cmd = request.getCommand();
		if (cmd.equals(Events.ON_CHANGE)) {
			InputEvent evt = InputEvent.getInputEvent(request, value);
			value = evt.getValue();
			Events.postEvent(evt);
		} else
			super.service(request, everError);
	}

	protected void renderProperties(org.zkoss.zk.ui.sys.ContentRenderer renderer)
			throws java.io.IOException {
		super.renderProperties(renderer);
		render(renderer, "readonly", readonly);
		render(renderer, "syntax", syntax);
		render(renderer, "config", config);
		render(renderer, "value", value);
	}

}
