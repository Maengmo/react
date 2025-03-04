import React, { Component } from 'react';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

class Navigation extends Component {
    componentDidMount() {
        gsap.registerPlugin(ScrollToPlugin);

        let n = 0;
        let t = 0;
        let targety = 0;
        let scrollTimer = 0;
        let winHalf;

        let top = document.getElementsByClassName("top")[0];
        let content=document.getElementsByClassName("content")[0];
		let contentLi=content.children;
		let gnb=document.getElementById("gnb");
		let gnbLi=gnb.firstElementChild.children;
		gnbLi[n].classList.add("active");

		let init=() => winHalf=window.innerHeight/2;

		init();
        window.addEventListener("resize", init);

		window.addEventListener("scroll", () => {
			clearTimeout(scrollTimer);

			scrollTimer=setTimeout(() => {
				t=window.scrollY;

				if(t < contentLi[1].offsetTop-winHalf){
					n=0;
				}
				else if(t < contentLi[2].offsetTop-winHalf){
					n=1;
				}
				else if(t < contentLi[3].offsetTop-winHalf){
					n=2;
				}
				else if(t < contentLi[4].offsetTop-winHalf){
					n=3;
				}
				else if(t < contentLi[5].offsetTop-winHalf){
					n=4;
				}
				else if(t < contentLi[6].offsetTop-winHalf){
					n=5;
				}
				else if(t < contentLi[7].offsetTop-winHalf){
					n=6;
				}
				else{
					n=7;
				}

				// console.log("n : "+n);

				for(let i=0; i<gnbLi.length; i++){
					if(i === n){
						gnbLi[i].classList.add("active");
					}
					else{
						gnbLi[i].classList.remove("active");
					}
				}

				if(t > 80){
					if(top.classList.contains("fixed") === false){
						top.classList.add("fixed");
						gsap.fromTo(top, {top: -100}, {top: 0, duration: 0.3, delay: 0.5});
					}
				}
				else{
					if(top.classList.contains("fixed") === true){
						top.classList.remove("fixed");
						top.removeAttribute("style");
					}
				}
			}, 50);
		});

		for(let i=0; i<gnbLi.length; i++){
			gnbLi[i].addEventListener("click", e => {
				e.preventDefault();
				targety=contentLi[i].offsetTop;
				gsap.to(window, {scrollTo: targety, duration: 0.5});
			});
		}		
	}

	render(){
		return(
			<nav id="gnb">
				<ul>
					<li><a href="#area1">HOME</a></li>
					<li><a href="#area2">ABOUT US</a></li>
					<li><a href="#area3">PAGES</a></li>
					<li><a href="#area4">FEATURES</a></li>
					<li><a href="#area5">PORTFOLIO</a></li>
					<li><a href="#area6">BLOG</a></li>
					<li><a href="#area7">SHOP</a></li>
					<li><a href="#area8">CONTACT US</a></li>
				</ul>
			</nav>
		);
	}
}

export default Navigation;