# Page Header ausgeben
tt_content.gridelements_pi1.10 =< lib.stdheader

# Ausgabe der Grid Elemente anpassen
tt_content.gridelements_pi1.20.10.setup {
	threeColumns < lib.gridelements.defaultGridSetup
	threeColumns {
		cObject = FLUIDTEMPLATE
		cObject {
			file = EXT:sitepackage/Resources/Private/Templates/GridElements/ThreeColumns.html
		}
	}
}