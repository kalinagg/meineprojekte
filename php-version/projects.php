<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1" />
		<meta name="keywords" content="CSS, HTML, Responsive Webdesign, Web Design, JavaScript, jQuery, Adobe Photoshop, Adobe Illustrator, Vektor-Grafik, SVG, Konzeption, Interface Design, Prototypen, User Experience Design, Webseitenerstellung, Logo Design, Corporate Identity, Grafikdesign, Kreativität" />
		<meta name="description" content="Projekte: Logo Design, Grafik- und Webdesign" />
		<title>KG Graphic Design: Projekte</title>
		<link href='https://fonts.googleapis.com/css?family=Pompiere' rel='stylesheet' type='text/css'>
		<link  rel="stylesheet" href="styles.css">
		<script src="js/jquery-1.12.0.min.js"></script>		
		<script src="js/jump.js"></script>
	</head>
  	<body>
		<div class="page-container">		
			<?php 
				$page = 'projects';
				include ('header.php');
			?>						  
			<article class="accordion">
				<section class="acc acc-open">
					<div class="image-container">
						<img src="images/apetitnine6ta.jpg" title="apetitnine6ta">
					</div>					
					<h2>Meine Rezeptensammlung</h2>
					<p>Privates React Projekt</p>
					<p>Umsetzung von einer Webapplikation mit React, Typescript, Material UI und viel Kreativität. Der Code kann auf <a href="https://github.com/kalinagg/apetitni.ne6ta." target="blank">Github</a> gecheckt werden.</p>
				</section>
				<section class="acc">
					<div class="image-container">
						<img src="images/img-1-payback.png" title="PAYBACK">
					</div>					
					<h2>PAYBACK Webseite</h2>
					<p>Unternehmen: PAYBACK</p>
					<p>Umsetzung von responsive Layouts mit HTML5, CSS3 und jQuery, basiert auf dem Bootstrap Framework. Die Features wurden für <a href="https://www.payback.mx" target="blank">PAYBACK Mexiko</a> und <a href="https://www.payback.it" target="blank">PAYBACK Italien</a> entwickelt.</p>
				</section> 
				<section class="acc">
					<div class="image-container"><img src="images/img-2-plenti.png" title="Plenti"></div>					
					<h2>Plenti USA Webseite</h2>
					<p>Unternehmen: PAYBACK</p>
					<p>Umsetzung von responsive Layouts mit HTML5, CSS3 und jQuery, basiert auf dem Bootstrap Framework. Die Features wurden für <a href="http://www.plenti.com" target="blank">Plenti&nbsp;USA</a> entwickelt.</p>
				</section>		
				<section class="acc">
					<div class="image-container">
						<img src="images/img-3-autodesk.png" title="Autodesk">
					</div>					
					<h2>Autodesk Kampagnen</h2>
					<p>Unternehmen: Onemedia</p>
					<p>Umsetzung von responsive Landing Pages und Newslettern mit HTML5, CSS3 und jQuery, in den Rahmen von globalen <a href="http://www.autodesk.com" target="blank">Autodesk</a> Kampagnen.</p>
				</section>				
				<section class="acc">
					<div class="image-container">
						<img src="images/img-5-cal.png" title="img 5">
					</div>					
					<h2>Photokalender</h2>
					<p>Privates Projekt für Print</p>
					<p>Erstellung von Single Page Photokalender in Photoshop.</p>
				</section>		
				<section class="acc">
					<div class="image-container">
						<img src="images/img-6-brot.png" title="img 6">
					</div>					
					<h2>Brotbackkurs-Gutschein</h2>
					<p>Privates Projekt für Print</p>
					<p>Erstellung von einem Brotbackkurs-Gutschein in Photoshop.</p>
				</section>	
			</article>		
			<?php include ('footer.php'); ?>
		</div>		
	</body>
</html>
