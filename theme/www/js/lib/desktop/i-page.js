Util.Objects["page"] = new function() {
	this.init = function(page) {

		// content reference
		page.cN = u.qs("#content", page);


		// global resize handler 
		page.resized = function() {
			// u.bug("page.resized:", this);

			this.browser_h = u.browserH();
			this.browser_w = u.browserW();

			// forward scroll event to current scene
			if(this.cN && this.cN.scene && typeof(this.cN.scene.resized) == "function") {
				this.cN.scene.resized();
			}
		}

		// global scroll handler 
		page.scrolled = function() {
			// u.bug("page.scrolled:", this);

			// forward scroll event to current scene
			if(this.cN && this.cN.scene && typeof(this.cN.scene.scrolled) == "function") {
				this.cN.scene.scrolled();
			}
		}

		// Page is ready
		page.ready = function() {
			// u.bug("page.ready:", this);

			// page is ready to be shown - only initalize if not already shown
			if(!this.is_ready) {

				// page is ready
				this.is_ready = true;

				u.e.drag(this, this);

				// set resize handler
				u.e.addWindowEvent(this, "orientationchange", this.resized);

				// set resize handler
				u.e.addWindowEvent(this, "resize", this.resized);
				// set scroll handler
				u.e.addWindowEvent(this, "scroll", this.scrolled);

				this.resized();
			}

		}

		// ready to start page builing process
		page.ready();
	}
}

u.e.addDOMReadyEvent(u.init);
