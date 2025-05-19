

	//ウインドウサイズの横幅によって条件分岐

	var windowSize = window.innerWidth;
	var wrapperIdDiv = document.getElementById("wrapper");
	if (windowSize < 768) {
		// スマホ時の処理
		wrapperIdDiv.classList.add("is-smallScreen");
	} else {
		// スマホ以外の処理
		wrapperIdDiv.classList.add("is-wideScreen");
	}

	var timer = '';
	window.onresize = function () {
		  if (timer) {
		    	clearTimeout(timer);
		  }
		  timer = setTimeout(function(){
		    	var windowSize = window.innerWidth;
			var wrapperIdDiv = document.getElementById("wrapper");
		    	if (windowSize < 768) {
				// スマホ時の処理
		      		wrapperIdDiv.classList.remove("is-wideScreen");
		      		wrapperIdDiv.classList.add("is-smallScreen");
		    	} else {
				// スマホ以外の処理
		      		wrapperIdDiv.classList.add("is-wideScreen");
		      		wrapperIdDiv.classList.remove("is-smallScreen");
		    	}
		  }, 200);
	};


	//最上位置・スクロールで表示・変化させるボタンの処理

	//上部に移動するボタン
	const btnRise_btn = document.querySelector('#btnRise');
	//スマホ用画面固定ボタン
	const btnPageBottom_btn = document.querySelector('#btnPageBottom');
	//スティッキーヘッダー
	var sticky_head = document.querySelector('#pageTopFix');
	var sticky = false;

	//クリックイベントを追加
	btnRise_btn.addEventListener( 'click' , scroll_to_top );
	function scroll_to_top(){
		window.scroll({top: 0, behavior: 'smooth'});
	};

	//スクロール時のイベントを追加
	window.addEventListener( 'scroll' , scroll_event );

	function scroll_event(){
		if(window.pageYOffset > 100){
			btnRise_btn.style.opacity = '1';
			btnPageBottom_btn.style.opacity = '1';
			btnPageBottom_btn.style.zIndex = '1';
		}else if(window.pageYOffset < 100){
			btnRise_btn.style.opacity = '0';
			btnPageBottom_btn.style.opacity = '0';
			btnPageBottom_btn.style.zIndex = '-1';
		}
	};


	//スタッフの所属切り替えボタン
	const buttonStaffCategory = [];

	buttonStaffCategory[0] = document.querySelector('#buttonStaffCategory00');
	buttonStaffCategory[1] = document.querySelector('#buttonStaffCategory01');
	buttonStaffCategory[2] = document.querySelector('#buttonStaffCategory02');
	buttonStaffCategory[3] = document.querySelector('#buttonStaffCategory03');
	buttonStaffCategory[4] = document.querySelector('#buttonStaffCategory04');
	buttonStaffCategory[5] = document.querySelector('#buttonStaffCategory05');

	//スタッフ情報表示場所
	const introductionStaffBox = document.querySelector('#introductionStaffBox');
	//スタッフタイトル
	const introductionStaffTitle = document.querySelector('#introductionStaffTitle');

	if(document.getElementById("introductionStaffBox") != null){
		for (let i = 0; i < 6; i++) {
		  buttonStaffCategory[i].addEventListener( 'click' , only_StaffCategory );
		}
	}

	function only_StaffCategory(){

		//対象の要素にすでにクラスは入っている場合は削除する
		const categoryClasses = ['allCategory', 'staffCategory01', 'staffCategory02', 'staffCategory03', 'staffCategory04', 'staffCategory05'];
		categoryClasses.forEach(category => {
			if (introductionStaffBox.classList.contains(category)) {
				introductionStaffBox.classList.remove(category);
				introductionStaffTitle.classList.remove(category);
			}
		});

		//クリックされた要素のIDを取り出し
		const clickedElement = only_StaffCategory.target;
		const buttonStaffCategoryId = this.id;
		//console.log(buttonStaffCategoryId);
		
		//クリックされた要素によってカテゴリ名を付ける
		if( buttonStaffCategoryId == 'buttonStaffCategory00'){
			introductionStaffBox.classList.add(categoryClasses[0]);
			introductionStaffTitle.classList.add(categoryClasses[0]);
		}else if( buttonStaffCategoryId == 'buttonStaffCategory01'){
			introductionStaffBox.classList.add(categoryClasses[1]);
			introductionStaffTitle.classList.add(categoryClasses[1]);
		}else if( buttonStaffCategoryId == 'buttonStaffCategory02'){
			introductionStaffBox.classList.add(categoryClasses[2]);
			introductionStaffTitle.classList.add(categoryClasses[2]);
		}else if( buttonStaffCategoryId == 'buttonStaffCategory03'){
			introductionStaffBox.classList.add(categoryClasses[3]);
			introductionStaffTitle.classList.add(categoryClasses[3]);
		}else if( buttonStaffCategoryId == 'buttonStaffCategory04'){
			introductionStaffBox.classList.add(categoryClasses[4]);
			introductionStaffTitle.classList.add(categoryClasses[4]);
		}else if( buttonStaffCategoryId == 'buttonStaffCategory05'){
			introductionStaffBox.classList.add(categoryClasses[5]);
			introductionStaffTitle.classList.add(categoryClasses[5]);
		}
	};





