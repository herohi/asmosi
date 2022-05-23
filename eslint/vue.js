module.exports = {
    env: {
        browser: true
    },
    extends: [
        'plugin:vue/strongly-recommended',
        'prettier'
    ],
    rules: {
        // 0 禁用此规则 1 不符合规则即给出警告 2 不符合规则即报错
        semi: [2, 'always'],
        indent: 0,
        camelcase: 0,
        'comma-dangle': 0,
        'space-before-function-paren': 0,
        'vue/require-v-for-key': 0,
        'vue/require-default-prop': 0,
        'vue/name-property-casing': 0,
        'vue/max-attributes-per-line': [
            2,
            {
                singleline: 5,
                multiline: 5
            }
        ]
    }
};
