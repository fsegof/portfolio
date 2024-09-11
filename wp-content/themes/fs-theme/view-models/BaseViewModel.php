<?php

namespace FSPortfolio;

/**
 * Class BaseViewModel
 * @package FSPortfolio
 */
class BaseViewModel {
	/**
	 * @var MenuViewModel
	 */
	public $navigationMenu;

	/**
	 * BaseViewModel constructor.
	 */
	public function __construct() {
		$this->navigationMenu = new MenuViewModel( EW_MAIN_NAV_MENU );
	}
}
