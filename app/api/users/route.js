// Next.js supports the following HTTP methods:

// 1. GET 
export async function GET(request) {
  const users = [
    { id: 1, name: "Sue" },
    { id: 2, name: "Pokemon" },
    { id: 3, name: "Izzy" },
  ];

  return new Response(JSON.stringify(users), {
    headers: { "Content-Type": "application/json" }, // Explicitly set content type
  });
  
  //The route would look like this: http://localhost:3000/api/users
}

// 2. POST (Create a new user)
export async function POST(request) {
  const newUser = await request.json(); // Assuming the new user data is in the request body

  // In a real app, you'd likely interact with a database or data store here
  console.log("New user created:", newUser);

  return new Response("User created successfully", { status: 201 }); // 201 Created
}

// 3. PUT (Update an existing user - replace the entire resource)
export async function PUT(request) {
  const updatedUserData = await request.json();
  const userIdToUpdate = request.url.split("/").pop(); // Extract user ID from URL

  // ... Update the user with ID `userIdToUpdate` using `updatedUserData`

  return new Response("User updated successfully", { status: 200 }); // 200 OK
}

// 4. PATCH (Partially update an existing user)
export async function PATCH(request) {
  const partialUpdateData = await request.json();
  const userIdToUpdate = request.url.split("/").pop();

  // ... Apply the partial update to the user with ID `userIdToUpdate`

  return new Response("User partially updated", { status: 200 });
}

// 5. DELETE (Delete a user)
export async function DELETE(request) {
  const userIdToDelete = request.url.split("/").pop();

  // ... Delete the user with ID `userIdToDelete`

  return new Response("User deleted successfully", { status: 204 }); // 204 No Content
}

// 6. HEAD (Similar to GET, but only returns headers, no body)
export async function HEAD(request) {
  // ... You might perform some checks here, but don't generate the full response body

  return new Response(null, {
    status: 200,
    headers: { "Content-Type": "application/json" }, // Indicate the content type even if no body
  });
}

// 7. OPTIONS (Inform the client about supported methods)
export async function OPTIONS(request) {
  return new Response(null, {
    status: 204,
    headers: {
      Allow: "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS",
    },
  });
}
