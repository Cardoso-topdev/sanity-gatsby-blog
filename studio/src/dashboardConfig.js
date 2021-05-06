export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60942541028c5032621932de",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ggyh5hei",
                  apiId: "977c5229-dea1-43e1-beba-5438c1f5e107",
                },
                {
                  buildHookId: "60942541eead683b57fe881f",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-uc3p6oux",
                  apiId: "ad7d1f58-5f79-4389-a165-d0f9a0fde25b",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Cardoso-topdev/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-uc3p6oux.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
