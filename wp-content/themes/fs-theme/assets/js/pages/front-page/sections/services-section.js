(function servicesSection($) {
  // Constants declaration
  CLASS_ACTIVE = 'active';

  // Elements declaration
  let $serviceBox;
  let $boxOverlay;

  /**
   * Elements initialization
   */
  function initElements() {
    $serviceBox = $('.js-service-box');
    $boxOverlay = $('.js-service-overly');
  }

  /**
   * Registers all the needed events for the page
   */
  function initEvents() {
    $serviceBox.on('mouseenter',setOverlay);
    $serviceBox.on('mouseleave',clearOverlay);
  }

  /**
  * Set overlay
  */
  function setOverlay (e) {
    // Hovered element
    let $element = $(this);

    $boxOverlay.css({
      "top": $element.position().top,
      "height": $element.height() + 41 + 'px',
      "transform": "scaleY(1)"
    });
  }

  function clearOverlay (e) {
    // Hovered element
    let $element = $(this);

    // If last element
    if ($element.is($(".js-service-box:last"))) {
      $boxOverlay.css({
        "transform-origin": "bottom center",
        "transform": "scaleY(0)"
      });
    } else {
      $boxOverlay.css({
        "transform-origin": "top center",
        "transform": "scaleY(0)"
      });
    }
  }

  (function init() {
    initElements();
    initEvents();
  })();
})(jQuery);
