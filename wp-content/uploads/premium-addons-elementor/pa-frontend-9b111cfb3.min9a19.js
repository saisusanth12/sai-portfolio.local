!function(e){function t(e,u){var i=e.find(".premium-button-style6-bg");0!==i.length&&e.hasClass("premium-mouse-detect-yes")&&e.on("mouseenter mouseleave",".premium-button-style6",function(e){var t=u(this).offset(),n=e.pageX-t.left,o=e.pageY-t.top;i.css({top:o,left:n})})}e(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/premium-addon-button.default",t)})}(jQuery);