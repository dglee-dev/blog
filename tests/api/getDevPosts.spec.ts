const axios = require("axios");

describe.skip("GET /api/dev-posts", () => {
  it("should return a list of dev posts", async () => {
    const response = await axios.get(
      "https://qtxk3m0irg.execute-api.ap-northeast-2.amazonaws.com/prod/getDevPosts"
    );

    console.log(
      "Response from API Gateway: ",
      response
    );
  });
});
