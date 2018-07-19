<?php

// local segmentation
// setup default site runs only on desktop to minimize maintenance
$segments_config["www"] = array(
	
	"desktop_edge"  => "desktop",
	"desktop"       => "desktop",
	"desktop_ie11"  => "desktop",
	"desktop_ie10"  => "desktop",

	"smartphone"    => "desktop",

	"desktop_ie9"   => "desktop_light",
	"desktop_light" => "desktop_light",
	"tv"            => "desktop_light",

	"tablet"        => "desktop",
	"tablet_light"  => "desktop",

	"mobile"        => "desktop_light",
	"mobile_light"  => "desktop_light",

	"seo"           => "seo"

);

?>