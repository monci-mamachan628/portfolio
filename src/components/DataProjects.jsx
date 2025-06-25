import { useState, useEffect } from "react";
import {
  FaChevronDown,
  FaChevronRight,
  FaGithub,
  FaMedium,
} from "react-icons/fa";
import {
  PiFileSql,
  PiFileText,
  PiFileCode,
  PiFolderOpen,
  PiFolder,
} from "react-icons/pi";
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const projects = [
  {
    emoji: "📉💰",
    title: "Loan Default Detection",
    image: `${import.meta.env.BASE_URL}assets/loan.jpg`,

    description:
      "This project uses machine learning to predict the likelihood of a borrower defaulting on a loan.",
    tags: ["Python", "Logistic Regression", "Random Forest", "Pandas", "Sklearn"],
    links: {
      github: "https://github.com/monci-mamachan628/Loan_detect.git",
      
    },
    files: [
      { name: "loan_model.ipynb", path: `${import.meta.env.BASE_URL}code/loan_model.ipynb` },
      { name: "README.md", path: `${import.meta.env.BASE_URL}code/README2.md` },
    ],
  },
  {
    emoji: "🫁🧠",
    title: "Pneumonia Detection from Chest X-Rays",
    image: `${import.meta.env.BASE_URL}assets/pneumonia.jpg`,
    description:
      "Developed a deep learning pipeline to classify pneumonia in chest X-ray images, supporting radiologists.",
    tags: ["Python", "CNN", "Keras", "Pandas", "Medical Imaging"],
    links: {
      github: "https://github.com/monci-mamachan628/Pneumonia_.git",
      
    },
    files: [
      { name: "pneumonia.ipynb", path: `${import.meta.env.BASE_URL}code/pneumonia.ipynb` },
      { name: "README.md", path: `${import.meta.env.BASE_URL}code/README.md` },
    ],
  },
  {
    emoji: "🐦📊",
    title: "Tweets Sentiment Analysis Using RNN",
    image: `${import.meta.env.BASE_URL}assets/tweets.jpg`,
    description:
      "Applies RNN to classify tweet sentiments into positive, negative, or neutral.",
    tags: ["Python", "RNN", "NLP", "TensorFlow"],
    links: {
      github: "https://github.com/monci-mamachan628/tweets.git",
     
    },
    files: [
      { name: "tweet.ipynb", path: `${import.meta.env.BASE_URL}code/tweet.ipynb` },
      { name: "README3.md", path: `${import.meta.env.BASE_URL}code/README3.md` },
    ],
  },
  {
    emoji: "🟪",
    title: "Spotify Advanced SQL Project",
    image: `${import.meta.env.BASE_URL}assets/spotify_sql.jpg`,
    description:
      "A complex SQL project focusing on advanced querying and optimization using Spotify data.",
    tags: ["SQL", "Query Optimization", "Data Cleaning"],
    links: {
      github: "https://github.com/monci-mamachan628/Spotify.git",
    },
    files: [
      { name: "spotify.sql", path: `${import.meta.env.BASE_URL}code/spotify.sql` },
      { name: "README4.md", path: `${import.meta.env.BASE_URL}code/README4.md` },
    ],
  },
];

const getFileIcon = (file) => {
  if (file.endsWith(".sql")) return <PiFileSql className="text-sky-400" />;
  if (file.endsWith(".md")) return <PiFileText className="text-green-400" />;
  if (file.endsWith(".py")) return <PiFileCode className="text-yellow-300" />;
  if (file.endsWith(".ipynb")) return <PiFileCode className="text-pink-400" />;
  return <PiFileText />;
};

