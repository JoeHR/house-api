import Router from 'koa-router'
import FileController from '../../api/FileController'

const router = new Router()

router.prefix('/file')

router.post('/upload', FileController.uploadImg)

export default router
