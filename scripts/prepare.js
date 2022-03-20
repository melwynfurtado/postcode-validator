const { readFileSync, outputJsonSync } = require('fs-extra');

const [releaseVersion, ...rest] = process.argv.slice(2);
const pkgFile = 'package.json';

function updateVersion() {
  const pkg = JSON.parse(readFileSync(pkgFile, 'utf8'));
  const newPkg = {
    ...pkg,
    version: releaseVersion,
  };
  outputJsonSync(pkgFile, newPkg, { spaces: 2 });
  console.log(`[Prepare script] Update ${pkgFile} to ${newPkg.version}`);
}

function run() {
  try {
    updateVersion();
  } catch (e) {
    console.log(e);
    return 1;
  }

  return 0;
}

run();
