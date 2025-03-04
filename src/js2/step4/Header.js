import React, { Component } from 'react';
import $ from 'jquery';

class Header extends Component {
	componentDidMount(){
		$(window).on("resize", function(){
			if($(window).width() > 736 && $("#header").hasClass("open") === true){
				$("#header").removeClass("open");
				$(".right_area").removeClass("open");
			}
		});
		$(".tab").on("click", function(e){
			e.preventDefault();

			if($(window).width() > 735) return;

			if($("#header").hasClass("open") === true){
				$("#header").removeClass("open");
				$(".right_area").removeClass("open");
			}
			else{
				$("#header").addClass("open");
				$(".right_area").addClass("open");
			}
		});
		$("#menu > ul > li").on("click", function(e){
			e.preventDefault();

			let idx=$(this).index();

			for(let i=0; i<$("#menu > ul > li").length; i++){
				if(i === idx){
					$("#menu > ul > li").eq(i).addClass("active");
				}
				else{
					$("#menu > ul > li").eq(i).removeClass("active");
				}
			}
		});
	}

	render(){
		return(
			<header id="header">
				<div className="title_area">
					<h2>Menu</h2>
				</div>
				<nav id="menu">
					<ul>
						<li>
							<a href="">homepage</a>
							<ul className="sub">
								<li><a href="">lorem dolor</a></li>
								<li><a href="">ipsum adipiscing</a></li>
								<li><a href="">tempus magna</a></li>
								<li><a href="">feugiat veroeros</a></li>
							</ul>
						</li>
						<li>
							<a href="">generic</a>
							<ul className="sub">
								<li><a href="">lorem dolor</a></li>
								<li><a href="">ipsum adipiscing</a></li>
								<li><a href="">tempus magna</a></li>
								<li><a href="">feugiat veroeros</a></li>
							</ul>
						</li>
						<li><a href="">elements</a></li>
						<li><a href="">submenu</a></li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Header;