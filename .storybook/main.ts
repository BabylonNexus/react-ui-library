import type { StorybookConfig } from "@storybook/react-webpack5"


const config: StorybookConfig = {
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: ["@storybook/addon-links",
        "@storybook/addon-essentials",
        {
            name: '@storybook/addon-styling',
            options: {
                sass: {
                    // Require your Sass preprocessor here
                    implementation: require('sass'),
                },
            },
        },
        "@storybook/addon-interactions",],
    docs: {
        autodocs: 'tag',
    },
}

export default config;