import { CreateMessageDto } from "@alexei2000/cms-openapi";
import { messagesApi } from "../apiconfig";

const createMessage = async (message: CreateMessageDto) => {
  return await messagesApi.messagesControllerCreate(message);
};

export default createMessage;
