/**
 * External dependencies
 */
import { isEmpty } from 'lodash';

/**
 * WordPress dependencies
 */
import { createSlotFill, Dropdown } from '@wordpress/components';
import { settings as filterIcon } from '@wordpress/icons';
import { __, sprintf } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';

/**
 * SolidWP dependencies
 */
import {
	Button,
	FiltersGroupCheckboxes,
	FiltersGroupDateRange,
} from '@ithemes/ui';

/**
 * Internal dependencies
 */
import {
	userSecurityStore,
	CORE_STORE_NAME as coreStore,
} from '@ithemes/security.packages.data';
import {
	StyledFilters,
	StyledFilterTools, StyledSearchDivider,
} from './styles';

const { Slot: UserSecurityFilterSlot, Fill: UserSecurityFilterFill } = createSlotFill( 'userSecurityFilters' );
export { UserSecurityFilterFill };

const { Slot: UserSecurityActionsSlot, Fill: UserSecurityActionsFill } = createSlotFill( 'UserSecurityActions' );
export { UserSecurityActionsFill };

const DEFAULT_FILTERS = {
	roles: [ 'administrator' ],
};

const QUERY_VARS = {
	per_page: 20,
	context: 'edit',
};

export function UserSecurityTableFilters() {
	const [ filters, setFilters ] = useState( DEFAULT_FILTERS );
	const { query } = useDispatch( userSecurityStore );
	const { isQuerying } = useSelect( ( select ) => ( {
		isQuerying: select( userSecurityStore ).isQuerying( 'main' ),
	} ), [] );
	const { roles } = useSelect( ( select ) => ( {
		roles: select( coreStore ).getRoles(),
	} ), [] );

	const roleOptions = Object.entries( roles || {} )
		.map( ( [ slug, role ] ) => ( {
			value: slug,
			label: role.label,
		} ) );

	const onApply = ( nextFilters ) => {
		setFilters( nextFilters );
		query( 'main', {
			...nextFilters,
			...QUERY_VARS,
		} );
	};

	const onReset = () => onApply( DEFAULT_FILTERS );

	return (
		<StyledFilterTools>
			<Dropdown
				popoverProps={ { focusOnMount: 'container' } }
				renderToggle={ ( { isOpen, onToggle } ) => (
					<Button
						icon={ filterIcon }
						onClick={ onToggle }
						aria-expanded={ isOpen }
						variant="tertiary"
						text={ sprintf(
							/* translators: 1. Filter for querying table */
							__( 'Filter (%d)', 'better-wp-security' ),
							Object.keys( filters ).filter( ( key ) => ! isEmpty( filters[ key ] ) ).length
						) }
					/>
				) }
				renderContent={ () => (
					<StyledFilters
						initialValue={ filters }
						initialOpen={ [ 'user_group' ] }
						expandSingle
						isBusy={ isQuerying }
						onApply={ onApply }
					>
						<UserSecurityFilterSlot />
						<FiltersGroupCheckboxes
							slug="roles"
							title={ __( 'Role', 'better-wp-security' ) }
							options={ roleOptions }
						/>
						<FiltersGroupDateRange
							slug="solid_last_seen"
							title={ __( 'User Last Seen', 'better-wp-security' ) }
							allowCustom
						/>
						<FiltersGroupCheckboxes
							slug="solid_password_strength"
							title={ __( 'Password Strength', 'better-wp-security' ) }
							options={ [
								{ value: '1', label: __( 'Very Weak', 'better-wp-security' ) },
								{ value: '2', label: __( 'Weak', 'better-wp-security' ) },
								{ value: '3', label: __( 'Medium', 'better-wp-security' ) },
								{ value: '4', label: __( 'Strong', 'better-wp-security' ) },
							] }
						/>
						<FiltersGroupDateRange
							slug="solid_password_age"
							title={ __( 'Password Age', 'better-wp-security' ) }
							presets={ [
								{
									value: 604800,
									label: __( '7 days old', 'better-wp-security' ),
									summary: __( 'Password is 7 days old', 'better-wp-security' ),
								},
								{
									value: 2592000,
									label: __( '30 days old', 'better-wp-security' ),
									summary: __( 'PW is 30 days old', 'better-wp-security' ),
								},
								{
									value: 7776000,
									label: __( '90 days old', 'better-wp-security' ),
									summary: __( 'PW is 90 days old', 'better-wp-security' ),
								},
							] }
							allowCustom
						/>
					</StyledFilters>
				) }
			/>
			<Button
				onClick={ onReset }
				variant="tertiary"
				text={ __( 'Reset All', 'better-wp-security' ) }
			/>
			<StyledSearchDivider>&#124;</StyledSearchDivider>
			<UserSecurityActionsSlot />
		</StyledFilterTools>
	);
}
