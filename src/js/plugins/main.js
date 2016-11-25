
// Text-input effects for contact form

(function() {
				if (!String.prototype.trim) {
					(function() {
						// Make sure we trim BOM and NBSP
						var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
						String.prototype.trim = function() {
							return this.replace(rtrim, '');
						};
					})();
				}

				[].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
					// in case the input is already filled..
					if( inputEl.value.trim() !== '' ) {
						classie.add( inputEl.parentNode, 'input--filled' );
					}

					// events:
					inputEl.addEventListener( 'focus', onInputFocus );
					inputEl.addEventListener( 'blur', onInputBlur );
				} );

				function onInputFocus( ev ) {
					classie.add( ev.target.parentNode, 'input--filled' );
				}

				function onInputBlur( ev ) {
					if( ev.target.value.trim() === '' ) {
						classie.remove( ev.target.parentNode, 'input--filled' );
					}
				}

				// clients slider 

				$('.our-clients-slider').slick({
				  slidesToShow: 3,
				  slidesToScroll: 1,
				  arrows : false,
				  dots : false,
				  autoplay: true,
				  infinite: true
				});

				// banner-slider

				$('.carousel-inner').slick({
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  arrows : false,
				  dots : true,
				  autoplay: true,
				  infinite: true
				});

			})();
		