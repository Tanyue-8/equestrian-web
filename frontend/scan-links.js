const fs = require('fs');
const path = require('path');
const srcDir = 'D:/equestrian-web/frontend/src';

function walk(dir) {
  let results = [];
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) results = results.concat(walk(full));
    else if (f.endsWith('.tsx') || f.endsWith('.ts')) results.push(full);
  });
  return results;
}

const files = walk(srcDir);
const hrefPattern = /href=['"](\/[^'"]+)['"]/g;
const issues = [];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = hrefPattern.exec(content)) !== null) {
    const href = match[1];
    if (href && !href.startsWith('//') && !href.match(/^\/(en|zh|es|ja|ar|ko|de)(\/|$)/)) {
      const rel = file.replace('D:/equestrian-web/frontend/src/', '');
      issues.push(rel + ' => ' + href);
    }
  }
});

issues.forEach(i => console.log(i));
console.log('\nTotal hardcoded links:', issues.length);
