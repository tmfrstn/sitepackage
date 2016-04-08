# Page Header ausgeben
tt_content.gridelements_pi1.10 =< lib.stdheader

# Ausgabe der Grid Elemente anpassen
tt_content.gridelements_pi1.20.10.setup {
	twoColumns66-33 < lib.gridelements.defaultGridSetup
	twoColumns66-33 {
		cObject = FLUIDTEMPLATE
		cObject {
			file = EXT:sitepackage/Resources/Private/Templates/GridElements/TwoColumns66-33.html
		}
	}
}