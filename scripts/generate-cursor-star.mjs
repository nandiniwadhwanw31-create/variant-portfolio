/**
 * Regenerates public/images/cursor-star-transparent.png from assets.
 * Requires: pip install Pillow && python3 (see scripts/generate-cursor-star.py)
 */
import { execSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
execSync('python3 scripts/generate-cursor-star.py', { cwd: root, stdio: 'inherit' })
