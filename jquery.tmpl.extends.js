(function ($) {
  $.extend(jQuery.tmpl.tag, {
    for: {
      _default: { $2: "var i=1;i<=1;i++" },
      open: "for (var i=1;i<=$2;i++){",
      close: "};",
    },
  });
})(jQuery);
