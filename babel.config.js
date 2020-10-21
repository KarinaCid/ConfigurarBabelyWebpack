{
    test: /\.js$/;
        exclude: /(node_modules|bower_components)/;//excluded node_modules
            use: {
        loader: "babel-loader";
            options: {
            presets: ["@babel/preset-env"] //Preset used for env setup
        }
    }

}