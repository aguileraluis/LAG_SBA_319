exports.dashboard = async (req, res) => {
  const locals = {
    title: 'Dashboard', 
    description: 'MongoDB Notes Application'
  }
  res.render('dashboard/index', {
    locals,
    layout: '../views/layouts/dashboard'
}); 
}