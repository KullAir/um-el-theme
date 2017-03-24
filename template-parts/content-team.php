<?php

// =============================================================================
// VIEWS/RENEW/TEMPLATE-TEAM.PHP (Team Members)
// -----------------------------------------------------------------------------
// A blank page for creating unique layouts.
// =============================================================================

?>
	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<div class="entry-content">
		<ul class="kullgrid-unstyled staff-grid">
	      <?php 
	      $query = new WP_Query( array('post_type' => 'team-members', 'posts_per_page' => 12 ,'orderby' => 'menu_order',
		'order'   => 'ASC') );
	       while ( $query->have_posts() ) : $query->the_post(); 
	       //$link = '<a href="'.get_permalink($post).'" title="'.$post->post_title.'">';
	       ?>
				<li class=" staff-grid-item m-all t-1of2 d-1of3">
					<figure class="featured-thumbnail inner-team-item">
						<div class="team_frame">
							<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>" >
							<!--noscript class="staff-grid-image"-->
					 <?php
					    if ( has_post_thumbnail() ) {
					      ?>
					      
					      	<img src="<?php the_post_thumbnail_url('team-grid'); ?>"/>			    
					    <?php
						} else { ?>
							<img src="<?php echo get_stylesheet_directory_uri(); ?>/library/images/default-team-image.jpg" alt="<?php the_title(); ?>" />
						<?php } ?><!--/noscript-->
						</a>
						</div>
						<figcaption><h3><a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a> 
					    </h3>
					    <span class="meta"><?php echo get_post_meta(get_the_ID(),'position',true); ?></span>
					    <div class="excerpt">
					    <?php the_excerpt(); ?>
					    </div>
					  	</figcaption></figure>
					
					</li>
			<?php wp_reset_postdata(); ?>
	
	       
	      <?php endwhile; ?>
			  </ul>
			</div>
		</article>
   