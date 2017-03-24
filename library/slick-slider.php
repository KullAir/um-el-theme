<?php
function homepage_slider_func() {

	
	$returnContent = '<div id="main-slider" class="single-item" >';
	$cat_id= get_category_by_slug('slide');
	$args = array( 'post_type' => 'post', 'posts_per_page' => 4 );
	$loop = get_posts( $args );//get_posts
	
	foreach ( $loop as $post ): 
		if(has_post_thumbnail($post))		{
			
			 
			 $returnContent = $returnContent. '<div>
			
			
		
			<div class="image_container">
				<a href="'.get_permalink( $post).'" >
			'.get_the_post_thumbnail( $post,'full').'
				</a>
			</div>
		</div>';
		}
		
		  
		
	endforeach;		
	$returnContent = $returnContent.'</div>';
	
	echo $returnContent ;
	 
	
}
add_action( 'homepage_slider', 'homepage_slider_func' );

/*
 * function homepage_slider_func() {

	//$returnContent = '<div id="main-slider" class="single-item" >';
	
	$returnContent = '<div id="main-slider" class="single-item" >';
	$args = array( 'post_type' => 'homepage_slides', 'posts_per_page' => 4 );
	$loop = get_posts( $args );//get_posts
	
	foreach ( $loop as $post ): 
		
		  
		$returnContent = $returnContent. '<div>
		
			<div class="front_holder">
				<div class="front_holder_inner">	
					<h3>'.$post->post_title.'</h3>
					<p>'.$post->post_content.'</p>
					<a href="'.get_permalink( $post).'" class="button">Read More</a>
				</div>
			</div>
		
			<div class="image_container">
			'.get_the_post_thumbnail( $post, array( 1200)).'
			</div>
		</div>';
	endforeach;			
	$returnContent = $returnContent.'</div></section>';
	
	echo $returnContent ;
	
}
add_action( 'homepage_slider', 'homepage_slider_func' );
 */



?>