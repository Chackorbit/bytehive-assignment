export default {
  interviewApi: {
    output: {
      target: "./src/api",
      schemas: "./src/types",
      client: "react-query",
      mode: "single",
    },
    input: {
      target: "https://interview-api-8icc.onrender.com/api-docs-config",
      validation: false, // Вимикаємо валідацію схеми
    },
    hooksOptions: {
      query: {
        enabled: false,
      },
    },
    ignoreWarnings: true,
  },
};
