<?php
/**
 * The template for displaying front page
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages and that
 * other "pages" on your WordPress site will use a different template.
 *
 *
 */

get_header(); ?>

<div id="primary" class="content-area">
	<main id="main" class="site-main" role="main">
		<div class="m-all t-all d-all grey section">
			<div class=" m-all t-2of3 d-2of3 " dir="ltr">
				<!--slider-->
				<?php do_action( 'homepage_slider'); ?>
			</div>
			<div class=" m-all t-2of3 d-1of3" >
					<!--event-->
					<?php echo do_shortcode(' [eo_fullcalendar]'); ?>
			</div>
		</div>
		<div class="m-all t-all d-all yellow section">
			<?php	do_action( 'homepage_post_images'); ?>
			<!--images-->
		</div>
		<div class="m-all t-all d-all section">
			<?php
			
			 echo do_shortcode('[posts_smallgrid]');
			 echo do_shortcode('[posts_tinygrid]');
			?>
		</div>
		<div class="m-all t-all d-all yellow section">
			<!--images-->
		</div>
		<?php
		
		
		// Start the loop.
		/*
		while ( have_posts() ) : the_post();

			// Include the page content template.
			get_template_part( 'template-parts/content', 'page' );

			// If comments are open or we have at least one comment, load up the comment template.
			if ( comments_open() || get_comments_number() ) {
				comments_template();
			}

			// End of the loop.
		endwhile;
		 * 
		 */
		?>

	</main><!-- .site-main -->

	

</div><!-- .content-area -->


<?php get_footer(); ?>
