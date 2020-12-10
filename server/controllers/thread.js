import { threadGetList } from '../models/thread.js';

export const threadList = async (request, response) => {
  try {
    const thread = await threadGetList();
    return response.status(200).send(thread);
  } catch (error) {
    const { message } = error;
    return response.status(500).send({ message });
  }
};