const FileExplorerProjects = () => {
  const [openProject, setOpenProject] = useState(0); // Open first project by default
  const [selectedFile, setSelectedFile] = useState({
    ...projects[0].files[0],
    projectIdx: 0,
  });
  const [renderedNotebookCells, setRenderedNotebookCells] = useState([]);
  const [textFileContent, setTextFileContent] = useState("");

  useEffect(() => {
    if (selectedFile?.path) {
      fetch(selectedFile.path)
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          return res.text();
        })
        .then((text) => {
          try {
            if (selectedFile.name.endsWith(".ipynb")) {
              const notebook = JSON.parse(text);
              const cellsToRender = notebook.cells
                .map((cell, idx) => {
                  if (cell.cell_type === "code") {
                    const outputText = cell.outputs
                      ?.filter((o) => o.name === "stdout" && o.text)
                      .map((o) => o.text.join(""))
                      .join("\n");
                    return {
                      type: "code",
                      source: cell.source.join(""),
                      output: outputText,
                      execution_count: cell.execution_count,
                      id: `code-cell-${idx}`,
                    };
                  } else if (cell.cell_type === "markdown") {
                    return {
                      type: "markdown",
                      source: cell.source.join(""),
                      id: `markdown-cell-${idx}`,
                    };
                  }
                  return null;
                })
                .filter(Boolean);

              setRenderedNotebookCells(cellsToRender);
              setTextFileContent("");
            } else if (selectedFile.name.endsWith(".md")) {
              setTextFileContent(text);
              setRenderedNotebookCells([]);
            } else {
              setTextFileContent(text);
              setRenderedNotebookCells([]);
            }
          } catch (e) {
            console.error("Error parsing file:", e);
            setTextFileContent("Unable to render file properly.");
            setRenderedNotebookCells([]);
          }
        })
        .catch((error) => {
          console.error("Fetch failed:", error);
          setTextFileContent(`Error loading file: ${error.message}`);
          setRenderedNotebookCells([]);
        });
    } else {
      setTextFileContent("");
      setRenderedNotebookCells([]);
    }
  }, [selectedFile]);

  return (
    <section
      id="projects"
      className="min-h-screen text-foreground bg-background flex flex-col lg:flex-row border-t border-l border-b border-border p-4 lg:p-8 lg:gap-6"
    >
      <div className="w-[80px] hidden lg:block"></div>

      <div className="flex flex-1 ml-2 overflow-hidden">
        {/* Explorer Panel */}
        <aside className="w-[280px] flex-shrink-0 border-r border-border bg-card px-4 py-4 rounded-tl-lg rounded-bl-lg">
          <h2 className="text-xl font-bold mb-6 text-purple-400">📁 Projectss</h2>
          <ul className="space-y-2">
            {projects.map((project, idx) => (
              <li key={idx}>
                <div
                  onClick={() => {
                    setOpenProject(openProject === idx ? null : idx);
                    setSelectedFile(null);
                  }}
                  className="flex items-center gap-2 cursor-pointer hover:text-purple-300"
                >
                  {openProject === idx ? (
                    <FaChevronDown size={12} />
                  ) : (
                    <FaChevronRight size={12} />
                  )}
                  {openProject === idx ? (
                    <PiFolderOpen className="text-purple-400" />
                  ) : (
                    <PiFolder />
                  )}
                  <span>{project.title}</span>
                </div>
                {openProject === idx && (
                  <ul className="ml-6 mt-2 space-y-1">
                    {project.files.map((file, fidx) => (
                      <li
                        key={fidx}
                        className={`flex items-center gap-2 text-sm cursor-pointer px-2 py-1 rounded hover:bg-muted ${
                          selectedFile?.name === file.name &&
                          selectedFile?.projectIdx === idx
                            ? "bg-muted text-purple-300"
                            : ""
                        }`}
                        onClick={() =>
                          setSelectedFile({ ...file, projectIdx: idx })
                        }
                      >
                        {getFileIcon(file.name)}
                        {file.name}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Viewer */}
        <main className="flex-1 p-6 overflow-y-auto">
          {openProject !== null && (
            <div className="mb-6">
              <img
                src={projects[openProject].image}
                alt="Project"
                className="w-full max-h-[300px] object-cover rounded-xl mb-4 border border-border"
              />
              <h3 className="text-3xl font-bold text-purple-300 mb-2">
                {projects[openProject].emoji} {projects[openProject].title}
              </h3>
              <p className="text-foreground mb-4">
                {projects[openProject].description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[openProject].tags.map((tag, t) => (
                  <span
                    key={t}
                    className="text-sm bg-muted px-3 py-1 rounded-full border border-purple-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={projects[openProject].links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 bg-purple-700 rounded-full hover:bg-purple-700 border border-border"
                >
                  <FaGithub className="inline-block mr-1" /> GitHub
                </a>
                
              </div>
            </div>
          )}

          {selectedFile && (
            <div className="bg-card text-foreground border border-border rounded-lg p-4 text-sm whitespace-pre-wrap max-h-[600px] overflow-auto">
              <h4 className="text-purple-400 font-semibold mb-2">
                {selectedFile.name}
              </h4>
              {renderedNotebookCells.length > 0 ? (
                renderedNotebookCells.map((cell, index) => (
                  <div key={cell.id || index} className="mb-4">
                    {cell.type === "markdown" && (
                      <div className="markdown-cell text-foreground">
                        <ReactMarkdown>{cell.source}</ReactMarkdown>
                      </div>
                    )}
                    {cell.type === "code" && (
                      <div className="code-cell">
                        <div className="flex items-center text-foreground mb-1">
                          <span className="mr-2">
                            In [{cell.execution_count ?? " "}]:
                          </span>
                        </div>
                        <SyntaxHighlighter language="python" style={vscDarkPlus}>
                          {cell.source}
                        </SyntaxHighlighter>
                        {cell.output && (
                          <pre className="output-cell mt-2 p-2 bg-gray-900 text-foreground rounded border border-gray-700 overflow-auto">
                            {cell.output}
                          </pre>
                        )}
                      </div>
                    )}
                    <hr className="border-t border-gray-800 my-4" />
                  </div>
                ))
              ) : selectedFile.name.endsWith(".md") ? (
                <div className="markdown-body">
                  <ReactMarkdown>{textFileContent}</ReactMarkdown>
                </div>
              ) : (
                <pre className="font-mono">{textFileContent}</pre>
              )}
            </div>
          )}
        </main>
      </div>
    </section>
  );
};

export default FileExplorerProjects;
