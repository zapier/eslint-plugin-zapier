const IMPORTS_BLACKLIST = /^app\/(?:graphql|legacy)|.scss/;
  
const getRegularImportVariants = value =>
  [value.slice(value.lastIndexOf("/") + 1)];

const getComponentImportVariants = value =>
  value
    .replace(/^app\/[\w-]+\/components\//, '')
    .split('/')
    .reverse()
    .reduce((variants, part, i) => {
      variants.push(part + (variants[i - 1] || ''))
      return variants
    }, []);

const getImportVariants = value => {
  value =
    value[0].toUpperCase() +
    value
      .slice(1)
      .replace(/-([a-z])/g, capture => capture[1].toUpperCase());
  
  return value.includes('components')
    ? getComponentImportVariants(value)
    : getRegularImportVariants(value);
}

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
        if (!value.startsWith('app/') || IMPORTS_BLACKLIST.test(value)) return;

        const importVariants = getImportVariants(value);
        const { name } = specifier.local;

        if (!importVariants.includes(name)) {
          context.report({
            node,
            message:
              `Default import "${name}" should be one of the following values: "${importVariants.join(', ')}".`,
          });
        }
      }
    }
  },
};
