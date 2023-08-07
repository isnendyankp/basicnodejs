exports.get404 = (req, res, next) => {
    //  passing pageTitle: 'Page NotFound'
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
};


// - add 404 controller function middleware
// - export with cr8 varible get404