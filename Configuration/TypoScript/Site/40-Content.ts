// Layout bei Gridelements
tt_content.gridelements_pi1.stdWrap.dataWrap.cObject = CASE
tt_content.gridelements_pi1.stdWrap.dataWrap.cObject {
	key.field = layout
	default = TEXT
	default {
		value = <div id="c{field:uid}" class="gridelementHead">|</div>
	}
	100 = TEXT
	100 {
		value = <div id="c{field:uid}" class="gridelement">|</div>
	}
}
// Formhandler mit div Wrappen -> disableWrapInBaseClass = 1 in Formhandler TS
tt_content.formhandler_pi1.stdWrap.dataWrap = <div id="c{field:uid}" class="Tx-Formhandler">|</div>
// Ueberschreiben/Setzen der Cropping Eigenschaften im Image
// offsetX,offsetY,width,height
tt_content.image.20.1.file.crop = 50,50,120,120
// Lightbox
tt_content.image.20.1.imageLinkWrap {
	JSwindow = 0
	directImageLink = 1
	linkParams.ATagParams {
		dataWrap = rel="lightbox{field:uid}"
	}
}



