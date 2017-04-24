import express from 'express'
import request from 'superagent'
import { HOST } from '../constant/config.js'
const router = express.Router()

/**
 * 获取榜单信息
 */
router.get('/:type', (req, res) => {
  var sreq = request.get(HOST + req.originalUrl)
  sreq.pipe(res);
  sreq.on('end', (error, res) => {
    console.log('end');
  });
})

/**
 * 获取电影详情
 */
router.get('/subject/:id', (req, res) => {
  var sreq = request.get(HOST + req.originalUrl)
  sreq.pipe(res);
  sreq.on('end', (error, res) => {
  });
})

/**
 * 电影搜索
 */
router.get('/search', (req, res) => {
  var sreq = request.get(HOST + req.originalUrl)
  sreq.pipe(res);
  sreq.on('end', (error, res) => {
  });
})

export default router;