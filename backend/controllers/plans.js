const plansRouter = require('express').Router()
const Plan = require('../models/plan')

plansRouter.get('/', async (request, response) => {
  const plans = await Plan.find({})
  response.json(plans)
})

plansRouter.get('/:id', async (request, response) => {
  const plan = await Plan.findById(request.params.id)
  if (plan) {
    response.json(plan)
  } else {
    response.status(404).end()
  }
})