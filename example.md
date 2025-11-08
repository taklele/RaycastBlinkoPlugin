const axios = require('axios').default;

const options = {
  method: 'POST',
  url: 'https://blinko.xgy.me/api/v1/note/upsert',
  headers: {'Content-Type': 'application/json', Authorization: 'Bearer YOUR_SECRET_TOKEN'},
  data: {
    content: null,
    type: -1,
    attachments: [],
    id: 1,
    isArchived: null,
    isTop: null,
    isShare: null,
    isRecycle: null,
    references: [1],
    createdAt: '',
    updatedAt: '',
    metadata: null
  }
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
