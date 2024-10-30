<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpressi' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '}In;za@lhlrudBU}>/NKSibiPpwH.7fjDVtcUsdrN8 [0BSoZ5KjQ?fi7:VWa2N|' );
define( 'SECURE_AUTH_KEY',  'wgMB3jiZ{?,8H&K^1t7FF6CDPTU_(!M/*!Q)`AsCtFZ VoY}{~HByw<py27czM>T' );
define( 'LOGGED_IN_KEY',    'zJ*-P#)OMAH:=&*[E2ku/QHY8naTnp$^)~wq+BttH1[3Dt96$NH.o4I{<#[$*t~9' );
define( 'NONCE_KEY',        'yxrt`tSz>khR9S(:vYu`=M:kkA7HEp{)LIBb^Lg[cqrKY?]Y1O,el|NHT&A/s<UU' );
define( 'AUTH_SALT',        '=a;mEF@c=:Q(3`6qQ%H8eV:Sy {*|gHNPR4Q,cpMy]aFE:udHobh*=sAz|m^>p&$' );
define( 'SECURE_AUTH_SALT', '74`r?ZwOg#WE]]cbdxao^iYg8ztepkWRdn+@tr<bfPwu@WlHU[?a}L)xmJ/:xit=' );
define( 'LOGGED_IN_SALT',   'xRrJ7d|uf|sxBf6HP6F,R2{CU jCnETOE^{J+m(s3<m5uRME5AjF.Wj&QmM>jS9q' );
define( 'NONCE_SALT',       'm]$.]P(`ibnM/mz[. ^+ZKld1{h)n(3ap}{;a129$kyF*BOP4Vx(dz.j#aYKf?8,' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
