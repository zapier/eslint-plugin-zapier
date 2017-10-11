module.exports = {
  meta: {
    docs: {
      description:
        "disallow using _.get with dot notation (e.g.: `_.get(state, 'foo.bar.baz')`)",
    },
    fixable: 'code',
  },

  create(context) {
    return {
      CallExpression(node) {
        const isUnderscoreGetCall =
          node.callee.type === 'MemberExpression' &&
          node.callee.object.type === 'Identifier' &&
          node.callee.object.name === '_' &&
          node.callee.property.type === 'Identifier' &&
          node.callee.property.name === 'get';
        if (!isUnderscoreGetCall) {
          return;
        }

        const secondArgument = node.arguments[1];

        if (
          secondArgument &&
          secondArgument.type === 'Literal' &&
          secondArgument.value.includes('.')
        ) {
          context.report({
            node,
            message:
              'Dot notation used in second argument of `_.get`. Use array notation instead.',
            fix(fixer) {
              return fixer.replaceText(
                secondArgument,
                JSON.stringify(secondArgument.value.split('.'))
              );
            },
          });
        }
      },
    };
  },
};
