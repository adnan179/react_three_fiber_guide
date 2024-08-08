import { CopyBlock, dracula } from "react-code-blocks";

const GettingStarted = () => {
  const tailwindConfig = `/** @type {import('tailwindcss').Config} */
  export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {},
    },
    plugins: [],
  };`;

  const indexcss = `@tailwind base;
  @tailwind components;
  @tailwind utilities;`;

  return (
    <div className="w-full columns inside-padding glass-container">
      <h1 className="gray-heading">Getting Started</h1>
      <p className="text-white/50">
        Let&apos;s install all the dependencies needed for creating 3D models
        and animations on our website. We will start with simple models and
        progressively build more complex ones using Three.js and React.
      </p>
      <h2 className="text-white/80 font-medium">
        Let&apos;s set our project by following this steps:
      </h2>
      <p className="text-gray-500">
        1.Install vite-react to your project using this command:
      </p>
      <CopyBlock
        text={"npx create vite@latest {project-name}"}
        theme={dracula}
        showLineNumbers={false}
        codeBlock
      />
      <p className="text-gray-500">2.Install the following dependencies:</p>
      <CopyBlock
        text={
          "npm install three @types/three @react-three/fiber @react-three/drei"
        }
        theme={dracula}
        showLineNumbers={false}
        codeBlock
      />
      <p className="text-gray-500">
        3.Install and configure tailwind css to your project:(optional you can
        use normal css if you love that!)
      </p>
      <CopyBlock
        text={"npm install -D tailwindcss postcss autoprefixer"}
        theme={dracula}
        showLineNumbers={false}
        codeBlock
      />
      <CopyBlock
        text={"npx tailwindcss init -p"}
        theme={dracula}
        showLineNumbers={false}
        language="javascript"
        codeBlock
      />
      <p className="text-gray-500">
        4.Paste this code in your tailwind.Config.js file:
      </p>
      <CopyBlock
        text={tailwindConfig}
        language="javascript"
        showLineNumbers={false}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
      <p className="text-gray-500">5.Paste this code in your index.css:</p>
      <CopyBlock
        text={indexcss}
        language="tailwindcss"
        showLineNumbers={false}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    </div>
  );
};

export default GettingStarted;
