
/**
 * Navbar script
 */
(function Navbar($) {
  // Declare elements here

  const ACTIVE_CLASS = 'active';
  const CLOSE_CLASS = 'close';

  // Elements declaration
  let $navigationItem;
  let $mobileNavigation;
  let $mobileBurger;
  let $mobileClose;

  /**
   * Elements initialization
   */
  function initElements() {
    $navigationItem = $('.js-nav-item a');
    $mobileNavigation = $('.navbar-navigation-mobile');
    $mobileBurger = $('.js-mobile-burger');
    $mobileClose = $('.js-mobile-close svg');
  }

  /**
   * Registers all the needed global events
   */
  function initEvents() {
    $navigationItem.on('click', toggleActive);
    $mobileBurger.on('click', openNavbar);
    $mobileClose.on('click', closeNavbar);
    $mobileClose.on('click', closeNavbar);
    $navigationItem.on('click', closeNavbar);
  }

  /**
   * Toggle active class on nav items
   */
  function toggleActive(e) {
    $navigationItem.removeClass(ACTIVE_CLASS);
    $(e.target).addClass(ACTIVE_CLASS);
  }

  /**
   * Mobile close navbar
   */
  function closeNavbar() {
    $mobileNavigation.addClass(CLOSE_CLASS);
  }

  /**
   * Mobile open navbar
   */
  function openNavbar() {
    $mobileNavigation.removeClass(CLOSE_CLASS);
  }

  (function init() {
    initElements();
    initEvents();
  })();
})(jQuery);
