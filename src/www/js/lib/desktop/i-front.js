Util.Objects["front"] = new function() {
	this.init = function(scene) {
//		u.bug("scene init:" + u.nodeId(scene))

		scene.resized = function() {
//			u.bug("scene.resized:" + u.nodeId(this));

			if(this.dot) {
				this.dot.diagonal_radius = Math.sqrt(Math.pow(page.browser_w, 2) + Math.pow(page.browser_h, 2))/2;

				u.ass(this.dot._a, {
					"background-size": (page.browser_w * 0.25) + "px auto"
				});


				if(this.dot.revealed) {
					u.ass(this.dot, {
						"margin-left": (-page.browser_w * 0.25)/2+"px",
						"margin-top": (-page.browser_w * 0.25)/2+"px",
						"border-radius": (page.browser_w * 0.25)/2+"px",
						"width": (page.browser_w * 0.25)+"px",
						"height": (page.browser_w * 0.25)+"px",
					});
				}
			}

		}

		scene.scrolled = function() {
//			u.bug("scrolled:" + u.nodeId(this))
		}

		scene.ready = function() {
//			u.bug("scene.ready:" + u.nodeId(this));

			// map reference
			page.cN.scene = this;

			u.e.click(this);
			this.clicked = function() {
				this.dot.increase();
				this.clicked = null;
			}

			this.dot = u.qs("p", this);

			this.dot.scene = this;
			this.dot.move_count = 0;
			this.dot.move_count_treshold = 3;


			u.ce(this.dot);
			this.dot.clicked = function(event) {
				this.increase();
			}
			this.dot.moved = function(event) {
//				u.bug("moved");
				this.move_count++;
				if(this.move_count > this.move_count_treshold) {
					this.move_count = 0;
					this.increase();
				}
			}
			u.e.addMoveEvent(this.dot, this.dot.moved);

			// u.ass(this.dot._a, {
			// 	"background-size": (page.browser_w * 0.2) + "px auto"
			// });


			// apply transitions to smoothen the ride
			u.a.transition(this.dot, "all 90ms ease-in-out");
			u.a.transition(this.dot._a, "all 90ms ease-in-out");

			// increase dot boundaries
			this.dot.increase = function() {
				u.t.resetTimer(this.t_fluctuate);

				this.move_count_treshold = this.move_count_treshold*1.3;
				this.radius_max = (this.radius_max*1.6);
				this.radius_range = (this.radius_range*1.2);
				this.radius_min = this.radius_max - this.radius_range;


				// expansion has reached the end
				if(this.radius_max > this.diagonal_radius) {
//					u.bug("radius out of screen");

					u.t.resetTimer(this.t_fluctuate);
					u.e.removeEvent(this, "mousemove", this.moved);

					u.ass(this.scene, {
						"background": "#ffffff"
					});

					u.ass(this, {
						"margin-left": (-page.browser_w * 0.25)/2+"px",
						"margin-top": (-page.browser_w * 0.25)/2+"px",
						"border-radius": (page.browser_w * 0.25)/2+"px",
						"width": (page.browser_w * 0.25)+"px",
						"height": (page.browser_w * 0.25)+"px",
					});

					u.ass(this._a, {
						"opacity": 1
					});

					this.clicked = function(event) {
						location.href = this.url;
					}

					this.revealed = true;
					return;
				}

				this.t_fluctuate = u.t.setTimer(this.scene, "fluctuateHole", 100);

			}

			this.dot.radius = parseInt(u.gcs(this.dot, "width"));
			this.dot.radius_max = this.dot.radius;
			this.dot.radius_range = this.dot.radius;
			this.dot.radius_min = this.dot.radius_max - this.dot.radius_range;

			// start timer
			this.dot.t_fluctuate = u.t.setTimer(this, "fluctuateHole", 100);

			page.resized();
		}


		// execute random fluctuation within bounds
		scene.fluctuateHole = function() {

			this.dot.radius += u.random(-4, 4);
			this.dot.radius = this.dot.radius > this.dot.radius_max ? this.dot.radius_max : this.dot.radius;
			this.dot.radius = this.dot.radius < this.dot.radius_min ? this.dot.radius_min : this.dot.radius;

//			u.bug("new radius:" + this.dot.radius)

			u.ass(this.dot._a, {
				"opacity":this.dot.radius_max/this.dot.diagonal_radius
			});


			u.ass(this.dot, {
				"margin-left": (-this.dot.radius)+"px",
				"margin-top": (-this.dot.radius)+"px",
				"border-radius": this.dot.radius+"px",
				"width": (this.dot.radius*2)+"px",
				"height": (this.dot.radius*2)+"px",
			});

			this.dot.t_fluctuate = u.t.setTimer(this, "fluctuateHole", 100);
		}



		// scene is ready
		scene.ready();

	}

}
