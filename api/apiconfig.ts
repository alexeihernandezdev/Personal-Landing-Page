import { Configuration, MessagesApi } from "@alexei2000/cms-openapi";

const config = new Configuration({
  basePath: process.env.NEXT_PUBLIC_BACKEND_API_URL,
});

export const messagesApi = new MessagesApi(config);
