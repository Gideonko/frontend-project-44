#!/usr/bin/env node
import whatsYourName from '../src/cli.js';

console.log('Welcome to the Brain Games! ');

const name = whatsYourName();
console.log(`Hello, ${name}`);
