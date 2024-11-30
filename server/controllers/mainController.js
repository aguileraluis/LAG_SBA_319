exports.homepage = async (req, res) => {
  const locals = {
    title: 'NodeJS CRUD', 
    description: 'MongoDB Notes Application'
  }
  res.render('index', {
    locals,
    layout: '../views/layouts/font-page'
}); 
}

exports.about = async (req, res) => {
  const locals = {
    title: 'About NodeJS', 
    description: 'MongoDB Notes Application'
  }
  res.render('index', locals); 
}