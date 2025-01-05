const createLink = (path: string) => {
  window.open(path, "_blank", "noopener,noreferrer");
};
const languages = [
  "nodejs",
  "html5",
  "sass",
  "javascript",
  "svelte",
  "postgresql",
  "typescript",
  "ruby",
  "mysql",
];

export { createLink, languages };
