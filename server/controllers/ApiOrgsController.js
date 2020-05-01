import Axios from "Axios"
import BaseController from "../utils/BaseController";

let apiOrg = Axios.create({
  baseURL: "https://projects.propublica.org/nonprofits/api/",
  timeout: 3000,
});

export class ApiOrgsController extends BaseController{
  constructor() {
    super("api/apiOrg/")
    this.router
      // .use(auth0provider.getAuthorizedUserInfo)
      // .get('', this.getAll)
      .get('', this.getById)
      // .get('/:id/task', this.getTaskByListId)
  }

  async getById( req,res,next){
    try {
      const {data: result}= await apiOrg.get("v2/organizations/820299431.json")
      return res.send(result)
    } catch (error) {
      next(error)
    }
  }
  
}