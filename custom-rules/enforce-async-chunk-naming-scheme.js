const getWebpackChunkNameFromNode = node => {
  const { leadingComments = [], trailingComments = [] } = node;
  const inlineComments = [...leadingComments, ...trailingComments];
  const webpackChunkNameComment = inlineComments.find(comment =>
    comment.value.includes("webpackChunkName")
  );

  if (!webpackChunkNameComment) {
    return null;
  }

  const [, , chunkName] = webpackChunkNameComment.value.match(
    /webpackChunkName:(\s+)?'(.*)'/
  );

  return chunkName;
};

module.exports = {
  meta: {
    docs: {
      description:
        "Enforce that webpack async chunk names always follow a pattern derived by the module path"
    }
  },

  create(context) {
    return {
      // Example of a node we're looking for:
      // import(/* webpackChunkName: 'team-route' */ 'app/team/asyncRoute')
      Import(node) {
        const callExpression = node.parent;
        const argument = callExpression.arguments[0];
        if (!argument) {
          return;
        }

        const webpackChunkName = getWebpackChunkNameFromNode(argument);
        if (!webpackChunkName) {
          return;
        }

        // Replace `/` with `-`
        const expectedChunkName = argument.value.replace(/\//g, "-");

        if (webpackChunkName !== expectedChunkName) {
          context.report({
            node,
            message: `Expected: ${expectedChunkName} Received: ${webpackChunkName}.`
          });
        }
      }
    };
  }
};
