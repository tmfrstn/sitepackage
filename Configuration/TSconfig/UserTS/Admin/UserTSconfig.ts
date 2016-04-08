// Default TSconfig für Gruppe: ADMIN
// Copy & Paste -> TS: ADMIN | <INCLUDE_TYPOSCRIPT: source="FILE:EXT:sitepackage/Configuration/UserTS/Admin/UserTSconfig.ts">

### Admin Panel einschalten ###
admPanel {
	enable {
		preview = 1
		cache = 1
		publish = 1
		edit = 1
		info = 1
	}
	hide = 1
}

options {
	// Cache
	clearCache {
		clearLangCache = 1
		system = 1
	}
	// Seiten-ID vor Seitennamen im Menü
	pageTree.showPageIdWithTitle = 1
}