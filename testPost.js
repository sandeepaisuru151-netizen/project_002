const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJmaXJzdE5hbWUiOiJUZXN0IiwibGFzdE5hbWUiOiJVc2VyIiwiaXNBZG1pbiI6dHJ1ZSwiaXNCbG9jayI6ZmFsc2UsImlzRW1haWx2ZXJpZmllZCI6dHJ1ZSwiaW1hZ2UiOiIiLCJpYXQiOjE3NzI4MDU2NDMsImV4cCI6MTc3Mjg5MjA0M30.xHhRxgIJXeFEp50_M3xJ2j1WjW7RPYrtATIboNm0nBk";

fetch("http://localhost:3000/product", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
    },
    body: JSON.stringify({
        productId: "P001",
        name: "Test Product",
        price: 100,
        labelPrice: 120,
        category: "Test Category",
        stock: "10"
        // Missing req.body.images, let's see what happens
    })
})
    .then(res => res.json())
    .then(data => console.log(JSON.stringify(data, null, 2)))
    .catch(err => console.error(err));
