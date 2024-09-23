
/**
 * Navbar script
 */
(function Navbar($) {
  // Declare elements here

  const ACTIVE_CLASS = 'active';

  // Elements declaration
  let $navigationItem;

  /**
   * Elements initialization
   */
  function initElements() {
    $navigationItem = $('.js-nav-item a');
  }

  /**
   * Registers all the needed global events
   */
  function initEvents() {
    $navigationItem.on('click', toggleActive);
  }

  /**
   * Toggle active class on nav items
   */
  function toggleActive(e) {
    $navigationItem.removeClass(ACTIVE_CLASS);
    $(e.target).addClass(ACTIVE_CLASS);
  }

  (function init() {
    initElements();
    initEvents();
  })();
})(jQuery);
