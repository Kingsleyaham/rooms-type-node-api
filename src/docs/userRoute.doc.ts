const fetchAllUsers = {
  get: {
    tags: ["users"],
    summary: "Fetch all users",
    description: "Returns all users",
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": {
            schema: {
              type: "object",
              example: {
                success: 1,
                users: [
                  {
                    _id: "63fa0485460bbe2e294",
                    email: "king@gmail.com",
                    password: "$2b$10$ffEJRcSgmBcmgOCm",
                    role: "guest",
                    createdAt: "2022-02-25T12:52:21.969Z",
                    updatedAt: "2022-02-25T12:52:21.969Z",
                    __v: 0,
                  },
                  {
                    _id: "63fa8fedec2c5caf72c",
                    email: "king8@gmail.com",
                    password: "$2b$46zJfk1OeAyDxGGjvHi5RTIcU/T6K1jZKIxIzFK",
                    role: "admin",
                    createdAt: "2022-02-25T22:47:09.084Z",
                    updatedAt: "2022-02-25T22:47:09.084Z",
                    __v: 0,
                  },
                ],
              },
            },
          },
        },
      },
      401: {
        description: "Unathorized",
        content: {
          "application/json": {
            schema: {
              type: "object",
              example: {
                error: "an error occured",
              },
            },
          },
        },
      },
    },
  },
};

const fetchSingleUser = {
  get: {
    tags: ["users"],
    summary: "Find user by id",
    description: "Returns a single user",
    parameters: [
      {
        name: "id",
        in: "path",
        description: "ID of user to return",
        required: true,
        schema: {
          type: "string",
        },
      },
    ],
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": {
            schema: {
              type: "object",
              example: {
                success: 1,
                user: {
                  _id: "63fa0485460bb53181e2e294",
                  email: "kingsleyaham6@gmail.com",
                  password: "$2b$10$ffEJR/JeVr53.1JD444JJUcSgmBcmgOCm",
                  role: "admin",
                  createdAt: "2023-02-25T12:52:21.969Z",
                  updatedAt: "2023-02-25T12:52:21.969Z",
                  __v: 0,
                },
              },
            },
          },
        },
      },
      401: {
        description: "Unathorized",
        content: {
          "application/json": {
            schema: {
              type: "object",
              example: {
                error: "invalid id supplied",
              },
            },
          },
        },
      },
      404: {
        description: "user not found",
      },
    },
  },
};

const userDoc = {
  fetchOne: fetchSingleUser,
  fetchAll: fetchAllUsers,
};

export default userDoc;