// jsへのリンクは、main.jsからの相対パスで記述。
// ファイルを呼び出す時は、拡張子[.js]を削除。

require([
  "smoothScroll",			//スムーズスクロール用JS
  "micromodal.min",			//モーダルウィンドウJS
  "luminous.min",			//画像用モーダルウィンドウJS
],function(){ //[ , ]で区切ってfunction文を追記

	//micromodal.min モーダルウィンドウ用
	MicroModal.init({
	  disableScroll: true,
	  awaitOpenAnimation: true,
	  awaitCloseAnimation: true
	});

	//スマートフォン用ボタン
	var globalNaviSmallIcon = document.querySelector('#globalNaviSmallIcon');
	globalNaviSmallIcon.addEventListener( 'click' , btn_is_open );
	
	function btn_is_open(){
		if( globalNaviSmallIcon.classList.contains("is-open") == true ){
			globalNaviSmallIcon.classList.remove("is-open");
			MicroModal.close('modal-globalNaviSmall', {
				awaitCloseAnimation: true
     			});
		} else {
			globalNaviSmallIcon.classList.add("is-open");
			MicroModal.show('modal-globalNaviSmall', {
			       disableScroll: true, // ページスクロールを無効に
			       awaitOpenAnimation: true, // 開閉時のアニメーションを可能に
			       awaitCloseAnimation: true
			});
	        }
	};

	//スマートフォン用ボタン ページ内リンクをクリックした時にモーダルウィンドウを外す
	var globalNaviSmallMenuMain = document.querySelector('.globalNaviSmall__menu__main');
	var globalNaviSmallIconPagelinks = [].slice.call(globalNaviSmallMenuMain.querySelectorAll('a[href^="#"]'));

	globalNaviSmallIconPagelinks.forEach(function (globalNaviSmallIconPagelink) {

		globalNaviSmallIconPagelink.addEventListener( 'click' , pagelink_btn_is_open );
		function pagelink_btn_is_open(){
			if( globalNaviSmallIcon.classList.contains("is-open") == true ){
				globalNaviSmallIcon.classList.remove("is-open");
				MicroModal.close('modal-globalNaviSmall', {
					awaitCloseAnimation: true
	     			});
			} else {
				globalNaviSmallIcon.classList.add("is-open");
				MicroModal.show('modal-globalNaviSmall', {
				       awaitOpenAnimation: true, // 開閉時のアニメーションを可能に
				       awaitCloseAnimation: true
				});
		        }
		};
	});

	//luminous.min用
	//単数用　.luminous
	var luminousOptions = {
		caption: function (trigger) {
	    		return trigger.getAttribute('title');
	  	},
	}
	var luminousTrigger = document.querySelectorAll('.luminous');
	for (var i = 0; i < luminousTrigger.length; i++) {
	  var elem = luminousTrigger[i];
	  new Luminous(elem, luminousOptions);
	}
	//複数用　.luminousGallery
	var luminousGalleryTrigger = document.querySelectorAll('.luminousGallery');
	var luminousGalleryOptions = {
		caption: function (trigger) {
	    		return trigger.getAttribute('title');
	  	},
	}
	if( luminousGalleryTrigger !== null ) {
		new LuminousGallery(luminousGalleryTrigger,{},luminousGalleryOptions);
	}

	
});//end function文 & require


