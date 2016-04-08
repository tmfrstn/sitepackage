# ----------------------------------------------------
# Config
# ----------------------------------------------------
config {
	no_cache = {$config.no_cache}
	pageTitleFirst = 1
#	linkVars = L
	prefixLocalAnchors = {$config.prefixLocalAnchors}
	renderCharset = utf-8
	metaCharset = utf-8
	doctype = html5
	xmlprologue = none
	removeDefaultJS = {$config.removeDefaultJS}
	inlineStyle2TempFile = {$config.inlineStyle2TempFile}
	admPanel = {$config.admPanel}
	debug = 0
	cache_period = 86400
	cache_clearAtMidnight = 1
	sendCacheHeaders = 1
	intTarget = _top
	extTarget = _blank
	index_enable = 0
	index_externals = 0
	headerComment = {$config.headerComment}

	// Enable RealUrl
	tx_realurl_enable = 1
	simulateStaticDocuments = 0
	absRefPrefix = /
	baseURL >

	// Disable Image Upscaling
	noScaleUp = 1

	// optimize sourcecode
	disableImgBorderAttr = 1
	disablePrefixComment = 1

	// Language Settings
	sys_language_uid = 0
	sys_language_overlay = 1
	sys_language_mode = content_fallback
	language = de
	locale_all = de_DE.UTF-8
	htmlTag_setParams = lang="de" dir="ltr" class="no-js"

	// Compression and Concatenation of CSS and JS Files
	compressJs = {$config.compressJs}
	compressCss = {$config.compressCss}
	concatenateJs = {$config.concatenateJs}
	concatenateCss = {$config.concatenateCss}

	// Spam Protection for Email (recommended: -5 to 1) / "ascii"
	spamProtectEmailAddresses = ascii
	spamProtectEmailAddresses_atSubst = &#64;
	spamProtectEmailAddresses_lastDotSubst = &#46;

}