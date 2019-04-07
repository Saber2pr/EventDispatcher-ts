import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import {
  uglify
} from 'rollup-plugin-uglify'

export default {
  input: './lib/index.js',
  output: {
    file: './saber-event.min.js',
    format: 'iife',
    name: 'sevent'
  },
  watch: {
    include: 'lib/**'
  },
  plugins: [resolve(), commonjs(), uglify()]
}