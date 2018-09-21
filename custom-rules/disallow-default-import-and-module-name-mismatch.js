const IMPORTS_WHITELIST = /^app\/(?!graphql|legacy|.scss).*/;

module.exports = {
meta: {
  docs: {
    description:
      'disallow to use a different identifier than the module name.',
  },
},

create(context) {
  return {
    ImportDeclaration(node) {
      const [ specifier ] = node.specifiers;
      if (!specifier) return;

      const { value } = node.source;

      if (specifier.type !== 'ImportDefaultSpecifier') return;
      if (!IMPORTS_WHITELIST.test(value)) return

      const moduleName = value.slice(value.lastIndexOf("/") + 1);
      const { name } = specifier.local;

      if (name !== moduleName) {
        context.report({
          node,
          message:
            `Default import "${name}" should be the same as the module name "${moduleName}".`,
        });
      }
    }
  }
},
};
