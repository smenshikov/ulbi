import webpack from "webpack";

export function buildLoaders() {
  const cssLoader: webpack.RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: ["style-loader", "css-loader", "sass-loader"],
  };

  const typescriptLoader: webpack.RuleSetRule = {
    test: /.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [typescriptLoader, cssLoader];
}
