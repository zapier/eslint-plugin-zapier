module.exports = {
  rules: {
    "@zapier/zapier/disallow-lodash-get-dot-notation": "error",
    "no-restricted-syntax": [
      "error",
      {
        selector: "ImportDeclaration[source.value='create-react-class']",
        message:
          "Do not use `create-react-class` use React.Component or a functional component instead."
      }
    ]
  }
};
