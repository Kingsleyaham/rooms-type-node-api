const getRoomTypes = {
  get: {
    tags: ["rooms-types"],
    summary: "Fetch all room types",
    description: "Returns all room types",
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": {
            schema: {
              type: "object",
              example: {
                success: 1,
                data: [
                  {
                    _id: "63e87e7eeb09f14162940262",
                    name: "self-contain",
                    createdAt: "2023-02-12T05:51:58.228Z",
                    updatedAt: "2023-02-12T05:51:58.228Z",
                    __v: 0,
                  },
                  {
                    _id: "63e921a3b6e065c042d3c423",
                    name: "parlour",
                    createdAt: "2023-02-12T17:28:03.085Z",
                    updatedAt: "2023-02-12T17:28:03.085Z",
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
const createRoom = {
  post: {
    tags: ["rooms-types"],
    summary: "Create new room type",
    description: "Allows Admin to Creates a new room type",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              name: {
                type: "string",
                description: "room type name",
                example: "2 bedroom flat",
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
                error: "an error occured",
              },
            },
          },
        },
      },
    },
  },
};
const updateRoomType = {
  post: {
    tags: ["rooms-types"],
    summary: "Update room type",
    description: "allows admin to update room type",
    parameters: [
      {
        name: "id",
        in: "path",
        description: "ID of room type to update",
        required: true,
        schema: {
          type: "string",
        },
      },
    ],
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              name: {
                type: "string",
                description: "room type name",
                example: "2 bedroom flat",
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
                message: "Resource updated Successfully",
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
    },
  },
};
const deleteRoomType = {
  delete: {
    tags: ["rooms-types"],
    summary: "Delete room type",
    description: "Delete a single room type",
    parameters: [
      {
        name: "id",
        in: "path",
        description: "ID of room to delete",
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
                message: "Resource deleted Successfully",
              },
            },
          },
        },
      },
      400: {
        description: "Bad Request",
        content: {
          "application/json": {
            schema: {
              type: "object",
              example: {
                error: "invalid room id",
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
    },
  },
};

const roomTypeDoc = {
  baseUrl: { ...getRoomTypes, ...createRoom },
  reqByID: { ...updateRoomType, ...deleteRoomType },
};

export default roomTypeDoc;
