import path from 'path';
import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '../theme/theme';
import lightTheme from '../theme/lightTheme';
import { toMatchSpecificSnapshot } from './__helper__/toMatchSpecificSnapshot';
import { configureStore } from './__helper__/testStore';
import { componentList } from './__helper__/componentList';
const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

componentList.forEach(item => {
  const Widget = require(`../${item}`).default;
  const splitRootFolder = item.split('/');
  const rootFileName = splitRootFolder.splice(splitRootFolder.length - 1, 1);
  const rootFolder = splitRootFolder.join('/');

  const tryRequire = filePath => {
    try {
      return require(`${filePath}`);
    } catch (err) {
      return null;
    }
  };
  const data = tryRequire(`../${rootFolder}/__tests__/data`);

  describe(`${item}`, () => {
    const fileName = rootFileName[0].split('.')[0];
    expect.extend({
      toMatchExtendedSpecificSnapshot(received, snapshotFile) {
        return toMatchSpecificSnapshot.call(this, received + 1, snapshotFile);
      },
    });

    const mockStore = configureStore();
    const store = data?.reduxData ? mockStore(data?.reduxData) : mockStore([]);
    if (data && data.default) {
      data.default.forEach((props, index) => {
        it(`Snapshot ${index}`, async () => {
          const container = renderer
            .create(
              <Provider store={store}>
                <ThemeProvider theme={lightTheme}>
                  <NavigationContainer>
                    <Widget {...props} />
                  </NavigationContainer>
                </ThemeProvider>
              </Provider>,
            )
            .toJSON(); // specific component is rendered.
          await act(() => sleep(200));
          const pathToSnap = path.resolve(process.cwd(), `./src/${rootFolder}/__tests__/__snapshots__/${fileName}.test.js.snap`);
          // snaphot file is created in their specific folder.
          expect(container).toMatchSpecificSnapshot(pathToSnap);
        });
      });
    } else {
      it('Snapshot', async () => {
        const container = renderer
          .create(
            <Provider store={store}>
              <ThemeProvider theme={lightTheme}>
                <NavigationContainer>
                  <Widget />
                </NavigationContainer>
              </ThemeProvider>
            </Provider>,
          )
          .toJSON(); // specific component is rendered.
        await act(() => sleep(200));
        const pathToSnap = path.resolve(process.cwd(), `./src/${rootFolder}/__tests__/__snapshots__/${fileName}.test.js.snap`);
        // snaphot file is created in their specific folder.
        expect(container).toMatchSpecificSnapshot(pathToSnap);
      });
    }
  });
});