//画面スクロール・遷移でのアニメ用　ScrollMagic用
require([
  "ScrollMagic",			//特定の位置で発火させるJS
  "debug.addIndicators.min",		//デバッグ用JS
  "gsap.min",				//アニメーションJS
],function(){ //[ , ]で区切ってfunction文を追記

	var ScrollMagic = require('ScrollMagic');

	class ScrollFade {
		constructor() {
			this.ANIMATION_CLASS = 'active';

			let $section = document.querySelectorAll('.--typeScrollFadeIn:not(.active)');
			if ($section.length === null) {
				return;
			}
		    	let controller = new ScrollMagic.Controller();
		    	for (let i = 0; i < $section.length; i++) {
		      		let scene = new ScrollMagic.Scene({
		        		triggerElement: $section[i],
		        		triggerHook: 'onEnter',
		        		reverse: false,
		        		offset: 200,
		      		})
		        	//.addIndicators()　//デバッグ用
		        	.addTo(controller);
			      	scene.on('enter', () => {
			        	$section[i].classList.toggle(this.ANIMATION_CLASS);
			      	});
		    	}
		}
	}

	new ScrollFade();

	
});//end function文 & require


//メインイメージスライダー　Swiper用
require([
  "swiper-bundle.min",			//スライダーJS
],function(){ //[ , ]で区切ってfunction文を追記
	var Swiper = require('swiper-bundle.min');


	//コンテンツのスライダー
	  let mySwiperTypeChangeSlide = null;
	  let mySwiperTypeChangeSlide02 = null;
	  const mediaQuery = window.matchMedia('(max-width: 768px)');

	  const checkBreakpoint = (e) => {
	    if (e.matches) {
	      initSwiper();
	      initSwiper02();
	    } else if (mySwiperTypeChangeSlide) {
	      mySwiperTypeChangeSlide.destroy(false, true);
	      mySwiperTypeChangeSlide02.destroy(false, true);
	    }
	  }

	  const initSwiper = () => {
	    mySwiperTypeChangeSlide = new Swiper('.sliderBox--typeChangeSlide .swiper', {
	      slidesPerView: 1,
	      spaceBetween: 0,
	      loop: true,
	      loopAdditionalSlides: 1,
	      speed: 1000,
	      grabCursor: true,
	      pagination: {
	        el: '.sliderBox--typeChangeSlide .swiper-pagination', // ページネーション要素のクラス
	        clickable: true, //クリックを有効化する
	      },
	      navigation: {
	        nextEl: '.sliderBox--typeChangeSlide .swiper-button-next',
	        prevEl: '.sliderBox--typeChangeSlide .swiper-button-prev',
	      },
	      breakpoints: {
	        600: {// 画面幅600px以上で適用
	          slidesPerView: 2,
	        }
	      },
	    });
	  };

	  const initSwiper02 = () => {
	    mySwiperTypeChangeSlide02 = new Swiper('.sliderBox--typeChangeSlide02 .swiper', {
	      slidesPerView: 1,
	      spaceBetween: 0,
	      loop: true,
	      loopAdditionalSlides: 1,
	      speed: 1000,
	      grabCursor: true,
	      pagination: {
	        el: '.sliderBox--typeChangeSlide02 .swiper-pagination', // ページネーション要素のクラス
	        clickable: true, //クリックを有効化する
	      },
	      navigation: {
	        nextEl: '.sliderBox--typeChangeSlide02 .swiper-button-next',
	        prevEl: '.sliderBox--typeChangeSlide02 .swiper-button-prev',
	      },
	      breakpoints: {
	        600: {// 画面幅600px以上で適用
	          slidesPerView: 2,
	        }
	      },
	    });
	  };

	  mediaQuery.addListener(checkBreakpoint);
	  checkBreakpoint(mediaQuery);
	
});//end function文 & require







