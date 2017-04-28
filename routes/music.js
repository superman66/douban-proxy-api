import express from 'express'
import request from 'superagent'
import { HOST } from '../constant/config.js'
const router = express.Router()

/**
 * 获取音乐信息
 */
router.get('/:id', (req, res) => {
  const sreq = request.get(HOST + req.originalUrl)
  sreq.pipe(res);
  sreq.on('end', (error, res) => {

  })
})

/**
 * 搜索音乐
 * q 和 tag 作为查询关键字，二者必传其一
 * start 取结果的offset，默认为0
 * count 取结果的条数
 */
router.get('/search', (req, res) => {
  const sreq = request.get(HOST + req.originalUrl)
  sreq.pipe(res);
  sreq.on('end', (error, res) => {

  })
})

export default router;