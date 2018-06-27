( function() {
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
}() )
