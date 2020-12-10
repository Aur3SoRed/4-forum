import { query } from '../index.js';

const getAll = async () => {
  const thread = await query({
    tag: 'thread.get-all',
    queryString: `SELECT * FROM thread`,
  });

  return thread;
};

export default { getAll };
