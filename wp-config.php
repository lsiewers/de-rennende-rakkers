<?php
define('WP_CACHE', false);
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'darakkers_main' );

/** MySQL database username */
define( 'DB_USER', 'darakkers_main' );

/** MySQL database password */
define( 'DB_PASSWORD', 'Ijsbaan123' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '-$G7}9wt}j|2c?;w,fU||8-4kauXx[bxbPH[d8vc65ev0b.,NM{i hO_zC1`T,WL' );
define( 'SECURE_AUTH_KEY',  '8</(OG!7VE|cqr=T7CSOV-[CS%Mh2eT=c!YL&ZLY$bRvYH$`Iw3,RN]a+<IP%y%T' );
define( 'LOGGED_IN_KEY',    'T8-AB1;Nag=TCnmMPN(e|rTJ2;c6_SBgd~>NE+ ZZ2/[9zV)E-DNwUPfougS;CXW' );
define( 'NONCE_KEY',        'jwZjy`_j_VVx{zv~J(R]cXs2L$MFX-:Fgvq%,V8@J2)mq<R9%?Q[`Y]8uMl~`yb*' );
define( 'AUTH_SALT',        'mXVRF|9Q9k#G*1sUS#ueYty6?1IliwGr$8E)HTE$AH/lsEzrSwyn9eAsV_p~Cr(r' );
define( 'SECURE_AUTH_SALT', 'm]kD)Go/H1S#>KT %OXZR:u#x^usse*_Y2x.e?7k$!Qv vRVF8Nl/.U|;JxA=$cU' );
define( 'LOGGED_IN_SALT',   'P0jBz[*%Db)Y#3g<[bPob29g8gTx$(+ioWG2,3(Dt[uz8{.QRton=Y([NRTIg|.r' );
define( 'NONCE_SALT',       'wj=&_XRgF qg5P|xCsENL;2+!v-L+cy<os&q$vkPv?ZAs,3n{Q=`=y$u}fn{#BgW' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

define('WP_ENV', 'LOCAL');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );

define('JWT_AUTH_SECRET_KEY', 'q9`L09xM`;<@o"z');

define('WP_HOME','https://www.derennenderakkers.nl/'); 
define('WP_SITEURL','https://www.derennenderakkers.nl/');

define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST'] );