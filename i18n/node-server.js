const express = require( 'express' );
const session = require( 'express-session' );
const path = require( 'path' );

const app = express();

// app.use( '/en', express.static(__dirname + '/dist-prod/my-project-en') );
// app.use( '/fr', express.static(__dirname + '/dist-prod/my-project-fr') );

const sess = {
    secret: 'shhh...',
    cookie: {}
};

app.use( session( sess ) );

app.get( '**', ( req, res ) => {
    const url = req.url;

    if( url === '/' ) {
        res.end( 'Hit /en to use app in English, and /hi for Hindi' );
    }

    if( url === '/en' || url === '/hi' ) {
        if( req.url === '/en' ) {
            req.session.locale = 'en';
            req.session.pathPrefix = 'dist-prod/my-project-' + req.session.locale;
        } else if( req.url === '/hi' ) {
            req.session.locale = 'hi';
            req.session.pathPrefix = 'dist-prod/my-project-' + req.session.locale;
        }

        return res.sendFile( path.join( __dirname, req.session.pathPrefix, 'index.html' ) );
    }

    const locale = req.session && req.session.locale;

    if( locale ) {
        res.sendFile( path.join( __dirname, req.session.pathPrefix, url ) );
    }
});

app.listen( 8080, err  => {
    if( err ) {
        throw err;
    }

    console.log( 'app started on port 8080' );
});