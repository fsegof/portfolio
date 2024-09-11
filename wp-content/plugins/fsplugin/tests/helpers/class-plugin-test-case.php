<?php
/**
 * Class Plugin_Test_Case
 */
class Plugin_Test_Case extends WP_UnitTestCase
{
	/**
	 * Activates plugin on test set up.
	 */
	public static function set_up_before_class()
	{
		parent::set_up_before_class();

		\FSPortfolio\Plugin_Activator::activate();
	}

	/**
	 * Deactivates plugin on tear down
	 */
	public static function tear_down_after_class()
	{
		parent::tear_down_after_class();

		\FSPortfolio\Plugin_Deactivator::deactivate();
	}
}
