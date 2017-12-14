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
      const { value } = node.source;

      if (specifier.type !== 'ImportDefaultSpecifier') return;
      if (!value.startsWith('app/')) return;

      if (specifier.local.name !== value.slice(value.lastIndexOf("/") + 1)) {
        context.report({
          node,
          message:
            'Default import identifier should be the same as the module name.'
        });
      }
    }
  }
},
};
