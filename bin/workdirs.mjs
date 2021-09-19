#!/usr/bin/env zx

const dirs = String(await $`for i in $(ls -d ~/Documents/*/); do echo \${i%%/}; done`);

const workDirs = dirs.split(/\r?\n/).map((item) => {
  return item.split('/').pop() !== '' ? item.split('/').pop(): null;
});

const choise = await $`echo ${workDirs.join('\n')} | dmenu`;

try {
  const choisedDir = await $`for i in $(ls -d ~/Documents/${choise}/*/); do echo \${i%%/}; done`;
  if (choisedDir.stderr) {
    console.log('error');
    await $`echo No dirs in this project directory | dmenu`;
  } else {
    const projectDir = String(choisedDir).split(/\r?\n/).map((item) => {
      return item.split('/').pop() !== '' ? item.split('/').pop(): null;
    });

    const workingDir = await $`echo ${projectDir.join('\n')} | dmenu`;

    await $`nvim ~/Documents/${choise}/${workingDir}`;
  }
} catch (err) {
  console.log('error', err);
}


