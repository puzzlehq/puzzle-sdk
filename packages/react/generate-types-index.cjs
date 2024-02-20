const fs = require('fs');
const path = require('path');

const typesRootDir = path.join(__dirname, './dist/types');
const indexFilePath = path.join(typesRootDir, 'index.d.ts');


// Ensure the types directory exists
if (!fs.existsSync(typesRootDir)) {
  console.error('Types directory does not exist:', typesRootDir);
  process.exit(1);
}

let indexFileContent = '';

// Define the subdirectories to include in the index.d.ts
const subDirs = ['core/src', 'react/src'];

subDirs.forEach(subDir => {
  const fullPath = path.join(typesRootDir, subDir);
  if (fs.existsSync(fullPath) && fs.lstatSync(fullPath).isDirectory()) {
    const files = fs.readdirSync(fullPath).filter(file => file.endsWith('.d.ts'));
    files.forEach(file => {
      // Adjust the path relative to the root of the types directory
      const relativePath = `./${subDir}/${file.replace('.d.ts', '')}`;
      indexFileContent += `export * from '${relativePath}';\n`;
    });
  }
});

// Write the index.d.ts file
fs.writeFileSync(indexFilePath, indexFileContent);
console.log('Generated index.d.ts with content:\n', indexFileContent);