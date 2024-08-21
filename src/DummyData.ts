// import { v4 as uuidv4 } from 'uuid'; // not working for some reason

export type Todo = {
  id: string;
  completed: boolean;
  data: string;
};

export const Todos: Todo[] = [
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: true,
    data: "Learn html",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: false,
    data: "Learn css",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: false,
    data: "Learn javascript",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: false,
    data: "Learn typescript",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: false,
    data: "Learn react js",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: true,
    data: "Learn React Native",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: true,
    data: "Read a book on design patterns",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: false,
    data: "Write a blog post about web development",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: true,
    data: "Update resume",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: false,
    data: "Set up personal website",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: false,
    data: "Attend a coding workshop",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: true,
    data: "Complete online course on data structures",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: false,
    data: "Learn about Docker",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: true,
    data: "Practice algorithm problems",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: false,
    data: "Read articles on best coding practices",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: true,
    data: "Build a small project using Node.js",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: false,
    data: "Explore GraphQL",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: true,
    data: "Improve GitHub profile",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: false,
    data: "Learn about microservices",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: true,
    data: "Write unit tests for a project",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: false,
    data: "Contribute to an open source project",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: true,
    data: "Explore serverless architectures",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: false,
    data: "Read about cloud computing",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: true,
    data: "Learn about data visualization",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: false,
    data: "Set up a CI/CD pipeline",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: true,
    data: "Review and update code documentation",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: false,
    data: "Attend a tech conference",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: true,
    data: "Build a portfolio website",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: false,
    data: "Learn about web security best practices",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: true,
    data: "Explore AI and machine learning basics",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: false,
    data: "Build a RESTful API",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: true,
    data: "Read a book on algorithms",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: false,
    data: "Learn about version control systems",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: true,
    data: "Complete a coding challenge",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: false,
    data: "Read a book on system design",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: true,
    data: "Participate in a hackathon",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: false,
    data: "Learn about container orchestration",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: true,
    data: "Build a responsive web application",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: false,
    data: "Learn about web accessibility",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: true,
    data: "Explore DevOps practices",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: false,
    data: "Read up on blockchain technology",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: true,
    data: "Update personal blog",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: false,
    data: "Learn about data privacy regulations",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: true,
    data: "Build a REST API with authentication",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: false,
    data: "Attend a meetup group for developers",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: true,
    data: "Learn about performance optimization techniques",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: false,
    data: "Write a tutorial on a tech topic",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: true,
    data: "Build a CLI tool",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: false,
    data: "Learn about cloud services",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: true,
    data: "Update and maintain project dependencies",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: false,
    data: "Explore advanced CSS techniques",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: true,
    data: "Learn about GraphQL schema design",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: false,
    data: "Build a data-driven web application",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: true,
    data: "Contribute to a coding forum",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: false,
    data: "Learn about software testing methodologies",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: true,
    data: "Set up a local development environment",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: false,
    data: "Explore front-end frameworks",
  },
  {
    id: Math.floor(Math.random() * 9999999 + 2).toString(),
    completed: true,
    data: "Learn about APIs and integrations",
  },
];
