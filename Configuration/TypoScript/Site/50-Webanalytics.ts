# ----------------------------------------------------
# Webanalytics and Ads
# ----------------------------------------------------

lib.google-tagmanager = TEXT
lib.google-tagmanager {
	value (

		<!-- Start: Google Tag Manager -->
		<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-NBN3SH"
		height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
		<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-NBN3SH');</script>
		<!-- END: Google Tag Manager -->
	)
}

lib.superbanner = TEXT
lib.superbanner {
	wrap = 	<!-- Start: Superbanner -->|<!-- END: Superbanner -->
	value (
		<script type='text/javascript'>
			var width = window.innerWidth || document.documentElement.clientWidth;
			if (width < 1020 && width > 800) {
				document.write ("<ins data-revive-zoneid='5' data-revive-tandem='false' data-revive-id='f2a4f2a33e1fd01dd1a2a1bf15f09405'></ins>");
				document.write ("<scr"+"ipt async src='//adserver.mhggn.de/live/www/delivery/asyncjs.php'");
				document.write ("><\/scr"+"ipt>");
			}
			else if (width >= 1020) {
				document.write ("<ins data-revive-zoneid='5' data-revive-id='f2a4f2a33e1fd01dd1a2a1bf15f09405'></ins>");
				document.write ("<scr"+"ipt async src='//adserver.mhggn.de/live/www/delivery/asyncjs.php'");
				document.write ("><\/scr"+"ipt>");
			}
		</script>
	)
}
lib.skyscraper = TEXT
lib.skyscraper {
	wrap = 	<!-- Start: Skyscraper -->|<!-- END: Skyscraper -->
	value (
		<script type='text/javascript'>
			var width = window.innerWidth || document.documentElement.clientWidth;
			if (width >= 1020) {
				document.write ("<ins data-revive-zoneid='6' data-revive-id='f2a4f2a33e1fd01dd1a2a1bf15f09405'></ins>");
				document.write ("<scr"+"ipt async src='//adserver.mhggn.de/live/www/delivery/asyncjs.php'");
				document.write ("><\/scr"+"ipt>");
			}
		</script>
	)
}
lib.rectangleCE = TEXT
lib.rectangleCE {
	wrap = 	<!-- Start: Rectangle Content Slider -->|<!-- END: Rectangle Content Slider -->
	value (
		<ins data-revive-zoneid="7" data-revive-id="f2a4f2a33e1fd01dd1a2a1bf15f09405"></ins>
		<script async src="//adserver.mhggn.de/live/www/delivery/asyncjs.php"></script>
	)
}
lib.rectangle = TEXT
lib.rectangle {
	wrap = 	<!-- Start: Rectangle -->|<!-- END: Rectangle -->
	value (
			<ins data-revive-zoneid="9" data-revive-id="f2a4f2a33e1fd01dd1a2a1bf15f09405"></ins>
			<script async src="//adserver.mhggn.de/live/www/delivery/asyncjs.php"></script>
	)
}
lib.outOfPage = TEXT
lib.outOfPage {
	wrap = 	<!-- Start: Out-of-Page -->|<!-- END: Out-of-Page -->
	value (
		<ins data-revive-zoneid="8" data-revive-id="f2a4f2a33e1fd01dd1a2a1bf15f09405"></ins>
		<script async src="//adserver.mhggn.de/live/www/delivery/asyncjs.php"></script>
	)
}
lib.animatedGif = TEXT
lib.animatedGif {
	wrap = 	<!-- Start: AnimiertesGif -->|<!-- END: AnimiertesGif -->
	value (
		<ins data-revive-zoneid="10" data-revive-id="f2a4f2a33e1fd01dd1a2a1bf15f09405"></ins>
		<script async src="//adserver.mhggn.de/live/www/delivery/asyncjs.php"></script>
	)
}