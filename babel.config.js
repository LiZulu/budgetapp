module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ["tailwindcss-react-native/babel"],
  };
}; 

// babel.config.js
/* module.exports = {
  plugins: ["tailwindcss-react-native/babel"],
}; */