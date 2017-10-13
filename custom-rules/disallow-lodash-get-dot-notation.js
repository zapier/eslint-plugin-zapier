const isTemplateLiteralWithDots = node =>
  node.type === 'TemplateLiteral' &&
  node.quasis.filter(q => q.value.raw.includes('.')).length > 0;

const isLiteralWithDots = node =>
  node.type === 'Literal' && node.value.includes('.');

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
          (isLiteralWithDots(secondArgument) ||
            isTemplateLiteralWithDots(secondArgument))
        ) {
          context.report({
            node,
            message:
              'Dot notation used in second argument of `_.get`. Use array notation instead.',
            fix(fixer) {
              if (secondArgument.type === 'TemplateLiteral') {
                return false;
              }

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
