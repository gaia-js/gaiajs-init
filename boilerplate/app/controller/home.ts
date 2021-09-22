import Controller from '@gaiajs/gaiajs/app/lib/router/controller';
import bp from '@gaiajs/gaiajs/app/lib/router/blueprint';

export default class HomeController extends Controller {
  @bp.get('/', { auth_required: false })
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi(ctx.app.name);
  }
}
