<?php

// =============================================================================
// TEMPLATE NAME: Team Members
// -----------------------------------------------------------------------------
// A blank page for creating unique layouts.
// =============================================================================


get_header(); ?>
<header class="entry-header full-width">
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
	</header><!-- .entry-header -->
<div id="primary" class="content-area">
	
	<main id="main" class="site-main" role="main">
		<?php
		// Start the loop.
		while ( have_posts() ) : the_post();

			// Include the page content template.
			get_template_part( 'template-parts/content', 'team' );


			// End of the loop.
		endwhile;
		?>

	</main><!-- .site-main -->

	<?php //get_sidebar( 'content-bottom' ); ?>

</div><!-- .content-area -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>


?>

