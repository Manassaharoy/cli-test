#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckOutCommand = `git clone --depth 1 https://github.com/Manassaharoy/cli-test.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning into ${repoName}`);

const checkOut = runCommand(gitCheckOutCommand);
if (!checkOut) process.exit(-1);
console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);
console.log(
  `Congratulations! You are ready. Follow the following commands to start`
);
console.log(`cd ${repoName} && npm run dev`);
