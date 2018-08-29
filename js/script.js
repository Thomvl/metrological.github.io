document.addEventListener( `DOMContentLoaded`, function() {
  var s = false
  , b = document.querySelector( '.burger-container' )
  , m = document.querySelector( '.menu' )
  , i = document.querySelector( '.icon' )
  , dp = document.querySelector( '.dropdown' )
  , o = 'open'

  b.onclick = function() {
    m.classList.toggle( o )
    i.classList.toggle( 'cross-icon' )

    if ( s !== true) return

    dp.classList.toggle( o )
    s = false
  }

  dp.onclick = function() {
    dp.classList.toggle( o )
    s = true
  }
} )

function play() {
  document.body.style.overflow = 'hidden'

  $( '#overlay' ).on( 'click', close )

  var modal = $( '.video-wrapper' )
  var b = $( window )
  var w = modal.width()
  var h = modal.height()
  var bw = b.width()
  var bh = b.height()

  modal.css( {
    'position': 'absolute'
  , 'top': ( ( bh - h ) / 2 ) + b.scrollTop() + 'px'
  , 'left': ( ( bw - w ) / 2 ) + 'px'
  } )

  $( '#overlay' ).css( { visibility: 'visible' } )

  var vid = document.getElementById( 'video' )
  vid.play()
  vid.onended = close
}

function close() {
  document.getElementById( 'video' ).load()
  $( '#overlay' ).off( 'click' )
  $( '#overlay' ).css( { visibility: 'hidden' } )
  document.body.style.overflow = 'visible'
}
