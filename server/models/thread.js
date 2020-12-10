import Thread from '../db/queries/thread.js';

export const threadGetList = async () => {
  try {
    const thread = await thread.getAll();
    return thread;
  } catch (error) {
    throw new Error(error);
  }
};
