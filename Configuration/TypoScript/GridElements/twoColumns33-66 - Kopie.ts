# Page Header ausgeben
tt_content.gridelements_pi1.10 =< lib.stdheader

# Ausgabe der Grid Elemente anpassen
tt_content.gridelements_pi1.20.10.setup {
	twoColumns33-66 < lib.gridelements.defaultGridSetup
	twoColumns33-66 {
		cObject = FLUIDTEMPLATE
		cObject {
			file = EXT:sitepackage/Resources/Private/Templates/GridElements/TwoColumns33-66.html
		}
	}
}