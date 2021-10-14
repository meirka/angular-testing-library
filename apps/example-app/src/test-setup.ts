import 'jest-preset-angular/setup-jest';
import '@testing-library/jest-dom';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

import { configure } from '@testing-library/angular';
import { ReactiveFormsModule } from '@angular/forms';

getTestBed().resetTestEnvironment();
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
  { teardown: { destroyAfterEach: true } }, // 👈
);

configure({
  defaultImports: [ReactiveFormsModule],
});
