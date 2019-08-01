module.exports = {
  meta: {
    docs: {
      description:
        "disallow using lookbehind in regular expressions as they are not supported in FF / Safari",
    },
  },

  create(context) {
    return {
      RegExpLiteral(node) {
        if (node.pattern.includes('(?<!')) {
          context.report({
            node,
            message:
              'Lookbehind assertion found. Please do not use lookbehinds in RegExp as they are not widely supported.',
          })
        }
      },
    };
  },
};
