const plansRouter = require('express').Router()
const Plan = require('../models/plan')

plansRouter.get('/', async (request, response) => {
  const plans = await Plan.find({})
  response.json(plans)
})

plansRouter.post('/', async (request, response) => {
  const body = request.body

  if (!body) {
    return response.status(400).json({ error: 'content missing' })
  }

  if (!request.isAuthenticated()) {
    return response.status(400).json({ error: 'user not found' })
  }

  const user = request.user

  const plan = new Plan({
    name: body.name,
    years: body.years,
    date: new Date(),
    user: user._id,
  })

  const savedPlan = await plan.save()
  user.plans = user.plans.concat(savedPlan._id)
  await user.save()

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
  const plan = await Plan.findById(request.params.id)
  if (!plan) {
    response.status(404).end()
  }

  if (!request.isAuthenticated()) {
    return response.status(404).json({ error: 'unauthorized' })
  }
  if (plan.user.toString() !== request.user._id.toString()) {
    return response.status(400).json({ error: 'invalid user' })
  }

  const user = request.user

  user.plans = user.plans.filter((p) => p.toString() === request.params.id)
  await Plan.findByIdAndRemove(request.params.id)
  await user.save()

  response.status(204).end()
})

plansRouter.put('/:id', async (request, response) => {
  const plan = await Plan.findById(request.params.id)
  if (!plan) {
    return response.status(404).end()
  }
  if (!request.isAuthenticated()) {
    return response.status(404).json({ error: 'unauthorized' })
  }
  if (plan.user.toString() !== request.user._id.toString()) {
    return response.status(400).json({ error: 'invalid user' })
  }
  const body = request.body

  const newPlan = {
    ...body,
    date: new Date(),
  }

  const updatedPlan = await Plan.findByIdAndUpdate(request.params.id, newPlan, {
    new: true,
  })
  response.json(updatedPlan)
})

module.exports = plansRouter
