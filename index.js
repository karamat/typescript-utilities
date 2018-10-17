import * as fs from "fs";
import * as ts from "typescript";
import path from 'path';

fs.writeFileSync(path.join(__dirname, 'ts_utilities.txt'), Object.keys(ts).join('\n'), "utf8");
