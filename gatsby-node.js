exports.onPreBootstrap = ({ actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: "/url_that_is/not_pretty",
    toPath: "/pretty/url",
    statusCode: 200,
  })
  createRedirect({
    fromPath: "/packages/*",
    toPath: "/plugins/*",
  })
  createRedirect({
    fromPath: "/get_external_api/*",
    toPath: "https://example.com/*",
    statusCode: 200,
  })
}
