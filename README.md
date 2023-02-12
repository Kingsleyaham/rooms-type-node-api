# Node Api For Rooms and RoomTypes

This is a working solution of a node api that stores rooms and room types and users can create room types, create a room based, update, deleted room and room types. a user can also fetch a room by id, roomtype, price range etc.

## Usage

- clone the repo and cd into the directory
- To run the solution, make sure you have [nodejs](https://nodejs.org) installed
- use the following command terminal

```bash
`npm run dev` if you have nodemon installed
or
npm run start
```

**_Note: To add a new task to to todos just type in the name of the task and press enter_**

## List of Commands

```bash
'GET - {{baseUrl}}/api/v1/rooms-types' - fetch all room types
'POST - {{baseUrl}}/api/v1/rooms-types' - stores roomtype in this format { “_id”: ObjectId, “name”: string}

'GET -  {{baseUrl}}/api/v1/rooms?search={searchRoomNameMatch}&roomType={searchRoomTypeNameMatch}&minPrice={searchRoomMinimumPriceMatch}&maxPrice={searchRoomMaximumPriceMatch}' - Available queries are the search, roomType, minPrice& maxPrice, which are meant to be optional queries on the db unless when the user passes them on the endpoint. Note that when only maxPrice is passed, consider the minPrice 0.
'POST - {{baseUrl}}/api/v1/rooms' - stores rooms in this format {“_id: ObjectId, “name”: string, “roomType”: ObjectId, “price”: number}
'PATCH - {{baseUrl}}/api/v1/rooms/{roomId}' - endpoint for editing a room using its id
'DELETE - {{baseUrl}}/api/v1/rooms/{roomId}' - endpoint or deleting a room using its id
'GET - {{baseUrl}}/api/v1/rooms/{roomId}' - endpoint for fetching a room using its id

```
