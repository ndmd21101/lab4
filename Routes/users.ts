import express from 'express'
import { User } from '../lab4db'
const router = express.Router()

// GET users
router.get('/', (req, res, next) => {
    res.send({ msg: "users" })
})
router.post('/', (req, res, next) => {
    
    const newUser = new User({
        ...req.body
      });
      newUser.save()
      .then((user:any)=>{
        if(user){
            console.log('All good, created');
            res.send({ok:"ok"})
        }
        else{
            console.log('Not good, not created');
            res.send({error:"error"})
        }
        
      })
      .catch((e:any)=>{
        console.log('somethin is wrong',e)
        res.send({error:"something is wrong"})
      })
})
export default router