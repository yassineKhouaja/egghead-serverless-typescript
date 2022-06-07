import { Handler } from "@netlify/functions";

export const handler: Handler = async (event) => {
  const { name, favoriteColor } = JSON.parse(event.body);
  console.log({ name, favoriteColor });

  return {
    statusCode: 200,
    body: JSON.stringify({
      name,
      favoriteColor,
      message: `name: ${name}, favorite color: ${favoriteColor}`,
    }),
  };
};
