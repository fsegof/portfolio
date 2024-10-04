import '../../components/modal-overlay';
import './sections/services-section';

(function FrontPage($) {

  /**
  * Init wow animations
  */

  function initWow() {
    let wow = new WOW(
      {
        offset: 300
      }
    )
    wow.init();
  }

  (function init() {
    initWow();
  })();
})(jQuery);
