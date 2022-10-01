const products=[]
exports.getproduct=(req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };
  exports.postproduct=(req, res, next) => {
    products.push({username:req.body.username},{emailid:req.body.emailid},{phonenumber:req.body.phonenumber});
    console.log(products)
    res.redirect('/');
  };
  exports.getaproduct=(req, res, next) => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  };
  exports.get404=(req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
  };
  
  
  
  
  