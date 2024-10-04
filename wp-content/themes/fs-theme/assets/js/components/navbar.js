
/**
 * Navbar script
 */
(function Navbar($) {
  // Declare elements here

  const ACTIVE_CLASS = 'active';
  const CLOSE_CLASS = 'close';
  const NAVBAR_FADE_OUT = 'animate__fadeOutUp';
  const NAVBAR_FADE_IN = 'animate__fadeInDown';
  const NAVBAR_BACKGROUND = 'c-navbar--dark';
  const BODY_FIXED = 'fixed'

  // Elements declaration
  let $body;
  let $navigation
  let $navigationItem;
  let $mobileNavigation;
  let $mobileBurger;
  let $mobileClose;

  // Variable
  let lastScrollTop = 0;

  /**
   * Elements initialization
   */
  function initElements() {
    $body = $('body');
    $navigation = $('.js-navbar');
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
    $(window).scroll(onScrollHandle);
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
    $body.removeClass(BODY_FIXED);
  }

  /**
   * Mobile open navbar
   */
  function openNavbar() {
    $mobileNavigation.removeClass(CLOSE_CLASS);
    $body.addClass(BODY_FIXED);
  }

  function onScrollHandle() {
    let scrollTop = $(this).scrollTop();
    // Scroll down
    if (scrollTop > lastScrollTop){
      $navigation.addClass(NAVBAR_FADE_OUT);
      $navigation.removeClass(NAVBAR_FADE_IN);
      // Scroll up
    } else {
      $navigation.addClass(NAVBAR_FADE_IN);
      $navigation.addClass(NAVBAR_BACKGROUND);
      $navigation.removeClass(NAVBAR_FADE_OUT);

      if (scrollTop < 80) {
        $navigation.removeClass(NAVBAR_BACKGROUND);
      }
    }
    lastScrollTop = scrollTop;
  }


  (function init() {
    initElements();
    initEvents();
  })();
})(jQuery);
