import webpack from "webpack";

export function buildLoaders() {
    const typescriptLoader: webpack.RuleSetRule = {
        test: /.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [typescriptLoader]
}
