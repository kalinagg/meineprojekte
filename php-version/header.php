<div class="head">
   	<div class="logo-container"><a href="index.php"><img src="images/logo.svg"></a></div>
	<div class="nav-container">
		<ul class="nav">			
		  	<li <?php echo ($page === 'projects') ? ('class="nav-active"') : '' ?>>
			  <a name="jump-to-projects"></a>
			  <a href="projects.php">Projekte</a>			  
			</li>
		  	<li <?php echo ($page === 'service') ? ('class="nav-active"') : '' ?>>
			  <a name="jump-to-service"></a>
			  <a href="service.php">Service</a>			  
			</li>
		  	<li <?php echo ($page === 'about-me') ? ('class="nav-active"') : '' ?>>
			  <a name="jump-to-about-me"></a>
			  <a href="about-me.php">Über mich</a>			  
		  </li>
		  	<li <?php echo ($page === 'contact') ? ('class="nav-active"') : '' ?>>
			  <a name="jump-to-contact"></a>
			  <a href="contact.php">Kontakt</a>			  
			</li>
		</ul>
	</div>
</div>