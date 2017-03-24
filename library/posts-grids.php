<?php


// [posts_smallgrid ]
function posts_smallgrid_func(  $atts ) {
	
	 $a = shortcode_atts( array(
        'title' => 'Articles',
        'category' =>'',
        'posts_per_page' => 2
    ), $atts );
		
	$args =  array( 'posts_per_page' => $a['posts_per_page'], 'category' => $a['category'] );
	$myposts = get_posts( $args );
	 
	
	
	$returnContent = '<div class="kullgrid-span m-all t-all d-1of2">
						<div class="kullgrid-title-box">
								<h2>'.$a['title'].'</h2></div>
								<ul class="kullgrid-recent-posts kullgrid-unstyled">';


	
			
		foreach ( $myposts as $post ): //: setup_postdata( $post ); 
		
			if (has_post_thumbnail( $post->ID ) )
				$image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'thumbnail' );
			else {
				$image[0] = 'http://umelfahem.org.il/wp-content/uploads/2016/03/file0001657242870.jpg'; //file0001657242870
			}
			
			if (has_excerpt($post->ID))
				$excerpt = $post->post_excerpt;
			else{
				$excerpt = strip_tags(apply_filters('the_content', $post->post_content));//strip_tags( $post->post_content); //(string) substr($post->post_content , 0, strpos($post->post_content," ",190));
				if (strlen($excerpt)>190){
					$excerpt = substr($excerpt , 0, strpos($excerpt," ",190));
				}
			}
			
			$link = '<a href="'.get_permalink($post).'" title="'.$post->post_title.'">';
			$date = get_the_date(__('F j, Y'),$post->ID); // $post->post_date_gmt;
			
			$returnContent= $returnContent.'<li class="recent-posts_li d-all t-all m-all">
			<figure class="featured-thumbnail">'.$link.'<img src="'. $image[0].'" width="150px" height="150px"></a></figure>
			
			<h3>'.$link.$post->post_title.'</a></h3>
			<span class="meta">
				<span class="post-date">'.$date .'</span>
			</span>
			<div class="excerpt">'.$excerpt.'</div>
			<div class="clear"></div>
			
			</li>';
		endforeach; 		
		$returnContent= $returnContent.'</ul></div>';
	return $returnContent;
	
}
add_shortcode( 'posts_smallgrid', 'posts_smallgrid_func' );


// [posts_tinygrid ]
function posts_tinygrid_func(  $atts ) {
	
	 $a = shortcode_atts( array(
        'title' => 'News',
        'category' =>'',
        'posts_per_page' => 6
    ), $atts );
	
	$args =  array( 'posts_per_page' => $a['posts_per_page'], 'category' => $a['category'] );
	$myposts = get_posts( $args );
	
	$swicherIndex = 0;
	$excerpt='';
	$image;
	$link = '';
	$date = '';
		
	$returnContent = '<div class="kullgrid-span kull_tinygrid m-all t-all d-1of2 last-col">
						<div class="kullgrid-title-box">
								<h2>'.$a['title'].'</h2></div>';
		
		foreach ( $myposts as $post ): 
		
			if (has_post_thumbnail( $post->ID ) )
				$image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), array(80,75) );
			else {
				$image[0] = 'http://umelfahem.org.il/wp-content/uploads/2016/03/file0001657242870.jpg'; //file0001657242870
			}
			
			if (has_excerpt($post->ID))
				$excerpt = $post->post_excerpt;
			else{
				$excerpt = strip_tags(apply_filters('the_content', $post->post_content));//strip_tags( $post->post_content); //(string) substr($post->post_content , 0, strpos($post->post_content," ",190));
				
			}
			if (strlen($excerpt)>100){
				$excerpt = substr($excerpt , 0, strpos($excerpt," ",100));
			}
			
			
			$link = '<a href="'.get_permalink($post).'" title="'.$post->post_title.'">';
			$date = get_the_date(__('F j, Y'),$post->ID); // $post->post_date_gmt;
			if($swicherIndex%2 == 0)
					$returnContent= $returnContent.	'<ul class="kull-tiny-grid kullgrid-unstyled kullgrid-row-fluid">';
			
			$swicherIndex++;
			$returnContent= $returnContent.'<li class="kullgrid-span t-1of2 d-1of2 m-all">
			<figure class="featured-thumbnail">'.$link.'<img src="'. $image[0].'" width="80px" height="75px"></a></figure>
			<div class="clear"></div>
			<h3 class="hidden">'.$post->post_title.'</h3>
			<span class="post_meta">
				<span class="post-date">'.$date .'</span>
			</span>
			<div class="excerpt">'.$excerpt.'</div>
			</li>';
			if($swicherIndex%2 == 0)
					$returnContent= $returnContent.	'</ul>';
		endforeach; 
		
		//<h3>'.$link.$post->post_title.'</a></h3>
		
		if($swicherIndex%2 == 1)	
			$returnContent= $returnContent.'</ul>';
		$returnContent= $returnContent.'</div>';
	return $returnContent;
	
}
add_shortcode( 'posts_tinygrid', 'posts_tinygrid_func' );

?>
