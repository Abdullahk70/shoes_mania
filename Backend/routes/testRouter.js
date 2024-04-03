import { Router } from 'express';
const router = Router();

// POST /api/v1/test route
router.post('/', (req, res) => {
  // Assuming the request body contains firstName and lastName
  const { firstName, lastName } = req.body;

  // Your logic here, for example, you can simply send back the received data
  res.json({ firstName, lastName });
});

export default router;