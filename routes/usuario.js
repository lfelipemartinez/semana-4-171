const routerx = require('express-promise-router');
const usuariosController = require('../controllers/UsuariosController');
const auth = require('../middlewares/auth');

const router = routerx();

router.post('/add', auth.verifyUsuario, usuariosController.add);
router.get('/query', usuariosController.query);
router.get('/list', usuariosController.list);
router.put('/update', auth.verifyUsuario, usuariosController.update);
router.delete('/remove', auth.verifyUsuario, usuariosController.remove);
router.put('/activate', auth.verifyUsuario, usuariosController.activate);
router.put('/deactivate', auth.verifyUsuario, usuariosController.deactivate);
router.post('/login', usuariosController.signin);

module.exports = router;