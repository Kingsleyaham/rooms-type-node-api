const loginRouteDoc = {
  post: {
    tags: ["auth"],
    summary: "Login user",
    description: "Login user i.e authenticating a user",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              email: {
                type: "string",
                description: "user email",
                example: "kingsley@gmail.com",
              },
              password: {
                type: "string",
                description: "user password",
                example: "12345678",
              },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": {
            schema: {
              type: "object",
              example: {
                success: 1,
                data: {
                  id: "63fa0485460bb53181d3d294",
                  email: "kingsley@gmail.com",
                  token:
                    "eyJhbGciOiJIUzI1NiIsInR5IkpXVCJ9.eyJpZCI6IjYzZmEwNDg1NDYwYmI1M1Nzg3MCwiZXhwIjoxNjc3OTYyNjcwfQ.Dep7ZkjqrpJ_jhDEKDr5_u2gbklqXCAM",
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
                error: "invalid email or password",
              },
            },
          },
        },
      },
    },
  },
};

const signupRouteDoc = {
  post: {
    tags: ["auth"],
    summary: "Create user",
    description: "Create a new user",
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              email: {
                type: "string",
                description: "user email",
                example: "kingsley@gmail.com",
              },
              role: {
                type: "string",
                description: "user role. default is guest",
                example: "admin",
              },
              password: {
                type: "string",
                description: "user password",
                example: "12345678",
              },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": {
            schema: {
              type: "object",
              example: {
                success: 1,
                message: "Resource created Successfully",
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
                error: "user already exist",
              },
            },
          },
        },
      },
    },
  },
};

const logoutRouteDoc = {
  get: {
    tags: ["auth"],
    summary: "Logout user",
    description: "Logout user",
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": {
            schema: {
              type: "object",
              example: {
                success: 1,
                message: "Logout successful",
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

const authDoc = {
  login: loginRouteDoc,
  register: signupRouteDoc,
  logout: logoutRouteDoc,
};

export default authDoc;
