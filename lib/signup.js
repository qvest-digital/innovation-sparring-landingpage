import axios from 'axios';

const signup = async (email, includeFreemail) => {
  console.log(email, includeFreemail);

  const portalId = '2420272';
  const formGuid = 'd363a491-ae14-4cb8-ba00-508988c81c02';
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await axios.post(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
    {
      portalId,
      formGuid,
      includeFreemailSuggestions: includeFreemail,
      fields: [
        {
          name: 'email',
          value: email,
        },
      ],
    },
    config
  );
  return response;
};

export default signup;
