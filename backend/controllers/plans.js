const plansRouter = require('express').Router()
const Plan = require('../models/plan')

plansRouter.get('/', async (request, response) => {
  const plans = await Plan.find({})
  response.json(plans)
})

plansRouter.post('/', async (request, response) => {
  const body = request.body

  if (body === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const plan = new Plan({
    ...body,
    date: new Date(),
  })

  const savedPlan = plan.save()
  response.json(savedPlan)
})

plansRouter.get('/:id', async (request, response) => {
  const plan = await Plan.findById(request.params.id)
  if (plan) {
    response.json(plan)
  } else {
    response.status(404).end()
  }
})

plansRouter.delete('/:id', async (request, response) => {
  await Plan.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

plansRouter.put('/:id', async (request, response) => {
  const body = request.body

  const newPlan = {
    ...body,
    date: new Date()
  }

  const updatedPlan = await Plan.findByIdAndUpdate(request.params.id, newPlan, { new: true })
  response.json(updatedPlan)
})

module.exports = plansRouter