import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default class ChatMessageFromParamsController extends Controller {
  @service chat;

  queryParams = ["username"];
}
