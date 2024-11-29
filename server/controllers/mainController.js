exports.homepage = async (req, res) => {
  const locals = {
    title: 'NodeJS CRUD', 
    description: 'MongoDB Notes Application'
  }

  res.render('index', locals); 
}