import {
  dbContext
} from "../db/DbContext"
import {
  BadRequest
} from "../utils/Errors"


class DonationsService {
  async getAll(userEmail) {
    return await dbContext.Donations.find({
      creatorEmail: userEmail
    }).populate("organization", "name")
    //.populate("creator", "name picture")
  }

  async getById(id, userEmail) {
    let data = await dbContext.Donations.findOne({
      _id: id,
      creatorEmail: userEmail
    })
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this donation")
    }
    return data
  }

  async create(rawData) {
    let data = await dbContext.Donations.create(rawData)
    return data
  }

  async edit(id, userEmail, update) {
    let data = await dbContext.Donations.findOneAndUpdate({
      _id: id,
      creatorEmail: userEmail
    }, update, {
      new: true
    })
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this donation");
    }
    return data;
  }

  async delete(id, userEmail) {
    let data = await dbContext.Donations.findOneAndRemove({
      _id: id,
      creatorEmail: userEmail
    });
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this donation");
    }
  }

}


export const donationsService = new DonationsService()