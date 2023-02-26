const getRooms = {
  get: {
    tags: ["rooms"],
    summary: "Fetch rooms by search query",
    description: "Returns all rooms that matches search queries",
    parameters: [
      {
        name: "search",
        in: "query",
        schema: {
          type: "string",
        },
        description: "Room name to search for",
      },
      {
        name: "roomType",
        in: "query",
        schema: {
          type: "string",
        },
      },
      {
        name: "minPrice",
        in: "query",
        schema: {
          type: "integer",
        },
      },
      {
        name: "maxPrice",
        in: "query",
        schema: {
          type: "integer",
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
                data: [
                  {
                    _id: "63e88b380d6bcb4785415e2c",
                    name: "flat",
                    roomType: "63e8880e7ed92feebfc04253",
                    price: 50000,
                    createdAt: "2022-02-12T06:46:16.280Z",
                    updatedAt: "2022-02-26T08:43:58.084Z",
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
    tags: ["rooms"],
    summary: "Create room",
    description: "Create a new room",
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              name: {
                type: "string",
                description: "room name",
                example: "duplex",
              },
              price: {
                type: "integer",
                description: "price of room",
                example: 1800,
              },
              roomType: {
                type: "string",
                description:
                  "room type you can pass either roomtype id of roomtype name",
                example: "63e8794fee4ddc30582c6bc4",
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
                error: "room type does not exist",
              },
            },
          },
        },
      },
    },
  },
};

const fetchSingleRoom = {
  get: {
    tags: ["rooms"],
    summary: "Find room by id",
    description: "Returns a single room",
    parameters: [
      {
        name: "id",
        in: "path",
        description: "ID of room to return",
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
                data: {
                  _id: "63e88b340d6bcb4785414f39",
                  name: "flat",
                  roomType: "63e8880e7ed92feecdc04243",
                  price: 5000,
                  createdAt: "2022-02-12T06:46:12.492Z",
                  updatedAt: "2022-02-12T06:46:12.492Z",
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
                error: "invalid room id",
              },
            },
          },
        },
      },
    },
  },
};
const updateRoom = {
  patch: {
    tags: ["rooms"],
    summary: "Update",
    description: "Updates a single room",
    requestBody: {
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              name: {
                type: "string",
                description: "room name",
                example: "duplex",
              },
              price: {
                type: "integer",
                description: "price of room",
                example: 1800,
              },
              roomType: {
                type: "string",
                description:
                  "room type you can pass either roomtype id of roomtype name",
                example: "63e8794fee4ddc30582c6bc4",
              },
            },
          },
        },
      },
    },
    parameters: [
      {
        name: "id",
        in: "path",
        description: "ID of room to update",
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
                message: "Resource updated Successfully",
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
                error: "invalid id supplied",
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

const deleteRoom = {
  delete: {
    tags: ["rooms"],
    summary: "Delete room",
    description: "Delete a single room",
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
                error: "invalid id supplied",
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

const roomDoc = {
  baseUrl: { ...getRooms, ...createRoom },
  reqByID: { ...fetchSingleRoom, ...updateRoom, ...deleteRoom },
};

export default roomDoc;
