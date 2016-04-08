# Page Header ausgeben
tt_content.gridelements_pi1.10 =< lib.stdheader

# Ausgabe der Grid Elemente anpassen
tt_content.gridelements_pi1.20.10.setup {
	twoColumns < lib.gridelements.defaultGridSetup
	twoColumns {
		cObject = FLUIDTEMPLATE
		cObject {
			file = EXT:sitepackage/Resources/Private/Templates/GridElements/TwoColumns.html
		}
	}
}