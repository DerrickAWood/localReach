import express from 'express'
import BaseController from "../utils/BaseController";
import auth0provider from "@bcwdev/auth0provider";
import {
  donationsService
} from "../services/DonationsService";



//PUBLIC
export class DonationsController extends BaseController {
  constructor() {
    super("api/donations")
    this.router
      .use(auth0provider.getAuthorizedUserInfo)
      .get('', this.getAll)
      .get('/:id', this.getById)
      // .get('/:id/task', this.getTaskByListId)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
  }


  async getAll(req, res, next) {
    try {
      let data = await donationsService.getAll(req.userInfo.email)
      return res.send(data)
    } catch (err) {
      next(err)
    }
  }
  async getById(req, res, next) {
    try {
      let data = await donationsService.getById(req.params.id, req.userInfo.email)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorEmail = req.userInfo.email
      let data = await donationsService.create(req.body)
      return res.status(201).send(data)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      let data = await donationsService.edit(req.params.id, req.userInfo.email, req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      await donationsService.delete(req.params.id, req.userInfo.email)
      return res.send("Successfully deleted")
    } catch (error) {
      next(error)
    }
  }
}