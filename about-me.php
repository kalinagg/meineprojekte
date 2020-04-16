<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1" />
		<meta name="keywords" content="CSS, HTML, Responsive Webdesign, Web Design, JavaScript, jQuery, Adobe Photoshop, Adobe Illustrator, Vektor-Grafik, SVG, Konzeption, Interface Design, Prototypen, User Experience Design, Webseitenerstellung, Logo Design, Corporate Identity, Grafikdesign, Kreativität" />
		<meta name="description" content="Über mich: Logo Design, Grafik- und Webdesign" />
		<title>KG Graphic Design: Über mich</title>
		<link href='https://fonts.googleapis.com/css?family=Pompiere' rel='stylesheet' type='text/css'>
		<link  rel="stylesheet" href="styles.css">
	</head>
  	<body>
		<div class="page-container">
			<?php 
				$page = 'about-me';
				include ('header.php');
			?>	  
			<section class="info-container">								
				<article class="info-text">
					<h2>Erfahren Sie mehr über mich ...</h2>
					<p>Ich bin tätig in den Online Bereich seit 2006. In alle diesen Jahren war ich wichtiges Bestandteil von vielen interessanten Projekten. Die Zusammenarbeit mit Kollegen und auch die selbstängide Ausführung der gestellten Anforderungen macht mir große Freude!</p>
					<p>Die Erfahrung in Photoshop, Illustrator, HTML5/CSS3 und Javascript/jQuery geben mir das Wissen Sceen-Designs, Landing Pages oder ganze Webseiten fertig zu stellen. Ich habe unzählige online Kampagnen für Kunden wie Autodesk realisiert. Die Vertiebswebseite des Projektmanagement-Tool SeedPM, habe ich mit Wordpress entwickelt. Responsive Design, Bootstrap und CSS Präprozessoren wie LESS und SASS gehören auch zu meinen Kompetenzen.</p>
					<p>Und jetzt bin ich auf der Suche nach neuen Herauforderungen, weil ... Grafik- und Webdesign ein Feld ist, wo ich meine Kreativität entfalten kann.</p>				
				</article>									
				<article class="info-image">
					<img src="images/me.png" title="Ich" class="info-image-portrait">
					<img src="images/me-landscape.png" title="Ich" class="info-image-landscape">
					<img src="images/me-landscape-small.png" title="Ich" class="info-image-landscape-small">					
				</article>	
			</section>
			<?php include ('footer.php'); ?>			
		</div>		
	</body>
</html>
