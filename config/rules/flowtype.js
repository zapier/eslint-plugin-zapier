module.exports = {
  parser: "babel-eslint",

  plugins: ["flowtype"],

  rules: {
    "flowtype/no-types-missing-file-annotation": "error",
    "flowtype/define-flow-type": "error",
    "flowtype/use-flow-type": "error",
    "flowtype/no-weak-types": ["error", {
      "Object": false,
      "Function": false
    }]
  }
};
