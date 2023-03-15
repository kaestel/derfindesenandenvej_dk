<?php

/**
* This file contains definitions
*
* @package Config
*/
header("Content-type: text/html; charset=UTF-8");
error_reporting(E_ALL);

define("VERSION", "0.7.9.2");
define("UI_BUILD", "UN-BUILT");

define("SITE_UID", "D2V");
define("SITE_NAME", "Der findes en anden vej");
define("SITE_URL", (isset($_SERVER["HTTPS"]) ? "https" : "http")."://".$_SERVER["SERVER_NAME"]);
define("SITE_EMAIL", "os@derfindesenandenvej.dk");

define("DEFAULT_PAGE_DESCRIPTION", "");
define("DEFAULT_PAGE_IMAGE", "/img/logo.png");

define("DEFAULT_LANGUAGE_ISO", "EN"); 
define("DEFAULT_COUNTRY_ISO", "DK"); 
define("DEFAULT_CURRENCY_ISO", "DKK");

define("SITE_LOGIN_URL", "/janitor/admin/login");

define("SITE_SIGNUP", false);
define("SITE_SIGNUP_URL", "/signup");

define("SITE_ITEMS", true);

define("SITE_SHOP", false);
define("SHOP_ORDER_NOTIFIES", "");

define("SITE_SUBSCRIPTIONS", false);

define("SITE_MEMBERS", false);

define("SITE_COLLECT_NOTIFICATIONS", 50);

