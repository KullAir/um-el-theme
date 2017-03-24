<?php

/*
<ul class="posts-grid row-fluid unstyled banner">
<li class="span4">
<figure class="featured-thumbnail thumbnail">
<a href="https://livedemo00.template-help.com/wordpress_48709/aenean-nec-eros/in-pede-mi-aliquet-sit-amet-euismod/" title="In pede mi, aliquet sit amet, euismod"><img src="https://livedemo00.template-help.com/wordpress_48709/wp-content/uploads/2014/03/post-1-368x242.jpg" alt="In pede mi, aliquet sit amet, euismod">
</a>
</figure>
<div class="clear">
</div>
	<h5>		<a href="https://livedemo00.template-help.com/wordpress_48709/aenean-nec-eros/in-pede-mi-aliquet-sit-amet-euismod/" title="In pede mi, aliquet sit amet, euismod">In pede mi, aliquet sit amet, euismod</a></h5>
 <div class="post_meta">
 <span class="post_category"><em>Posted in </em><a href="https://livedemo00.template-help.com/wordpress_48709/category/aenean-nec-eros/" title="Aenean nec eros">Aenean nec eros</a> </span><span class="post_date"><time datetime="2013-03-14T20:28:57">March 14, 2013</time></span><span class="post_author"><em> by </em><a href="https://livedemo00.template-help.com/wordpress_48709/author/admin/">admin</a></span><span class="post_comment"><a href="https://livedemo00.template-help.com/wordpress_48709/aenean-nec-eros/in-pede-mi-aliquet-sit-amet-euismod/" class="comments_link">0 Comments</a></span></div></li><li class="span4"><figure class="featured-thumbnail thumbnail"><a href="https://livedemo00.template-help.com/wordpress_48709/aenean-nec-eros/sed-pede-mi-aliquet-sit-amet-euismod/" title="sed  pede mi, aliquet sit amet, euismod"><img src="https://livedemo00.template-help.com/wordpress_48709/wp-content/uploads/2014/03/post-2-368x242.jpg" alt="sed  pede mi, aliquet sit amet, euismod"></a></figure><div class="clear"></div><h5><a href="https://livedemo00.template-help.com/wordpress_48709/aenean-nec-eros/sed-pede-mi-aliquet-sit-amet-euismod/" title="sed  pede mi, aliquet sit amet, euismod">sed pede mi, aliquet sit amet, euismod</a></h5><div class="post_meta"><span class="post_category"><em>Posted in </em><a href="https://livedemo00.template-help.com/wordpress_48709/category/aenean-nec-eros/" title="Aenean nec eros">Aenean nec eros</a> </span><span class="post_date"><time datetime="2013-03-05T20:31:03">March 5, 2013</time></span><span class="post_author"><em> by </em><a href="https://livedemo00.template-help.com/wordpress_48709/author/admin/">admin</a></span><span class="post_comment"><a href="https://livedemo00.template-help.com/wordpress_48709/aenean-nec-eros/sed-pede-mi-aliquet-sit-amet-euismod/" class="comments_link">0 Comments</a></span></div></li><li class="span4"><figure class="featured-thumbnail thumbnail"><a href="https://livedemo00.template-help.com/wordpress_48709/aenean-nec-eros/pede-mi-aliquet-sit-amet-euismod/" title="Pede mi, aliquet sit amet, euismod"><img src="https://livedemo00.template-help.com/wordpress_48709/wp-content/uploads/2014/03/post-3-368x242.jpg" alt="Pede mi, aliquet sit amet, euismod"></a></figure><div class="clear"></div><h5><a href="https://livedemo00.template-help.com/wordpress_48709/aenean-nec-eros/pede-mi-aliquet-sit-amet-euismod/" title="Pede mi, aliquet sit amet, euismod">Pede mi, aliquet sit amet, euismod</a></h5><div class="post_meta"><span class="post_category"><em>Posted in </em><a href="https://livedemo00.template-help.com/wordpress_48709/category/aenean-nec-eros/" title="Aenean nec eros">Aenean nec eros</a> </span><span class="post_date"><time datetime="2013-02-14T20:26:57">February 14, 2013</time></span><span class="post_author"><em> by </em><a href="https://livedemo00.template-help.com/wordpress_48709/author/admin/">admin</a></span><span class="post_comment"><a href="https://livedemo00.template-help.com/wordpress_48709/aenean-nec-eros/pede-mi-aliquet-sit-amet-euismod/" class="comments_link">
0 Comments</a></span></div></li></ul>*/


 function homepage_post_images_func() {


	
	$returnContent = '<div id="post-images" class="" >';
	$args = array( 'post_type' => 'post', 'posts_per_page' => 3 );
	$loop = get_posts( $args );//get_posts
	
	foreach ( $loop as $post ): 
	  	if(has_post_thumbnail($post)){
			
		
		
		$returnContent = $returnContent. '<div class="post-thumb-grid">
			
			<div class="image_container"><a href="'.get_permalink( $post).'">
				'.get_the_post_thumbnail( $post, 'home-grid-image').'</a>				
			</div>
			<div class="front_holder">
				<div class="front_holder_inner">					
					<h3><a href="'.get_permalink( $post).'" >'.$post->post_title.'</a></h3>	
												
				</div>
			</div>
		
		
		</div>';
		}
	endforeach;		
	$returnContent = $returnContent.'</div>';
	
	echo $returnContent ;
	
}
add_action( 'homepage_post_images', 'homepage_post_images_func' );

?>