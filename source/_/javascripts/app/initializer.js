
// DEFINE A GLOBAL
var global = typeof window !== "undefined" ? window : this;

// CREATING NAMESPACES
;(function( global, undefined ) {
  if( typeof global.NS === 'undefined' ) {
    global.NS = {
        Models      : {}
      , Views       : {}
      , Collections : {}
      , Routers     : {}
      , Helpers     : {}
    };
  }
})( global );

// ENTRY POINT OF APPLICATION
$(function() {
  NS.application = new NS.Views.Application;
});





