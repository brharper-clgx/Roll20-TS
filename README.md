# Roll20-TS

## Goal
Roll20 scripts are generally thousands of lines of javascript in a single file... ick.

The aim of this project is three-fold:
1. Code in Typescript
2. Organize scripts into loosely coupled modules
3. Unit test (WIP)

## Structure 
The project `root` contains configuration files. The meat of the code is in `src`.

### `src/roll20-api/`
The files in this directory are the interface to the roll20 api. The code in these was written almost entirely 
by [Shaangor](https://github.com/Shaangor/Roll20), with only minor modifications by me. 

### `src/entry.ts`
Ideally, I'd prefer to only provide one javascript file to Roll20. Thus, this file serves as an *entry point* 
for the remainder of the code. It contains Roll20 event listeners (e.g., `"change:graphic"`). Call your `commands` from these event listeners.

When you transpile your code, a single `js` file called `entry.js` will should be created in `dist/`. Copy the code from this file into Roll20.

### `src/commands/`
These files should encapsulate the functionality normally contained in a Roll20 js script. Call these from the relevant event listeners in `entry.ts`.

### `src/services/`
This directory contains code that can be used across `commands`.
